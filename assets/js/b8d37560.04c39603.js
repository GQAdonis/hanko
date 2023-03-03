"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[35],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(6775),l=n(1980),s=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[h,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??h;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var k=n(2466),f=n(2389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,k.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(c(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},3148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={title:"Next.js + Hanko",sidebar_label:"Next.js",keywords:["next","nextjs"],sidebar_custom_props:{docCardIconName:"nextjs-dark"}},s="Next.js",u={unversionedId:"guides/next",id:"guides/next",title:"Next.js + Hanko",description:"In this guide you will learn how to use the",source:"@site/docs/guides/next.mdx",sourceDirName:"guides",slug:"/guides/next",permalink:"/guides/next",draft:!1,tags:[],version:"current",frontMatter:{title:"Next.js + Hanko",sidebar_label:"Next.js",keywords:["next","nextjs"],sidebar_custom_props:{docCardIconName:"nextjs-dark"}},sidebar:"docs",previous:{title:"Angular",permalink:"/guides/angular"},next:{title:"React",permalink:"/guides/react"}},c={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Add <code>&lt;hanko-auth&gt;</code> component",id:"add-hanko-auth-component",level:2},{value:"Define login callbacks",id:"define-login-callbacks",level:3},{value:"Add <code>&lt;hanko-profile&gt;</code> component",id:"hanko-profile",level:2},{value:"Customize component styles",id:"customize-component-styles",level:2},{value:"Authenticate backend requests",id:"authenticate-backend-requests",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nextjs"},"Next.js"),(0,r.kt)("p",null,"In this guide you will learn how to use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md"},"hanko-elements")," web components to\nadd authentication and a user profile to your Next.js application."),(0,r.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," package:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @teamhanko/hanko-elements\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @teamhanko/hanko-elements\n")))),(0,r.kt)("h2",{id:"add-hanko-auth-component"},"Add ",(0,r.kt)("inlineCode",{parentName:"h2"},"<hanko-auth>")," component"),(0,r.kt)("p",null,"To provide a login interface in your app, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," web component. To do so, first import the ",(0,r.kt)("inlineCode",{parentName:"p"},"register"),"\nfunction from ",(0,r.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in your Next.js component. Then call ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," to register the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>"),"\nelement with the browser's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry")),"\nand use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element in your JSX."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element to your JSX you must provide the URL of the Hanko API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\nattribute. If you are using ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.hanko.io"},"Hanko Cloud"),", you can find the API URL on your project dashboard.\nIf you are self-hosting you need to provide the URL of your running Hanko backend.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HankoAuth.jsx" showLineNumbers',title:'"HankoAuth.jsx"',showLineNumbers:!0},'import { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = "<YOUR_API_URL>";\n\nexport default function HankoAuth() {\n  useEffect(() => {\n    // register the component\n    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n    register({ shadow: true })\n      .catch((error) => {\n        // handle error\n      });\n  }, []);\n\n  return (\n    <hanko-auth api={hankoApi} />\n  );\n}\n')),(0,r.kt)("p",null,"The call to ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," attempts to register the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element with the\nbrowser's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry"))," through a\ncall to ",(0,r.kt)("inlineCode",{parentName:"p"},"window.customElements.define()"),".\nNext.js pre-renders pages on the server but the browser ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," is not available during pre-rendering, so the custom\nelement registration would fail."),(0,r.kt)("p",null,"A solution for this is to use Next's ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/dynamic-import"},"dynamic import")," feature\nto dynamically load the component on the client-side and disable server rendering for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" showLineNumbers',title:'"index.js"',showLineNumbers:!0},'import dynamic from "next/dynamic";\n\nexport default function Home() {\n  const HankoAuth = dynamic(\n    // replace with path to your component using the <hanko-auth> element\n    () => import(\'../components/HankoAuth\'),\n    { ssr: false },\n  )\n  return (\n    <Suspense fallback={"Loading ..."}>\n      <HankoAuth/>\n    </Suspense>\n  )\n}\n')),(0,r.kt)("h3",{id:"define-login-callbacks"},"Define login callbacks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," element dispatches a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"hankoAuthSuccess")," event on successful login. React to this\nevent in order to, for example, redirect your users to protected pages in your application,\ne.g. a ",(0,r.kt)("a",{parentName:"p",href:"#hanko-profile"},"user profile page"),"."),(0,r.kt)("p",null,"To do so, apply an event listener with an appropriate redirect callback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,10-19} title="HankoAuth.jsx" showLineNumbers',"{2,10-19}":!0,title:'"HankoAuth.jsx"',showLineNumbers:!0},'import React, { useEffect, useCallback } from "react";\nimport { useRouter } from "next/router";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = "<YOUR_API_URL>";\n\nexport default function HankoAuth() {\n  const router = useRouter();\n\n  const redirectAfterLogin = useCallback(() => {\n    // successfully logged in, redirect to a page in your application\n    router.replace("...");\n  }, [router]);\n\n  useEffect(() => {\n    document.addEventListener("hankoAuthSuccess", redirectAfterLogin);\n    return () =>\n      document.removeEventListener("hankoAuthSuccess", redirectAfterLogin);\n  }, [redirectAfterLogin]);\n\n  useEffect(() => {\n    // register the component\n    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n    register({ shadow: true })\n      .catch((error) => {\n        // handle error\n      });\n  }, []);\n\n  return (\n    <hanko-auth api={hankoApi} />\n  );\n}\n')),(0,r.kt)("h2",{id:"hanko-profile"},"Add ",(0,r.kt)("inlineCode",{parentName:"h2"},"<hanko-profile>")," component"),(0,r.kt)("p",null,"To provide a page where users can manage their email addresses, password and passkeys, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," web\ncomponent. Just as with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-auth>")," component, import the ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"@teamhanko/hanko-elements")," in\nyour Next.js component. Then call ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," to register the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," element with the browser's\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/CustomElementRegistry"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomElementRegistry"))," and use\nthe element in your JSX."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"<hanko-profile>")," element to your template you must provide the URL of the Hanko API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\nattribute. If you are using ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.hanko.io"},"Hanko Cloud"),", you can find the API URL on your project dashboard.\nIf you are self-hosting you need to provide the URL of your running Hanko backend.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HankoProfile.jsx" showLineNumbers',title:'"HankoProfile.jsx"',showLineNumbers:!0},'import { useEffect } from "react";\nimport { register } from "@teamhanko/hanko-elements";\n\nconst hankoApi = "<YOUR_API_URL>";\n\nexport default function HankoProfile() {\n  useEffect(() => {\n    // register the component\n    // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script\n    register({ shadow: true })\n      .catch((error) => {\n        // handle error\n      });\n  }, []);\n\n  return (\n    <hanko-profile api={hankoApi} />\n  );\n};\n')),(0,r.kt)("h2",{id:"customize-component-styles"},"Customize component styles"),(0,r.kt)("p",null,"The styles of the ",(0,r.kt)("inlineCode",{parentName:"p"},"hanko-auth")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hanko-profile")," elements can be customized using CSS variables and parts. See our\nguide on customization ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/tree/main/frontend/elements#ui-customization"},"here"),"."),(0,r.kt)("h2",{id:"authenticate-backend-requests"},"Authenticate backend requests"),(0,r.kt)("p",null,"If you want to authenticate requests in your own backend, please view our ",(0,r.kt)("a",{parentName:"p",href:"/guides/backend"},"backend guide"),"."))}m.isMDXComponent=!0}}]);