"use strict";(self.webpackChunkcodepod_io=self.webpackChunkcodepod_io||[]).push([[85],{4410:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),l=a(7294),r=a(2859),i=a(9960),s=a(7741),c=a(8280),o=a(6010),m=a(1428);const d={details:"details_h+cY"},p="alert alert--info";function h(e){let{...t}=e;return l.createElement(m.PO,(0,n.Z)({},t,{className:(0,o.Z)(p,d.details,t.className)}))}const u={head:e=>{const t=l.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:a,...n}=e.props;return l.createElement(e.props.originalType,n)}return e}(e)));return l.createElement(r.Z,e,t)},code:e=>{const{children:t}=e;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(s.Z,e):l.createElement("code",e)},a:e=>l.createElement(i.Z,e),pre:e=>{const{children:t}=e;return(0,l.isValidElement)(t)&&(0,l.isValidElement)(t?.props?.children)?t.props.children:l.createElement(s.Z,(0,l.isValidElement)(t)?t?.props:{...e})},details:e=>{const t=l.Children.toArray(e.children),a=t.find((e=>"summary"===e?.props?.mdxType)),r=l.createElement(l.Fragment,null,t.filter((e=>e!==a)));return l.createElement(h,(0,n.Z)({},e,{summary:a}),r)},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")}},1533:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),l=a(6010),r=a(9463),i=a(3905),s=a(4410),c=a(9819),o=a(1428);const m={mdxPageWrapper:"mdxPageWrapper_eQvw"};const d=function(e){const{content:t}=e,{frontMatter:a,metadata:d}=t,{title:p,description:h,wrapperClassName:u,hide_table_of_contents:v}=a,{permalink:f}=d;return n.createElement(r.Z,{title:p,description:h,permalink:f,wrapperClassName:u??o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,l.Z)("row",m.mdxPageWrapper)},n.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},n.createElement(i.Zo,{components:s.Z},n.createElement(t,null))),!v&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(c.Z,{toc:t.toc,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level})))))}},9819:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),i=a(5002);const s={tableOfContents:"tableOfContents_vrFS",docItemContainer:"docItemContainer_VKW9"},c="table-of-contents__link toc-highlight",o="table-of-contents__link--active";const m=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:c,linkActiveClassName:o})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7462),l=a(7294),r=a(1428);function i(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...d}=e;const p=(0,r.LU)(),h=o??p.tableOfContents.minHeadingLevel,u=m??p.tableOfContents.maxHeadingLevel,v=(0,r.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:u}),f=(0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:u}}),[s,c,h,u]);return(0,r.Si)(f),l.createElement(i,(0,n.Z)({toc:v,className:a,linkClassName:s},d))}}}]);