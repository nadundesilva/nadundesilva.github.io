(this["webpackJsonpnadundesilva-website"]=this["webpackJsonpnadundesilva-website"]||[]).push([[0],{81:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(14),r=n.n(c),o=(n(81),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(null!==navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),void 0!==(null===t||void 0===t?void 0:t.onUpdate)&&t.onUpdate(e)):(console.log("Content is cached for offline use."),void 0!==(null===t||void 0===t?void 0:t.onSuccess)&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=function(e){null!==e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}),(function(){}))},d=n(115),m=n(146),j=n(117),u=n(92),b=n(2),g=Object(d.a)((function(e){return Object(m.a)({sectionTitle:{marginTop:e.spacing(2),marginBottom:e.spacing(3)},sectionTitleText:{fontWeight:"bold",paddingTop:e.spacing(5),paddingBottom:e.spacing(5)}})})),h=function(e){var t=g();return Object(b.jsxs)("div",{className:t.sectionTitle,children:[Object(b.jsx)(j.a,{}),Object(b.jsx)(u.a,{variant:"h5",align:"center",className:t.sectionTitleText,children:e.children}),Object(b.jsx)(j.a,{})]})},p=n(119),f=n(120),O=n(121),x=n(143),v=n(122),w=n(123),y=n(124),k=n(125),C=n(126),S=n(21),I=n(24),L=n(46),N=n(118),T=n(72),E=n(53),A=["dark","light"],D="COLOR_SCHEME",W=function(){var e;try{e=localStorage.getItem(D)}catch(t){e=null}return null!==e&&A.includes(e)?e:null},P=function(){var e=Object(N.a)("(prefers-color-scheme: dark)")?"dark":"light",t=W(),n=Object(i.useState)(null===t?e:t),a=Object(L.a)(n,2),c=a[0],r=a[1],o=function(){var e=W();null!==e&&r(e)};return Object(i.useEffect)((function(){return window.addEventListener("storage",o),function(){return window.removeEventListener("storage",o)}})),{theme:Object(i.useMemo)((function(){return Object(T.a)({palette:{type:c,primary:E.a,secondary:E.a},overrides:{MuiCssBaseline:{"@global":{"::-webkit-scrollbar":{width:"10px"},"::-webkit-scrollbar-track":{backgroundColor:"darkgrey"},"::-webkit-scrollbar-thumb":{backgroundColor:"#555555",boxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.3)"}}}}})}),[c]),colorScheme:c,setColorScheme:function(e){try{localStorage.setItem(D,e)}catch(t){}r(e)}}},B=Object(d.a)((function(e){return Object(m.a)({themeToggle:{marginLeft:e.spacing(5)},grow:{flexGrow:1},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},children:{overflowX:"hidden"}})})),F=function(e){var t=e.children,n=e.appBarItems,c=e.window,r=Object(p.a)({disableHysteresis:!0,threshold:0,target:void 0!==c?c():void 0}),o=B(),s=Object(i.useRef)(null),l=P(),d=l.theme,m=l.colorScheme,j=l.setColorScheme,g="dark"===m?"light":"dark",h=a.a.cloneElement(Object(b.jsx)(f.a,{children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)(u.a,{variant:"h5",children:"Nadun De Silva"}),Object(b.jsx)("div",{className:o.grow}),n,Object(b.jsx)(x.a,{title:"Change to ".concat(g," theme"),children:Object(b.jsx)(v.a,{className:o.themeToggle,size:"small",onClick:function(){return j(g)},children:Object(b.jsx)(S.a,{icon:"dark"===g?I.d:I.e,transform:"grow-4"})})})]})}),{elevation:r?4:0});return Object(b.jsxs)(w.a,{theme:d,children:[Object(b.jsx)(y.a,{}),h,Object(b.jsx)(O.a,{ref:s}),Object(b.jsx)("div",{className:o.children,children:t}),Object(b.jsx)(k.a,{in:r,children:Object(b.jsx)("div",{onClick:function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},role:"presentation",className:o.fab,children:Object(b.jsx)(C.a,{color:"primary",size:"small","aria-label":"scroll back to top",children:Object(b.jsx)(S.a,{icon:I.b})})})})]})},R=n(54),M=n(11),H=n(45),z=n(145),J=n(127),_=Object(d.a)((function(e){return Object(m.a)({root:{margin:e.spacing(3)}})})),G={"/certifications":"Certification"},U=function(){var e=Object(M.g)(),t=_(),n=e.pathname.split("/").filter((function(e){return e}));return Object(b.jsxs)(z.a,{"aria-label":"breadcrumb",className:t.root,separator:Object(b.jsx)(S.a,{icon:I.a,transform:"shrink-4"}),children:[Object(b.jsx)(J.a,{color:"inherit",href:"/",to:"/",component:H.b,children:"Home"}),n.map((function(e,t){var i=t===n.length-1,a="/".concat(n.slice(0,t+1).join("/"));return i?Object(b.jsx)(u.a,{color:"textPrimary",children:G[a]},a):Object(b.jsx)(J.a,{color:"inherit",href:a,to:a,component:H.b,children:G[a]},a)}))]})},V=Object(d.a)((function(e){var t,n=function(t){return{marginLeft:e.spacing(t),marginRight:e.spacing(t)}};return Object(m.a)({content:(t={marginBottom:e.spacing(5)},Object(R.a)(t,e.breakpoints.down("md"),n(0)),Object(R.a)(t,e.breakpoints.up("lg"),n(30)),Object(R.a)(t,e.breakpoints.up("xl"),n(60)),t)})})),Y=function(e){var t=e.children,n=V();return Object(b.jsxs)("div",{className:n.content,children:[Object(b.jsx)(U,{}),t]})};var q=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(0),n=Object(L.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(0),o=Object(L.a)(r,2),s=o[0],l=o[1],d=function(){if(null!==e.current){var t,n,i=e.current.getBoundingClientRect(),a=window.innerHeight;if(i.top>=a)t=1,n=0;else if(i.bottom<=0)t=-1,n=0;else if(i.top>=a/2){var r=document.documentElement.offsetHeight,o=(window.pageYOffset+1.5*a-r)/(a/2),s=2-i.top/(a/2);t=1,n=o>s?o:s}else i.bottom<=a/2?(t=-1,n=i.bottom/(a/2)):(t=0,n=1);c(t),l(n)}},m=function(){window.requestAnimationFrame(d)};return Object(i.useEffect)((function(){return window.requestAnimationFrame(d),window.addEventListener("scroll",m),function(){return window.removeEventListener("scroll",m)}})),{ref:e,direction:a,offset:Math.min(Math.max(s,0),1)}},K=F,X=n(68),$=n.p+"static/media/profile-photo.a8a9fc41.jpg",Q="Nadun De Silva",Z="Nadun De Silva is an aspiring Software Engineer and ML Enthusiast, interested in Machine Learning, Observability, Anomaly Detection &amp; Cloud Technologies.",ee="https://nadundesilva.github.io/",te="nadunrds",ne=function(){return Object(b.jsx)(X.a,{title:Q+" | An aspiring Software Engineer and ML Enthusiast",link:[{rel:"canonical",href:ee},{rel:"apple-touch-icon",href:$}],meta:[{name:"description",content:Z},{property:"og:title",content:Q},{property:"og:locale",content:"en_US"},{property:"og:description",content:Z},{property:"og:url",content:ee},{property:"og:image",content:$},{property:"og:image:height",content:"".concat(200)},{property:"og:image:width",content:"".concat(200)},{property:"twitter:card",content:"summary"},{property:"twitter:image",content:$},{property:"twitter:title",content:Q},{property:"twitter:site",content:"@".concat(te)}],script:[{type:"application/ld+json",innerHTML:JSON.stringify({"@type":"Person",image:{height:200,width:200,url:$,"@type":"imageObject"},url:ee,headline:Q,sameAs:["https://www.facebook.com/".concat("nadunrds"),"https://www.linkedin.com/in/".concat("nadundesilva"),"https://www.instagram.com/".concat("nadunrds"),"https://github.com/".concat("nadundesilva"),"https://twitter.com/".concat(te)],description:Z,name:Q,"@context":"https://schema.org"})}]})},ie=n(128),ae=n(147),ce=n(144),re=Object(d.a)((function(e){return Object(m.a)({descriptionSeparator:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},profilePhoto:{width:"100%",height:"auto"},profilePhotoPadding:{padding:e.spacing(2)},textIcon:{marginRight:e.spacing(1)},contactInfoItemHeader:{fontWeight:"bold"}})})),oe=function(){var e=re(),t=function(t){return Object(b.jsx)(ie.a,{item:!0,xs:t,children:Object(b.jsx)(ae.a,{alt:"Nadun De Silva",src:$,className:e.profilePhoto})})},n=function(t,n){return Object(b.jsxs)(ie.a,{item:!0,xs:12,md:4,children:[Object(b.jsxs)(u.a,{className:e.contactInfoItemHeader,children:[t,":"]}),Object(b.jsx)(u.a,{children:n})]})};return Object(b.jsxs)(ie.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[Object(b.jsx)(ce.a,{mdUp:!0,children:t(12)}),Object(b.jsxs)(ie.a,{item:!0,xs:12,md:8,children:[Object(b.jsx)(u.a,{align:"justify",children:"I am currently leading the Observability area of Choreo at WSO2. I have several years of working experience as a Software Engineer working on multiple Research & Development projects at WSO2. I love learning about new technologies and is particularly interested in Deep Learning."}),Object(b.jsx)(j.a,{className:e.descriptionSeparator}),Object(b.jsx)(u.a,{children:"Bachelor of Science in Engineering"}),Object(b.jsxs)(u.a,{display:"inline",color:"textSecondary",children:[Object(b.jsx)(S.a,{icon:I.c,className:e.textIcon}),"University of Moratuwa"]}),Object(b.jsx)(j.a,{className:e.descriptionSeparator}),Object(b.jsxs)(ie.a,{container:!0,spacing:3,justifyContent:"center",children:[n("Phone","+94 778 222 607"),n("Email","nadunrds@gmail.com"),n("Website","nadundesilva.github.io")]})]}),Object(b.jsx)(ce.a,{smDown:!0,children:t(4)})]})},se=n(71),le=n.n(se),de=n(148),me=n(129),je=n.p+"static/media/wso2-outstanding-contributor.67e66217.jpg",ue=n.p+"static/media/nasa-space-apps-2017.858edead.jpg",be=n.p+"static/media/hsbc-youth-enterprise-awards-2015.fe47a5a9.jpg",ge=n.p+"static/media/deans-list-2017.ce693655.jpg",he=n.p+"static/media/angel-hack-2016.a90988a8.jpg",pe=Object(d.a)((function(){return Object(m.a)({imageListItem:{height:"auto"},imageListItemImageContainer:{position:"relative","&:hover":{"& $imageListItemImageOverlay":{top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.6)",zIndex:1}}},imageListItemImageOverlay:{color:"#ffffff",position:"absolute",textAlign:"center"},imageListItemText:{fontWeight:"bold"}})})),fe=function(){var e=pe(),t=q(),n=t.ref,i=t.offset,a=[{title:"Global Finalist - Galactic Impact - NASA Space Apps Challenge 2017",imageLink:ue,animationOffset:.4},{title:"Placements in Dean\u2019s List",imageLink:ge,animationOffset:.1},{title:"WSO2 Sustained Outstanding Contribution Award",imageLink:je,animationOffset:.5},{title:"Finalist - British Council HSBC Youth Enterprise Awards 2015",imageLink:be,animationOffset:.3},{title:"Finalist - Angel Hack 2016",imageLink:he,animationOffset:.2}],c=function(t,n){var c=a[t],r=Math.max(i-c.animationOffset,0)/(1-c.animationOffset);return Object(b.jsxs)(de.a,{rows:n,cols:1,className:le()(e.imageListItem,e.imageListItemImageContainer),style:{transform:"scale(".concat(r,", ").concat(r,")"),opacity:r},children:[Object(b.jsx)(ie.a,{container:!0,justifyContent:"center",alignItems:"center",className:e.imageListItemImageOverlay,children:Object(b.jsx)(ie.a,{item:!0,xs:6,children:Object(b.jsx)(u.a,{className:e.imageListItemText,children:c.title})})}),Object(b.jsx)("img",{src:c.imageLink,alt:c.title})]})};return Object(b.jsxs)("div",{ref:n,children:[Object(b.jsx)(ce.a,{smDown:!0,children:Object(b.jsxs)(me.a,{rowHeight:300,cols:3,children:[Object(b.jsx)(de.a,{rows:2,cols:1,className:e.imageListItem,children:Object(b.jsxs)(me.a,{rowHeight:300,cols:1,children:[c(0,1),c(1,1)]})}),c(2,2),Object(b.jsx)(de.a,{rows:2,cols:1,className:e.imageListItem,children:Object(b.jsxs)(me.a,{rowHeight:300,cols:1,children:[c(3,1),c(4,1)]})})]})}),Object(b.jsx)(ce.a,{mdUp:!0,children:Object(b.jsxs)(me.a,{cols:1,children:[c(0,1),c(1,1),c(2,1),c(3,1),c(4,1)]})})]})},Oe=n(16),xe=n.p+"static/media/ballerina.4da6b50b.svg",ve=n.p+"static/media/ballerina-white.5a1399fd.svg",we=n.p+"static/media/cellery.a90e1603.svg",ye=n.p+"static/media/cellery-white.797e4d0b.svg",ke=n.p+"static/media/siddhi.29562d9e.svg",Ce=n.p+"static/media/siddhi-white.d4a1651e.svg",Se=n.p+"static/media/choreo.93114e74.svg",Ie=n.p+"static/media/choreo-white.6c69d815.svg",Le=Object(d.a)((function(e){return Object(m.a)({projectLogo:{display:"block",margin:"auto",padding:e.spacing(5),width:"100%"}})})),Ne=function(){var e=Le(),t=Object(Oe.a)(),n=q(),i=n.ref,a=n.offset,c=function(n,i,c){var r;return Object(b.jsx)(ie.a,{item:!0,xs:12,sm:4,md:3,style:{transform:"scale(".concat(a,", ").concat(a,")"),opacity:a},children:Object(b.jsx)("img",{alt:c,className:e.projectLogo,src:"light"===(null===t||void 0===t||null===(r=t.palette)||void 0===r?void 0:r.type)?n:i})})};return Object(b.jsxs)(ie.a,{ref:i,container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[c(Se,Ie,"Choreo"),c(xe,ve,"Ballerina"),c(we,ye,"Cellery"),c(ke,Ce,"Siddhi")]})},Te=n(130),Ee=n(131),Ae=n(132),De=n(133),We=n(149),Pe=n.p+"static/media/ckad.22557658.png",Be=n.p+"static/media/cka.84076589.png",Fe=n.p+"static/media/deep-learning-ai.1db98b8a.png",Re=Object(d.a)((function(e){var t=e.spacing(2);return Object(m.a)({certificationCardContainer:{padding:e.spacing(2)},certificationCard:{height:"100%"},certificationImage:{width:"50%",height:"auto",margin:"auto",padding:e.spacing(2)},certificationIssuer:{marginTop:e.spacing(2)},certificationType:{marginTop:t,marginBottom:t}})})),Me="Deeplearning.AI",He="Linux Foundation",ze=function(){var e=Re(),t=q(),n=t.ref,i=t.direction,a=t.offset,c=[{name:"Build Basic Generative Adversarial Networks (GANs)",type:"Course",link:"https://coursera.org/share/fed56feb8ba81177e6467779f22c0851",image:Fe,issuer:Me},{name:"Deep Learning",type:"Specialization",link:"https://coursera.org/share/8e5db53bfef4c4b27f79004022edad72",image:Fe,issuer:Me},{name:"AI For Everyone",type:"Course",link:"https://coursera.org/share/e8ae9a481ef41f070d6c7b00887e8b66",image:Fe,issuer:Me},{name:"Certificed Kubernetes Administrator",type:"Certification",link:"https://www.youracclaim.com/badges/8241114b-7435-460a-a08f-9d33304c1470?source=linked_in_profile",image:Be,issuer:He},{name:"Certificed Kubernetes Application Developer",type:"Certification",link:"https://www.youracclaim.com/badges/e9df4128-2017-41c3-9e7d-028e37176243/linked_in_profile",image:Pe,issuer:He}],r=20*(1-a);return Object(b.jsx)(ie.a,{ref:n,container:!0,justifyContent:"flex-start",alignItems:"stretch",children:c.map((function(t,n){return Object(b.jsx)(ie.a,{item:!0,xs:12,sm:6,md:4,xl:3,className:e.certificationCardContainer,children:Object(b.jsx)(Te.a,{onClick:(c=t.link,function(){window.open(c,"_blank")}),className:e.certificationCard,style:{transform:"translateY(".concat(1===i?r:-r,"vw) scale(").concat(a,")"),opacity:a},children:Object(b.jsxs)(Ee.a,{children:[Object(b.jsx)(Ae.a,{component:"img",alt:t.name,height:"140",image:t.image,title:t.name,classes:{root:e.certificationImage}}),Object(b.jsxs)(De.a,{children:[Object(b.jsx)(u.a,{variant:"h6",component:"h2",align:"center",children:t.name}),Object(b.jsx)(We.a,{label:t.type,color:"secondary",size:"small",className:e.certificationType}),Object(b.jsxs)(u.a,{color:"textSecondary",className:e.certificationIssuer,children:["Issued by ",t.issuer]})]})]})})},n);var c}))})},Je=n(74),_e=n(134),Ge=n(135),Ue=n(136),Ve=n(137),Ye=n(138),qe=n(139),Ke=n(140),Xe=Object(d.a)((function(e){return Object(m.a)({timeLineItemContent:{padding:e.spacing(2),marginBottom:e.spacing(5)},timeLineItemTitle:{fontWeight:"bold"},instituteIconRight:{marginLeft:e.spacing(.5)},instituteIconLeft:{marginRight:e.spacing(.5)}})})),$e=function(){var e=Xe(),t=q(),n=t.ref,i=t.offset,c=Object(Oe.a)(),r=Object(N.a)(c.breakpoints.down("xs")),o=Object(b.jsx)(S.a,{className:e.instituteIconLeft,icon:I.c}),s=20*(1-i);return Object(b.jsx)(_e.a,{ref:n,align:r?"left":"alternate",children:[{name:"Associate Technical Lead",timePeriod:"June 2021 to Now",description:"Lead Choreo Observability Team as well as other Teams in Choreo",institute:"WSO2, Colombo 03, Sri Lanka"},{name:"Senior Software Engineer",timePeriod:"July 2019 to June 2021",description:"Lead Choreo Observability Team in creating the initial PoC as well as the Platform",institute:"WSO2, Colombo 03, Sri Lanka"},{name:"Software Engineer",timePeriod:"Jan 2018 to July 2019",description:"Designed & developed several components in middle-ware & cloud projects",institute:"WSO2, Colombo 03, Sri Lanka"},{name:"Google Summer of Code Intern",timePeriod:"May 2017 to Sep 2017",description:"Designed and implemented a maven plugin for automatically generating documentation for Siddhi extensions using annotated data written in the java code.",institute:"WSO2, Colombo 03, Sri Lanka"},{name:"Software Engineering Trainee",timePeriod:"July 2016 to Dec 2019",description:"Implemented a Notebook prototype for the Data Analytics Server",institute:"WSO2, Colombo 03, Sri Lanka"}].map((function(t,n){var c=r||n%2===0;return Object(b.jsxs)(Ge.a,{children:[Object(b.jsx)(Ue.a,{children:Object(b.jsx)(u.a,{variant:"body2",color:"textSecondary",children:t.timePeriod})}),Object(b.jsxs)(Ve.a,{children:[Object(b.jsx)(Ye.a,{color:"primary"}),Object(b.jsx)(qe.a,{})]}),Object(b.jsx)(Ke.a,{children:Object(b.jsxs)(Je.a,{elevation:3,className:e.timeLineItemContent,style:{transform:"translateX(".concat(c?s:-s,"vw)"),opacity:i},children:[Object(b.jsx)(u.a,{variant:"body1",component:"h6",className:e.timeLineItemTitle,children:t.name}),Object(b.jsx)(u.a,{variant:"body2",color:"textSecondary",children:t.description}),Object(b.jsxs)(u.a,{variant:"body2",color:"textSecondary",children:[c&&Object(b.jsxs)(a.a.Fragment,{children:[o,"\xa0"]}),t.institute,!c&&Object(b.jsxs)(a.a.Fragment,{children:["\xa0",o]})]})]})})]},t.name)}))})},Qe=n(29),Ze=Object(d.a)((function(e){return Object(m.a)({profileSection:{padding:e.spacing(4),cursor:"pointer","&:hover":{background:"light"===e.palette.type?"#cccccc":"#444444"}},profileIcon:{margin:e.spacing(1)},profileText:{fontWeight:"bold"}})})),et=function(){var e=Ze(),t=q(),n=t.ref,i=t.offset,a=[{name:"LinkedIn",icon:Qe.d,link:"https://www.linkedin.com/in/nadundesilva"},{name:"GitHub",icon:Qe.b,link:"https://github.com/nadundesilva"},{name:"Medium",icon:Qe.e,link:"https://medium.com/@nadundesilva"},{name:"Facebook",icon:Qe.a,link:"https://www.facebook.com/nadunrds"},{name:"Instagram",icon:Qe.c,link:"https://www.instagram.com/nadunrds"},{name:"Twitter",icon:Qe.f,link:"https://twitter.com/nadunrds"}];return Object(b.jsx)(ie.a,{ref:n,container:!0,justifyContent:"center",alignItems:"center",children:a.map((function(t){return Object(b.jsx)(ie.a,{item:!0,xs:12,sm:4,onClick:(n=t.link,function(){window.open(n,"_blank")}),children:Object(b.jsxs)(ie.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",className:e.profileSection,style:{transform:"scale(".concat(i,", ").concat(i,")"),opacity:i},children:[Object(b.jsx)(ie.a,{item:!0,xs:6,children:Object(b.jsx)(S.a,{icon:t.icon,size:"3x",className:e.profileIcon})}),Object(b.jsx)(ie.a,{item:!0,xs:6,children:Object(b.jsx)(u.a,{className:e.profileText,children:t.name})})]})},t.name);var n}))})},tt=n(6),nt=n(141),it=Object(d.a)((function(){return Object(m.a)({skillName:{fontWeight:"bold"}})})),at=Object(tt.a)((function(){return Object(m.a)({root:{height:10,borderRadius:5},bar:{borderRadius:5}})}))(nt.a),ct=function(){var e=it(),t=q(),n=t.ref,i=t.direction,c=t.offset,r=[{name:"Leadership",percentage:80},{name:"Teamwork",percentage:95},{name:"Communication",percentage:95},{name:"Attention to Detail",percentage:90}],o=1===i?Math.min(c+.2,1):1,s=-1===i?Math.max(c-.2,0)/.8:1,l=function(t){return Object(b.jsxs)(ie.a,{item:!0,xs:12,md:6,style:{opacity:s},children:[Object(b.jsx)(u.a,{className:e.skillName,children:t.name}),Object(b.jsxs)(ie.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[Object(b.jsx)(ie.a,{item:!0,xs:8,sm:10,children:Object(b.jsx)(at,{variant:"determinate",value:t.percentage*o})}),Object(b.jsxs)(ie.a,{item:!0,xs:4,sm:2,children:[t.percentage," %"]})]})]})};return Object(b.jsx)(ie.a,{ref:n,container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[{name:"Programming",percentage:90},{name:"Time-series Analysis",percentage:80},{name:"Databases",percentage:85},{name:"Cloud Computing",percentage:80}].map((function(e,t){return Object(b.jsxs)(a.a.Fragment,{children:[l(e),t<r.length?l(r[t]):null]},e.name)}))})},rt=n(142),ot=n.p+"static/media/banner.1b97919d.jpg",st=Object(d.a)((function(e){var t;return Object(m.a)({bannerContainer:{position:"relative",width:"100%"},banner:{color:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"absolute",textAlign:"center",top:0,bottom:0,left:0,right:0,padding:"17vh"},bannerImage:{width:"100%",height:"calc(100vh - ".concat(null!==(t=e.mixins.toolbar.minHeight)&&void 0!==t?t:0,"px)"),objectFit:"cover"},introText:{fontWeight:"bold",fontSize:"6vh"},tagLineText:{fontSize:"3vh"}})})),lt=function(){var e=st(),t=Object(Oe.a)(),n=Object(N.a)(t.breakpoints.up("xl")),i=Object(N.a)(t.breakpoints.up("md")),a=n?"large":i?"medium":"small";return Object(b.jsxs)("div",{className:e.bannerContainer,children:[Object(b.jsxs)(ie.a,{container:!0,className:e.banner,children:[Object(b.jsxs)(ie.a,{item:!0,xs:12,children:[Object(b.jsx)(u.a,{variant:"h2",className:e.introText,children:"Hi, I am"}),Object(b.jsx)(u.a,{variant:"h2",className:e.introText,children:"Nadun"}),Object(b.jsx)(u.a,{variant:"h2",className:e.introText,children:"De Silva"})]}),Object(b.jsx)(ie.a,{item:!0,xs:12,children:Object(b.jsx)(u.a,{variant:"h5",className:e.tagLineText,children:"Software Engineer & Deep Learning Enthusiast"})}),Object(b.jsx)(ie.a,{item:!0,xs:12,children:Object(b.jsx)(rt.a,{variant:"contained",color:"primary",size:a,onClick:function(){var e=document.createElement("a");e.href="/nadundesilva-cv.pdf",e.setAttribute("download","nadundesilva-cv.pdf"),e.click(),e.remove()},children:"Download CV"})})]}),Object(b.jsx)("img",{src:ot,alt:"Nadun De Silva Website Banner",className:e.bannerImage})]})},dt=Object(d.a)((function(e){return Object(m.a)({section:{padding:e.spacing(1),margin:e.spacing(5)},sectionContent:{padding:e.spacing(3)}})})),mt=function(){var e=dt(),t=[{name:"Experience",ref:Object(i.useRef)(null),Component:$e},{name:"Achievements",ref:Object(i.useRef)(null),Component:fe},{name:"Skills",ref:Object(i.useRef)(null),Component:ct},{name:"Certifications",ref:Object(i.useRef)(null),Component:ze},{name:"Profiles",ref:Object(i.useRef)(null),Component:et},{name:"Contributed Projects",ref:Object(i.useRef)(null),Component:Ne}],n=function(t,n){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(h,{children:t}),Object(b.jsx)("div",{className:e.sectionContent,children:n})]})};return Object(b.jsxs)(K,{appBarItems:Object(b.jsx)(ce.a,{mdDown:!0,children:t.map((function(e){return Object(b.jsx)(rt.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:(t=e.ref,function(){var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})}),children:e.name},e.name);var t}))}),children:[Object(b.jsx)(lt,{}),Object(b.jsxs)(Y,{children:[Object(b.jsx)("div",{className:e.section,children:n("About Me",Object(b.jsx)(oe,{}))}),Object(b.jsx)(a.a.Fragment,{children:t.map((function(t){return Object(b.jsx)("div",{ref:t.ref,className:e.section,children:n(t.name,Object(b.jsx)(t.Component,{}))},t.name)}))})]})]})},jt=function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(ne,{}),Object(b.jsx)(H.a,{children:Object(b.jsxs)(M.d,{children:[Object(b.jsx)(M.b,{path:"/",exact:!0,children:Object(b.jsx)(mt,{})}),Object(b.jsx)(M.b,{children:Object(b.jsx)(M.a,{to:"/"})})]})})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(jt,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i,a=n.headers.get("content-type");404===n.status||null===(i=null===a||void 0===a?void 0:a.includes("javascript"))||void 0===i||i?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}),(function(){}))}),(function(){})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}),(function(){}))):s(t,e)}))}}(),l()}},[[90,1,2]]]);
//# sourceMappingURL=main.533e6290.chunk.js.map