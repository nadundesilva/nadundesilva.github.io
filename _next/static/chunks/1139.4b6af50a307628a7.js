try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="1b68316c-6cf6-4af7-ade2-7fe961aaf7f4",e._sentryDebugIdIdentifier="sentry-dbid-1b68316c-6cf6-4af7-ade2-7fe961aaf7f4")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1139],{63308:(e,r,t)=>{t.d(r,{Qk:()=>a.default}),t(68326),t(3291);var a=t(34621)},81139:(e,r,t)=>{t.r(r),t.d(r,{default:()=>M});var a=t(95155),n=t(75955),i=t(12115),o=t(52596),s=t(17472),l=t(32299),u=t(13380),d=t(40680),f=t(98963),p=t(10186),b=t(13209),c=t(55170),m=t(90870);function g(e){return(0,m.Ay)("MuiLinearProgress",e)}let y=(0,c.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),h=(0,u.i7)`
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
`,v="string"!=typeof h?(0,u.AH)`
        animation: ${h} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,C=(0,u.i7)`
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
`,A="string"!=typeof C?(0,u.AH)`
        animation: ${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,x=(0,u.i7)`
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
`,k="string"!=typeof x?(0,u.AH)`
        animation: ${x} 3s infinite linear;
      `:null,w=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.5),$=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,b.A)(t.color)}`],r[t.variant]]}})((0,d.A)(e=>{let{theme:r}=e;return{position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter((0,f.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:w(r,t)}}}),{props:e=>{let{ownerState:r}=e;return"inherit"===r.color&&"buffer"!==r.variant},style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}})),j=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,b.A)(t.color)}`]]}})((0,d.A)(e=>{let{theme:r}=e;return{position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter((0,f.A)()).map(e=>{let[t]=e,a=w(r,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]}}),k||{animation:`${x} 3s infinite linear`}),I=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${(0,b.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((0,d.A)(e=>{let{theme:r}=e;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter((0,f.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:(r.vars||r).palette[t].main}}}),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:{width:"auto"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:v||{animation:`${h} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}})),P=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${(0,b.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((0,d.A)(e=>{let{theme:r}=e;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter((0,f.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[t].main}}}),{props:e=>{let{ownerState:r}=e;return"buffer"!==r.variant&&"inherit"!==r.color},style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:e=>{let{ownerState:r}=e;return"buffer"!==r.variant&&"inherit"===r.color},style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter((0,f.A)()).map(e=>{let[t]=e;return{props:{color:t,variant:"buffer"},style:{backgroundColor:w(r,t),transition:"transform .4s linear"}}}),{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:{width:"auto"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:A||{animation:`${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}})),L=i.forwardRef(function(e,r){let t=(0,p.b)({props:e,name:"MuiLinearProgress"}),{className:n,color:i="primary",value:u,valueBuffer:d,variant:f="indeterminate",...c}=t,m={...t,color:i,variant:f},y=(e=>{let{classes:r,variant:t,color:a}=e,n={root:["root",`color${(0,b.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,b.A)(a)}`],bar1:["bar","bar1",`barColor${(0,b.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,b.A)(a)}`,"buffer"===t&&`color${(0,b.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.A)(n,g,r)})(m),h=(0,l.I)(),v={},C={},A={};if(("determinate"===f||"buffer"===f)&&void 0!==u){v["aria-valuenow"]=Math.round(u),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let e=u-100;h&&(e=-e),C.transform=`translateX(${e}%)`}if("buffer"===f&&void 0!==d){let e=(d||0)-100;h&&(e=-e),A.transform=`translateX(${e}%)`}return(0,a.jsxs)($,{className:(0,o.A)(y.root,n),ownerState:m,role:"progressbar",...v,ref:r,...c,children:["buffer"===f?(0,a.jsx)(j,{className:y.dashed,ownerState:m}):null,(0,a.jsx)(I,{className:y.bar1,ownerState:m,style:C}),"determinate"===f?null:(0,a.jsx)(P,{className:y.bar2,ownerState:m,style:A})]})});var B=t(72110),q=t(700),z=t(63308);let D=(0,n.Ay)(L)({height:10,borderRadius:5,[`&.${y.bar}`]:{borderRadius:5}}),M=()=>{let{ref:e,direction:r,offset:t}=(0,z.Qk)(),n=[{name:"Leadership",percentage:80},{name:"Teamwork",percentage:95},{name:"Communication",percentage:95},{name:"Attention to Detail",percentage:90}],o=1===r?Math.min(t+.2,1):1,s=-1===r?Math.max(t-.2,0)/.8:1,l=e=>{let r=`skill-${e.name.toLowerCase().replace(/\s/g,"-")}-progressbar-label`;return(0,a.jsxs)(B.default,{size:{xs:12,md:6},style:{opacity:s},children:[(0,a.jsx)(q.default,{id:r,sx:{fontWeight:"bold"},children:e.name}),(0,a.jsxs)(B.default,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(B.default,{size:{xs:8,sm:10},children:(0,a.jsx)(D,{"aria-labelledby":r,variant:"determinate","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage,value:e.percentage*o})}),(0,a.jsxs)(B.default,{size:{xs:4,sm:2},children:[e.percentage," %"]})]})]})};return(0,a.jsx)(B.default,{ref:e,container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[{name:"Programming",percentage:90},{name:"Time-series Analysis",percentage:80},{name:"Databases",percentage:85},{name:"Cloud Computing",percentage:80}].map((e,r)=>(0,a.jsxs)(i.Fragment,{children:[l(e),r<n.length?l(n[r]):null]},e.name))})}}}]);
//# sourceMappingURL=1139.4b6af50a307628a7.js.map