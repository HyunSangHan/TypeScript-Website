(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3yYM":function(e,t,r){r("LnO1"),r("3eMz"),r("p+GS"),r("AA1/"),r("yKDW"),r("dtAy"),r("cM8k"),r("yIC7"),r("r0id"),r("RwQI"),r("XjK0"),r("SCO9");var a=function(e){"use strict";var t,r=Object.prototype,a=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,a){var n=t&&t.prototype instanceof f?t:f,o=Object.create(n.prototype),l=new S(a||[]);return o._invoke=function(e,t,r){var a=u;return function(n,o){if(a===d)throw new Error("Generator is already running");if(a===m){if("throw"===n)throw o;return O()}for(r.method=n,r.arg=o;;){var l=r.delegate;if(l){var i=N(l,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===u)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=d;var c=s(e,t,r);if("normal"===c.type){if(a=r.done?m:p,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=m,r.method="throw",r.arg=c.arg)}}}(e,r,l),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(a){return{type:"throw",arg:a}}}e.wrap=c;var u="suspendedStart",p="suspendedYield",d="executing",m="completed",h={};function f(){}function y(){}function g(){}var v={};v[o]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(j([])));w&&w!==r&&a.call(w,o)&&(v=w);var x=g.prototype=f.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function _(e){var t;this._invoke=function(r,n){function o(){return new Promise((function(t,o){!function t(r,n,o,l){var i=s(e[r],e,n);if("throw"!==i.type){var c=i.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,l)}),(function(e){t("throw",e,o,l)})):Promise.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,l)}))}l(i.arg)}(r,n,t,o)}))}return t=t?t.then(o,o):o()}}function N(e,r){var a=e.iterator[r.method];if(a===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(a,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return l.next=l}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[i]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},b(_.prototype),_.prototype[l]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,a,n){var o=new _(c(t,r,a,n));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(x),x[i]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return i.type="throw",i.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),s=a.call(l,"finallyLoc");if(c&&s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:j(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},VtSi:function(e,t,r){e.exports=r("3yYM")},tBe8:function(e,t,r){"use strict";r.r(t),function(e){r("yKDW"),r("dtAy");var a=r("VtSi"),n=r.n(a),o=(r("3yYM"),r("Bu8c"),r("ERkP")),l=r.n(o),i=r("9Dj+"),c=r("Wbzz"),s=(r("qcTE"),r("OSeq")),u=r("yVh0"),p=r("I56Z"),d=r("GO2c");function m(e,t,r,a,n,o,l){try{var i=e[o](l),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(a,n)}var h=function(t){var r=Object(p.a)(Object(u.a)());return Object(o.useEffect)((function(){if(!("playgroundLoaded"in window)){window.playgroundLoaded=!0,window.optionsSummary=t.pageContext.optionsSummary;var a=document.createElement("script");a.src=Object(c.withPrefix)("/js/vs.loader.js"),a.async=!0,a.onload=function(){var a=new URLSearchParams(location.search),o=a.get("ts")||"3.7.3",l=e.require;l.config({paths:{vs:"https://typescript.azureedge.net/cdn/"+o+"/monaco/min/vs","typescript-sandbox":Object(c.withPrefix)("/js/sandbox"),"typescript-playground":Object(c.withPrefix)("/js/playground"),unpkg:"https://unpkg.com/",local:"http://localhost:5000"},ignoreDuplicateModules:["vs/editor/editor.main"]}),l(["vs/editor/editor.main","vs/language/typescript/tsWorker","typescript-sandbox/index","typescript-playground/index"],function(){var o,l=(o=n.a.mark((function o(l,i,s,u){var p,d,m,h,f,y;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p=e.ts,l&&p&&s&&u?null===(d=document.getElementById("loader").parentNode)||void 0===d||d.removeChild(document.getElementById("loader")):(console.error("Errr"),console.error("main",!!l,"ts",!!p,"sandbox",!!s,"playground",!!u)),n.next=5,s.createTypeScriptSandbox({text:r("play_default_code_sample"),compilerOptions:{},domID:"monaco-editor-embed",useJavaScript:!!a.get("useJavaScript"),acquireTypes:!localStorage.getItem("disable-ata"),logger:{error:console.error,log:console.log}},l,p);case 5:m=n.sent,h={lang:t.pageContext.lang,prefix:Object(c.withPrefix)("/")},u.setupPlayground(m,l,h,r),m.editor.focus(),(f=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)")).matches&&m.monaco.editor.setTheme("sandbox-dark"),f.addListener((function(e){var t=e.matches?"sandbox-dark":"sandbox-light";m.monaco.editor.setTheme(t)})),(y=document.getElementById("playground-container")).style.display="flex",y.style.height=window.innerHeight-Math.round(y.getClientRects()[0].top)-18+"px";case 15:case"end":return n.stop()}}),o)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var n=o.apply(e,t);function l(e){m(n,r,a,l,i,"next",e)}function i(e){m(n,r,a,l,i,"throw",e)}l(void 0)}))});return function(e,t,r,a){return l.apply(this,arguments)}}())},document.body.appendChild(a)}})),l.a.createElement(i.a,{disableBetaNotification:!0,title:r("head_playground_title"),description:r("head_playground_description")},l.a.createElement("nav",{className:"navbar-sub"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"name"},l.a.createElement("span",null,"Playground")),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},r("play_subnav_config")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"examples-dropdown"},l.a.createElement("h3",null,r("play_subnav_examples")),l.a.createElement("div",{className:"info",id:"config-container"},l.a.createElement("button",{className:"examples-close"},r("play_subnav_examples_close")),l.a.createElement("div",{id:"compiler-dropdowns"},l.a.createElement("label",{className:"select"},l.a.createElement("span",{className:"select-label"},"Lang"),l.a.createElement("select",{id:"language-selector"},l.a.createElement("option",null,"TypeScript"),l.a.createElement("option",null,"JavaScript")),l.a.createElement("span",{className:"compiler-flag-blurb"},r("play_config_language_blurb"))))))),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{href:"#",id:"whatisnew-button",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},r("play_subnav_examples")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"examples-dropdown",id:"examples"},l.a.createElement("button",{className:"examples-close"},r("play_subnav_examples_close")),l.a.createElement(s.a,{defaultSection:"JavaScript",sections:["JavaScript","TypeScript"],examples:t.pageContext.examplesTOC,locale:t.pageContext.lang}))),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{href:"#",id:"examples-button",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},r("play_subnav_whatsnew")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"examples-dropdown",id:"whatisnew"},l.a.createElement("button",{className:"examples-close"},r("play_subnav_examples_close")),l.a.createElement(s.a,{defaultSection:"3.8",sections:["3.8","3.7","Playground"],examples:t.pageContext.examplesTOC,locale:t.pageContext.lang})))),l.a.createElement("ul",{className:"nav navbar-nav navbar-right hidden-xs"})),l.a.createElement("div",{className:"raised",style:{paddingTop:"0",marginTop:"0",marginBottom:"3rem",paddingBottom:"1.5rem"}},l.a.createElement("div",{id:"loader"},l.a.createElement("div",{className:"lds-grid"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("p",{id:"loading-message"},r("play_downloading_typescript"))),l.a.createElement("div",{id:"playground-container",style:{display:"none"}},l.a.createElement("div",{id:"editor-container"},l.a.createElement("div",{id:"editor-toolbar",className:"navbar-sub"},l.a.createElement("ul",null,l.a.createElement("li",{id:"versions",className:"dropdown"},l.a.createElement("a",{href:"#"},r("play_downloading_version"),"... ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"dropdown-menu versions"})),l.a.createElement("li",null,l.a.createElement("a",{id:"run-button",href:"#"},r("play_toolbar_run"))),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},r("play_toolbar_export")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.reportIssue()}},r("play_export_report_issue"))),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyAsMarkdownIssue()}},r("play_export_copy_md"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyForChat()}},r("play_export_copy_link"))),l.a.createElement("li",null," ",l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyForChatWithPreview()}},r("play_export_copy_link_preview"))),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openInTSAST()}},r("play_export_tsast"))),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInCodeSandbox()}},r("play_export_sandbox"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInStackBlitz()}},r("play_export_stackblitz")))))),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement("a",{id:"sidebar-toggle","aria-label":"Hide Sidebar",href:"#"},"⇥")))),l.a.createElement("div",{id:"monaco-editor-embed"})))))};t.default=function(e){return l.a.createElement(d.a,{locale:e.pageContext.lang},l.a.createElement(h,e))}}.call(this,r("fRV1"))}}]);
//# sourceMappingURL=component---src-templates-play-tsx-8a2f2b43743beb26463f.js.map