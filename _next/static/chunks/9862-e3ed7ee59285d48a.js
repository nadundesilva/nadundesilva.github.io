!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="64a072f7-f45d-4a43-a6c1-61b0406ae1d5",e._sentryDebugIdIdentifier="sentry-dbid-64a072f7-f45d-4a43-a6c1-61b0406ae1d5")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3765,9862],{16269:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(39233),o=n(65843),i=n(12115),a=n(55302),s=n(30896),u=n(76046),c=n(95155);function l(e){let{options:t,CacheProvider:n=s.C,children:l}=e,[d]=i.useState(()=>{var e;let n=(0,a.A)((0,o._)((0,r._)({},t),{key:null!==(e=null==t?void 0:t.key)&&void 0!==e?e:"mui"}));n.compat=!0;let i=n.insert,s=[];return n.insert=function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];(null==t?void 0:t.enableCssLayer)&&(r[1].styles="@layer mui {".concat(r[1].styles,"}"));let[a,u]=r;return void 0===n.inserted[u.name]&&s.push({name:u.name,isGlobal:!a}),i(...r)},{cache:n,flush:()=>{let e=s;return s=[],e}}});return(0,u.useServerInsertedHTML)(()=>{let e=d.flush();if(0===e.length)return null;let n="",r=d.cache.key,o=[];return e.forEach(e=>{let{name:t,isGlobal:i}=e,a=d.cache.inserted[t];"string"==typeof a&&(i?o.push({name:t,style:a}):(n+=a,r+=" ".concat(t)))}),(0,c.jsxs)(i.Fragment,{children:[o.map(e=>{let{name:n,style:r}=e;return(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":"".concat(d.cache.key,"-global ").concat(n),dangerouslySetInnerHTML:{__html:r}},n)}),n&&(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":r,dangerouslySetInnerHTML:{__html:n}})]})}),(0,c.jsx)(n,{value:d.cache,children:l})}},9552:(e,t,n)=>{"use strict";n.d(t,{default:()=>b});var r=n(12115),o=n(43463),i=n(37157),a=n(7123),s=n(51999),u=n(14413),c=n(4577),l=n(55212),d=n(95155);let f=(0,l.A)(),p=(0,c.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.A)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),h=e=>(0,u.A)({props:e,name:"MuiContainer",defaultTheme:f}),m=(e,t)=>{let{classes:n,fixed:r,disableGutters:o,maxWidth:u}=e,c={root:["root",u&&`maxWidth${(0,s.A)(String(u))}`,r&&"fixed",o&&"disableGutters"]};return(0,a.A)(c,e=>(0,i.Ay)(t,e),n)};var v=n(37410),g=n(89142),y=n(12567);let b=function(e={}){let{createStyledComponent:t=p,useThemeProps:n=h,componentName:i="MuiContainer"}=e,a=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:`${r}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return r.forwardRef(function(e,t){let r=n(e),{className:s,component:u="div",disableGutters:c=!1,fixed:l=!1,maxWidth:f="lg",classes:p,...h}=r,v={...r,component:u,disableGutters:c,fixed:l,maxWidth:f},g=m(v,i);return(0,d.jsx)(a,{as:u,ownerState:v,className:(0,o.A)(g.root,s),ref:t,...h})})}({createStyledComponent:(0,g.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t["maxWidth".concat((0,v.A)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,y.b)({props:e,name:"MuiContainer"})})},20457:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>v});var r=n(39233),o=n(65843),i=n(12115),a=n(78406),s=n(12567),u=n(95155);let c="function"==typeof(0,a.Dp)({}),l=(e,t)=>(0,r._)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),d=e=>(0,o._)((0,r._)({color:(e.vars||e).palette.text.primary},e.typography.body1),{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),f=function(e){var t,n;let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};i&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var n,r;let[o,i]=t,s=e.getColorSchemeSelector(o);s.startsWith("@")?a[s]={":root":{colorScheme:null===(n=i.palette)||void 0===n?void 0:n.mode}}:a[s.replace(/\s*&/,"")]={colorScheme:null===(r=i.palette)||void 0===r?void 0:r.mode}});let s=(0,r._)({html:l(e,i),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o._)((0,r._)({margin:0},d(e)),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a),u=null===(n=e.components)||void 0===n?void 0:null===(t=n.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return u&&(s=[s,u]),s},p="mui-ecs",h=e=>{let t=f(e,!1),n=Array.isArray(t)?t[0]:t;return!e.vars&&n&&(n.html[":root:has(".concat(p,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var r,o;let[i,a]=t,s=e.getColorSchemeSelector(i);s.startsWith("@")?n[s]={[":root:not(:has(.".concat(p,"))")]:{colorScheme:null===(r=a.palette)||void 0===r?void 0:r.mode}}:n[s.replace(/\s*&/,"")]={["&:not(:has(.".concat(p,"))")]:{colorScheme:null===(o=a.palette)||void 0===o?void 0:o.mode}}}),t},m=(0,a.Dp)(c?e=>{let{theme:t,enableColorScheme:n}=e;return f(t,n)}:e=>{let{theme:t}=e;return h(t)}),v=function(e){let{children:t,enableColorScheme:n=!1}=(0,s.b)({props:e,name:"MuiCssBaseline"});return(0,u.jsxs)(i.Fragment,{children:[c&&(0,u.jsx)(m,{enableColorScheme:n}),!c&&!n&&(0,u.jsx)("span",{className:p,style:{display:"none"}}),t]})}},9561:(e,t,n)=>{"use strict";n.d(t,{default:()=>x});var r=n(39233),o=n(65843),i=n(94556),a=n(12115),s=n(43463),u=n(7123),c=n(78406),l=n(89142),d=n(98330),f=n(12567),p=n(37410),h=n(31628),m=n(79251),v=n(95155);let g={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},y=(0,c.Dg)(),b=e=>{let{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,"inherit"!==e.align&&"align".concat((0,p.A)(t)),n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,u.A)(s,m.y,a)},S=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,p.A)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((0,d.A)(e=>{var t;let{theme:n}=e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(n.typography).filter(e=>{let[t,n]=e;return"inherit"!==t&&n&&"object"==typeof n}).map(e=>{let[t,n]=e;return{props:{variant:t},style:n}}),...Object.entries(n.palette).filter((0,h.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{color:(n.vars||n).palette[t].main}}}),...Object.entries((null===(t=n.palette)||void 0===t?void 0:t.text)||{}).filter(e=>{let[,t]=e;return"string"==typeof t}).map(e=>{let[t]=e;return{props:{color:"text".concat((0,p.A)(t))},style:{color:(n.vars||n).palette.text[t]}}}),{props:e=>{let{ownerState:t}=e;return"inherit"!==t.align},style:{textAlign:"var(--Typography-textAlign)"}},{props:e=>{let{ownerState:t}=e;return t.noWrap},style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:e=>{let{ownerState:t}=e;return t.gutterBottom},style:{marginBottom:"0.35em"}},{props:e=>{let{ownerState:t}=e;return t.paragraph},style:{marginBottom:16}}]}})),A={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x=a.forwardRef(function(e,t){let n=(0,f.b)({props:e,name:"MuiTypography"}),{color:a}=n,u=(0,i._)(n,["color"]),c=!g[a],l=y((0,r._)({},u,c&&{color:a})),{align:d="inherit",className:p,component:h,gutterBottom:m=!1,noWrap:x=!1,paragraph:T=!1,variant:_="body1",variantMapping:C=A}=l,k=(0,i._)(l,["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=(0,o._)((0,r._)({},l),{align:d,color:a,className:p,component:h,gutterBottom:m,noWrap:x,paragraph:T,variant:_,variantMapping:C}),w=h||(T?"p":C[_]||A[_])||"span",j=b(E);return(0,v.jsx)(S,(0,o._)((0,r._)({as:w,ref:t,className:(0,s.A)(j.root,p)},k),{ownerState:E,style:(0,r._)({},"inherit"!==d&&{"--Typography-textAlign":d},k.style)}))})},79251:(e,t,n)=>{"use strict";n.d(t,{A:()=>a,y:()=>i});var r=n(81045),o=n(37157);function i(e){return(0,o.Ay)("MuiTypography",e)}let a=(0,r.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},81337:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"}},64527:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(39233),o=n(94556);n(12115);var i=n(65843),a=n(89283),s=n(26366),u=n(95155);function c(e){var{theme:t}=e,n=(0,o._)(e,["theme"]);let c=s.A in t?t[s.A]:void 0;return(0,u.jsx)(a.A,(0,i._)((0,r._)({},n),{themeId:c?s.A:void 0,theme:c||t}))}var l=n(9237);function d(e){var{theme:t}=e,n=(0,o._)(e,["theme"]);return"function"!=typeof t&&"colorSchemes"in(s.A in t?t[s.A]:t)?(0,u.jsx)(l.Zr,(0,r._)({theme:t},n)):(0,u.jsx)(c,(0,r._)({theme:t},n))}},35651:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(39233),o=n(67165);function i(e){return String(parseFloat(e)).length===String(e).length}function a(e){return parseFloat(e)}function s(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{breakpoints:s=["sm","md","lg"],disableAlign:u=!1,factor:c=2,variants:l=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=n,d=(0,r._)({},e);d.typography=(0,r._)({},d.typography);let f=d.typography,p=(t=f.htmlFontSize,(e,n)=>{let r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return e;let o=a(e);"px"!==r&&("em"===r?o=a(e)*a(t):"rem"===r&&(o=a(e)*a(t)));let i=o;if("px"!==n){if("em"===n)i=o/a(t);else{if("rem"!==n)return e;i=o/a(t)}}return parseFloat(i.toFixed(5))+n}),h=s.map(e=>d.breakpoints.values[e]);return l.forEach(e=>{let t=f[e];if(!t)return;let n=parseFloat(p(t.fontSize,"rem"));if(n<=1)return;let{lineHeight:a}=t;if(!i(a)&&!u)throw Error((0,o.A)(6));i(a)||(a=parseFloat(p(a,"rem"))/parseFloat(n));let s=null;u||(s=e=>(function(e){let{size:t,grid:n}=e,r=t-t%n,o=r+n;return t-r<o-t?r:o})({size:e,grid:function(e){let{lineHeight:t,pixels:n,htmlFontSize:r}=e;return n/(t*r)}({pixels:4,lineHeight:a,htmlFontSize:f.htmlFontSize})})),f[e]=(0,r._)({},t,function(e){let{cssProperty:t,min:n,max:r,unit:o="rem",breakpoints:i=[600,900,1200],transform:a=null}=e,s={[t]:"".concat(n).concat(o)},u=(r-n)/i[i.length-1];return i.forEach(e=>{let r=n+u*e;null!==a&&(r=a(r)),s["@media (min-width:".concat(e,"px)")]={[t]:"".concat(Math.round(1e4*r)/1e4).concat(o)}}),s}({cssProperty:"fontSize",min:1+(n-1)/c,max:n,unit:"rem",breakpoints:h,transform:s}))}),d}},78406:(e,t,n)=>{"use strict";n.d(t,{Dp:()=>p,Dg:()=>h});var r=n(39233);n(12115);var o=n(2611),i=n(65843),a=n(12884),s=n(66307),u=n(95155);let c=function(e){let{styles:t,themeId:n,defaultTheme:r={}}=e,o=(0,s.A)(r),i="function"==typeof t?t(n&&o[n]||o):t;return(0,u.jsx)(a.A,{styles:i})};var l=n(92739),d=n(26366);let f=function(e){return(0,u.jsx)(c,(0,i._)((0,r._)({},e),{defaultTheme:l.A,themeId:d.A}))};function p(e){return function(t){return(0,u.jsx)(f,{styles:"function"==typeof e?n=>e((0,r._)({theme:n},t)):e})}}function h(){return o.A}},12884:(e,t,n)=>{"use strict";n.d(t,{A:()=>i}),n(12115);var r=n(71987),o=n(95155);function i(e){let{styles:t,defaultTheme:n={}}=e,i="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t;return(0,o.jsx)(r.mL,{styles:i})}},12806:(e,t,n)=>{"use strict";let r;n.d(t,{A:()=>u}),n(12115);var o=n(30896),i=n(55302),a=n(48029),s=n(95155);if("object"==typeof document){let e=document.querySelector('[name="emotion-insertion-point"]');if(!e){(e=document.createElement("meta")).setAttribute("name","emotion-insertion-point"),e.setAttribute("content","");let t=document.querySelector("head");t&&t.prepend(e)}class t extends a.v{insert(t,n){return this.key&&this.key.endsWith("global")&&(this.before=e),super.insert(t,n)}}r=((e,t)=>{let n=(0,i.A)(e);return n.sheet=new t({key:n.key,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy,prepend:n.sheet.prepend,insertionPoint:n.sheet.insertionPoint}),n})({key:"css",insertionPoint:e},t)}function u(e){let{injectFirst:t,children:n}=e;return t&&r?(0,s.jsx)(o.C,{value:r,children:n}):n}},4577:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(29225).Ay)()},92326:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(44151);function o(e){let{theme:t,name:n,props:o}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.A)(t.components[n].defaultProps,o):o}},14413:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(92326),o=n(66307);function i(e){let{props:t,name:n,defaultTheme:i,themeId:a}=e,s=(0,o.A)(i);return a&&(s=s[a]||s),(0,r.A)({theme:s,name:n,props:t})}},25633:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useReportWebVitals",{enumerable:!0,get:function(){return i}});let r=n(12115),o=n(94792);function i(e){(0,r.useEffect)(()=>{(0,o.onCLS)(e),(0,o.onFID)(e),(0,o.onLCP)(e),(0,o.onINP)(e),(0,o.onFCP)(e),(0,o.onTTFB)(e)},[e])}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},94792:e=>{!function(){"use strict";var t={};t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},void 0!==t&&(t.ab="//");var n={};t.r(n),t.d(n,{CLSThresholds:function(){return E},FCPThresholds:function(){return C},FIDThresholds:function(){return ee},INPThresholds:function(){return z},LCPThresholds:function(){return H},TTFBThresholds:function(){return q},onCLS:function(){return w},onFCP:function(){return k},onFID:function(){return et},onINP:function(){return N},onLCP:function(){return $},onTTFB:function(){return V}});var r,o,i,a,s,u=-1,c=function(e){addEventListener("pageshow",function(t){t.persisted&&(u=t.timeStamp,e(t))},!0)},l=function(){var e=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(e&&e.responseStart>0&&e.responseStart<performance.now())return e},d=function(){var e=l();return e&&e.activationStart||0},f=function(e,t){var n=l(),r="navigate";return u>=0?r="back-forward-cache":n&&(document.prerendering||d()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(0x82f79cd8fff*Math.random())+1e12),navigationType:r}},p=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver(function(e){Promise.resolve().then(function(){t(e.getEntries())})});return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},h=function(e,t,n,r){var o,i;return function(a){var s;t.value>=0&&(a||r)&&((i=t.value-(o||0))||void 0===o)&&(o=t.value,t.delta=i,t.rating=(s=t.value)>n[1]?"poor":s>n[0]?"needs-improvement":"good",e(t))}},m=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},v=function(e){document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&e()})},g=function(e){var t=!1;return function(){t||(e(),t=!0)}},y=-1,b=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},S=function(e){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===e.type?e.timeStamp:0,x())},A=function(){addEventListener("visibilitychange",S,!0),addEventListener("prerenderingchange",S,!0)},x=function(){removeEventListener("visibilitychange",S,!0),removeEventListener("prerenderingchange",S,!0)},T=function(){return y<0&&(y=b(),A(),c(function(){setTimeout(function(){y=b(),A()},0)})),{get firstHiddenTime(){return y}}},_=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},C=[1800,3e3],k=function(e,t){t=t||{},_(function(){var n,r=T(),o=f("FCP"),i=p("paint",function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(i.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=Math.max(e.startTime-d(),0),o.entries.push(e),n(!0)))})});i&&(n=h(e,o,C,t.reportAllChanges),c(function(r){n=h(e,o=f("FCP"),C,t.reportAllChanges),m(function(){o.value=performance.now()-r.timeStamp,n(!0)})}))})},E=[.1,.25],w=function(e,t){t=t||{},k(g(function(){var n,r=f("CLS",0),o=0,i=[],a=function(e){e.forEach(function(e){if(!e.hadRecentInput){var t=i[0],n=i[i.length-1];o&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(o+=e.value,i.push(e)):(o=e.value,i=[e])}}),o>r.value&&(r.value=o,r.entries=i,n())},s=p("layout-shift",a);s&&(n=h(e,r,E,t.reportAllChanges),v(function(){a(s.takeRecords()),n(!0)}),c(function(){o=0,n=h(e,r=f("CLS",0),E,t.reportAllChanges),m(function(){return n()})}),setTimeout(n,0))}))},j=0,P=1/0,L=0,F=function(e){e.forEach(function(e){e.interactionId&&(P=Math.min(P,e.interactionId),j=(L=Math.max(L,e.interactionId))?(L-P)/7+1:0)})},M=function(){"interactionCount"in performance||r||(r=p("event",F,{type:"event",buffered:!0,durationThreshold:0}))},I=[],W=new Map,O=0,D=[],R=function(e){if(D.forEach(function(t){return t(e)}),e.interactionId||"first-input"===e.entryType){var t=I[I.length-1],n=W.get(e.interactionId);if(n||I.length<10||e.duration>t.latency){if(n)e.duration>n.latency?(n.entries=[e],n.latency=e.duration):e.duration===n.latency&&e.startTime===n.entries[0].startTime&&n.entries.push(e);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};W.set(r.id,r),I.push(r)}I.sort(function(e,t){return t.latency-e.latency}),I.length>10&&I.splice(10).forEach(function(e){return W.delete(e.id)})}}},B=function(e){var t=self.requestIdleCallback||self.setTimeout,n=-1;return e=g(e),"hidden"===document.visibilityState?e():(n=t(e),v(e)),n},z=[200,500],N=function(e,t){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(t=t||{},_(function(){M();var n,o,i=f("INP"),a=function(e){B(function(){e.forEach(R);var t,n=(t=Math.min(I.length-1,Math.floor(((r?j:performance.interactionCount||0)-O)/50)),I[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,o())})},s=p("event",a,{durationThreshold:null!==(n=t.durationThreshold)&&void 0!==n?n:40});o=h(e,i,z,t.reportAllChanges),s&&(s.observe({type:"first-input",buffered:!0}),v(function(){a(s.takeRecords()),o(!0)}),c(function(){O=0,I.length=0,W.clear(),o=h(e,i=f("INP"),z,t.reportAllChanges)}))}))},H=[2500,4e3],G={},$=function(e,t){t=t||{},_(function(){var n,r=T(),o=f("LCP"),i=function(e){t.reportAllChanges||(e=e.slice(-1)),e.forEach(function(e){e.startTime<r.firstHiddenTime&&(o.value=Math.max(e.startTime-d(),0),o.entries=[e],n())})},a=p("largest-contentful-paint",i);if(a){n=h(e,o,H,t.reportAllChanges);var s=g(function(){G[o.id]||(i(a.takeRecords()),a.disconnect(),G[o.id]=!0,n(!0))});["keydown","click"].forEach(function(e){addEventListener(e,function(){return B(s)},!0)}),v(s),c(function(r){n=h(e,o=f("LCP"),H,t.reportAllChanges),m(function(){o.value=performance.now()-r.timeStamp,G[o.id]=!0,n(!0)})})}})},q=[800,1800],J=function e(t){document.prerendering?_(function(){return e(t)}):"complete"!==document.readyState?addEventListener("load",function(){return e(t)},!0):setTimeout(t,0)},V=function(e,t){t=t||{};var n=f("TTFB"),r=h(e,n,q,t.reportAllChanges);J(function(){var o=l();o&&(n.value=Math.max(o.responseStart-d(),0),n.entries=[o],r(!0),c(function(){(r=h(e,n=f("TTFB",0),q,t.reportAllChanges))(!0)}))})},Z={passive:!0,capture:!0},K=new Date,Q=function(e,t){o||(o=t,i=e,a=new Date,Y(removeEventListener),U())},U=function(){if(i>=0&&i<a-K){var e={entryType:"first-input",name:o.type,target:o.target,cancelable:o.cancelable,startTime:o.timeStamp,processingStart:o.timeStamp+i};s.forEach(function(t){t(e)}),s=[]}},X=function(e){if(e.cancelable){var t,n,r,o=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){Q(o,e),r()},n=function(){r()},r=function(){removeEventListener("pointerup",t,Z),removeEventListener("pointercancel",n,Z)},addEventListener("pointerup",t,Z),addEventListener("pointercancel",n,Z)):Q(o,e)}},Y=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,X,Z)})},ee=[100,300],et=function(e,t){t=t||{},_(function(){var n,r=T(),a=f("FID"),u=function(e){e.startTime<r.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},l=function(e){e.forEach(u)},d=p("first-input",l);n=h(e,a,ee,t.reportAllChanges),d&&(v(g(function(){l(d.takeRecords()),d.disconnect()})),c(function(){n=h(e,a=f("FID"),ee,t.reportAllChanges),s=[],i=-1,o=null,Y(addEventListener),s.push(u),U()}))})};e.exports=n}()},88442:(e,t,n)=>{e.exports=n(25633)},60478:e=>{e.exports={style:{fontFamily:"'Roboto', 'Roboto Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_c0d5fb"}},20698:(e,t,n)=>{"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:()=>r})}}]);
//# sourceMappingURL=9862-e3ed7ee59285d48a.js.map