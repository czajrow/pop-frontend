(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1+yV":function(t,n,e){"use strict";e.r(n),e.d(n,"ComputationUnitShelfPageModule",(function(){return d}));var i=e("ofXK"),o=e("tyNb"),c=e("fXoL"),r=e("VgvX"),s=e("3Pt+");const u=function(t){return{"app-computation-unit__container__highlight":t}};let p=(()=>{class t{constructor(t,n){this._router=t,this._clustersService=n,this.highlight=!1}ngOnInit(){}onClick(){var t;this._router.navigate(["computation-unit-details",null===(t=this.computationUnit)||void 0===t?void 0:t.id])}onDelete(t){t.stopPropagation(),this._clustersService.deleteCluster(this.computationUnit.id),this._clustersService.getClusters()}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(o.c),c.Hb(r.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-computation-unit"]],inputs:{computationUnit:"computationUnit",highlight:"highlight"},decls:5,vars:4,consts:[[1,"app-computation-unit__container",3,"ngClass","click"],[1,"m-0"],[1,"btn","btn-danger",3,"click"]],template:function(t,n){1&t&&(c.Kb(0,"div",0),c.Rb("click",(function(){return n.onClick()})),c.Kb(1,"h6",1),c.gc(2),c.Jb(),c.Kb(3,"button",2),c.Rb("click",(function(t){return n.onDelete(t)})),c.gc(4," Delete "),c.Jb(),c.Jb()),2&t&&(c.Wb("ngClass",c.Xb(2,u,n.highlight)),c.xb(2),c.ic("Cluster name: ",null==n.computationUnit?null:n.computationUnit.name,""))},directives:[i.h],styles:["[_nghost-%COMP%]{display:block}.app-computation-unit[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:row}.app-computation-unit__container[_ngcontent-%COMP%]{background-color:#fff;border:2px solid grey;border-radius:30px;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px;padding:20px;cursor:pointer}.app-computation-unit__container[_ngcontent-%COMP%]:hover{border:2px solid transparent}.app-computation-unit__container__highlight[_ngcontent-%COMP%]{background-color:#ff0}"]}),t})();function a(t,n){if(1&t&&c.Ib(0,"app-computation-unit",4),2&t){const t=n.$implicit,e=n.index,i=c.Tb();c.Wb("computationUnit",t)("highlight",i.new===e)}}let l=(()=>{class t{constructor(t,n,e){this._clustersService=t,this.formBuilder=n,this._router=e,this.new=null,this.sub=this._clustersService.computationUnits$.subscribe(t=>{this.computationUnits=t}),this.checkoutForm=this.formBuilder.group({name:"",cpuCoreCount:1,cpuClockSpeedInGHz:1,ramInGB:1,gpuCoreClocksInGHz:1,inUse:!0,expectedCalculationsFinishTime:"",duringDeactivation:!0})}ngOnInit(){this.new=this._clustersService.newUnitId,this._clustersService.newUnitId=null}ngOnDestroy(){var t;null===(t=this.sub)||void 0===t||t.unsubscribe()}onCreateNewCluster(){this._router.navigate(["computation-unit-details","new"])}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(r.a),c.Hb(s.c),c.Hb(o.c))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-computation-unit-shelf"]],decls:5,vars:1,consts:[[1,"app-development-shelf__units-container"],[3,"computationUnit","highlight",4,"ngFor","ngForOf"],[1,"app-development-shelf__new-unit-box",3,"click"],[1,"app-development-shelf__new-unit-box__new"],[3,"computationUnit","highlight"]],template:function(t,n){1&t&&(c.Kb(0,"div",0),c.ec(1,a,1,2,"app-computation-unit",1),c.Kb(2,"div",2),c.Rb("click",(function(){return n.onCreateNewCluster()})),c.Kb(3,"span",3),c.gc(4,"Create new Computation Cluster"),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(1),c.Wb("ngForOf",n.computationUnits))},directives:[i.i,p],styles:["[_nghost-%COMP%]{display:block}.app-development-shelf__units-container[_ngcontent-%COMP%]{margin-right:20px}.app-development-shelf__new-unit-box[_ngcontent-%COMP%]{background-color:#fff;border:2px solid grey;border-radius:30px;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:10px;cursor:pointer;text-align:center}.app-development-shelf__new-unit-box__new[_ngcontent-%COMP%]{font-size:2em;margin:0;padding:0}.app-development-shelf__new-unit-box[_ngcontent-%COMP%]:hover{border:2px solid transparent}"]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Bb({type:t,selectors:[["app-computation-unit-shelf-page"]],decls:1,vars:0,template:function(t,n){1&t&&c.Ib(0,"app-computation-unit-shelf")},directives:[l],styles:[""]}),t})(),g=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[i.b,s.k],s.f,s.k]}),t})();const b=[{path:"",component:h}];let d=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[i.b,o.f.forChild(b),g]]}),t})()}}]);