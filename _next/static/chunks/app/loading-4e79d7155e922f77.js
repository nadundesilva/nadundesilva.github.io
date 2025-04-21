try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="5b22888b-57a8-4f5b-a88c-6c4e6d566125",e._sentryDebugIdIdentifier="sentry-dbid-5b22888b-57a8-4f5b-a88c-6c4e6d566125")}catch(e){}(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4209],{74215:(e,r,t)=>{Promise.resolve().then(t.bind(t,52269)),Promise.resolve().then(t.bind(t,89915))},89915:(e,r,t)=>{"use strict";t.d(r,{default:()=>D});var i=t(12115),s=t(52596),a=t(15386),n=t(13380),o=t(35881),l=t(74409),c=t(82700),d=t(39571),f=t(13973),u=t(57692),p=t(81112);function y(e){return(0,p.Ay)("MuiCircularProgress",e)}(0,u.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=t(95155);let m=(0,n.i7)`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=(0,n.i7)`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,b="string"!=typeof m?(0,n.AH)`
        animation: ${m} 1.4s linear infinite;
      `:null,g="string"!=typeof v?(0,n.AH)`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,k=e=>{let{classes:r,variant:t,color:i,disableShrink:s}=e,n={root:["root",t,`color${(0,d.A)(i)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,s&&"circleDisableShrink"]};return(0,a.A)(n,y,r)},x=(0,o.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,d.A)(t.color)}`]]}})((0,l.A)(e=>{let{theme:r}=e;return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:b||{animation:`${m} 1.4s linear infinite`}},...Object.entries(r.palette).filter((0,f.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{color:(r.vars||r).palette[t].main}}})]}})),A=(0,o.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),w=(0,o.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,l.A)(e=>{let{theme:r}=e;return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink},style:g||{animation:`${v} 1.4s ease-in-out infinite`}}]}})),D=i.forwardRef(function(e,r){let t=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:i,color:a="primary",disableShrink:n=!1,size:o=40,style:l,thickness:d=3.6,value:f=0,variant:u="indeterminate",...p}=t,y={...t,color:a,disableShrink:n,size:o,thickness:d,value:f,variant:u},m=k(y),v={},b={},g={};if("determinate"===u){let e=2*Math.PI*((44-d)/2);v.strokeDasharray=e.toFixed(3),g["aria-valuenow"]=Math.round(f),v.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,h.jsx)(x,{className:(0,s.A)(m.root,i),style:{width:o,height:o,...b,...l},ownerState:y,ref:r,role:"progressbar",...g,...p,children:(0,h.jsx)(A,{className:m.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(w,{className:m.circle,style:v,ownerState:y,cx:44,cy:44,r:(44-d)/2,fill:"none",strokeWidth:d})})})})}},e=>{var r=r=>e(e.s=r);e.O(0,[4386,4850,8441,9483,7358],()=>r(74215)),_N_E=e.O()}]);
//# sourceMappingURL=loading-4e79d7155e922f77.js.map