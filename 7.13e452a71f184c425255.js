(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/Jy5":function(e,t,i){"use strict";i.r(t),i.d(t,"ApplicationDetailsPageModule",(function(){return d}));var o=i("ofXK"),n=i("fXoL"),r=i("3Pt+"),a=i("tyNb"),p=i("bCOB");function l(e,t){if(1&e&&(n.Kb(0,"div"),n.Ib(1,"img",2),n.Kb(2,"h1"),n.gc(3),n.Jb(),n.Kb(4,"h1"),n.gc(5),n.Jb(),n.Kb(6,"h1"),n.gc(7),n.Jb(),n.Kb(8,"h1"),n.gc(9),n.Jb(),n.Jb()),2&e){const e=n.Tb();n.xb(1),n.Wb("src",null==e._app?null:e._app.iconURL,n.bc),n.xb(2),n.ic("App id: ",null==e._app?null:e._app.id,""),n.xb(2),n.ic("Name: ",null==e._app?null:e._app.name,""),n.xb(2),n.ic("Version: ",null==e._app?null:e._app.version,""),n.xb(2),n.ic("Price: ",null==e._app?null:e._app.price,"")}}function c(e,t){if(1&e){const e=n.Lb();n.Kb(0,"form",3),n.Rb("ngSubmit",(function(t){n.ac(e);const i=n.Tb();return i.onSubmit(i.checkoutForm.value,t)})),n.Kb(1,"div",4),n.Kb(2,"label",5),n.gc(3," version "),n.Jb(),n.Ib(4,"input",6),n.Jb(),n.Kb(5,"div",4),n.Kb(6,"label",7),n.gc(7," name "),n.Jb(),n.Ib(8,"input",8),n.Jb(),n.Kb(9,"div",4),n.Kb(10,"label",9),n.gc(11," executionDiagram "),n.Jb(),n.Ib(12,"input",10),n.Jb(),n.Kb(13,"div",4),n.Kb(14,"label",11),n.gc(15," price "),n.Jb(),n.Ib(16,"input",12),n.Jb(),n.Kb(17,"div",4),n.Kb(18,"label",13),n.gc(19," iconURL "),n.Jb(),n.Ib(20,"input",14),n.Jb(),n.Kb(21,"div",4),n.Kb(22,"label",15),n.gc(23," inputDataFormatDescription "),n.Jb(),n.Ib(24,"input",16),n.Jb(),n.Kb(25,"div",4),n.Kb(26,"label",17),n.gc(27," outputDataFormatDescription "),n.Jb(),n.Ib(28,"input",18),n.Jb(),n.Kb(29,"button",19),n.gc(30,"Add"),n.Jb(),n.Jb()}if(2&e){const e=n.Tb();n.Wb("formGroup",e.checkoutForm),n.xb(29),n.Wb("disabled",e.checkoutForm.invalid)}}let b=(()=>{class e{constructor(e,t,i,o){this._activatedRoute=e,this._router=t,this._appsService=i,this._formBuilder=o;const n=this._activatedRoute.snapshot.paramMap.get("id");n&&(this._id=n,this._isNew="new"===this._id),"new"!==n&&this._appsService.getApp(n).subscribe(e=>{this._app=e,console.log(this._app)},e=>{var t;alert((null===(t=null==e?void 0:e.error)||void 0===t?void 0:t.detail)||"Unknown error appeared...")}),this.checkoutForm=this._formBuilder.group({version:[1,r.k.required],name:["",r.k.required],executionDiagram:["",r.k.required],price:[1,r.k.required],iconURL:["",r.k.required],inputDataFormatDescription:["",r.k.required],outputDataFormatDescription:["",r.k.required]})}ngOnInit(){}onSubmit(e,t){t.preventDefault(),e.expectedCalculationsFinishTime=e.expectedCalculationsFinishTime+"T00:00:00.000Z",this._appsService.createApp(e).subscribe(e=>{alert("Dodano ComputationUnit!"),this._router.navigate(["development-shelf"])},e=>{var t;console.log(e),alert((null===(t=null==e?void 0:e.error)||void 0===t?void 0:t.detail)||"Unknown error appeared...")})}}return e.\u0275fac=function(t){return new(t||e)(n.Hb(a.a),n.Hb(a.c),n.Hb(p.a),n.Hb(r.c))},e.\u0275cmp=n.Bb({type:e,selectors:[["app-application-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["newAppForm",""],["alt","App's Image",1,"app-application__image",3,"src"],[1,"form-group",3,"formGroup","ngSubmit"],[1,"divForm"],["for","name",1,"labelForm"],["id","name","type","number","formControlName","version",1,"inputForm"],["for","cpuCoreCount",1,"labelForm"],["id","cpuCoreCount","type","text","formControlName","name",1,"inputForm"],["for","cpuClockSpeedInGHz",1,"labelForm"],["id","cpuClockSpeedInGHz","type","text","formControlName","executionDiagram",1,"inputForm"],["for","ramInGB",1,"labelForm"],["id","ramInGB","type","number","formControlName","price",1,"inputForm"],["for","gpuCoreClocksInGHz",1,"labelForm"],["id","gpuCoreClocksInGHz","type","text","formControlName","iconURL",1,"inputForm"],["for","inUse",1,"labelForm"],["id","inUse","type","text","formControlName","inputDataFormatDescription",1,"inputForm"],["for","duringDeactivation",1,"labelForm"],["id","duringDeactivation","type","text","formControlName","outputDataFormatDescription",1,"inputForm"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,t){if(1&e&&(n.ec(0,l,10,5,"div",0),n.ec(1,c,31,2,"ng-template",null,1,n.fc)),2&e){const e=n.Zb(2);n.Wb("ngIf",!t._isNew)("ngIfElse",e)}},directives:[o.j,r.l,r.h,r.e,r.i,r.b,r.g,r.d],styles:[".divForm[_ngcontent-%COMP%]{margin-bottom:10px}.labelForm[_ngcontent-%COMP%]{display:inline-block;width:20%;text-align:right;margin-right:5px}.inputForm[_ngcontent-%COMP%]{padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}img[_ngcontent-%COMP%]{height:200px}"]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Bb({type:e,selectors:[["app-application-details-page"]],decls:1,vars:0,template:function(e,t){1&e&&n.Ib(0,"app-application-details")},directives:[b],styles:[""]}),e})(),s=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[o.b,r.j]]}),e})();const m=[{path:":id",component:u},{path:"**",redirectTo:"development-shelf"}];let d=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[o.b,a.f.forChild(m),s]]}),e})()}}]);