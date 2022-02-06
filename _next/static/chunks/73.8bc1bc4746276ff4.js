"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{7073:function(e,r,a){a.r(r),a.d(r,{default:function(){return A}});var t=a(9499),n=a(1048),o=a(2793),i=a(7294),s=(a(5697),a(6010)),l=a(7192),c=a(917),u=a(1796),d=a(8216),m=a(2734),f=a(1496),b=a(3616),p=a(8979);function g(e){return(0,p.Z)("MuiLinearProgress",e)}var h=(0,a(6087).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),v=a(5893);const Z=["className","color","value","valueBuffer","variant"];let y,x,C,w,P,k,S=e=>e;const $=(0,c.F4)(y||(y=S`
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
`)),j=(0,c.F4)(x||(x=S`
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
`)),I=(0,c.F4)(C||(C=S`
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
`)),B=(e,r)=>"inherit"===r?"currentColor":"light"===e.palette.mode?(0,u.$n)(e.palette[r].main,.62):(0,u._j)(e.palette[r].main,.5),M=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${(0,d.Z)(a.color)}`],r[a.variant]]}})((({ownerState:e,theme:r})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:B(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),L=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${(0,d.Z)(a.color)}`]]}})((({ownerState:e,theme:r})=>{const a=B(r,e.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.iv)(w||(w=S`
    animation: ${0} 3s infinite linear;
  `),I)),q=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${(0,d.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar1Indeterminate,"determinate"===a.variant&&r.bar1Determinate,"buffer"===a.variant&&r.bar1Buffer]}})((({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":r.palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,c.iv)(P||(P=S`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),$))),N=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${(0,d.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&r.bar2Indeterminate,"buffer"===a.variant&&r.bar2Buffer]}})((({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":r.palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:B(r,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,c.iv)(k||(k=S`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),j)));var R=i.forwardRef((function(e,r){const a=(0,b.Z)({props:e,name:"MuiLinearProgress"}),{className:t,color:i="primary",value:c,valueBuffer:u,variant:f="indeterminate"}=a,p=(0,n.Z)(a,Z),h=(0,o.Z)({},a,{color:i,variant:f}),y=(e=>{const{classes:r,variant:a,color:t}=e,n={root:["root",`color${(0,d.Z)(t)}`,a],dashed:["dashed",`dashedColor${(0,d.Z)(t)}`],bar1:["bar",`barColor${(0,d.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,d.Z)(t)}`,"buffer"===a&&`color${(0,d.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,l.Z)(n,g,r)})(h),x=(0,m.Z)(),C={},w={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==c){C["aria-valuenow"]=Math.round(c),C["aria-valuemin"]=0,C["aria-valuemax"]=100;let e=c-100;"rtl"===x.direction&&(e=-e),w.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===f)if(void 0!==u){let e=(u||0)-100;"rtl"===x.direction&&(e=-e),w.bar2.transform=`translateX(${e}%)`}else 0;return(0,v.jsxs)(M,(0,o.Z)({className:(0,s.Z)(y.root,t),ownerState:h,role:"progressbar"},C,{ref:r},p,{children:["buffer"===f?(0,v.jsx)(L,{className:y.dashed,ownerState:h}):null,(0,v.jsx)(q,{className:y.bar1,ownerState:h,style:w.bar1}),"determinate"===f?null:(0,v.jsx)(N,{className:y.bar2,ownerState:h,style:w.bar2})]}))})),D=a(6886),z=a(5861),_=a(7074),F=(0,f.ZP)(R)((0,t.Z)({height:10,borderRadius:5},"&.".concat(h.bar),{borderRadius:5})),A=function(){var e=(0,_.bO)(),r=e.ref,a=e.direction,t=e.offset,n=[{name:"Leadership",percentage:80},{name:"Teamwork",percentage:95},{name:"Communication",percentage:95},{name:"Attention to Detail",percentage:90}],o=1===a?Math.min(t+.2,1):1,s=-1===a?Math.max(t-.2,0)/.8:1,l=function(e){var r="skill-".concat(e.name.toLowerCase().replace(/\s/g,"-"),"-progressbar-label");return(0,v.jsxs)(D.ZP,{item:!0,xs:12,md:6,style:{opacity:s},children:[(0,v.jsx)(z.Z,{id:r,sx:{fontWeight:"bold"},children:e.name}),(0,v.jsxs)(D.ZP,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[(0,v.jsx)(D.ZP,{item:!0,xs:8,sm:10,children:(0,v.jsx)(F,{"aria-labelledby":r,variant:"determinate","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage,value:e.percentage*o})}),(0,v.jsxs)(D.ZP,{item:!0,xs:4,sm:2,children:[e.percentage," %"]})]})]})};return(0,v.jsx)(D.ZP,{ref:r,container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[{name:"Programming",percentage:90},{name:"Time-series Analysis",percentage:80},{name:"Databases",percentage:85},{name:"Cloud Computing",percentage:80}].map((function(e,r){return(0,v.jsxs)(i.Fragment,{children:[l(e),r<n.length?l(n[r]):null]},e.name)}))})}}}]);
//# sourceMappingURL=73.8bc1bc4746276ff4.js.map