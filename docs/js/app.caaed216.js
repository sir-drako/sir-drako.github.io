(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0ee5681c":"c96d3d5a","chunk-58a25b7d":"75f7800f","chunk-01dea1be":"624fa239","chunk-2d0a4d7f":"2d32a2cf","chunk-2d801718":"ea315ac2"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0ee5681c":1,"chunk-58a25b7d":1,"chunk-01dea1be":1,"chunk-2d801718":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0ee5681c":"fa4575c0","chunk-58a25b7d":"8ad0bb85","chunk-01dea1be":"ba3e427d","chunk-2d0a4d7f":"31d6cfe0","chunk-2d801718":"6a28d282"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2272:function(e,t,n){e.exports=n.p+"img/buttercms_logo_white.c01e3ea9.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",dark:"",dense:""},scopedSlots:e._u([e.$vuetify.breakpoint.xs?{key:"extension",fn:function(){return[a("v-tabs",{ref:"tabs",attrs:{centered:""}},e._l(e.links,(function(t){return a("v-tab",{key:t.name,attrs:{to:t.link}},[e._v(" "+e._s(t.name)+" ")])})),1)]},proxy:!0}:null],null,!0)},[a("v-toolbar-title",{staticStyle:{overflow:"visible"}},[a("router-link",{staticClass:"text-decoration-none white--text",attrs:{to:"/"}},[a("span",{staticClass:"text-h5"},[e._v(" JUSTIN "),a("span",{staticClass:"font-weight-bold"},[e._v("SILVER")])])])],1),e.$vuetify.breakpoint.xs?e._e():a("v-tabs",{ref:"tabs",staticClass:"pr-5",attrs:{right:""}},e._l(e.links,(function(t){return a("v-tab",{key:t.name,attrs:{to:t.link}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{dark:""}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[a("strong",{staticClass:"heading-1 ma-auto"},[e._v("2021 Justin Silver")])]),a("v-spacer"),a("v-col",{attrs:{cols:"auto"}},[e._l(e.icons,(function(t){return a("v-btn",{key:t.name,staticClass:"mx-sm-1",attrs:{target:"_blank",href:t.link,icon:"",dark:""}},[a("v-icon",{attrs:{size:"1.5rem",dark:""}},[e._v(" "+e._s(t.name)+" ")])],1)})),a("v-btn",{staticClass:"px-sm-1 px-0",staticStyle:{"max-height":"1.5rem"},attrs:{text:"",target:"_blank",href:"https://buttercms.com/"}},[a("v-img",{attrs:{alt:"Butter CMS logo",src:n("2272"),transition:"scale-transition","max-width":"7.3rem"}})],1)],2)],1)],1)],1)],1)},o=[],i={name:"App",data:function(){return{links:[{name:"Home",link:"/"},{name:"Projects",link:"/project"},{name:"Contact",link:"/contact"}],icons:[{name:"mdi-github",link:"https://www.github.com/sir-drako"},{name:"mdi-linkedin",link:"https://www.linkedin.com/in/justin-silver/"}]}},mounted:function(){this.$refs.tabs&&this.$refs.tabs.onResize(),window.dispatchEvent(new Event("resize")),this.$nextTick()}},c=i,s=n("2877"),u=n("6544"),l=n.n(u),d=n("7496"),f=n("40dc"),p=n("8336"),h=n("62ad"),m=n("a523"),b=n("553a"),v=n("132d"),k=n("adda"),g=n("f6c4"),y=n("0fd9"),w=n("2fa4"),_=n("71a3"),x=n("fe57"),j=n("2a7f"),C=Object(s["a"])(c,r,o,!1,null,null,null),S=C.exports;l()(C,{VApp:d["a"],VAppBar:f["a"],VBtn:p["a"],VCol:h["a"],VContainer:m["a"],VFooter:b["a"],VIcon:v["a"],VImg:k["a"],VMain:g["a"],VRow:y["a"],VSpacer:w["a"],VTab:_["a"],VTabs:x["a"],VToolbarTitle:j["a"]});n("d3b7"),n("3ca3"),n("ddb0");var V=n("8c4f");a["a"].use(V["a"]);var P=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-58a25b7d"),n.e("chunk-01dea1be")]).then(n.bind(null,"bb51"))}},{path:"/project",name:"project",component:function(){return Promise.all([n.e("chunk-58a25b7d"),n.e("chunk-2d801718")]).then(n.bind(null,"029f"))}},{path:"/project/:project",name:"project_slug",component:function(){return Promise.all([n.e("chunk-58a25b7d"),n.e("chunk-2d0a4d7f")]).then(n.bind(null,"07bd"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-0ee5681c").then(n.bind(null,"b8fa"))}}],T=new V["a"]({mode:"history",base:"/",routes:P}),E=T,O=n("f309");a["a"].use(O["a"]);var A=new O["a"]({});n("a41b");a["a"].config.productionTip=!1,new a["a"]({router:E,vuetify:A,render:function(e){return e(S)}}).$mount("#app")},a41b:function(e,t,n){}});
//# sourceMappingURL=app.caaed216.js.map