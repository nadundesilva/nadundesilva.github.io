try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f51bf67e-842b-4874-af2f-6ce62e1216b2",e._sentryDebugIdIdentifier="sentry-dbid-f51bf67e-842b-4874-af2f-6ce62e1216b2")}catch(e){}(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4209],{9651:(e,r,t)=>{Promise.resolve().then(t.bind(t,54581)),Promise.resolve().then(t.bind(t,14426))},14426:(e,r,t)=>{"use strict";t.d(r,{default:()=>D});var i=t(12115),s=t(52596),a=t(17472),n=t(13380),o=t(75955),l=t(40680),c=t(10186),d=t(13209),f=t(98963),u=t(55170),p=t(90870);function y(e){return(0,p.Ay)("MuiCircularProgress",e)}(0,u.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=t(95155);let m=(0,n.i7)`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,b=(0,n.i7)`
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
`,g="string"!=typeof m?(0,n.AH)`
        animation: ${m} 1.4s linear infinite;
      `:null,v="string"!=typeof b?(0,n.AH)`
        animation: ${b} 1.4s ease-in-out infinite;
      `:null,k=e=>{let{classes:r,variant:t,color:i,disableShrink:s}=e,n={root:["root",t,`color${(0,d.A)(i)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,s&&"circleDisableShrink"]};return(0,a.A)(n,y,r)},x=(0,o.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,d.A)(t.color)}`]]}})((0,l.A)(e=>{let{theme:r}=e;return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:g||{animation:`${m} 1.4s linear infinite`}},...Object.entries(r.palette).filter((0,f.A)()).map(e=>{let[t]=e;return{props:{color:t},style:{color:(r.vars||r).palette[t].main}}})]}})),A=(0,o.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),w=(0,o.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,l.A)(e=>{let{theme:r}=e;return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink},style:v||{animation:`${b} 1.4s ease-in-out infinite`}}]}})),D=i.forwardRef(function(e,r){let t=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:i,color:a="primary",disableShrink:n=!1,size:o=40,style:l,thickness:d=3.6,value:f=0,variant:u="indeterminate",...p}=t,y={...t,color:a,disableShrink:n,size:o,thickness:d,value:f,variant:u},m=k(y),b={},g={},v={};if("determinate"===u){let e=2*Math.PI*((44-d)/2);b.strokeDasharray=e.toFixed(3),v["aria-valuenow"]=Math.round(f),b.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,g.transform="rotate(-90deg)"}return(0,h.jsx)(x,{className:(0,s.A)(m.root,i),style:{width:o,height:o,...g,...l},ownerState:y,ref:r,role:"progressbar",...v,...p,children:(0,h.jsx)(A,{className:m.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(w,{className:m.circle,style:b,ownerState:y,cx:44,cy:44,r:(44-d)/2,fill:"none",strokeWidth:d})})})})}},e=>{var r=r=>e(e.s=r);e.O(0,[3355,4850,8441,3595,7358],()=>r(9651)),_N_E=e.O()}]);
//# sourceMappingURL=loading-d99c7a8606a1cbc4.js.map