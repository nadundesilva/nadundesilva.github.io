!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5d6c583d-8e6a-4c1b-943a-40bc3f7e8467",e._sentryDebugIdIdentifier="sentry-dbid-5d6c583d-8e6a-4c1b-943a-40bc3f7e8467")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{90748:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var o=n(57437),i=n(48024),a=n(76990),r=n(44839),s=n(2265);n(12659);let l=s.createContext({});var c=n(95885),u=n(19783),d=n(72296),m=n(70587);function h(e){return(0,m.ZP)("MuiImageListItem",e)}let f=(0,d.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),g=e=>{let{classes:t,variant:n}=e;return(0,a.Z)({root:["root",n],img:["img"]},h,t)},p=(0,i.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{["& .".concat(f.img)]:t.img},t.root,t[n.variant]]}})({display:"block",position:"relative",["& .".concat(f.img)]:{objectFit:"cover",width:"100%",height:"100%",display:"block"},variants:[{props:{variant:"standard"},style:{display:"flex",flexDirection:"column"}},{props:{variant:"woven"},style:{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}}},{props:{variant:"standard"},style:{["& .".concat(f.img)]:{height:"auto",flexGrow:1}}}]}),v=s.forwardRef(function(e,t){let n=(0,c.i)({props:e,name:"MuiImageListItem"}),{children:i,className:a,cols:d=1,component:m="li",rows:h=1,style:f,...v}=n,{rowHeight:y="auto",gap:w,variant:b}=s.useContext(l),I="auto";"woven"===b?I=void 0:"auto"!==y&&(I=y*h+w*(h-1));let x={...n,cols:d,component:m,gap:w,rowHeight:y,rows:h,variant:b},Z=g(x);return(0,o.jsx)(p,{as:m,className:(0,r.Z)(Z.root,Z[b],a),ref:t,style:{height:I,gridColumnEnd:"masonry"!==b?"span ".concat(d):void 0,gridRowEnd:"masonry"!==b?"span ".concat(h):void 0,marginBottom:"masonry"===b?w:void 0,breakInside:"masonry"===b?"avoid":void 0,...f},ownerState:x,...v,children:s.Children.map(i,e=>s.isValidElement(e)?"img"===e.type||(0,u.Z)(e,["Image"])?s.cloneElement(e,{className:(0,r.Z)(Z.img,e.props.className)}):e:null)})});var y=n(80219),w=n(37040),b=n(17156),I=n(83719),x=n(22960),Z=n(79647),j=n(53019);function L(e){return(0,m.ZP)("MuiImageList",e)}(0,d.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);let C=e=>{let{classes:t,variant:n}=e;return(0,a.Z)({root:["root",n]},L,t)},M=(0,i.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant]]}})({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch",variants:[{props:{variant:"masonry"},style:{display:"block"}}]}),O=s.forwardRef(function(e,t){let n=(0,c.i)({props:e,name:"MuiImageList"}),{children:i,className:a,cols:u=2,component:d="ul",rowHeight:m="auto",gap:h=4,style:f,variant:g="standard",...p}=n,v=s.useMemo(()=>({rowHeight:m,gap:h,variant:g}),[m,h,g]),y="masonry"===g?{columnCount:u,columnGap:h,...f}:{gridTemplateColumns:"repeat(".concat(u,", 1fr)"),gap:h,...f},w={...n,component:d,gap:h,rowHeight:m,variant:g},b=C(w);return(0,o.jsx)(M,{as:d,className:(0,r.Z)(b.root,b[g],a),ref:t,style:y,ownerState:w,...p,children:(0,o.jsx)(l.Provider,{value:v,children:i})})});var S=n(66648),k=n(61001),E=n(84689);let A={imageListItemImageOverlay:"".concat("Home-Achievements","-imageListItemImageOverlay")},F=(0,i.ZP)(v)({width:"100%",height:"auto"}),D=(0,i.ZP)(y.default)({color:"#ffffff",position:"absolute",textAlign:"center"});var H=()=>{let{ref:e,offset:t}=(0,k.bO)(),n=[{title:"Global Finalist - Galactic Impact - NASA Space Apps Challenge 2017",photo:E.O.NASASpaceAppsChallenge2017,animationTimeoutFactor:1.75},{title:"Placements in Dean's List",photo:E.O.UOMDeansList2017,animationTimeoutFactor:1},{title:"WSO2 Sustained Outstanding Contribution Award - Consecutive years from 2019 to 2021",photo:E.O.WSO2OutstandingContributor2019,animationTimeoutFactor:2},{title:"Finalist - British Council HSBC Youth Enterprise Awards 2015",photo:E.O.HSBCYouthEnterpriseAwards2015,animationTimeoutFactor:1.5},{title:"Finalist - Angel Hack 2016",photo:E.O.AngelHack2016,animationTimeoutFactor:1.25}],i=(e,i,a)=>{let r=n[e];return(0,o.jsx)(F,{rows:i,cols:1,sx:{position:"relative","&:hover":{["& .".concat(A.imageListItemImageOverlay)]:{top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.6)",zIndex:1}}},children:(0,o.jsx)(w.Z,{in:t>.3,timeout:1e3*r.animationTimeoutFactor,children:(0,o.jsxs)(b.default,{sx:{height:"100%",position:"relative"},children:[(0,o.jsx)(D,{container:!0,justifyContent:"center",alignItems:"center",className:A.imageListItemImageOverlay,children:(0,o.jsx)(y.default,{size:6,children:(0,o.jsx)(I.default,{sx:{fontWeight:"bold"},children:r.title})})}),(0,o.jsx)(S.default,{src:r.photo.src,alt:r.photo.alt,placeholder:"blur",blurDataURL:r.photo.blurDataURL,fill:!0,sizes:"".concat(Math.ceil(100/a),"vw"),style:{objectFit:"cover"}})]})})})},a=(0,x.Z)(),r=(0,Z.Z)(a.breakpoints.up("md"));return(0,o.jsx)(j.default,{maxWidth:!1,disableGutters:!0,ref:e,children:r?(0,o.jsxs)(O,{rowHeight:300,cols:3,children:[(0,o.jsx)(F,{rows:2,cols:1,children:(0,o.jsxs)(O,{rowHeight:300,cols:1,children:[i(0,1,3),i(1,1,3)]})}),i(2,2,3),(0,o.jsx)(F,{rows:2,cols:1,children:(0,o.jsxs)(O,{rowHeight:300,cols:1,children:[i(3,1,3),i(4,1,3)]})})]}):(0,o.jsxs)(O,{rowHeight:300,cols:1,children:[i(0,1,1),i(1,1,1),i(2,1,1),i(3,1,1),i(4,1,1)]})})}},61001:function(e,t,n){n.d(t,{bO:function(){return o.default}}),n(23739),n(75938);var o=n(3595)},19783:function(e,t,n){var o=n(4686);t.Z=o.Z},79647:function(e,t,n){n.d(t,{Z:function(){return c}});var o,i=n(2265),a=n(13815),r=n(77633),s=n(22739);let l={...o||(o=n.t(i,2))}.useSyncExternalStore;function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,s.Z)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:c=!1,matchMedia:u=o?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:m=!1}=(0,r.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),h="function"==typeof e?e(n):e;return(void 0!==l?function(e,t,n,o,a){let r=i.useCallback(()=>t,[t]),s=i.useMemo(()=>{if(a&&n)return()=>n(e).matches;if(null!==o){let{matches:t}=o(e);return()=>t}return r},[r,e,o,a,n]),[c,u]=i.useMemo(()=>{if(null===n)return[r,()=>()=>{}];let t=n(e);return[()=>t.matches,e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)})]},[r,n,e]);return l(u,c,s)}:function(e,t,n,o,r){let[s,l]=i.useState(()=>r&&n?n(e).matches:o?o(e).matches:t);return(0,a.Z)(()=>{if(!n)return;let t=n(e),o=()=>{l(t.matches)};return o(),t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}},[e,n]),s})(h=h.replace(/^@media( ?)/m,""),c,u,d,m)}}}]);
//# sourceMappingURL=748.263613845bd3fd35.js.map