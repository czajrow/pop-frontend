import { ChangeDetectorRef, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent, PaletteComponent } from 'gojs-angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DiagramBuilderComponent {


  @ViewChild('myDiagram', { static: true }) public myDiagramComponent: DiagramComponent;
  @ViewChild('myPalette', { static: true }) public myPaletteComponent: PaletteComponent;

  // initialize diagram / templates
  public initDiagram(): go.Diagram {

    const $ = go.GraphObject.make;
    const dia = $(go.Diagram,
      {
        'undoManager.isEnabled': true,  // enable undo & redo
        model: $(go.GraphLinksModel,
          {
            copiesArrays: true,
            copiesArrayObjects: true,
            linkFromPortIdProperty: "fromPort",  // required information:
            linkToPortIdProperty: "toPort",

            linkKeyProperty: 'key',  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            // positive keys for nodes
            makeUniqueKeyFunction: (m: go.Model, data: any) => {
              let k = data.key || 1;
              while (m.findNodeDataForKey(k)) k++;
              data.key = k;
              return k;
            },
            // negative keys for links
            makeUniqueLinkKeyFunction: (m: go.GraphLinksModel, data: any) => {
              let k = data.key || -1;
              while (m.findLinkDataForKey(k)) k--;
              data.key = k;
              return k;
            }
          })
      });

    dia.commandHandler.archetypeGroupData = { key: 'Group', isGroup: true };

    // support double-clicking in the background to add a copy of this data as a node
    dia.toolManager.clickCreatingTool.archetypeNodeData = {
      name: "Unit",
      leftArray: [],
      rightArray: [],
      topArray: [],
      bottomArray: []
    };
    // To simplify this code we define a function for creating a context menu button:
    function makeButton(text, action) {
      return $("ContextMenuButton",
        $(go.TextBlock, text),
        { click: action },
        // don't bother with binding GraphObject.visible if there's no predicate
        {});
    }

    const getPortColor = function () {
      var portColors = ["#162447", "#1f4068", "#1b1b2f", "#e43f5a", "#4b5d67", "#322f3d", "#59405c"]
      return portColors[Math.floor(Math.random() * portColors.length)];
    }
    // Add a port to the specified side of the selected nodes.
    const addPort = function (side) {
      dia.startTransaction("addPort");
      dia.selection.each(function (node) {
        // skip any selected Links
        if (!(node instanceof go.Node)) return;
        // compute the next available index number for the side
        var i = 0;
        while (node.findPort(side + i.toString()) !== node) i++;
        // now this new port name is unique within the whole Node because of the side prefix
        var name = side + i.toString();
        // get the Array of port data to be modified
        var arr = node.data[side + "Array"];
        if (arr) {
          // create a new port data object
          var newportdata = {
            portId: name,
            portColor: getPortColor()
            // if you add port data properties here, you should copy them in copyPortData above
          };
          // and add it to the Array of port data
          dia.model.insertArrayItem(arr, -1, newportdata);
        }
      });
      dia.commitTransaction("addPort");
    }

    // Exchange the position/order of the given port with the next one.
    // If it's the last one, swap with the previous one.
    const swapOrder = function (port) {
      var arr = port.panel.itemArray;
      if (arr.length >= 2) {  // only if there are at least two ports!
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].portId === port.portId) {
            dia.startTransaction("swap ports");
            if (i >= arr.length - 1) i--;  // now can swap I and I+1, even if it's the last port
            var newarr = arr.slice(0);  // copy Array
            newarr[i] = arr[i + 1];  // swap items
            newarr[i + 1] = arr[i];
            // remember the new Array in the model
            dia.model.setDataProperty(port.part.data, port._side + "Array", newarr);
            dia.commitTransaction("swap ports");
            break;
          }
        }
      }
    }

    // Remove the clicked port from the node.
    // Links to the port will be redrawn to the node's shape.
    const removePort = function (port) {
      dia.startTransaction("removePort");
      var pid = port.portId;
      var arr = port.panel.itemArray;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].portId === pid) {
          dia.model.removeArrayItem(arr, i);
          break;
        }
      }
      dia.commitTransaction("removePort");
    }

    // Remove all ports from the same side of the node as the clicked port.
    const removeAll = function (port) {
      dia.startTransaction("removePorts");
      var nodedata = port.part.data;
      var side = port._side;  // there are four property names, all ending in "Array"
      dia.model.setDataProperty(nodedata, side + "Array", []);  // an empty Array
      dia.commitTransaction("removePorts");
    }

    // Change the color of the clicked port.
    const changeColor = function (port) {
      dia.startTransaction("colorPort");
      var data = port.data;
      dia.model.setDataProperty(data, "portColor", getPortColor());
      dia.commitTransaction("colorPort");
    }

    var nodeMenu =  // context menu for each Node
      $("ContextMenu",
        makeButton("Copy",
          function (e, obj) { e.diagram.commandHandler.copySelection(); }),
        makeButton("Delete",
          function (e, obj) { e.diagram.commandHandler.deleteSelection(); }),
        $(go.Shape, "LineH", { strokeWidth: 2, height: 1, stretch: go.GraphObject.Horizontal }),
        makeButton("Add top port",
          function (e, obj) { addPort("top"); }),
        makeButton("Add left port",
          function (e, obj) { addPort("left"); }),
        makeButton("Add right port",
          function (e, obj) { addPort("right"); }),
        makeButton("Add bottom port",
          function (e, obj) { addPort("bottom"); })
      );

    var portSize = new go.Size(8, 8);

    var portMenu =  // context menu for each port
      $("ContextMenu",
        makeButton("Swap order",
          function (e, obj) { swapOrder(obj.part.adornedObject); }),
        makeButton("Remove port",
          // in the click event handler, the obj.part is the Adornment;
          // its adornedObject is the port
          function (e, obj) { removePort(obj.part.adornedObject); }),
        makeButton("Change color",
          function (e, obj) { changeColor(obj.part.adornedObject); }),
        makeButton("Remove side ports",
          function (e, obj) { removeAll(obj.part.adornedObject); })
      );

    dia.nodeTemplate =
      $(go.Node, "Table",
        {
          locationObjectName: "BODY",
          locationSpot: go.Spot.Center,
          selectionObjectName: "BODY",
          contextMenu: nodeMenu
        },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),

        // the body
        $(go.Panel, "Auto",
          {
            row: 1, column: 1, name: "BODY",
            stretch: go.GraphObject.Fill
          },
          $(go.Shape, "Rectangle",
            {
              fill: "#dbf6cb", stroke: null, strokeWidth: 0,
              minSize: new go.Size(60, 60)
            }),
          $(go.TextBlock,
            { margin: 10, textAlign: "center", font: "bold 14px Segoe UI,sans-serif", stroke: "#484848", editable: true },
            new go.Binding("text", "name").makeTwoWay())
        ),  // end Auto Panel body

        // the Panel holding the left port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.leftArray
        $(go.Panel, "Vertical",
          new go.Binding("itemArray", "leftArray"),
          {
            row: 1, column: 0,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "left",  // internal property to make it easier to tell which side it's on
                  fromSpot: go.Spot.Left, toSpot: go.Spot.Left,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(1, 0)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Vertical Panel

        // the Panel holding the top port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.topArray
        $(go.Panel, "Horizontal",
          new go.Binding("itemArray", "topArray"),
          {
            row: 0, column: 1,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "top",
                  fromSpot: go.Spot.Top, toSpot: go.Spot.Top,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(0, 1)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Horizontal Panel

        // the Panel holding the right port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.rightArray
        $(go.Panel, "Vertical",
          new go.Binding("itemArray", "rightArray"),
          {
            row: 1, column: 2,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "right",
                  fromSpot: go.Spot.Right, toSpot: go.Spot.Right,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(1, 0)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        ),  // end Vertical Panel

        // the Panel holding the bottom port elements, which are themselves Panels,
        // created for each item in the itemArray, bound to data.bottomArray
        $(go.Panel, "Horizontal",
          new go.Binding("itemArray", "bottomArray"),
          {
            row: 2, column: 1,
            itemTemplate:
              $(go.Panel,
                {
                  _side: "bottom",
                  fromSpot: go.Spot.Bottom, toSpot: go.Spot.Bottom,
                  fromLinkable: true, toLinkable: true, cursor: "pointer",
                  contextMenu: portMenu
                },
                new go.Binding("portId", "portId"),
                $(go.Shape, "Rectangle",
                  {
                    stroke: null, strokeWidth: 0,
                    desiredSize: portSize,
                    margin: new go.Margin(0, 1)
                  },
                  new go.Binding("fill", "portColor"))
              )  // end itemTemplate
          }
        )  // end Horizontal Panel
      );  // end Node

    // relinking depends on modelData
    dia.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes },  // link route should avoid nodes
      $(go.Shape),
      $(go.Shape, { toArrow: "Standard" })
    );
    return dia;

  }

  public diagramNodeData: Array<go.ObjectData> = [
    { key: '1', name: "Unit one", color: 'lightblue', "leftArray": [], "rightArray": [], "topArray": [], "bottomArray": [] },
    { key: '2', name: "Unit two", color: 'orange', "leftArray": [], "rightArray": [], "topArray": [], "bottomArray": [] },
    { key: '3', name: "Unit three", color: 'lightgreen', "leftArray": [], "rightArray": [], "topArray": [], "bottomArray": [] },
    { key: '4', name: "Unit four", color: 'pink', "leftArray": [], "rightArray": [], "topArray": [], "bottomArray": [] }
  ];
  public diagramLinkData: Array<go.ObjectData> = [
    // { key: -1, from: 'Alpha', to: 'Beta', fromPort: 'r', toPort: '1' },
    // { key: -2, from: 'Alpha', to: 'Gamma', fromPort: 'b', toPort: 't' },
    // { key: -3, from: 'Beta', to: 'Beta' },
    // { key: -4, from: 'Gamma', to: 'Delta', fromPort: 'r', toPort: 'l' },
    // { key: -5, from: 'Delta', to: 'Alpha', fromPort: 't', toPort: 'r' }
  ];
  public diagramDivClassName: string = 'myDiagramDiv';
  public diagramModelData = { prop: 'value' };
  public skipsDiagramUpdate = false;

  // When the diagram model changes, update app data to reflect those changes
  public diagramModelChange = function (changes: go.IncrementalData) {
    // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
    // (since this is a GoJS model changed listener event function)
    // this way, we don't log an unneeded transaction in the Diagram's undoManager history
    this.skipsDiagramUpdate = true;

    this.diagramNodeData = DataSyncService.syncNodeData(changes, this.diagramNodeData);
    this.diagramLinkData = DataSyncService.syncLinkData(changes, this.diagramLinkData);
    this.diagramModelData = DataSyncService.syncModelData(changes, this.diagramModelData);
  };


  constructor(private cdr: ChangeDetectorRef) { }

  // Overview Component testing
  public oDivClassName = 'myOverviewDiv';
  public initOverview(): go.Overview {
    const $ = go.GraphObject.make;
    const overview = $(go.Overview);
    return overview;
  }
  public observedDiagram = null;

  // currently selected node; for inspector
  public selectedNode: go.Node | null = null;

  public ngAfterViewInit() {

    if (this.observedDiagram) return;
    this.observedDiagram = this.myDiagramComponent.diagram;
    this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

    const appComp: DiagramBuilderComponent = this;
    // listener for inspector
    this.myDiagramComponent.diagram.addDiagramListener('ChangedSelection', function (e) {
      if (e.diagram.selection.count === 0) {
        appComp.selectedNode = null;
      }
      const node = e.diagram.selection.first();
      if (node instanceof go.Node) {
        appComp.selectedNode = node;
      } else {
        appComp.selectedNode = null;
      }
    });

  } // end ngAfterViewInit


  public handleInspectorChange(newNodeData) {
    const key = newNodeData.key;
    // find the entry in nodeDataArray with this key, replace it with newNodeData
    let index = null;
    for (let i = 0; i < this.diagramNodeData.length; i++) {
      const entry = this.diagramNodeData[i];
      if (entry.key && entry.key === key) {
        index = i;
      }
    }

    if (index >= 0) {
      // here, we set skipsDiagramUpdate to false, since GoJS does not yet have this update
      this.skipsDiagramUpdate = false;
      this.diagramNodeData[index] = _.cloneDeep(newNodeData);
    }
  }

  // Save the model to / load it from JSON text shown on the page itself, not in a database.
  public save() {
    (<HTMLInputElement>document.getElementById("mySavedModel")).value = this.myDiagramComponent.diagram.model.toJson();
    this.myDiagramComponent.diagram.isModified = false;
  }
  public load() {
    this.myDiagramComponent.diagram.model = go.Model.fromJson((<HTMLInputElement>document.getElementById("mySavedModel")).value);

    // When copying a node, we need to copy the data that the node is bound to.
    // This JavaScript object includes properties for the node as a whole, and
    // four properties that are Arrays holding data for each port.
    // Those arrays and port data objects need to be copied too.
    // Thus Model.copiesArrays and Model.copiesArrayObjects both need to be true.

    // Link data includes the names of the to- and from- ports;
    // so the GraphLinksModel needs to set these property names:
    // linkFromPortIdProperty and linkToPortIdProperty.
  }
}
