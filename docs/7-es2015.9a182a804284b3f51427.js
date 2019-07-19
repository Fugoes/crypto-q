(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9fyx":function(n,e,t){"use strict";t.r(e);var l=t("8Y7J");class o{}var a=t("pMnS"),i=t("bujt"),s=t("Fwaw"),u=t("5GAg"),c=t("omvX"),b=t("s7LF"),r=t("oapL"),d=t("/HVE"),p=t("WKRr"),h=t("Qnqb"),g=t("lJxs"),m=t("AytR"),x=t("IheW");const y=(()=>{class n{constructor(n){this.http=n}setupKeys(n){let e=Object(h.decodeBase64)(n),t=e.slice(0,p.box.secretKeyLength);this.keyPair=p.box.keyPair.fromSecretKey(t),this.publicKey=e.slice(p.box.secretKeyLength,e.length)}getQuestionnaireContent(n){return this.http.get(`${m.a.apiURL}/q/${n}`).pipe(Object(g.a)(n=>this.decrypt(n.content,n.nonce)))}sendAContent(n,e){let t=this.encrypt(e);return this.http.post(`${m.a.apiURL}/q/${n}/a`,{content:t[0],nonce:t[1]}).pipe(Object(g.a)(n=>n.aid))}decrypt(n,e){let t=Object(h.decodeBase64)(n),l=Object(h.decodeBase64)(e),o=p.box.open(t,l,this.publicKey,this.keyPair.secretKey);if(!o)throw new Error("decryption failed");return Object(h.encodeUTF8)(o)}encrypt(n){const e=Object(h.decodeUTF8)(n),t=Object(p.randomBytes)(p.box.nonceLength),l=Object(p.box)(e,t,this.publicKey,this.keyPair.secretKey);return[Object(h.encodeBase64)(l),Object(h.encodeBase64)(t)]}}return n.ngInjectableDef=l.Ib({factory:function(){return new n(l.Mb(x.c))},token:n,providedIn:"root"}),n})();class f{constructor(n,e){this.g=n,this.route=e,this.content="",this.input="",this.disabled=!0,this.placeholder="Loading questionnaire content..."}ngOnInit(){this.g.setupKeys(this.route.snapshot.fragment);const n=Number(this.route.snapshot.params.qid);this.g.getQuestionnaireContent(n).subscribe(n=>{this.content=n,this.placeholder="Click the 'Submit' button above after finishing the questionnaire.",this.disabled=!1})}submit(){const n=Number(this.route.snapshot.params.qid);this.g.sendAContent(n,this.input).subscribe(n=>{alert("success")})}}var v=t("iInd"),k=l.nb({encapsulation:0,styles:[[".a-create-textarea[_ngcontent-%COMP%]{margin-top:.5em;font-family:monospace,monospace;width:100%}"]],data:{}});function w(n){return l.Gb(0,[l.Cb(402653184,1,{textarea:0}),(n()(),l.pb(1,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.submit()&&l),l},i.b,i.a)),l.ob(2,180224,null,0,s.b,[l.k,u.b,[2,c.a]],null,null),(n()(),l.Eb(-1,0,["Submit"])),(n()(),l.pb(4,0,null,null,1,"div",[["class","content pre-line monospace"]],null,null,null,null,null)),(n()(),l.Eb(5,null,["",""])),(n()(),l.pb(6,0,[[1,0],["textarea",1]],null,6,"textarea",[["cdkAutosizeMinRows","10"],["cdkTextareaAutosize",""],["class","a-create-textarea cdk-textarea-autosize"],["rows","1"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,t){var o=!0,a=n.component;return"input"===e&&(o=!1!==l.zb(n,7)._handleInput(t.target.value)&&o),"blur"===e&&(o=!1!==l.zb(n,7).onTouched()&&o),"compositionstart"===e&&(o=!1!==l.zb(n,7)._compositionStart()&&o),"compositionend"===e&&(o=!1!==l.zb(n,7)._compositionEnd(t.target.value)&&o),"input"===e&&(o=!1!==l.zb(n,12)._noopInputHandler()&&o),"ngModelChange"===e&&(o=!1!==(a.input=t)&&o),o},null,null)),l.ob(7,16384,null,0,b.b,[l.C,l.k,[2,b.a]],null,null),l.Bb(1024,null,b.d,function(n){return[n]},[b.b]),l.ob(9,671744,null,0,b.g,[[8,null],[8,null],[8,null],[6,b.d]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),l.Bb(2048,null,b.e,null,[b.g]),l.ob(11,16384,null,0,b.f,[[4,b.e]],null,null),l.ob(12,4603904,null,0,r.a,[l.k,d.a,l.x],{minRows:[0,"minRows"],enabled:[1,"enabled"]},null)],function(n,e){var t=e.component;n(e,9,0,t.disabled,t.input),n(e,12,0,"10","")},function(n,e){var t=e.component;n(e,1,0,l.zb(e,2).disabled||null,"NoopAnimations"===l.zb(e,2)._animationMode),n(e,5,0,t.content),n(e,6,0,l.rb(1,"",t.placeholder,""),l.zb(e,11).ngClassUntouched,l.zb(e,11).ngClassTouched,l.zb(e,11).ngClassPristine,l.zb(e,11).ngClassDirty,l.zb(e,11).ngClassValid,l.zb(e,11).ngClassInvalid,l.zb(e,11).ngClassPending)})}function z(n){return l.Gb(0,[(n()(),l.pb(0,0,null,null,1,"app-a-create",[],null,null,null,w,k)),l.ob(1,114688,null,0,f,[y,v.a],null,null)],function(n,e){n(e,1,0)},null)}var C=l.lb("app-a-create",f,z,{},{},[]),j=t("SVse"),O=t("POq0"),I=t("Xd0L");class K{}var q=t("IP0z"),L=t("cUpR"),M=t("HsOI"),P=t("ZwOa");t.d(e,"QuestioneeModuleNgFactory",function(){return B});var B=l.mb(o,[],function(n){return l.wb([l.xb(512,l.j,l.Z,[[8,[a.a,C]],[3,l.j],l.v]),l.xb(4608,j.k,j.j,[l.s,[2,j.r]]),l.xb(4608,b.i,b.i,[]),l.xb(4608,O.a,O.a,[]),l.xb(4608,I.a,I.a,[]),l.xb(1073742336,j.c,j.c,[]),l.xb(1073742336,v.l,v.l,[[2,v.q],[2,v.k]]),l.xb(1073742336,K,K,[]),l.xb(1073742336,b.h,b.h,[]),l.xb(1073742336,b.c,b.c,[]),l.xb(1073742336,q.a,q.a,[]),l.xb(1073742336,I.d,I.d,[[2,I.b],[2,L.f]]),l.xb(1073742336,d.b,d.b,[]),l.xb(1073742336,I.h,I.h,[]),l.xb(1073742336,s.c,s.c,[]),l.xb(1073742336,r.b,r.b,[]),l.xb(1073742336,O.b,O.b,[]),l.xb(1073742336,M.a,M.a,[]),l.xb(1073742336,P.a,P.a,[]),l.xb(1073742336,o,o,[]),l.xb(1024,v.i,function(){return[[{path:":qid",component:f}]]},[])])})}}]);