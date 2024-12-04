"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[581],{3738:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"manual/README","title":"CodePod App User Manual","description":"Try it at https://test.codepod.io","source":"@site/docs/3-manual/README.md","sourceDirName":"3-manual","slug":"/manual/","permalink":"/docs/manual/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/intro"},"next":{"title":"Press & Screenshots","permalink":"/docs/press/"}}');var s=o(216),i=o(2737);const a={},d="CodePod App User Manual",r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Pods",id:"pods",level:2},{value:"Creating pods",id:"creating-pods",level:3},{value:"Pod toolbar",id:"pod-toolbar",level:3},{value:"Moving pods",id:"moving-pods",level:3},{value:"Resizing a pod",id:"resizing-a-pod",level:3},{value:"Deleting a pod",id:"deleting-a-pod",level:3},{value:"Canvas",id:"canvas",level:2},{value:"Moving around the Canvas; Zoom In &amp; Out",id:"moving-around-the-canvas-zoom-in--out",level:3},{value:"Execution",id:"execution",level:2},{value:"Run a pod",id:"run-a-pod",level:3},{value:"User volume",id:"user-volume",level:3},{value:"Scope",id:"scope",level:2},{value:"Creating a scope",id:"creating-a-scope",level:3},{value:"Removing a scope",id:"removing-a-scope",level:3},{value:"Copy and paste a scope",id:"copy-and-paste-a-scope",level:3},{value:"Move a pod into and out of a scope",id:"move-a-pod-into-and-out-of-a-scope",level:3},{value:"Run a scope with topological order",id:"run-a-scope-with-topological-order",level:3},{value:"Scope semantics",id:"scope-semantics",level:3},{value:"Edge",id:"edge",level:2},{value:"Drawing an edge",id:"drawing-an-edge",level:3},{value:"Def-use visualization",id:"def-use-visualization",level:3},{value:"Other",id:"other",level:2},{value:"Rich text pod (markdown)",id:"rich-text-pod-markdown",level:3},{value:"Import a Jupyter notebook",id:"import-a-jupyter-notebook",level:3},{value:"(Best?) Practices to order the pods",id:"best-practices-to-order-the-pods",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"codepod-app-user-manual",children:"CodePod App User Manual"})}),"\n",(0,s.jsxs)(n.p,{children:["Try it at ",(0,s.jsx)(n.a,{href:"https://test.codepod.io",children:"https://test.codepod.io"})]}),"\n",(0,s.jsx)(n.p,{children:"Note that this is a test server, and no data is preserved to our official release."}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"CodePod is a web app. You can login with your Google account and start using it\nright away. All code are saved in the cloud and executed in the cloud runtimes."}),"\n",(0,s.jsx)(n.p,{children:"This manual describes all the Operations and User Interface for the app."}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#creating-pods",children:"How to create a pod?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#deleting-a-pod",children:"How to delete a pod?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#creating-a-scope",children:"How to create a scope?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#move-a-pod-into-and-out-of-a-scope",children:"How to move into and out of a scope?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#run-a-pod",children:"How to execute some code?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rich-text-pod-markdown",children:"How to write markdown?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#drawing-an-edge",children:"How to create edges?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#moving-around-the-canvas-zoom-in--out",children:"How to move on canvas?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#resizing-a-pod",children:"How to resize?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#copy-and-paste-a-scope",children:"How to copy & paste?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#import-a-jupyter-notebook",children:"How to import jupyter notebook files?"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pods",children:"Pods"}),"\n",(0,s.jsx)(n.h3,{id:"creating-pods",children:"Creating pods"}),"\n",(0,s.jsx)(n.p,{children:'Right click on the canvas, then click "python". This will create a python pod at the position of clicking.'}),"\n",(0,s.jsx)("img",{src:o(7046).A,alt:"Right Click Menu",width:"300"}),"\n",(0,s.jsx)(n.h3,{id:"pod-toolbar",children:"Pod toolbar"}),"\n",(0,s.jsx)(n.p,{children:"When you hover on the pod, the toolbar will show on the top right corner."}),"\n",(0,s.jsx)("img",{src:o(3514).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h3,{id:"moving-pods",children:"Moving pods"}),"\n",(0,s.jsx)(n.p,{children:"Option 1: There's a grab icon on the toolbar. Drag on it will move the pod."}),"\n",(0,s.jsx)(n.p,{children:"Option 2: You can also drag to select one or more pod and move them at once."}),"\n",(0,s.jsx)("img",{src:o(2331).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.p,{children:'Special note for scope: if you want to "drag-to-select" a scope, you need to drag from outside into it. If you drag inside a scope, only inner nodes will be selected.'}),"\n",(0,s.jsx)(n.h3,{id:"resizing-a-pod",children:"Resizing a pod"}),"\n",(0,s.jsx)(n.p,{children:"You can resize the width of a pod by dragging at its right edge. The height is\nautomatically adjusted based on content."}),"\n",(0,s.jsx)(n.p,{children:"A scope can be resized in all directions on all edges."}),"\n",(0,s.jsx)(n.h3,{id:"deleting-a-pod",children:"Deleting a pod"}),"\n",(0,s.jsx)(n.p,{children:"In the pod toolbar, there's a delete pod button to delete a pod."}),"\n",(0,s.jsx)("img",{src:o(9506).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h2,{id:"canvas",children:"Canvas"}),"\n",(0,s.jsx)(n.h3,{id:"moving-around-the-canvas-zoom-in--out",children:"Moving around the Canvas; Zoom In & Out"}),"\n",(0,s.jsx)(n.p,{children:"If you're using a touchpad"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"swiping with two fingers can move your view on the Canvas"}),"\n",(0,s.jsx)(n.li,{children:"pinch with two fingers to zoom in and out"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you're using a mouse"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"click and hold the middle button can drag the Canvas"}),"\n",(0,s.jsx)(n.li,{children:"scroll to zoom in and out"}),"\n"]}),"\n",(0,s.jsx)("img",{src:o(4356).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,s.jsx)(n.h3,{id:"run-a-pod",children:"Run a pod"}),"\n",(0,s.jsx)(n.p,{children:'First, you need to start the runtime. In the runtime section of the sidebar,\nclick the start button in python. The kernel will start and will be in "idle"\nstatus when it\'s ready.'}),"\n",(0,s.jsx)(n.p,{children:"If it's your first time using the app, a user volume will be created for you\nwhen you start your first runtime, therefore, it will take up to 1 minute for\nthe kernel to be available. Future kernels should be started within 5 seconds."}),"\n",(0,s.jsx)(n.p,{children:"The kernel will be shutdown in 24 hours."}),"\n",(0,s.jsx)(n.p,{children:"Once the kernel is ready, you can click the run button on the pod toolbar to run\nthe code. Like Jupyter notebook, the results will be displayed under the code."}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(n.code,{children:"shift-enter"})," keyboard shortcut to trigger the code execution."]}),"\n",(0,s.jsx)(n.p,{children:"Unlike Jupyter, you can safely close the page while the pod is running. The results will be continuely populated in the cloud."}),"\n",(0,s.jsx)("img",{src:o(348).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.p,{children:"If the result output is too long, it will be folded. You can expand it using the\nbutton on the top-right of the result area."}),"\n",(0,s.jsx)(n.h3,{id:"user-volume",children:"User volume"}),"\n",(0,s.jsx)(n.p,{children:"The runtime kernel is a cloud container. The container will be re-recreated when the runtime restarts, so the files in the container are deleted. Each repository has a separate runtime container that doesn't share files."}),"\n",(0,s.jsxs)(n.p,{children:["To persist data files, there's a user volume mounted at ",(0,s.jsx)(n.code,{children:"/mnt/data"})," where you can store your files that need to persist across kernel restarts and across repo. This user volume is a NFS volume, therefore the IO performance is much slower compared to local disk on the container."]}),"\n",(0,s.jsx)(n.h2,{id:"scope",children:"Scope"}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-scope",children:"Creating a scope"}),"\n",(0,s.jsx)(n.p,{children:'You can drag on canvas to select multiple pods. Then right click on the\nselection, and choose "create scope". A scope will be created.'}),"\n",(0,s.jsx)(n.p,{children:"When you drag to move the scope, all sub-nodes are moved together."}),"\n",(0,s.jsx)(n.p,{children:"The drag-to-select behavior on scope is slightly different. You have to drag\nfrom outside of a scope to select the scope. Dragging inside the scope will\nselect nodes in the scope."}),"\n",(0,s.jsx)("img",{src:o(1760).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h3,{id:"removing-a-scope",children:"Removing a scope"}),"\n",(0,s.jsx)(n.p,{children:'In the scope\'s toolbar, click "remove scope" to remove the scope but keeps its children.'}),"\n",(0,s.jsx)(n.p,{children:'To remove the scope and all its children, click "remove scope and children".'}),"\n",(0,s.jsx)(n.h3,{id:"copy-and-paste-a-scope",children:"Copy and paste a scope"}),"\n",(0,s.jsx)(n.p,{children:'To copy a scope, click on the "copy" button in the scope toolbar.'}),"\n",(0,s.jsx)(n.p,{children:"To paste a scope, right click on the canvas and choose paste. The scope will be pasted into the right click position."}),"\n",(0,s.jsx)(n.p,{children:"You can copy and paste scopes across repositories. It will overwrite your system clipboard."}),"\n",(0,s.jsx)(n.h3,{id:"move-a-pod-into-and-out-of-a-scope",children:"Move a pod into and out of a scope"}),"\n",(0,s.jsx)(n.p,{children:"Dragging the pods won't change the scoping, but there will be visual marks to highlight problems:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If two pods overlap, their borders turn pink."}),"\n",(0,s.jsx)(n.li,{children:"If a pod is moved out of its scope, the pod and the scope borders will trun\norange."}),"\n"]}),"\n",(0,s.jsx)("img",{src:o(426).A,alt:"",width:"300"}),"\n",(0,s.jsx)("img",{src:o(8074).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.p,{children:'To actually move a pod into a scope, you can first move it in place, then click the "change scope" button on the toolbar (in the dropdown menu).'}),"\n",(0,s.jsx)("img",{src:o(6607).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.p,{children:'To move a pod out of a scope, you can first move it out then click the "change scope" button on the toolbar.'}),"\n",(0,s.jsx)(n.h3,{id:"run-a-scope-with-topological-order",children:"Run a scope with topological order"}),"\n",(0,s.jsx)(n.p,{children:"You can run a scope by clicking the run button on the toolbar. The execution\norder is the topological order w.r.t. the def-use edges and manual edges. That\nis, if there's an edge from a to b, a will be executed before b. In case of\ncycle, the cycle point is silently skipped."}),"\n",(0,s.jsx)(n.h3,{id:"scope-semantics",children:"Scope semantics"}),"\n",(0,s.jsx)(n.p,{children:"Not only can you organize pods with scopes, they also have semantic meanings to\nhelp you isolate namespaces in the runtime."}),"\n",(0,s.jsxs)(n.p,{children:["First of all, scopes are separated. The function ",(0,s.jsx)(n.code,{children:"foo"})," in one scope is different\nfrom the ",(0,s.jsx)(n.code,{children:"foo"})," in another. A function is only visible inside the scope\n(including its children)."]}),"\n",(0,s.jsx)("img",{src:o(4105).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.p,{children:'Second, you can export a function out into its parent. This is the use case\nwhere inner scope implements some lower-level functions, and expose a public API\nto higher level. You can mark a pod as public by clicking on the "toggle public"\nbutton. The pod will be visually marked "public".'}),"\n",(0,s.jsx)("img",{src:o(3600).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h2,{id:"edge",children:"Edge"}),"\n",(0,s.jsx)(n.h3,{id:"drawing-an-edge",children:"Drawing an edge"}),"\n",(0,s.jsx)(n.p,{children:"There's a edge icon in a pod's toolbar. Drag on it and drop onto another pod\nwill create an edge. This edge can be used to mark the execution order. For example, you can draw edges of a chain of pods and run the chain to simulate a Jupyter notebook."}),"\n",(0,s.jsx)("img",{src:o(5847).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h3,{id:"def-use-visualization",children:"Def-use visualization"}),"\n",(0,s.jsx)(n.p,{children:"If a pod defines variables, functions, or classes, the defined symbols will be shown in the top-left corner."}),"\n",(0,s.jsx)(n.p,{children:"If a pod calls a function defiend in another pod, there will be an edge from the definition to the callsite."}),"\n",(0,s.jsx)(n.p,{children:"The def-use edges are only visualized inside the scope to avoid cluttering the view."}),"\n",(0,s.jsx)("img",{src:o(6369).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h2,{id:"other",children:"Other"}),"\n",(0,s.jsx)(n.h3,{id:"rich-text-pod-markdown",children:"Rich text pod (markdown)"}),"\n",(0,s.jsx)(n.p,{children:'You can create a rich text pod by right clicking on the canvas and selecting\n"Note". This is a notion-like WYSIWYG editor with markdown syntax support. You\ncan write notes and documents in this editor.'}),"\n",(0,s.jsx)("img",{src:o(1384).A,alt:"",width:"300"}),"\n",(0,s.jsx)(n.h3,{id:"import-a-jupyter-notebook",children:"Import a Jupyter notebook"}),"\n",(0,s.jsx)(n.p,{children:'Right click on the Canvas and select "Import", then choose your jupyter notebook file. The notebook will be imported into a scope and layout horizontally.'}),"\n",(0,s.jsx)(n.h3,{id:"best-practices-to-order-the-pods",children:"(Best?) Practices to order the pods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Put logical related code pods into a scope"}),"\n",(0,s.jsxs)(n.li,{children:["Use nested scopes to build a hierarchy:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"inner scope represents lower level functions"}),"\n",(0,s.jsx)(n.li,{children:"outer scope represents higher level functions."}),"\n",(0,s.jsx)(n.li,{children:"inner scope expose APIs into outer scope"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Use def-use edges to layout the pods. E.g., order the pods so that edges flow from top-left to bottom-right."}),"\n"]}),"\n",(0,s.jsx)("img",{src:o(295).A,alt:"",width:"800"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4356:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Gestures_Two_Finger_Scroll-e4395df00a98d32e3737a67e6527ac27.png"},295:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/best-practice-f53a56168f0ba5c2abcab1756fffa5ad.png"},6607:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/changescope-99097cd4cc48581d652d25e2a470b06d.png"},1760:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/create-scope-ba3f5a5daa47f0a1c3eb752d35516759.png"},6369:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/defuse-ac6ef333f8459b5e5b78b6ebe6a089e4.png"},9506:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/delete-865cf38c1692c1ddab0abbc064c6a6c8.png"},5847:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/draw-edge-fd435be61e4902b9a5bfa3b8af5ae097.png"},1384:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/markdown-8b5b10d6d193dc46ccb8ee645546f321.png"},8074:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/outofscope-8a9cea775fdf647124f23cddb08d6846.png"},426:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/overlap-1bf5a733cd04a7598fdf3644a25c05b5.png"},3600:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/public-8b1fa29d5d37f7c3e865cd2ae3eeb182.png"},7046:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/right-click-d1cc54f2d6d3f777566effa4fc7f1d60.png"},348:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/run-d419c3c05b4adc2a539a89e6efdccb60.png"},4105:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/scope-separate-5db34e46f35d5f17a97add6c0e6cd6ba.png"},2331:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/select-a7ec61e7d0d2a8f0586e3de53c4f96aa.png"},3514:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/toolbar-2861119c0bda2476c3a34ba6df2be97d.png"},2737:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>d});var t=o(6372);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);