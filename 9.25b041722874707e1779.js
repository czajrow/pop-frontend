(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1+yV":function(t,n,i){"use strict";i.r(n),i.d(n,"ComputationUnitShelfPageModule",(function(){return d}));var e=i("ofXK"),o=i("tyNb"),c=i("fXoL"),r=i("VgvX"),p=i("3Pt+");const s=function(t){return{"app-computation-unit__container__highlight":t}};let a=(()=>{class t{constructor(t){this._router=t,this.highlight=!1}ngOnInit(){}onClick(){var t;this._router.navigate(["computation-unit-details",null===(t=this.computationUnit)||void 0===t?void 0:t.id])}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(o.c))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-computation-unit"]],inputs:{computationUnit:"computationUnit",highlight:"highlight"},decls:3,vars:4,consts:[[1,"app-computation-unit__container",3,"ngClass","click"],[1,"m-0"]],template:function(t,n){1&t&&(c.Kb(0,"div",0),c.Rb("click",(function(){return n.onClick()})),c.Kb(1,"h6",1),c.gc(2),c.Jb(),c.Jb()),2&t&&(c.Wb("ngClass",c.Xb(2,s,n.highlight)),c.xb(2),c.ic("Cluster name: ",null==n.computationUnit?null:n.computationUnit.name,""))},directives:[e.h],styles:["[_nghost-%COMP%]{display:block}.app-computation-unit__container[_ngcontent-%COMP%]{background-color:#fff;border:2px solid grey;border-radius:30px;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px;padding:20px;cursor:pointer}.app-computation-unit__container[_ngcontent-%COMP%]:hover{border:2px solid transparent}.app-computation-unit__container__highlight[_ngcontent-%COMP%]{background-color:#ff0}"]}),t})();function u(t,n){if(1&t&&c.Ib(0,"app-computation-unit",4),2&t){const t=n.$implicit,i=n.index,e=c.Tb();c.Wb("computationUnit",t)("highlight",e.new===i)}}let l=(()=>{class t{constructor(t,n,i){this._clustersService=t,this.formBuilder=n,this._router=i,this.new=null,this.computationUnits=this._clustersService.computationUnitsArray,this.checkoutForm=this.formBuilder.group({name:"",cpuCoreCount:1,cpuClockSpeedInGHz:1,ramInGB:1,gpuCoreClocksInGHz:1,inUse:!0,expectedCalculationsFinishTime:"",duringDeactivation:!0})}ngOnInit(){this.new=this._clustersService.newUnitId,this._clustersService.newUnitId=null}onCreateNewCluster(){this._router.navigate(["computation-unit-details","new"])}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(r.a),c.Hb(p.c),c.Hb(o.c))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-computation-unit-shelf"]],decls:5,vars:1,consts:[[1,"app-development-shelf__units-container"],[3,"computationUnit","highlight",4,"ngFor","ngForOf"],[1,"app-development-shelf__new-unit-box",3,"click"],[1,"app-development-shelf__new-unit-box__new"],[3,"computationUnit","highlight"]],template:function(t,n){1&t&&(c.Kb(0,"div",0),c.ec(1,u,1,2,"app-computation-unit",1),c.Kb(2,"div",2),c.Rb("click",(function(){return n.onCreateNewCluster()})),c.Kb(3,"span",3),c.gc(4,"Create new Computation Cluster"),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(1),c.Wb("ngForOf",n.computationUnits))},directives:[e.i,a],styles:["[_nghost-%COMP%]{display:block}.app-development-shelf__units-container[_ngcontent-%COMP%]{margin-right:20px}.app-development-shelf__new-unit-box[_ngcontent-%COMP%]{background-color:#fff;border:2px solid grey;border-radius:30px;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px;cursor:pointer;text-align:center}.app-development-shelf__new-unit-box__new[_ngcontent-%COMP%]{font-size:2em;margin:0;padding:0}.app-development-shelf__new-unit-box[_ngcontent-%COMP%]:hover{border:2px solid transparent}"]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Bb({type:t,selectors:[["app-computation-unit-shelf-page"]],decls:1,vars:0,template:function(t,n){1&t&&c.Ib(0,"app-computation-unit-shelf")},directives:[l],styles:[""]}),t})(),g=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[e.b,p.j],p.f,p.j]}),t})();const m=[{path:"",component:h}];let d=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.f.forChild(m),g]]}),t})()}}]);