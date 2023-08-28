"use strict";(self.webpackChunkcodepod_io=self.webpackChunkcodepod_io||[]).push([[757],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={},i="Developer Manual",l={unversionedId:"developer/README",id:"developer/README",title:"Developer Manual",description:"First clone CodePod:",source:"@site/docs/4-developer/README.md",sourceDirName:"4-developer",slug:"/developer/",permalink:"/docs/developer/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"User Manual",permalink:"/docs/manual/"},next:{title:"Press & Screenshots",permalink:"/docs/press/"}},p={},s=[{value:".env file",id:"env-file",level:2},{value:"Starting the stack",id:"starting-the-stack",level:2},{value:"Database Schema Migration",id:"database-schema-migration",level:3},{value:"Starting two stacks simultaneously",id:"starting-two-stacks-simultaneously",level:2},{value:"Developer Onboarding",id:"developer-onboarding",level:2},{value:"Developing Language",id:"developing-language",level:3},{value:"Libraries and Frameworks",id:"libraries-and-frameworks",level:3},{value:"Codepod System Architecture",id:"codepod-system-architecture",level:3},{value:"Codepod GitHub Repo",id:"codepod-github-repo",level:3},{value:"References",id:"references",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-manual"},"Developer Manual"),(0,o.kt)("p",null,"First clone CodePod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/codepod-io/codepod.git\n")),(0,o.kt)("p",null,"We use the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT")," to refer to the root folder of the CodePod.\nIf you just ran the command above, then ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT")," is the folder you just cloned."),(0,o.kt)("p",null,"Now enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd codepod/compose\n")),(0,o.kt)("p",null,"The docker compose files are in ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose/dev")," folder. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," stack mounts the\n",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder, so that you can edit the files on your local computer, and let the\nnode.js process inside the container do the compiling and hot-reloading."),(0,o.kt)("p",null,"To install docker-compose, follow the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/linux/"},"Docker documentation"),"."),(0,o.kt)("h2",{id:"env-file"},".env file"),(0,o.kt)("p",null,"Now enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose/dev")," folder and copy ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, and optionally change the settings."),(0,o.kt)("h2",{id:"starting-the-stack"},"Starting the stack"),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose/dev")," folder, first run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up setup\n")),(0,o.kt)("p",null,"This will invoke pnpm install to download ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", and initialize DB. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," will be installed locally to your host file-system, so that\nerror linting will work in your VSCode when you open source files."),(0,o.kt)("p",null,"Then fire up the stack:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," containers are ready, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," to\nsee the app."),(0,o.kt)("h3",{id:"database-schema-migration"},"Database Schema Migration"),(0,o.kt)("p",null,"If you are a developer who wants to change the database schema for adding a feature, you can update the schema file ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/api/prisma/schema.prisma")," and then run the command in the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," contianer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Be sure to run the command in the container!\ndocker exec -it dev-api-1 /bin/bash\n# The command to migrate\npnpm dlx prisma migrate dev --name add_a_new_field\n")),(0,o.kt)("p",null,"to generate a migration, like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/codepod-io/codepod/blob/main/api/prisma/migrations/20230223102734_add_updated_at/migration.sql"},"this"),".\nThe schema change along with this migration need to be checked in (add, commit, and push) to git."),(0,o.kt)("p",null,"Once the DB schema is changed, other developers need to pull the changes, and\napply the migration by running the following command in the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm dlx prisma migrate dev\n")),(0,o.kt)("p",null,"and then restart the ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," container to take effect of the new DB schema."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can also use docker desktop or VSCode's docker plugin to attach a shell to the container."),(0,o.kt)("img",{src:a(7695).Z,alt:"attach shell to container",width:"300"})),(0,o.kt)("h2",{id:"starting-two-stacks-simultaneously"},"Starting two stacks simultaneously"),(0,o.kt)("p",null,"It might be necessary to create two Docker stacks for two verions of CodePod, respectively. For example, you might want to test the new version of CodePod while keeping the old version running."),(0,o.kt)("p",null,"Because Docker uses the folder name as the default suffix in container names, these two stacks may conflict with each other. To avoid this, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPOSE_PROJECT_NAME")," environment variable to set a prefix for the container names. For example, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPOSE_PROJECT_NAME=codepod-v2")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose/dev/.env")," file of the new stack, and then ",(0,o.kt)("a",{parentName:"p",href:"#starting-the-stack"},"start")," the new stack."),(0,o.kt)("p",null,"The two stacks also may share the same network ports due to the same configuration files used. To set the ports, search for the following lines in ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose/dev/nginx.conf")," (two occurences of the two lines in the file) file of the new stack:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"listen 8080;\nlisten [::]:8080;\n")),(0,o.kt)("p",null,"and the following section in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose/dev/compose.yml")," file of the new stack:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  nginx:\n    image: nginx:alpine\n    ports:\n      - 8080:8080\n    volumes:\n      - ./nginx.conf:/etc/nginx/conf.d/default.conf\n")),(0,o.kt)("p",null,"and replace the default port number 8080 to a new port number. For example, you can set the port number to 8081 for all occurences of 8080."),(0,o.kt)("p",null,"Also, comment out the port section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," container in ",(0,o.kt)("inlineCode",{parentName:"p"},"CODEPOD_ROOT/compose/dev/compose.yml")," as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  ui:\n    image: node:18\n    working_dir: /app\n#    ports:\n      # For react hot-reloading in development.\n#    - 3000:3000\n")),(0,o.kt)("p",null,"Then, you can access the new stack at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,o.kt)("h2",{id:"developer-onboarding"},"Developer Onboarding"),(0,o.kt)("h3",{id:"developing-language"},"Developing Language"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript"},"Typescript")),(0,o.kt)("h3",{id:"libraries-and-frameworks"},"Libraries and Frameworks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react.dev/"},"React")," framework",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.apollographql.com/"},"Apollo GraphQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.pmnd.rs/zustand/getting-started/introduction"},"Zustand")," (scalable state management)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/monaco-editor"},"Monaco")," editor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/remirror/remirror"},"Remirror")," rich-text editor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mui.com/core/"},"Material")," UI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ai/nanoid/blob/HEAD/README.zh-CN.md"},"Nano ID")," UUID generator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"Express")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jupyter-client.readthedocs.io/en/stable/messaging.html"},"Jupyter"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromq/zeromq.js"},"ZeroMQ")," Node.js bindings"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/compose-file/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/"},"Kubernetes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/helm/helm"},"Helm")," Chart"))),(0,o.kt)("li",{parentName:"ul"},"Proxy configuration: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nginx/nginx"},"NGINX")),(0,o.kt)("li",{parentName:"ul"},"Database: ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," + ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma"))),(0,o.kt)("h3",{id:"codepod-system-architecture"},"Codepod System Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"System arch",src:a(8543).Z,width:"1433",height:"951"})),(0,o.kt)("h3",{id:"codepod-github-repo"},"Codepod GitHub Repo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Frontend"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/codepod-io/codepod/tree/main/ui"},"Ui"),": root folder for Codepod client implementation, it contains the implementation of pod, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/codepod-io/codepod/blob/main/ui/src/components/Canvas.tsx"},"Canvas")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/codepod-io/codepod/blob/main/ui/src/components/nodes/Scope.tsx"},"Scope")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Backend"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/codepod-io/codepod/tree/main/proxy"},"Proxy"),": reverse proxy server, it forwards/redirects client requests to proper servers in the backbone."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/codepod-io/codepod/tree/main/api"},"Api"),": the API server handles users\u2019 actions on the Codepod client app, it authenticates users, persists the repo, scope and pod states to the Postgres database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/codepod-io/codepod/tree/main/runtime"},"Runtime"),": Codepod runtime server, ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:4020"},"http://localhost:4020"),", this URL is used in the front-end runtime.js to connect to the runtime, it handles the code execution logic on various kernels, e.g., IPython.")))),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A tutorial for React-based web application development, ",(0,o.kt)("a",{parentName:"li",href:"https://www.tortilla.academy/Urigo/WhatsApp-Clone-Tutorial/master/next/step/0"},"WhatsApp-Clone-Tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/xcatliu/typescript-tutorial"},"Typescript Tutorial"))))}m.isMDXComponent=!0},7695:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-shell-vscode-9b9a574c5f873863334058fa9451db63.png"},8543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Codepod_system_arch-0f96f6b7495cc3160bb45b3cbe764820.png"}}]);