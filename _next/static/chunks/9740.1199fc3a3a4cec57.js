try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="d2aa6562-a09b-4246-931a-823689f15aaa",e._sentryDebugIdIdentifier="sentry-dbid-d2aa6562-a09b-4246-931a-823689f15aaa")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9740],{99740:(e,r,t)=>{t.r(r),t.d(r,{default:()=>S});var a=t(95155),n=t(89142),i=t(12115),o=t(43463),s=t(7123),l=t(17280),u=t(83194),d=t(71987),b=t(98330),p=t(31628),f=t(12567),c=t(37410),m=t(81045),g=t(37157);function y(e){return(0,g.Ay)("MuiLinearProgress",e)}let h=(0,m.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),v=(0,d.i7)`
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
      `:null,w=e=>{let{classes:r,variant:t,color:a}=e,n={root:["root",`color${(0,c.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,c.A)(a)}`],bar1:["bar","bar1",`barColor${(0,c.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,c.A)(a)}`,"buffer"===t&&`color${(0,c.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.A)(n,y,r)},j=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,l.a)(e.palette[r].main,.62):(0,l.e$)(e.palette[r].main,.5),I=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,c.A)(t.color)}`],r[t.variant]]}})((0,b.A)(e=>{let{theme:r}=e;return{position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:j(r,t)}}}),{props:e=>{let{ownerState:r}=e;return"inherit"===r.color&&"buffer"!==r.variant},style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}})),P=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,c.A)(t.color)}`]]}})((0,b.A)(e=>{let{theme:r}=e;return{position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e,a=j(r,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]}}),$||{animation:`${k} 3s infinite linear`}),L=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${(0,c.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((0,b.A)(e=>{let{theme:r}=e;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:(r.vars||r).palette[t].main}}}),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:{width:"auto"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:C||{animation:`${v} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}})),B=(0,n.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${(0,c.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((0,b.A)(e=>{let{theme:r}=e;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[t].main}}}),{props:e=>{let{ownerState:r}=e;return"buffer"!==r.variant&&"inherit"!==r.color},style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:e=>{let{ownerState:r}=e;return"buffer"!==r.variant&&"inherit"===r.color},style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter((0,p.A)()).map(e=>{let[t]=e;return{props:{color:t,variant:"buffer"},style:{backgroundColor:j(r,t),transition:"transform .4s linear"}}}),{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:{width:"auto"}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant||"query"===r.variant},style:x||{animation:`${A} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}})),q=i.forwardRef(function(e,r){let t=(0,f.b)({props:e,name:"MuiLinearProgress"}),{className:n,color:i="primary",value:s,valueBuffer:l,variant:d="indeterminate",...b}=t,p={...t,color:i,variant:d},c=w(p),m=(0,u.I)(),g={},y={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==s){g["aria-valuenow"]=Math.round(s),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let e=s-100;m&&(e=-e),y.bar1.transform=`translateX(${e}%)`}if("buffer"===d&&void 0!==l){let e=(l||0)-100;m&&(e=-e),y.bar2.transform=`translateX(${e}%)`}return(0,a.jsxs)(I,{className:(0,o.A)(c.root,n),ownerState:p,role:"progressbar",...g,ref:r,...b,children:["buffer"===d?(0,a.jsx)(P,{className:c.dashed,ownerState:p}):null,(0,a.jsx)(L,{className:c.bar1,ownerState:p,style:y.bar1}),"determinate"===d?null:(0,a.jsx)(B,{className:c.bar2,ownerState:p,style:y.bar2})]})});var z=t(43655),D=t(9561),M=t(4819);let R=(0,n.Ay)(q)({height:10,borderRadius:5,[`&.${h.bar}`]:{borderRadius:5}}),S=()=>{let{ref:e,direction:r,offset:t}=(0,M.Qk)(),n=[{name:"Leadership",percentage:80},{name:"Teamwork",percentage:95},{name:"Communication",percentage:95},{name:"Attention to Detail",percentage:90}],o=1===r?Math.min(t+.2,1):1,s=-1===r?Math.max(t-.2,0)/.8:1,l=e=>{let r=`skill-${e.name.toLowerCase().replace(/\s/g,"-")}-progressbar-label`;return(0,a.jsxs)(z.default,{size:{xs:12,md:6},style:{opacity:s},children:[(0,a.jsx)(D.default,{id:r,sx:{fontWeight:"bold"},children:e.name}),(0,a.jsxs)(z.default,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(z.default,{size:{xs:8,sm:10},children:(0,a.jsx)(R,{"aria-labelledby":r,variant:"determinate","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage,value:e.percentage*o})}),(0,a.jsxs)(z.default,{size:{xs:4,sm:2},children:[e.percentage," %"]})]})]})};return(0,a.jsx)(z.default,{ref:e,container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[{name:"Programming",percentage:90},{name:"Time-series Analysis",percentage:80},{name:"Databases",percentage:85},{name:"Cloud Computing",percentage:80}].map((e,r)=>(0,a.jsxs)(i.Fragment,{children:[l(e),r<n.length?l(n[r]):null]},e.name))})}},4819:(e,r,t)=>{t.d(r,{Qk:()=>a.default}),t(33631),t(20220);var a=t(54418)}}]);
//# sourceMappingURL=9740.1199fc3a3a4cec57.js.map