(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Iab2:function(n,t,e){var l,o;void 0===(o="function"==typeof(l=function(){"use strict";function t(n,t,e){var l=new XMLHttpRequest;l.open("GET",n),l.responseType="blob",l.onload=function(){a(l.response,t,e)},l.onerror=function(){console.error("could not download file")},l.send()}function e(n){var t=new XMLHttpRequest;t.open("HEAD",n,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function l(n){try{n.dispatchEvent(new MouseEvent("click"))}catch(t){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(n,a,i){var u=o.URL||o.webkitURL,s=document.createElement("a");s.download=a=a||n.name||"download",s.rel="noopener","string"==typeof n?(s.href=n,s.origin===location.origin?l(s):e(s.href)?t(n,a,i):l(s,s.target="_blank")):(s.href=u.createObjectURL(n),setTimeout(function(){u.revokeObjectURL(s.href)},4e4),setTimeout(function(){l(s)},0))}:"msSaveOrOpenBlob"in navigator?function(n,o,a){if(o=o||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function(n,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,a),o);else if(e(n))t(n,o,a);else{var i=document.createElement("a");i.href=n,i.target="_blank",setTimeout(function(){l(i)})}}:function(n,e,l,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof n)return t(n,e,l);var i="application/octet-stream"===n.type,u=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&u)&&"object"==typeof FileReader){var r=new FileReader;r.onloadend=function(){var n=r.result;n=s?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=n:location=n,a=null},r.readAsDataURL(n)}else{var c=o.URL||o.webkitURL,b=c.createObjectURL(n);a?a.location=b:location.href=b,a=null,setTimeout(function(){c.revokeObjectURL(b)},4e4)}});o.saveAs=a.saveAs=a,n.exports=a})?l.apply(t,[]):l)||(n.exports=o)},"sY+Z":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class o{}var a=e("pMnS"),i=e("bujt"),u=e("Fwaw"),s=e("5GAg"),r=e("omvX"),c=e("s7LF"),b=e("oapL"),d=e("/HVE"),p=e("WKRr"),h=e("Qnqb"),f=e("lJxs"),g=e("AytR"),m=e("IheW");const y=(()=>{class n{constructor(n){this.http=n}genKeyPairs(){this.thisKeyPair=p.box.keyPair(),this.thatKeyPair=p.box.keyPair()}sendQContent(n){let t=this.encrypt(n);return this.http.post(`${g.a.apiURL}/q`,{content:t[0],nonce:t[1]}).pipe(Object(f.a)(n=>n.qid))}encrypt(n){const t=Object(h.decodeUTF8)(n),e=Object(p.randomBytes)(p.box.nonceLength),l=Object(p.box)(t,e,this.thatKeyPair.publicKey,this.thisKeyPair.secretKey);return[Object(h.encodeBase64)(l),Object(h.encodeBase64)(e)]}}return n.ngInjectableDef=l.Ib({factory:function(){return new n(l.Mb(m.c))},token:n,providedIn:"root"}),n})();class v{constructor(n,t){this.g=n,this.router=t,this.rows=5,this.content=""}ngOnInit(){this.textarea.nativeElement.focus()}onClick(){return n=this,e=function*(){this.g.genKeyPairs();let n=yield this.g.sendQContent(this.content).toPromise();this.router.navigateByUrl(`/q/${n}/created`)},new((t=void 0)||(t=Promise))(function(l,o){function a(n){try{u(e.next(n))}catch(t){o(t)}}function i(n){try{u(e.throw(n))}catch(t){o(t)}}function u(n){n.done?l(n.value):new t(function(t){t(n.value)}).then(a,i)}u((e=e.apply(n,[])).next())});var n,t,e}onChange(){let n=this.content.split(/\r\n|\r|\n/).length;this.rows=n>5?n:5}}var w=e("iInd"),x=l.nb({encapsulation:0,styles:[[".q-create-textarea[_ngcontent-%COMP%]{display:block;width:100%;margin-top:.5em}"]],data:{}});function k(n){return l.Gb(0,[l.Cb(402653184,1,{textarea:0}),(n()(),l.pb(1,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.onClick()&&l),l},i.b,i.a)),l.ob(2,180224,null,0,u.b,[l.k,s.b,[2,r.a]],null,null),(n()(),l.Eb(-1,0,["Create"])),(n()(),l.pb(4,0,[[1,0],["textarea",1]],null,6,"textarea",[["cdkAutosizeMinRows","10"],["cdkTextareaAutosize",""],["class","monospace q-create-textarea cdk-textarea-autosize"],["rows","1"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var o=!0,a=n.component;return"input"===t&&(o=!1!==l.zb(n,5)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l.zb(n,5).onTouched()&&o),"compositionstart"===t&&(o=!1!==l.zb(n,5)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l.zb(n,5)._compositionEnd(e.target.value)&&o),"input"===t&&(o=!1!==l.zb(n,10)._noopInputHandler()&&o),"ngModelChange"===t&&(o=!1!==(a.content=e)&&o),o},null,null)),l.ob(5,16384,null,0,c.b,[l.C,l.k,[2,c.a]],null,null),l.Bb(1024,null,c.d,function(n){return[n]},[c.b]),l.ob(7,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),l.Bb(2048,null,c.e,null,[c.g]),l.ob(9,16384,null,0,c.f,[[4,c.e]],null,null),l.ob(10,4603904,null,0,b.a,[l.k,d.a,l.x],{minRows:[0,"minRows"],enabled:[1,"enabled"]},null)],function(n,t){n(t,7,0,t.component.content),n(t,10,0,"10","")},function(n,t){n(t,1,0,l.zb(t,2).disabled||null,"NoopAnimations"===l.zb(t,2)._animationMode),n(t,4,0,l.rb(1,"","This is an encrypted online questionnaire.\n\nHere is the guide:\n1. Type or paste the content of your questionnaire here.\n2. Click the 'Create' button above.",""),l.zb(t,9).ngClassUntouched,l.zb(t,9).ngClassTouched,l.zb(t,9).ngClassPristine,l.zb(t,9).ngClassDirty,l.zb(t,9).ngClassValid,l.zb(t,9).ngClassInvalid,l.zb(t,9).ngClassPending)})}function R(n){return l.Gb(0,[(n()(),l.pb(0,0,null,null,1,"app-q-create",[],null,null,null,k,x)),l.ob(1,114688,null,0,v,[y,w.k],null,null)],function(n,t){n(t,1,0)},null)}var L=l.lb("app-q-create",v,R,{},{},[]),A=e("Iab2");class C{constructor(n,t){this.g=n,this.route=t,this.questionnaireAddress=this.getQuestionnaireAddress(),this.resultAddress=this.getResultsAddress(),this.content="Questionnaire URL:\n"+this.questionnaireAddress+"\nResults URL:\n"+this.resultAddress+"\n"}ngOnInit(){new ClipboardJS(".btnCopy")}download(){let n=new Blob([this.content],{type:"text/plain"});A.saveAs(n,`${this.route.snapshot.params.qid}.txt`)}getQuestionnaireAddress(){let n=new Uint8Array(p.box.secretKeyLength+p.box.publicKeyLength);n.set(this.g.thatKeyPair.secretKey,0),n.set(this.g.thisKeyPair.publicKey,p.box.secretKeyLength);let t=Object(h.encodeBase64)(n);return`${`${`${location.origin}${g.a.offset}`}/${this.route.snapshot.params.qid}`}#${t}`}getResultsAddress(){let n=new Uint8Array(p.box.secretKeyLength+p.box.secretKeyLength);n.set(this.g.thisKeyPair.secretKey,0),n.set(this.g.thatKeyPair.secretKey,p.box.secretKeyLength);let t=Object(h.encodeBase64)(n);return`${`${`${location.origin}${g.a.offset}`}/r/${this.route.snapshot.params.qid}`}#${t}`}}var q=l.nb({encapsulation:0,styles:[[""]],data:{}});function j(n){return l.Gb(0,[(n()(),l.pb(0,0,null,null,9,"div",[["class","button-row"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.download()&&l),l},i.b,i.a)),l.ob(2,180224,null,0,u.b,[l.k,s.b,[2,r.a]],null,null),(n()(),l.Eb(-1,0,["Download"])),(n()(),l.pb(4,0,null,null,2,"button",[["class","btnCopy"],["data-clipboard-target","#qurl"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,i.b,i.a)),l.ob(5,180224,null,0,u.b,[l.k,s.b,[2,r.a]],null,null),(n()(),l.Eb(-1,0,["Copy Questionnaire URL"])),(n()(),l.pb(7,0,null,null,2,"button",[["class","btnCopy"],["data-clipboard-target","#rurl"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,i.b,i.a)),l.ob(8,180224,null,0,u.b,[l.k,s.b,[2,r.a]],null,null),(n()(),l.Eb(-1,0,["Copy Results URL"])),(n()(),l.pb(10,0,null,null,9,"div",[["class","monospace pre-line content"],["id","content"]],null,null,null,null,null)),(n()(),l.Eb(-1,null,[" Questionnaire URL:"])),(n()(),l.pb(12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.pb(13,0,null,null,1,"span",[["id","qurl"]],null,null,null,null,null)),(n()(),l.Eb(14,null,["",""])),(n()(),l.pb(15,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.Eb(-1,null,[" Results URL:"])),(n()(),l.pb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.pb(18,0,null,null,1,"span",[["id","rurl"]],null,null,null,null,null)),(n()(),l.Eb(19,null,["",""]))],null,function(n,t){var e=t.component;n(t,1,0,l.zb(t,2).disabled||null,"NoopAnimations"===l.zb(t,2)._animationMode),n(t,4,0,l.zb(t,5).disabled||null,"NoopAnimations"===l.zb(t,5)._animationMode),n(t,7,0,l.zb(t,8).disabled||null,"NoopAnimations"===l.zb(t,8)._animationMode),n(t,14,0,e.questionnaireAddress),n(t,19,0,e.resultAddress)})}function z(n){return l.Gb(0,[(n()(),l.pb(0,0,null,null,1,"app-q-created",[],null,null,null,j,q)),l.ob(1,114688,null,0,C,[y,w.a],null,null)],function(n,t){n(t,1,0)},null)}var E=l.lb("app-q-created",C,z,{},{},[]),K=e("SVse"),O=e("POq0"),U=e("Xd0L");class M{}var P=e("IP0z"),T=e("cUpR"),_=e("HsOI"),B=e("ZwOa");e.d(t,"QuestionerModuleNgFactory",function(){return $});var $=l.mb(o,[],function(n){return l.wb([l.xb(512,l.j,l.Z,[[8,[a.a,L,E]],[3,l.j],l.v]),l.xb(4608,K.k,K.j,[l.s,[2,K.r]]),l.xb(4608,c.i,c.i,[]),l.xb(4608,O.a,O.a,[]),l.xb(4608,U.a,U.a,[]),l.xb(1073742336,K.c,K.c,[]),l.xb(1073742336,c.h,c.h,[]),l.xb(1073742336,c.c,c.c,[]),l.xb(1073742336,w.l,w.l,[[2,w.q],[2,w.k]]),l.xb(1073742336,M,M,[]),l.xb(1073742336,P.a,P.a,[]),l.xb(1073742336,U.d,U.d,[[2,U.b],[2,T.f]]),l.xb(1073742336,d.b,d.b,[]),l.xb(1073742336,U.h,U.h,[]),l.xb(1073742336,u.c,u.c,[]),l.xb(1073742336,b.b,b.b,[]),l.xb(1073742336,O.b,O.b,[]),l.xb(1073742336,_.a,_.a,[]),l.xb(1073742336,B.a,B.a,[]),l.xb(1073742336,o,o,[]),l.xb(1024,w.i,function(){return[[{path:"create",component:v},{path:":qid/created",component:C},{path:"",redirectTo:"/create",pathMatch:"full"}]]},[])])})}}]);