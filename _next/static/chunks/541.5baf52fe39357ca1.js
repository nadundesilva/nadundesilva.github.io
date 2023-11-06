(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[541],{11171:function(e,r,t){"use strict";var a=t(38173),n=t(57437);r.Z=(0,a.Z)((0,n.jsx)("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode")},73742:function(e,r,t){"use strict";var a=t(38173),n=t(57437);r.Z=(0,a.Z)((0,n.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp")},69115:function(e,r,t){"use strict";var a=t(38173),n=t(57437);r.Z=(0,a.Z)((0,n.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightMode")},68457:function(e,r,t){"use strict";var a=t(38173),n=t(57437);r.Z=(0,a.Z)((0,n.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu")},54755:function(e,r,t){"use strict";var a=t(20791),n=t(13428),i=t(2265),o=t(57042),s=t(95600),l=t(99538),c=t(89975),u=t(28702),d=t(41101),f=t(35843),m=t(87927),b=t(12120),g=t(57437);let p=["className","color","value","valueBuffer","variant"],_=e=>e,v,h,Z,C,x,y,P=(0,l.F4)(v||(v=_`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),j=(0,l.F4)(h||(h=_`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),M=(0,l.F4)(Z||(Z=_`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),useUtilityClasses=e=>{let{classes:r,variant:t,color:a}=e,n={root:["root",`color${(0,u.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(a)}`],bar1:["bar",`barColor${(0,u.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(a)}`,"buffer"===t&&`color${(0,u.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(n,b.E,r)},getColorShade=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[r].main,.62):(0,c._j)(e.palette[r].main,.5),k=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,u.Z)(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:getColorShade(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),z=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,u.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>{let t=getColorShade(r,e.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,l.iv)(C||(C=_`
    animation: ${0} 3s infinite linear;
  `),M)),w=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(x||(x=_`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),P)),$=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:getColorShade(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(y||(y=_`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),j)),L=i.forwardRef(function(e,r){let t=(0,m.Z)({props:e,name:"MuiLinearProgress"}),{className:i,color:s="primary",value:l,valueBuffer:c,variant:u="indeterminate"}=t,f=(0,a.Z)(t,p),b=(0,n.Z)({},t,{color:s,variant:u}),v=useUtilityClasses(b),h=(0,d.Z)(),Z={},C={bar1:{},bar2:{}};if(("determinate"===u||"buffer"===u)&&void 0!==l){Z["aria-valuenow"]=Math.round(l),Z["aria-valuemin"]=0,Z["aria-valuemax"]=100;let e=l-100;"rtl"===h.direction&&(e=-e),C.bar1.transform=`translateX(${e}%)`}if("buffer"===u&&void 0!==c){let e=(c||0)-100;"rtl"===h.direction&&(e=-e),C.bar2.transform=`translateX(${e}%)`}return(0,g.jsxs)(k,(0,n.Z)({className:(0,o.Z)(v.root,i),ownerState:b,role:"progressbar"},Z,{ref:r},f,{children:["buffer"===u?(0,g.jsx)(z,{className:v.dashed,ownerState:b}):null,(0,g.jsx)(w,{className:v.bar1,ownerState:b,style:C.bar1}),"determinate"===u?null:(0,g.jsx)($,{className:v.bar2,ownerState:b,style:C.bar2})]}))});r.Z=L},12120:function(e,r,t){"use strict";t.d(r,{E:function(){return getLinearProgressUtilityClass}});var a=t(26520),n=t(25702);function getLinearProgressUtilityClass(e){return(0,n.Z)("MuiLinearProgress",e)}let i=(0,a.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);r.Z=i},12866:function(e,r,t){"use strict";t.r(r);var a=t(86840),n=t(57437),i=t(35843),o=t(54755),s=t(12120),l=t(38939),c=t(85269),u=t(2265),d=t(97271),f=(0,i.ZP)(o.Z)((0,a._)({height:10,borderRadius:5},"&.".concat(s.Z.bar),{borderRadius:5}));r.default=function(){var e=(0,d.bO)(),r=e.ref,t=e.direction,a=e.offset,i=[{name:"Leadership",percentage:80},{name:"Teamwork",percentage:95},{name:"Communication",percentage:95},{name:"Attention to Detail",percentage:90}],o=1===t?Math.min(a+.2,1):1,s=-1===t?Math.max(a-.2,0)/.8:1,renderPercentage=function(e){var r="skill-".concat(e.name.toLowerCase().replace(/\s/g,"-"),"-progressbar-label");return(0,n.jsxs)(l.ZP,{item:!0,xs:12,md:6,style:{opacity:s},children:[(0,n.jsx)(c.Z,{id:r,sx:{fontWeight:"bold"},children:e.name}),(0,n.jsxs)(l.ZP,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(l.ZP,{item:!0,xs:8,sm:10,children:(0,n.jsx)(f,{"aria-labelledby":r,variant:"determinate","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage,value:e.percentage*o})}),(0,n.jsxs)(l.ZP,{item:!0,xs:4,sm:2,children:[e.percentage," %"]})]})]})};return(0,n.jsx)(l.ZP,{ref:r,container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[{name:"Programming",percentage:90},{name:"Time-series Analysis",percentage:80},{name:"Databases",percentage:85},{name:"Cloud Computing",percentage:80}].map(function(e,r){return(0,n.jsxs)(u.Fragment,{children:[renderPercentage(e),r<i.length?renderPercentage(i[r]):null]},e.name)})})}},97271:function(e,r,t){"use strict";t.d(r,{bO:function(){return a.default}}),t(43),t(69118);var a=t(21774)},36304:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});var a=t(21024)._(t(2265)).default.createContext(null)},61396:function(e,r,t){e.exports=t(68326)},24033:function(e,r,t){e.exports=t(50094)}}]);
//# sourceMappingURL=541.5baf52fe39357ca1.js.map