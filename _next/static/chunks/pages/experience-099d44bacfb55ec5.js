(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{5400:function(e,t,n){"use strict";n.d(t,{TR:function(){return s},nv:function(){return h},Pz:function(){return d},$0:function(){return c},OT:function(){return m},pP:function(){return w}});var r=n(7357),i=n(2734),o=n(5675),a=n(5893),s=function(e){var t=e.logo,n=e.height,s=(0,i.Z)();return(0,a.jsx)(r.Z,{sx:{position:"relative",height:null!==n&&void 0!==n?n:"3em",my:1},children:(0,a.jsx)(o.default,{alt:t.alt,layout:"fill",objectFit:"scale-down",objectPosition:"left top",src:t.src(s.palette.mode)})})},l=n(5861),h=function(e){var t=e.children;return(0,a.jsx)(l.Z,{variant:"body1",gutterBottom:!0,sx:{m:0,pt:2,textAlign:"justify"},children:t})},d=(n(7294),function(e){var t=e.photo,n=e.float;return(0,a.jsx)(r.Z,{sx:{position:"relative",float:n,height:"auto",width:{xs:"100%",md:"20vw"},my:2,ml:"left"===n?0:2,mr:"right"===n?0:2},children:(0,a.jsx)(o.default,{layout:"intrinsic",width:t.width,height:t.height,src:t.src,alt:t.alt,placeholder:"blur",blurDataURL:t.blurDataURL})})}),c=(0,n(1496).ZP)(r.Z)((function(){return{margin:0,paddingTop:5,clear:"both"}})),m=function(e){var t=e.children;return(0,a.jsx)(l.Z,{variant:"h6",component:"h2",sx:{pt:2},children:t})},u=n(1436),f=n(2814),p=n(7036),w=function(e){var t=e.children;return(0,a.jsxs)(l.Z,{variant:"body1",sx:{pt:1,pb:1,color:p.Z[700]},children:[(0,a.jsx)(f.G,{icon:u.IV4}),"\xa0",t]})}},1441:function(e,t,n){"use strict";n.d(t,{bU:function(){return S},ZP:function(){return O},bO:function(){return Z}});var r=n(1436),i=n(2814),o=n(8298),a=n(2293),s=n(155),l=n(5861),h=n(7357),d=n(8577),c=n(3946),m=n(7948),u=n(6585),f=n(8032),p=n(7294),w=n(8106),g=n(5893),v=function(e){var t=e.children,n=e.appBarItems,v=e.window,x=(0,o.Z)({disableHysteresis:!0,threshold:0,target:void 0!==v?v():void 0}),b=(0,p.useRef)(null),j=(0,w._)(),y=j.colorScheme,k=j.setColorScheme,I="dark"===y?"light":"dark",S=p.cloneElement((0,g.jsx)(a.Z,{children:(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(l.Z,{variant:"h5",component:"h1",children:"Nadun De Silva"}),(0,g.jsx)(h.Z,{sx:{flexGrow:1}}),n,(0,g.jsx)(d.Z,{title:"Change to ".concat(I," theme"),children:(0,g.jsx)(c.Z,{sx:{marginLeft:5},size:"small",onClick:function(){return k(I)},children:(0,g.jsx)(i.G,{icon:"dark"===I?r.DBF:r.enB,transform:"grow-4"})})})]})}),{elevation:x?4:0});return(0,g.jsxs)(p.Fragment,{children:[S,(0,g.jsx)(s.Z,{ref:b}),(0,g.jsx)(m.Z,{maxWidth:!1,disableGutters:!0,sx:{overflowX:"hidden"},children:t}),(0,g.jsx)(m.Z,{maxWidth:!1,sx:{textAlign:"center",paddingTop:10,paddingBottom:5,color:"#666666"},children:"\xa9 2021 Nadun De Silva"}),(0,g.jsx)(u.Z,{in:x,children:(0,g.jsx)(h.Z,{onClick:function(){var e;null===(e=b.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},role:"presentation",sx:{position:"fixed",bottom:10,right:10},children:(0,g.jsx)(f.Z,{color:"primary",size:"small","aria-label":"scroll back to top",children:(0,g.jsx)(i.G,{icon:r.mTx})})})})]})},x=n(2963),b=n(122),j=n(1664),y=n(1163),k={"/experience":"Experience","/achievements":"Achievements"},I=function(){var e=(0,y.useRouter)().pathname.split("/").filter((function(e){return e}));return(0,g.jsxs)(x.Z,{"aria-label":"breadcrumb",sx:{margin:3},separator:(0,g.jsx)(i.G,{icon:r._tD,transform:"shrink-4"}),children:[0===e.length?(0,g.jsx)(l.Z,{color:"textPrimary",children:"Home"}):(0,g.jsx)(j.default,{passHref:!0,href:"/",children:(0,g.jsx)(b.Z,{color:"inherit",children:"Home"})}),e.map((function(t,n){var r=n===e.length-1,i="/".concat(e.slice(0,n+1).join("/"));return r?(0,g.jsx)(l.Z,{color:"textPrimary",children:k[i]},i):(0,g.jsx)(j.default,{passHref:!0,href:i,children:(0,g.jsx)(b.Z,{color:"inherit",children:k[i]})},i)}))]})},S=function(e){var t=e.children;return(0,g.jsxs)(m.Z,{maxWidth:!1,disableGutters:!0,sx:{marginBottom:5,px:{xs:0,lg:20,xl:40}},children:[(0,g.jsx)(I,{}),(0,g.jsx)(m.Z,{maxWidth:!1,children:t})]})};var Z=function(){var e=(0,p.useRef)(null),t=(0,p.useState)(0),n=t[0],r=t[1],i=(0,p.useState)(0),o=i[0],a=i[1],s=function(){if(null!==e.current){var t,n,i=e.current.getBoundingClientRect(),o=window.innerHeight;if(i.top>=o)t=1,n=0;else if(i.bottom<=0)t=-1,n=0;else if(i.top>o/2){var s=document.documentElement.offsetHeight,l=(window.pageYOffset+1.5*o-s)/(o/2),h=2-i.top/(o/2);t=1,n=l>h?l:h}else i.bottom<o/2?(t=-1,n=i.bottom/(o/2)):(t=0,n=1);r(t),a(n)}else r(0),a(0)},l=function(){window.requestAnimationFrame(s)};return(0,p.useEffect)((function(){return window.requestAnimationFrame(s),window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}})),{ref:e,direction:n,offset:Math.min(Math.max(o,0),1)}},O=v},6512:function(e,t,n){"use strict";n.r(t);var r=n(122),i=n(7948),o=n(9008),a=(n(7294),n(5400)),s=n(1441),l=n(5622),h=n(5893);t.default=function(){var e=(0,h.jsx)(r.Z,{target:"_blank",href:"https://siddhi.io/",children:"Siddhi"}),t=(0,h.jsx)(r.Z,{target:"_blank",href:"https://www.mkdocs.org/",children:"MkDocs"}),n=(0,h.jsx)(r.Z,{target:"_blank",href:"https://wso2.com/identity-server/",children:"WSO2 Identity Server"}),d=(0,h.jsx)(r.Z,{target:"_blank",href:"https://reactjs.org/",children:"React"}),c=(0,h.jsx)(r.Z,{target:"_blank",href:"https://openwhisk.apache.org/",children:"Apache OpenWhisk"}),m=(0,h.jsx)(r.Z,{target:"_blank",href:"https://knative.dev/docs/",children:"Knative"}),u=(0,h.jsx)(r.Z,{target:"_blank",href:"https://cellery.io/",children:"Cellery"}),f=(0,h.jsx)(r.Z,{target:"_blank",href:"https://ballerina.io/",children:"Ballerina"}),p=(0,h.jsx)(r.Z,{target:"_blank",href:"https://wso2.com/choreo/",children:"Choreo"}),w=(0,h.jsx)(a.TR,{logo:l.xR.WSO2,height:"2.5em"}),g=(0,h.jsx)(a.TR,{logo:l.xR.GoogleSummerOfCode});return(0,h.jsxs)(i.Z,{maxWidth:!1,disableGutters:!0,children:[(0,h.jsxs)(o.default,{children:[(0,h.jsx)("title",{children:"Experience of Nadun De Silva"}),(0,h.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),(0,h.jsx)(s.ZP,{children:(0,h.jsxs)(s.bU,{children:[(0,h.jsxs)(a.$0,{children:[(0,h.jsx)(a.OT,{children:"Associate Technical Lead"}),(0,h.jsx)(a.pP,{children:"June 2021 to Now"}),w,(0,h.jsxs)(a.nv,{children:["I led the Observability team in technical aspects and it was considered one of the most stable areas in the",p," platform during that time. Moreover, I guided multiple engineers and helped them improve for the better as well. Apart from that I also contributed to other areas such as growth hacking, UX, SRE and other aspects of the ",p," platform."]}),(0,h.jsx)(a.nv,{children:"Apart from the Observability Area, I also led the effort on the Choreo Online VS Code Editor as well as implemented a significant portion of it. This feature also was finished on time and in good quality as well. This involved implementing a secure environment for users to edit their code."}),(0,h.jsx)(a.nv,{children:"Throughout all this work, I always made myself available for other team members who approached me seeking for technical guidance or any clarifications about the platform. I always thought out of the box and contributed to many other technical and architectural decisions of the platform as well. Through all these, I still worked at the level of other engineers and kept up with the technical aspects as well."})]}),(0,h.jsxs)(a.$0,{children:[(0,h.jsx)(a.OT,{children:"Senior Software Engineer"}),(0,h.jsx)(a.pP,{children:"July 2019 to June 2021"}),w,(0,h.jsxs)(a.nv,{children:["I completely owned the Observability area and mentored a few interns as well as other junior engineers. I have also implemented parts of the CLI, VS Code Extension and other tools of ",u," which involved different new concepts and technologies which I learnt within short periods of time. Later when project ",p," was started, ",u," was adopted by the initial version of it as well, until later the project ",p," was rebooted and project ",u," was discontinued."]}),(0,h.jsxs)(a.nv,{children:["When the ",p," project initially started (rebooted from the very first implementation), I was again selected to the small team of engineers who were tasked to make it a reality. Two more engineers were also added to the ",p," Observability subteam and I was tasked with leading the implementation of ",p," Observability. I designed the core architecture of ",p," Observability and also worked on improving ",f," Observability to support ",p," Observability better. While generally this level of responsibilities are not given to a Senior Software Engineer, I was trusted with it and I handled these responsibilities quite well."]}),(0,h.jsxs)(a.nv,{children:["The source code of ",f," Observability was not actively maintained when I took over as the lead of the ",p," Observability Team. Therefore, I took over the responsibility of going through the code base and revamping the Observability instrumentation as well. The ",f," compiler level instrumentation was previously performed at the lowest level of the compiler while writing the Java bytecode into the Java class files. However, this approach had its limitations as these instructions were not aware of scheduler level operations at this level. This resulted in some of the instructions getting executed twice due to the way Ballerina scheduler handled IO bound operations. To solve this issue, I worked on completely rewriting the Observability instrumentation at ",f," compiler backend level by transforming the Ballerina Intermediate Representation (BIR) during the compilation. While this task was quite challenging due to the technologies it involved, the fact that almost no-one knew the source code well and the strict deadlines, I managed to complete this on time and with good quality."]}),(0,h.jsxs)(a.nv,{children:["After the initial PoC was complete, the ",p," product also evolved and the Observability Team also gained new members. I was entrusted with continuing to lead the Observability Team while some of the product management aspects were handed over to others. I guided the team into implementing most of the core features of ",p," Observability and I helped and encouraged the engineers in my team to grow and improve themselves as well."]})]}),(0,h.jsxs)(a.$0,{children:[(0,h.jsx)(a.OT,{children:"Software Engineer"}),(0,h.jsx)(a.pP,{children:"Jan 2018 to July 2019"}),w,(0,h.jsxs)(a.nv,{children:["At the start of my employment, I worked in multiple teams as part of the probation period. During one of these assignments, I implemented a password policy authenticator which is an authentication extension for the ",n,". It would validate a user login and enforce password policies."]}),(0,h.jsxs)(a.nv,{children:["After completing this feature, I worked on a Customer Success Enablement project by analyzing customer data to provide insights for the support teams to better work towards improving the customer experience and ensure that proper support is provided to them. While I cannot disclose a lot of information on this task, I worked on generating several reports on demand by querying data from multiple sources and analyzing them. I also revamped the portal which was built to request a report and rewrote the portal using ",d," which was quite new for me at that time as well."]}),(0,h.jsxs)(a.nv,{children:["After getting instated as a permanent employee, I joined the Cloud Team at WSO2 and worked on the WSO2 Serverless Platform which was a new product being developed at that time. I worked on the Observability aspects of the platform and while this was a new area for me at that time, I managed to learn the observability space in a short time and implement a considerable amount of it along with another engineer. I also contributed ideas for the platform as a whole as well. The WSO2 Serverless Platform was based on ",c," and it allowed running any docker image in serverless mode which was a new concept at that time. However, almost near the time when we completed a basic but complete version of the platform, ",m," which offered a similar experience was announced. As a result, the serverless platform was not offered as part of the product line of WSO2 and it was discontinued."]}),(0,h.jsx)(a.nv,{children:"Afterwards, I spent a few more weeks within the Cloud team including a month of customer support rotation, which helped me gain valuable experience in handling customer requests and also gain insights into other aspects of the business apart from the technical side of it."}),(0,h.jsxs)(a.nv,{children:["After Serverless Platform was discontinued, WSO2 started another project named VICK (later named as ",u,") which was aimed towards making deployments in Kubernetes easier. I was selected to be part of the initial research team to implement the product. I worked on this project for some time and it evolved and along with the Cell based architecture later became project ",u,". I mainly worked on the Observability aspects of the platform, but I contributed to almost all the other areas of the product with thoughts and ideas as well. While working on project ",u,", I was able to gain in depth knowledge on Kubernetes as well and this helped me immensely in my role as a software engineer later in my career."]})]}),(0,h.jsxs)(a.$0,{children:[(0,h.jsx)(a.OT,{children:"Google Summer of Code Intern"}),(0,h.jsx)(a.pP,{children:"May 2017 to Sep 2017"}),g,(0,h.jsxs)(a.nv,{children:["During my last year at the University, in my spare time, I worked as a Google Summer of Code intern. I worked for WSO2 during this period as well and developed a maven plugin for automatically generating documentation for the ",e," extensions. The information for the documentation was scraped from the data annotated into the extensions using a maven plugin and the collected data was converted into html pages using ",t,". This was used by ",e," for generating their documentation till it was decommissioned several years later."]})]}),(0,h.jsxs)(a.$0,{children:[(0,h.jsx)(a.OT,{children:"Software Engineering Trainee"}),(0,h.jsx)(a.pP,{children:"July 2016 to December 2016"}),w,(0,h.jsx)(a.nv,{children:"I worked as a Software Engineering intern at WSO2 as a required part of my B.Sc. (Hons.) in Engineering (Computer Science and Engineering) degree. I started working as a member of the Data Analytics Server (DAS) product team building a prototype Notebook for analyzing data collected by the DAS. However, the project was aborted and was not added to the DAS product as the company decided to discontinue the DAS product."}),(0,h.jsxs)(a.nv,{children:["Afterwards, as part of the Complex Event Processor product team, I implemented several stream processing extensions under the extrema namespace for calculating maximum and minimum values in data streams. Afterwards, I worked on a prototype for generating suggestions in the editor component of the ",e," IDE using data annotated into the ",e," extensions through Java custom annotations. Moreover, I designed some of the initial wireframes of the ",e," IDE as well before the end of my internship."]})]})]})})]})}},8297:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experience",function(){return n(6512)}])}},function(e){e.O(0,[523,351,827,774,888,179],(function(){return t=8297,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=experience-099d44bacfb55ec5.js.map