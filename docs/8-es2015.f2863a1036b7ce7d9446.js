(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yBKP:function(t,a,i){"use strict";i.r(a);var n=i("8Y7J");class r{}var e=i("pMnS");const l=(()=>(class{constructor(t){this._animationMode=t}}))(),o=(()=>(class{}))();var c=i("IP0z"),s=i("Xd0L"),d=i("cUpR"),m=i("omvX"),u=n.nb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function p(t){return n.Gb(2,[n.yb(null,0),n.yb(null,1)],null,null)}var b=i("bujt"),h=i("Fwaw"),g=i("5GAg"),x=i("SVse"),f=i("WKRr"),y=i("Qnqb"),v=i("AytR"),w=i("lJxs"),k=i("IheW");const K=(()=>{class t{constructor(t){this.http=t}setupKeys(t){const a=Object(y.decodeBase64)(t),i=a.slice(0,f.box.secretKeyLength),n=a.slice(f.box.secretKeyLength,a.length);this.thisKeyPair=f.box.keyPair.fromSecretKey(i),this.thatKeyPair=f.box.keyPair.fromSecretKey(n)}getResults(t){return this.http.get(`${v.a.apiURL}/q/${t}/a`).pipe(Object(w.a)(t=>t.map(t=>this.decryptResult(t))))}decryptResult(t){const a=Object(y.decodeBase64)(t.content),i=Object(y.decodeBase64)(t.nonce),n=f.box.open(a,i,this.thatKeyPair.publicKey,this.thisKeyPair.secretKey);return n?Object(y.encodeUTF8)(n):null}}return t.ngInjectableDef=n.Ib({factory:function(){return new t(n.Mb(k.c))},token:t,providedIn:"root"}),t})();class j{constructor(t,a){this.g=t,this.route=a}ngOnInit(){const t=Number(this.route.snapshot.params.qid);this.g.setupKeys(this.route.snapshot.fragment),this.results$=this.g.getResults(t)}refresh(){const t=Number(this.route.snapshot.params.qid);this.results$=this.g.getResults(t)}}var R=i("iInd"),z=n.nb({encapsulation:0,styles:[[".r-list[_ngcontent-%COMP%]{margin-top:.5em;margin-bottom:.5em}"]],data:{}});function O(t){return n.Gb(0,[(t()(),n.pb(0,0,null,null,3,"div",[["class","r-list"]],null,null,null,null,null)),(t()(),n.pb(1,0,null,null,2,"mat-card",[["class","monospace pre-line mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,p,u)),n.ob(2,49152,null,0,l,[[2,m.a]],null,null),(t()(),n.Eb(3,0,["",""]))],null,function(t,a){t(a,1,0,"NoopAnimations"===n.zb(a,2)._animationMode),t(a,3,0,a.context.$implicit)})}function P(t){return n.Gb(0,[(t()(),n.pb(0,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(t,a,i){var n=!0;return"click"===a&&(n=!1!==t.component.refresh()&&n),n},b.b,b.a)),n.ob(1,180224,null,0,h.b,[n.k,g.b,[2,m.a]],null,null),(t()(),n.Eb(-1,0,["Refresh"])),(t()(),n.eb(16777216,null,null,2,null,O)),n.ob(4,278528,null,0,x.i,[n.N,n.K,n.q],{ngForOf:[0,"ngForOf"]},null),n.Ab(131072,x.b,[n.h])],function(t,a){var i=a.component;t(a,4,0,n.Fb(a,4,0,n.zb(a,5).transform(i.results$)))},function(t,a){t(a,0,0,n.zb(a,1).disabled||null,"NoopAnimations"===n.zb(a,1)._animationMode)})}function q(t){return n.Gb(0,[(t()(),n.pb(0,0,null,null,1,"app-r-viewer",[],null,null,null,P,z)),n.ob(1,114688,null,0,j,[K,R.a],null,null)],function(t,a){t(a,1,0)},null)}var F=n.lb("app-r-viewer",j,q,{},{},[]);class G{}var I=i("/HVE");i("KCVW");const M=(()=>(class{}))();i("XNiG"),i("1G5W"),i("HDdC"),i("LRne"),i("dvZr"),i("s7LF");const N=(()=>(class{}))();i.d(a,"ResultsViewerModuleNgFactory",function(){return _});var _=n.mb(r,[],function(t){return n.wb([n.xb(512,n.j,n.Z,[[8,[e.a,F]],[3,n.j],n.v]),n.xb(4608,x.k,x.j,[n.s,[2,x.r]]),n.xb(1073742336,x.c,x.c,[]),n.xb(1073742336,R.l,R.l,[[2,R.q],[2,R.k]]),n.xb(1073742336,G,G,[]),n.xb(1073742336,c.a,c.a,[]),n.xb(1073742336,s.d,s.d,[[2,s.b],[2,d.f]]),n.xb(1073742336,o,o,[]),n.xb(1073742336,I.b,I.b,[]),n.xb(1073742336,s.h,s.h,[]),n.xb(1073742336,h.c,h.c,[]),n.xb(1073742336,s.e,s.e,[]),n.xb(1073742336,s.f,s.f,[]),n.xb(1073742336,M,M,[]),n.xb(1073742336,N,N,[]),n.xb(1073742336,r,r,[]),n.xb(1024,R.i,function(){return[[{path:":qid",component:j}]]},[])])})}}]);