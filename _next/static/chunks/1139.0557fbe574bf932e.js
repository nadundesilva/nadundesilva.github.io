try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="35b40713-5db8-4d1b-9fce-02b84ebb583b",e._sentryDebugIdIdentifier="sentry-dbid-35b40713-5db8-4d1b-9fce-02b84ebb583b")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1139],{63308:(e,r,t)=>{t.d(r,{Qk:()=>a.default}),t(68326),t(3291);var a=t(34621)},81139:(e,r,t)=>{t.r(r),t.d(r,{default:()=>R});var a=t(95155),n=t(75955),i=t(12115),o=t(52596),s=t(17472),l=t(14391),u=t(32299),d=t(13380),b=t(40680),p=t(98963),f=t(10186),c=t(13209),m=t(55170),g=t(90870);function y(e){return(0,g.Ay)("MuiLinearProgress",e)}let h=(0,m.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),v=(0,d.i7)`
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
`,C="string"!=typeof v?(0,d.AH)`
        animation: ${v} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,A=(0,d.i7)`
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
`,x="string"!=typeof A?(0,d.AH)`
        animation: ${A} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,k=(0,d.i7)`
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
`,$="string"!=typeof k?(0,d.AH)`
        animation: ${k} 3s infinite linear;
      `:null,w=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,l.a)(e.palette[r].main,.62):(0,l.e$)(e.palette[r].main,.5),j=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,c.A)(t.color)}`],r[t.variant]]}})((0,b.A)(e=>{let{theme:r}=e;return{position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:w(r,t)}}}),{props:e=>{let{ownerState:r}=e;return"inherit"===r.color&&"buffer"!==r.variant},style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}})),I=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,c.A)(t.color)}`]]}})((0,b.A)(e=>{let{theme:r}=e;return{position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e,a=w(r,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]}}),$||{animation:`${k} 3s infinite linear`}),P=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${(0,c.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((0,b.A)(e=>{let{theme:r}=e;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:(r.vars||r).palette[t].main}}}),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:{width:"auto"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:C||{animation:`${v} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}})),L=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${(0,c.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((0,b.A)(e=>{let{theme:r}=e;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[t].main}}}),{props:e=>{let{ownerState:r}=e;return"buffer"!==r.variant&&"inherit"!==r.color},style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:e=>{let{ownerState:r}=e;return"buffer"!==r.variant&&"inherit"===r.color},style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t,variant:"buffer"},style:{backgroundColor:w(r,t),transition:"transform .4s linear"}}}),{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:{width:"auto"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:x||{animation:`${A} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}})),B=i.forwardRef(function(e,r){let t=(0,f.b)({props:e,name:"MuiLinearProgress"}),{className:n,color:i="primary",value:l,valueBuffer:d,variant:b="indeterminate",...p}=t,m={...t,color:i,variant:b},g=(e=>{let{classes:r,variant:t,color:a}=e,n={root:["root",`color${(0,c.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,c.A)(a)}`],bar1:["bar","bar1",`barColor${(0,c.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,c.A)(a)}`,"buffer"===t&&`color${(0,c.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.A)(n,y,r)})(m),h=(0,u.I)(),v={},C={},A={};if(("determinate"===b||"buffer"===b)&&void 0!==l){v["aria-valuenow"]=Math.round(l),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let e=l-100;h&&(e=-e),C.transform=`translateX(${e}%)`}if("buffer"===b&&void 0!==d){let e=(d||0)-100;h&&(e=-e),A.transform=`translateX(${e}%)`}return(0,a.jsxs)(j,{className:(0,o.A)(g.root,n),ownerState:m,role:"progressbar",...v,ref:r,...p,children:["buffer"===b?(0,a.jsx)(I,{className:g.dashed,ownerState:m}):null,(0,a.jsx)(P,{className:g.bar1,ownerState:m,style:C}),"determinate"===b?null:(0,a.jsx)(L,{className:g.bar2,ownerState:m,style:A})]})});var q=t(72110),z=t(700),D=t(63308);let M=(0,n.Ay)(B)({height:10,borderRadius:5,[`&.${h.bar}`]:{borderRadius:5}}),R=()=>{let{ref:e,direction:r,offset:t}=(0,D.Qk)(),n=[{name:"Leadership",percentage:80},{name:"Teamwork",percentage:95},{name:"Communication",percentage:95},{name:"Attention to Detail",percentage:90}],o=1===r?Math.min(t+.2,1):1,s=-1===r?Math.max(t-.2,0)/.8:1,l=e=>{let r=`skill-${e.name.toLowerCase().replace(/\s/g,"-")}-progressbar-label`;return(0,a.jsxs)(q.default,{size:{xs:12,md:6},style:{opacity:s},children:[(0,a.jsx)(z.default,{id:r,sx:{fontWeight:"bold"},children:e.name}),(0,a.jsxs)(q.default,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(q.default,{size:{xs:8,sm:10},children:(0,a.jsx)(M,{"aria-labelledby":r,variant:"determinate","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage,value:e.percentage*o})}),(0,a.jsxs)(q.default,{size:{xs:4,sm:2},children:[e.percentage," %"]})]})]})};return(0,a.jsx)(q.default,{ref:e,container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[{name:"Programming",percentage:90},{name:"Time-series Analysis",percentage:80},{name:"Databases",percentage:85},{name:"Cloud Computing",percentage:80}].map((e,r)=>(0,a.jsxs)(i.Fragment,{children:[l(e),r<n.length?l(n[r]):null]},e.name))})}}}]);
//# sourceMappingURL=1139.0557fbe574bf932e.js.map