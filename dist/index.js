!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["x5-dialog"]=t():e["x5-dialog"]=t()}(window,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(i=n,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(l," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(a).concat([r]).join("\n")}var i,d,l;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},function(e,t,o){var n=o(2),r=o(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);e.exports=r.locals||{}},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function d(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],s=o[l]||0,c="".concat(l," ").concat(s);o[l]=s+1;var u=d(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:c,updater:v(p,t),references:1}),n.push(c)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,x=0;function v(e,t){var o,n,r;if(t.singleton){var a=x++;o=m||(m=s(t)),n=p.bind(null,o,a,!1),r=p.bind(null,o,a,!0)}else o=s(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=d(o[n]);i[r].references--}for(var a=l(e,t),s=0;s<o.length;s++){var c=d(o[s]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}o=a}}}},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n)()(!1);r.push([e.i,"@keyframes x5-d-shake{14%,70%{transform:translate(-49%, -49%)}28%,56%,84%{transform:translate(-49%, -51%)}42%,98%{transform:translate(-51%, -51%)}}@keyframes x5-d-fade{0%{opacity:0}100%{opacity:1}}.x5-d-fade-enter-active{animation:x5-d-fade 0.2s}.x5-d-fade-leave-active{animation:x5-d-fade 0.2s reverse}.x5-d-modal-wrapper{height:100%;left:0;position:fixed;top:0;width:100%}.x5-d-modal-wrapper.x5-d-overlay{background-color:#0006;z-index:5}.x5-d-modal-wrapper .x5-d-modal{background-color:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.33);left:50%;overflow:hidden;position:fixed;top:50%;transform:translate(-50%, -50%);transition:all 0.3s ease;width:100%}.x5-d-modal-wrapper .x5-d-modal.x5-d-attention{animation:x5-d-shake 150ms}.x5-d-modal-wrapper .x5-d-modal .x5-d-header{background:#fafafa;border-bottom:#eee 1px solid;border-radius:2px 2px 0 0;color:#333;font-size:22px;font-weight:bold;padding:16px 54px 16px 24px;position:relative;text-align:left}.x5-d-modal-wrapper .x5-d-modal .x5-d-header .x5-d-close{font-size:14px;position:absolute;top:50%;transform:translateY(-50%);right:24px;color:transparent;cursor:pointer;text-shadow:0 0 0 #999}.x5-d-modal-wrapper .x5-d-modal .x5-d-header .x5-d-close:hover{text-shadow:0 0 0 #666}.x5-d-modal-wrapper .x5-d-modal .x5-d-content{max-height:70vh;overflow:auto;padding:20px 36px}.x5-d-modal-wrapper .x5-d-modal .x5-d-footer{background:#fbfbfb;border-radius:0 0 2px 2px;border-top:#eee 1px solid;text-align:end}.x5-d-modal-wrapper .x5-d-modal .x5-d-footer button{background-color:transparent;border:0 solid #4442;color:#666;cursor:pointer;font-size:16px;font-weight:bold;height:40px;margin:4px 20px 4px 0;min-width:80px;padding:1px 6px}.x5-d-modal-wrapper .x5-d-modal .x5-d-footer button.x5-d-ok{border-color:#1e90ff80;color:dodgerblue}.x5-d-modal-wrapper .x5-d-modal .x5-d-footer button.x5-d-ok:hover{background-color:#68b1fa42}.x5-d-modal-wrapper .x5-d-modal .x5-d-footer button:hover{border-width:1px}.x5-d-modal-wrapper .x5-d-modal .x5-d-footer button:disabled{border-width:0;color:#ccc;cursor:unset}.x5-d-dialog input{width:100%;padding:3%;border-radius:2px;border:1px solid #ccc}.x5-d-dialog p.x5-d-errors{height:14px;color:#c80000;margin:6px 0 0 0;font-size:14px}\n",""]),t.default=r},function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"x5-d-fade",mode:"out-in"}},[e.modal?o("div",{staticClass:"x5-d-modal-wrapper x5-d-overlay",style:"z-index:"+e.zIndex,on:{click:function(t){return t.target!==t.currentTarget?null:e.overlayClick(t)}}},[o("div",{class:"x5-d-modal "+(e.attention?"x5-d-attention":""),style:"max-width:"+e.modal.width},[o("x5-modal")],1)]):e._e()])};n._withStripped=!0;var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.modal.title?o("div",{staticClass:"x5-d-header"},[o("div",{domProps:{innerHTML:e._s(e.modal.title)}}),e._v(" "),e.modal.permanent?e._e():o("span",{staticClass:"x5-d-close",on:{click:function(t){return t.target!==t.currentTarget?null:e.cancel(t)}}},[e._v("❌")])]):e._e(),e._v(" "),o("div",{staticClass:"x5-d-content"},[o("transition",{attrs:{name:"x5-d-fade",mode:"out-in"}},[e.modal.component?o(e.modal.component,{tag:"component",attrs:{close:e.modal.close,data:e.modal.data},on:{input:function(t){e.val=t},valid:function(t){e.valid=t}}}):o("x5-dialog",{attrs:{error:e.error,text:e.modal.text,type:e.modal.type},on:{input:function(t){e.val=t}}})],1)],1),e._v(" "),e.modal.buttons?o("div",{staticClass:"x5-d-footer"},[e.hasCancel?o("button",{attrs:{disabled:e.working},on:{click:e.cancel}},[e._v(e._s(e.modal.cancelText))]):e._e(),e._v(" "),e.hasOK?o("button",{staticClass:"x5-d-ok",attrs:{disabled:e.error||!e.valid||e.working},on:{click:e.ok}},[e._v("\n      "+e._s(e.modal.okText)+"\n    ")]):e._e()]):e._e()])};r._withStripped=!0;var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"x5-d-dialog"},[e.text?o("div",{domProps:{innerHTML:e._s(e.text)}}):e._e(),e._v(" "),"prompt"===e.type?o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],domProps:{value:e.input},on:{input:[function(t){t.target.composing||(e.input=t.target.value)},function(t){return e.$emit("input",e.input)}]}}),e._v(" "),o("p",{staticClass:"x5-d-errors"},[e._v(e._s(e.input?e.error:""))])]):e._e()])};a._withStripped=!0;function i(e,t,o,n,r,a,i,d){var l,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=o,s._compiled=!0),n&&(s.functional=!0),a&&(s._scopeId="data-v-"+a),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=l):r&&(l=d?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(s.functional){s._injectStyles=l;var c=s.render;s.render=function(e,t){return l.call(t),c(e,t)}}else{var u=s.beforeCreate;s.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:s}}var d=i({name:"x5-D-Dialog",props:["error","text","type"],data:()=>({input:null})},a,[],!1,null,null,null);d.options.__file="src/Dialog.vue";var l=i({name:"x5-D-Modal",components:{x5Dialog:d.exports},data:()=>({val:null,valid:!0,working:!1}),computed:{modal(){return this.$store.getters["x5/d/modal"]},hasCancel(){return this.modal.buttons.includes("Cancel")},hasOK(){return this.modal.buttons.includes("OK")},error(){return this.modal.rules?this.modal.rules.map(e=>e(this.val)).find(e=>!0!==e):null}},methods:{async cancel(){this.modal.onCancel&&await this.modal.onCancel(),this.modal.close(this.modal.cancelValue)},async ok(){this.working=!0,await this.modal.onOK(this.val),this.working=!1,this.modal.close(this.val||this.modal.okValue)}}},r,[],!1,null,null,null);l.options.__file="src/Modal.vue";var s=i({name:"x5-D-Component",components:{x5Modal:l.exports},props:{zIndex:{type:[String,Number],default:200}},data:()=>({attention:!1}),computed:{modal(){return this.$store.getters["x5/d/modal"]}},methods:{async overlayClick(){this.modal.permanent?(this.attention=!0,setTimeout(()=>this.attention=!1,150)):this.modal.close()}}},n,[],!1,null,null,null);s.options.__file="src/Component.vue";var c=s.exports;var u={namespaced:!0,state:{modals:[]},getters:{modal:e=>e.modals.length>0?e.modals[0]:null},mutations:{ADD:(e,t)=>e.modals.unshift(t),REMOVE:(e,t)=>e.modals=e.modals.slice(1)},actions:{add:({commit:e},t)=>e("ADD",t),remove:({commit:e})=>e("REMOVE")}};o(1);const p={buttons:"OK",cancelValue:!1,cancelText:"Cancel",data:null,okValue:!0,okText:"OK",onCancel:()=>{},onClose:()=>{},onOK:()=>{},permanent:!1,rules:[],title:null,width:"650px"},f=["alert","confirm","prompt"],m=["OK","Cancel","OKCancel"];t.default=function(e,t){if(!t)throw new Error("A Vuex store is required by the x5Dialog plugin");t.registerModule("x5/d",u),e.component("x5Dialog",c);const o=(e,o)=>{if(e.type&&!f.includes(e.type))throw new Error(`Invalid type "${e.type}" used in x5Dialog Plugin. Valid options include: ${f.join(", ")}.`);if(e.buttons&&!m.includes(e.buttons))throw new Error(`Invalid buttons "${e.buttons}" used in x5Dialog Plugin. Valid options include: ${m.join(", ")}.`);let n={...p,...e,component:o};n.close=e=>{n.onClose&&n.onClose(e),n.resolve(e),t.dispatch("x5/d/remove")};const r=new Promise(e=>n.resolve=e);return t.dispatch("x5/d/add",n),r};e.prototype.$alert=(e,t)=>o({text:e,type:"alert",buttons:"OK",width:"500px",...t}),e.prototype.$confirm=(e,t)=>o({text:e,type:"confirm",buttons:"OKCancel",width:"500px",...t}),e.prototype.$prompt=(e,t)=>o({text:e,type:"prompt",buttons:"OKCancel",width:"500px",...t}),e.prototype.$modal=(e,t)=>o({...t},e)}}])}));