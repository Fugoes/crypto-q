(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9fyx":function(n,t,e){"use strict";e.r(t);var o=e("CcnG"),l=function(){return function(){}}(),i=e("pMnS"),u=e("bujt"),a=e("UodH"),r=e("lLAP"),c=e("wFw1"),b=e("gIcY"),s=e("/VYK"),p=e("dWZg"),d=e("WKRr"),h=e("Qnqb"),g=e("67Y/"),f=e("AytR"),m=e("t/Na"),y=function(){function n(n){this.http=n}return n.prototype.setupKeys=function(n){var t=Object(h.decodeBase64)(n),e=t.slice(0,d.box.secretKeyLength);this.keyPair=d.box.keyPair.fromSecretKey(e),this.publicKey=t.slice(d.box.secretKeyLength,t.length)},n.prototype.getQuestionnaireContent=function(n){var t=this;return this.http.get(f.a.apiURL+"/q/"+n).pipe(Object(g.a)(function(n){return t.decrypt(n.content,n.nonce)}))},n.prototype.sendAContent=function(n,t){var e=this.encrypt(t);return this.http.post(f.a.apiURL+"/q/"+n+"/a",{content:e[0],nonce:e[1]}).pipe(Object(g.a)(function(n){return n.aid}))},n.prototype.decrypt=function(n,t){var e=Object(h.decodeBase64)(n),o=Object(h.decodeBase64)(t),l=d.box.open(e,o,this.publicKey,this.keyPair.secretKey);if(!l)throw new Error("decryption failed");return Object(h.encodeUTF8)(l)},n.prototype.encrypt=function(n){var t=Object(h.decodeUTF8)(n),e=Object(d.randomBytes)(d.box.nonceLength),o=Object(d.box)(t,e,this.publicKey,this.keyPair.secretKey);return[Object(h.encodeBase64)(o),Object(h.encodeBase64)(e)]},n.ngInjectableDef=o.Kb({factory:function(){return new n(o.Ob(m.c))},token:n,providedIn:"root"}),n}(),z=function(){function n(n,t){this.g=n,this.route=t,this.content="",this.input="",this.disabled=!0,this.placeholder="Loading questionnaire content..."}return n.prototype.ngOnInit=function(){var n=this;this.g.setupKeys(this.route.snapshot.fragment);var t=Number(this.route.snapshot.params.qid);this.g.getQuestionnaireContent(t).subscribe(function(t){n.content=t,n.placeholder="Click the 'Submit' button above after finishing the questionnaire.",n.disabled=!1})},n.prototype.submit=function(){var n=Number(this.route.snapshot.params.qid);this.g.sendAContent(n,this.input).subscribe(function(n){alert("success")})},n}(),v=e("ZYCi"),B=o.pb({encapsulation:0,styles:[[".a-create-textarea[_ngcontent-%COMP%]{margin-top:.5em;font-family:monospace,monospace;width:100%}"]],data:{}});function k(n){return o.Ib(0,[o.Eb(402653184,1,{textarea:0}),(n()(),o.rb(1,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==n.component.submit()&&o),o},u.b,u.a)),o.qb(2,180224,null,0,a.b,[o.k,r.b,[2,c.a]],null,null),(n()(),o.Gb(-1,0,["Submit"])),(n()(),o.rb(4,0,null,null,1,"div",[["class","content pre-line monospace"]],null,null,null,null,null)),(n()(),o.Gb(5,null,["",""])),(n()(),o.rb(6,0,[[1,0],["textarea",1]],null,6,"textarea",[["cdkAutosizeMinRows","5"],["cdkTextareaAutosize",""],["class","a-create-textarea cdk-textarea-autosize"],["rows","1"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,i=n.component;return"input"===t&&(l=!1!==o.Bb(n,7)._handleInput(e.target.value)&&l),"blur"===t&&(l=!1!==o.Bb(n,7).onTouched()&&l),"compositionstart"===t&&(l=!1!==o.Bb(n,7)._compositionStart()&&l),"compositionend"===t&&(l=!1!==o.Bb(n,7)._compositionEnd(e.target.value)&&l),"input"===t&&(l=!1!==o.Bb(n,12)._noopInputHandler()&&l),"ngModelChange"===t&&(l=!1!==(i.input=e)&&l),l},null,null)),o.qb(7,16384,null,0,b.b,[o.E,o.k,[2,b.a]],null,null),o.Db(1024,null,b.d,function(n){return[n]},[b.b]),o.qb(9,671744,null,0,b.g,[[8,null],[8,null],[8,null],[6,b.d]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),o.Db(2048,null,b.e,null,[b.g]),o.qb(11,16384,null,0,b.f,[[4,b.e]],null,null),o.qb(12,4603904,null,0,s.a,[o.k,p.a,o.z],{minRows:[0,"minRows"],enabled:[1,"enabled"]},null)],function(n,t){var e=t.component;n(t,9,0,e.disabled,e.input),n(t,12,0,"5","")},function(n,t){var e=t.component;n(t,1,0,o.Bb(t,2).disabled||null,"NoopAnimations"===o.Bb(t,2)._animationMode),n(t,5,0,e.content),n(t,6,0,o.tb(1,"",e.placeholder,""),o.Bb(t,11).ngClassUntouched,o.Bb(t,11).ngClassTouched,o.Bb(t,11).ngClassPristine,o.Bb(t,11).ngClassDirty,o.Bb(t,11).ngClassValid,o.Bb(t,11).ngClassInvalid,o.Bb(t,11).ngClassPending)})}function C(n){return o.Ib(0,[(n()(),o.rb(0,0,null,null,1,"app-a-create",[],null,null,null,k,B)),o.qb(1,114688,null,0,z,[y,v.a],null,null)],function(n,t){n(t,1,0)},null)}var j=o.nb("app-a-create",z,C,{},{},[]),q=e("Ip0R"),w=e("M2Lx"),x=e("Wf4p"),O=function(){return function(){}}(),K=e("Fzqc"),I=e("ZYjt"),M=e("seP3"),P=e("b716");e.d(t,"QuestioneeModuleNgFactory",function(){return L});var L=o.ob(l,[],function(n){return o.yb([o.zb(512,o.j,o.bb,[[8,[i.a,j]],[3,o.j],o.x]),o.zb(4608,q.k,q.j,[o.u,[2,q.r]]),o.zb(4608,b.i,b.i,[]),o.zb(4608,w.a,w.a,[]),o.zb(4608,x.a,x.a,[]),o.zb(1073742336,q.c,q.c,[]),o.zb(1073742336,v.l,v.l,[[2,v.q],[2,v.k]]),o.zb(1073742336,O,O,[]),o.zb(1073742336,b.h,b.h,[]),o.zb(1073742336,b.c,b.c,[]),o.zb(1073742336,K.a,K.a,[]),o.zb(1073742336,x.d,x.d,[[2,x.b],[2,I.f]]),o.zb(1073742336,p.b,p.b,[]),o.zb(1073742336,x.h,x.h,[]),o.zb(1073742336,a.c,a.c,[]),o.zb(1073742336,s.b,s.b,[]),o.zb(1073742336,w.b,w.b,[]),o.zb(1073742336,M.a,M.a,[]),o.zb(1073742336,P.a,P.a,[]),o.zb(1073742336,l,l,[]),o.zb(1024,v.i,function(){return[[{path:":qid",component:z}]]},[])])})}}]);