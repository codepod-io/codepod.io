"use strict";(self.webpackChunkcodepod_io=self.webpackChunkcodepod_io||[]).push([[881],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return o?a.createElement(m,r(r({ref:t},d),{},{components:o})):a.createElement(m,r({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3531:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const i={},r="User Manual",s={unversionedId:"manual/README",id:"manual/README",title:"User Manual",description:"User Registration",source:"@site/docs/3-manual/README.md",sourceDirName:"3-manual",slug:"/manual/",permalink:"/docs/manual/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Developer Manual",permalink:"/docs/developer/"}},l={},c=[{value:"User Registration",id:"user-registration",level:2},{value:"The dashboard and project creation",id:"the-dashboard-and-project-creation",level:2},{value:"The Canvas",id:"the-canvas",level:2},{value:"Create your first code pod",id:"create-your-first-code-pod",level:3},{value:"The runtime and sidebar",id:"the-runtime-and-sidebar",level:3},{value:"Execute the code",id:"execute-the-code",level:3},{value:"Moving around the Canvas",id:"moving-around-the-canvas",level:3},{value:"Organize your Canvas with scopes",id:"organize-your-canvas-with-scopes",level:2},{value:"Create your first scope",id:"create-your-first-scope",level:3},{value:"The scoped runtime semantics",id:"the-scoped-runtime-semantics",level:3},{value:"Export to parent as public API",id:"export-to-parent-as-public-api",level:3},{value:"Lexical scoping",id:"lexical-scoping",level:3},{value:"Writing docs in Rich-text editor",id:"writing-docs-in-rich-text-editor",level:2},{value:"Copy-n-paste",id:"copy-n-paste",level:2},{value:"Auto-layout",id:"auto-layout",level:2},{value:"Contextual zooming",id:"contextual-zooming",level:2},{value:"Exporting",id:"exporting",level:2},{value:"Share your project and collaborate in real time",id:"share-your-project-and-collaborate-in-real-time",level:2},{value:"In case of the app went wrong",id:"in-case-of-the-app-went-wrong",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-manual"},"User Manual"),(0,n.kt)("h2",{id:"user-registration"},"User Registration"),(0,n.kt)("p",null,"Codepod is a web app with standard user authentication. You can register, or better, you can login with your google account instantly. If you don't register & login, the system will register a Guest user, so that people can try out Codepod without registering."),(0,n.kt)("img",{src:o(3568).Z,alt:"xxx",width:"600"}),(0,n.kt)("h2",{id:"the-dashboard-and-project-creation"},"The dashboard and project creation"),(0,n.kt)("p",null,"You will be greeted with the dashboard. It will list your projects and those that shared with you by other users. You can create a new project on the dashboard, which drops you into the new project canvas."),(0,n.kt)("img",{src:o(1449).Z,alt:"xxx",width:"600"}),(0,n.kt)("h2",{id:"the-canvas"},"The Canvas"),(0,n.kt)("h3",{id:"create-your-first-code-pod"},"Create your first code pod"),(0,n.kt)("p",null,"In the canvas, you can right-click on the Canvas to create pods and scopes. Create a new pod, and you can type your hello world code in the cell."),(0,n.kt)("img",{src:o(6333).Z,alt:"Example banner",width:"600"}),(0,n.kt)("h3",{id:"the-runtime-and-sidebar"},"The runtime and sidebar"),(0,n.kt)("p",null,'The sidebar shows some status of the project and runtime, as well as settings. Wait until you have the runtime ready and idle for running code. The sidebar can be folded with the "Fold" button.'),(0,n.kt)("h3",{id:"execute-the-code"},"Execute the code"),(0,n.kt)("p",null,'Back to your code, you can execute the pod by clicking the "run" button on the floating toolbar, or press ',(0,n.kt)("inlineCode",{parentName:"p"},"<shift>+<enter>"),"."),(0,n.kt)("img",{src:o(6982).Z,alt:"Example banner",width:"600"}),(0,n.kt)("h3",{id:"moving-around-the-canvas"},"Moving around the Canvas"),(0,n.kt)("p",null,"You can move your pods with the drag handles on the toolbar. Simply drag-n-drop."),(0,n.kt)("h2",{id:"organize-your-canvas-with-scopes"},"Organize your Canvas with scopes"),(0,n.kt)("h3",{id:"create-your-first-scope"},"Create your first scope"),(0,n.kt)("p",null,"One key feature that Codepod brings is the scope. You can create a scope by right-clicking on the canvas. Scopes are like modules in your code, they can be nested, and you can move your pods into scopes. Drag-n-drop your pods into the scope; a target scope will be highlighted when you drag a pod over it."),(0,n.kt)("img",{src:o(4509).Z,alt:"Example banner",width:"600"}),(0,n.kt)("p",null,'You can also run all the pods in the scope by clicking the "Run" button in the scope toolbar. It will execute all pods and scopes in the scope by geometric order, from top-left to bottom-right.'),(0,n.kt)("img",{src:o(8667).Z,alt:"xxx",width:"600"}),(0,n.kt)("h3",{id:"the-scoped-runtime-semantics"},"The scoped runtime semantics"),(0,n.kt)("p",null,"The scoped runtime supports python variables, functions, and classes. You can define them in the scope, and use them in the pods. The scope is like a python module. All names defined in the scope stays inside the scope. The outside world cannot see it."),(0,n.kt)("h3",{id:"export-to-parent-as-public-api"},"Export to parent as public API"),(0,n.kt)("p",null,"A scope can define some public APIs, which can be used by outer scopes. You can define a public API by adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"@export")," decorator at the first line of the pod. Once you execute it, the pod will be highlighted with a thick green border to indicate that this pod defines a public API. The public API can then be resolved in outer scope."),(0,n.kt)("img",{src:o(1796).Z,alt:"Example banner",width:"600"}),(0,n.kt)("p",null,"The names can be further exported to ancestor nodes."),(0,n.kt)("img",{src:o(8613).Z,alt:"Example banner",width:"600"}),(0,n.kt)("h3",{id:"lexical-scoping"},"Lexical scoping"),(0,n.kt)("p",null,"The other direction, from parent scope to child scope, is automatic. It works like the lexical scoping where inner scopes can see the names in outer scopes. This enables you to define global variables and utility functions in the outermost scope, and use them anywhere on the Canvas."),(0,n.kt)("img",{src:o(3586).Z,alt:"Example banner",width:"600"}),(0,n.kt)("h2",{id:"writing-docs-in-rich-text-editor"},"Writing docs in Rich-text editor"),(0,n.kt)("p",null,"We integrate the Remirror/ProseMirror editor, so that you can write rich-text documents in the pods. You can create a rich-text pod by right-clicking on the canvas. The rich-text pod supports markdown syntax, and you can insert images and videos."),(0,n.kt)("img",{src:o(5045).Z,alt:"Example banner",width:"600"}),(0,n.kt)("p",null,"The rich-text editor supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Markdown syntax"),(0,n.kt)("li",{parentName:"ul"},"Insert images"),(0,n.kt)("li",{parentName:"ul"},"Tables"),(0,n.kt)("li",{parentName:"ul"},"Links")),(0,n.kt)("h2",{id:"copy-n-paste"},"Copy-n-paste"),(0,n.kt)("p",null,"You can copy a pod or a scope, and paste it anywhere on the canvas. The copy-n-paste feature is in the pod toolbar. You can also paste across browser tabs. On paste, a shadowed visualization will be moving with your cursor until you click to drop it."),(0,n.kt)("img",{src:o(1285).Z,alt:"xxx",width:"600"}),(0,n.kt)("h2",{id:"auto-layout"},"Auto-layout"),(0,n.kt)("p",null,"It is painful and inefficient to resize and position the pods and scopes manually. Codepod provides an auto-layout feature to help you organize your canvas. The auto-layout setting is in the sidebar, default to enabled."),(0,n.kt)("p",null,"Before auto-layout, the pods and scopes could be overlapped and messy."),(0,n.kt)("img",{src:o(8469).Z,alt:"Example banner",width:"600"}),(0,n.kt)("p",null,"After auto-layout, the pods and scopes are organized by a collision-free algorithm, and the scopes will be resized to fit the pods inside."),(0,n.kt)("img",{src:o(3983).Z,alt:"xxx",width:"600"}),(0,n.kt)("h2",{id:"contextual-zooming"},"Contextual zooming"),(0,n.kt)("p",null,'The canvas can be zoomed in and out by the touch pad pining, the buttons, and the mouse wheel. We introduce a major feature called "contextual zoom". The idea is to see different level of details at different zoom levels, so that users can focus on a small subsets of content to work on. Think of it as Google maps where you zoom in & out to see different levels of details.'),(0,n.kt)("p",null,"The feature contains roughly two significant behaviors:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"different levels in the hierarchy have different font sizes"),(0,n.kt)("li",{parentName:"ol"},"when zooming out, the pods and scopes that become too small to view will be collapsed into a block, with large text summarizing its content. These blocks can be dragged and moved easily (which is pretty easy to use).")),(0,n.kt)("p",null,"This feature is experimental and disabled by default. There's a setting contextual zoom in the sidebar to enable it."),(0,n.kt)("p",null,"Fully expanded (zoomed in):"),(0,n.kt)("img",{src:o(250).Z,alt:"xxx",width:"600"}),(0,n.kt)("p",null,"Zoom out:"),(0,n.kt)("img",{src:o(2558).Z,alt:"xxx",width:"600"}),(0,n.kt)("p",null,"Zoom out:"),(0,n.kt)("img",{src:o(2060).Z,alt:"xxx",width:"600"}),(0,n.kt)("p",null,"Zoom out:"),(0,n.kt)("img",{src:o(7717).Z,alt:"xxx",width:"600"}),(0,n.kt)("h2",{id:"exporting"},"Exporting"),(0,n.kt)("p",null,"You can export your project into a SVG image, executable Python files, and a Jupyter notebook. The export button is in the sidebar."),(0,n.kt)("h2",{id:"share-your-project-and-collaborate-in-real-time"},"Share your project and collaborate in real time"),(0,n.kt)("p",null,"Modern collaboration cannot be without real-time collaboration. Codepod supports real-time collaboration. You can share your project with other users, and they can edit the project together with you in real time."),(0,n.kt)("img",{src:o(5109).Z,alt:"xxx",width:"600"}),(0,n.kt)("p",null,"The shared projects will be shown in the bottom of the Guest's dashboard. The real-time collaboration happens in the following places:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The code pods"),(0,n.kt)("li",{parentName:"ul"},"The rich-text pods"),(0,n.kt)("li",{parentName:"ul"},"The Canvas: nodes and edges")),(0,n.kt)("h2",{id:"in-case-of-the-app-went-wrong"},"In case of the app went wrong"),(0,n.kt)("p",null,"The project is still in heavy development, and bugs can happen. If you find the page is not responding, you can try to refresh the page."),(0,n.kt)("p",null,"If you would like to hunter the bugs, welcome and thanks! You can open the developer console and see if there are errors. Let us know by openning a GitHub issue."))}u.isMDXComponent=!0},3983:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/autoLayoutAfter-2f0318492a725e7e366492d3e986989c.png"},8469:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/autoLayoutBefore-b5d0e79bf09944739aee4f561400aea5.png"},1285:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/copyNPaste-490c09f166675ace802a1787382efa05.png"},6333:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/create-pod-959c786d7c082195a454f200921713e8.png"},6982:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/execute-1eeff4a71252ded540f8fec428bca22d.png"},8667:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/executeScope-dea2cf66da324054f4facaf05b573b2c.png"},1449:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/guestUser-d9938fc72b131a1880c78a242afee1dd.png"},4509:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/moveIntoScope-e08344ffce01f9e31ebd1195c519287a.png"},3586:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/parentToChild-fbfd4b66a8b3c572eabed13cef28336d.png"},5045:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/richText-55dbdc4d73a0a4902da6b22f45013a58.png"},1796:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/scopeExport-647d387213d7cd0d9be14ccef67a0c2b.png"},8613:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/scopeRecursiveExport-47e2e4acaef33bd6f3c7265599f08af8.png"},5109:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/shareDialog-dde3f3b75010684f48daa04007e0fdaa.png"},3568:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/signup-862e80c73a7de87bbe395c6366c2500d.png"},2558:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/zoom1-74f809268b4562dbad45db1b0bc818b1.png"},2060:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/zoom2-1d81a58033a51d612063a1982063eab9.png"},7717:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/zoomAll-f8021e5f433157456c05643a46b2571c.png"},250:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/zoomExpanded-98d937fd3505235167c8702ef4c7e29a.png"}}]);