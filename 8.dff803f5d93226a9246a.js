(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{q2we:function(t,e,i){"use strict";i.r(e),i.d(e,"ComputationUnitDetailsPageModule",(function(){return m}));var o=i("ofXK"),n=i("fXoL"),r=i("3Pt+"),u=i("tyNb"),a=i("VgvX");function c(t,e){if(1&t&&(n.Kb(0,"div"),n.Kb(1,"h1"),n.gc(2),n.Jb(),n.Kb(3,"h1"),n.gc(4),n.Jb(),n.Jb()),2&t){const t=n.Tb();n.xb(2),n.ic("Cluster id: ",t._id,""),n.xb(2),n.ic("Cluster name: ",(null==t._cluster?null:t._cluster.name)||"unknown","")}}function l(t,e){if(1&t){const t=n.Lb();n.Kb(0,"form",2),n.Rb("ngSubmit",(function(e){n.ac(t);const i=n.Tb();return i.onSubmit(i.checkoutForm.value,e)})),n.Kb(1,"div",3),n.Kb(2,"label",4),n.gc(3," Name "),n.Jb(),n.Ib(4,"input",5),n.Jb(),n.Kb(5,"div",3),n.Kb(6,"label",6),n.gc(7," cpuCoreCount "),n.Jb(),n.Ib(8,"input",7),n.Jb(),n.Kb(9,"div",3),n.Kb(10,"label",8),n.gc(11," cpuClockSpeedInGHz "),n.Jb(),n.Ib(12,"input",9),n.Jb(),n.Kb(13,"div",3),n.Kb(14,"label",10),n.gc(15," ramInGB "),n.Jb(),n.Ib(16,"input",11),n.Jb(),n.Kb(17,"div",3),n.Kb(18,"label",12),n.gc(19," gpuCoreClocksInGHz "),n.Jb(),n.Ib(20,"input",13),n.Jb(),n.Kb(21,"div",3),n.Kb(22,"label",14),n.gc(23," cpuUtilization "),n.Jb(),n.Ib(24,"input",15),n.Jb(),n.Kb(25,"div",3),n.Kb(26,"label",16),n.gc(27," duringDeactivation "),n.Jb(),n.Ib(28,"input",17),n.Jb(),n.Kb(29,"div",3),n.Kb(30,"label",18),n.gc(31," gpuUtilization "),n.Jb(),n.Ib(32,"input",19),n.Jb(),n.Kb(33,"button",20),n.gc(34,"Add"),n.Jb(),n.Jb()}if(2&t){const t=n.Tb();n.Wb("formGroup",t.checkoutForm),n.xb(33),n.Wb("disabled",t.checkoutForm.invalid)}}let b=(()=>{class t{constructor(t,e,i,o){this._activatedRoute=t,this._formBuilder=e,this._clustersService=i,this._router=o;const n=this._activatedRoute.snapshot.paramMap.get("id");n&&(this._id=n,this._isNew="new"===this._id),this._cluster=i.computationUnitsArray.find(t=>t.id===+this._id),console.log(this._id,i.computationUnitsArray),this.checkoutForm=this._formBuilder.group({name:["",r.k.required],cpuCoreCount:[1,r.k.required],cpuClockSpeedInGHz:[1,r.k.required],ramInGB:[1,r.k.required],gpuCoreClocksInGHz:[1,r.k.required],cpuUtilization:[1,r.k.required],gpuUtilization:[1,r.k.required],duringDeactivation:[!0,r.k.required]})}ngOnInit(){}onSubmit(t,e){e.preventDefault(),t.expectedCalculationsFinishTime=t.expectedCalculationsFinishTime+"T00:00:00.000Z",this._clustersService.createCluster(t).subscribe(t=>{alert("Dodano CCluster!"),this._router.navigate(["computation-unit-shelf"])},t=>{var e;alert((null===(e=null==t?void 0:t.error)||void 0===e?void 0:e.detail)||"Unknown error appeared...")})}}return t.\u0275fac=function(e){return new(e||t)(n.Hb(u.a),n.Hb(r.c),n.Hb(a.a),n.Hb(u.c))},t.\u0275cmp=n.Bb({type:t,selectors:[["app-computation-unit-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["newClusterForm",""],[1,"form-group",3,"formGroup","ngSubmit"],[1,"divForm"],["for","name",1,"labelForm"],["id","name","type","text","formControlName","name",1,"inputForm"],["for","cpuCoreCount",1,"labelForm"],["id","cpuCoreCount","type","number","formControlName","cpuCoreCount",1,"inputForm"],["for","cpuClockSpeedInGHz",1,"labelForm"],["id","cpuClockSpeedInGHz","type","number","formControlName","cpuClockSpeedInGHz",1,"inputForm"],["for","ramInGB",1,"labelForm"],["id","ramInGB","type","number","formControlName","ramInGB",1,"inputForm"],["for","gpuCoreClocksInGHz",1,"labelForm"],["id","gpuCoreClocksInGHz","type","number","formControlName","gpuCoreClocksInGHz",1,"inputForm"],["for","cpuUtilization",1,"labelForm"],["id","cpuUtilization","type","number","formControlName","cpuUtilization",1,"inputForm"],["for","duringDeactivation",1,"labelForm"],["id","duringDeactivation","type","checkbox","formControlName","duringDeactivation",1,"inputForm"],["for","gpuUtilization",1,"labelForm"],["id","gpuUtilization","type","number","formControlName","gpuUtilization",1,"inputForm"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(t,e){if(1&t&&(n.ec(0,c,5,2,"div",0),n.ec(1,l,35,2,"ng-template",null,1,n.fc)),2&t){const t=n.Zb(2);n.Wb("ngIf",!e._isNew)("ngIfElse",t)}},directives:[o.j,r.l,r.h,r.e,r.b,r.g,r.d,r.i,r.a],styles:[".divForm[_ngcontent-%COMP%]{margin-bottom:10px}.labelForm[_ngcontent-%COMP%]{display:inline-block;width:20%;text-align:right;margin-right:5px}.inputForm[_ngcontent-%COMP%]{padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Bb({type:t,selectors:[["app-computation-unit-details-page"]],decls:1,vars:0,template:function(t,e){1&t&&n.Ib(0,"app-computation-unit-details")},directives:[b],styles:[""]}),t})(),s=(()=>{class t{}return t.\u0275mod=n.Fb({type:t}),t.\u0275inj=n.Eb({factory:function(e){return new(e||t)},imports:[[o.b,r.j],r.j]}),t})();const d=[{path:":id",component:p},{path:"**",redirectTo:"computation-unit-shelf"}];let m=(()=>{class t{}return t.\u0275mod=n.Fb({type:t}),t.\u0275inj=n.Eb({factory:function(e){return new(e||t)},imports:[[o.b,u.f.forChild(d),s]]}),t})()}}]);