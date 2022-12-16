"use strict";(self.webpackChunk_teamhanko_docs=self.webpackChunk_teamhanko_docs||[]).push([[951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),c=o,m=h["".concat(p,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Mobile guide (Beta)",sidebar_position:4,description:"Learn how to use the Hanko backend with your mobile apps."},r="Mobile guide",s={unversionedId:"guides/mobile_guide",id:"guides/mobile_guide",title:"Mobile guide",description:"Learn how to use the Hanko backend with your mobile apps.",source:"@site/docs/guides/mobile_guide.mdx",sourceDirName:"guides",slug:"/guides/mobile_guide",permalink:"/guides/mobile_guide",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Mobile guide (Beta)",sidebar_position:4,description:"Learn how to use the Hanko backend with your mobile apps."},sidebar:"docs",previous:{title:"Backend guide",permalink:"/guides/backend"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"Check if the user exists",id:"check-if-the-user-exists",level:3},{value:"Create user",id:"create-user",level:3},{value:"Send a passcode",id:"send-a-passcode",level:3},{value:"Create a passkey (optional)",id:"create-a-passkey-optional",level:3},{value:"Login with a passkey (optional)",id:"login-with-a-passkey-optional",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobile-guide"},"Mobile guide"),(0,o.kt)("p",null,"Currently, we do not provide an SDK that makes the integration as easy as the ",(0,o.kt)("a",{parentName:"p",href:"/guides/frontend"},"Hanko element web component"),".\nIn this guide you will learn what you need to do in order to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/teamhanko/hanko/backend"},"Hanko backend")," in your app."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This section shows a high level overview of the steps you need to perform in your app in order to have the same flow as in our web component.\nIn the ",(0,o.kt)("a",{parentName:"p",href:"#steps"},"Steps")," section we provide more details about each step."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guides focuses on the passwordless flow, so passwords will be ignored.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#check-if-the-user-exists"},"Check if the user exists")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-user"},"If the user does not exist, create the user")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#send-a-passcode"},"Send a passcode to the user")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-passkey-optional"},"(optional) Offer to create a passkey")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#login-with-a-passkey-optional"},"(optional) Login with a passkey"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Passkeys are only supported from iOS 16 and above and from Android 9 and above.")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"check-if-the-user-exists"},"Check if the user exists"),(0,o.kt)("p",null,"After an email input was shown and the user provided his email, you should check if the user already exists.\nYou can do this by using the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/User-Management/operation/getUserId"},"Get user details by email")," endpoint."),(0,o.kt)("p",null,"You will either get an HTTP status code of ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"404"),". If you got a ",(0,o.kt)("inlineCode",{parentName:"p"},"200"),", remember the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," returned in the response object and go to step ",(0,o.kt)("a",{parentName:"p",href:"#send-a-passcode"},"Send a passcode"),".\nIf you got a ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," go to the ",(0,o.kt)("a",{parentName:"p",href:"#create-user"},"next step"),"."),(0,o.kt)("h3",{id:"create-user"},"Create user"),(0,o.kt)("p",null,"When the user does not already exist, you will need to create the user before you can verify the email. The user can be created using the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/User-Management/operation/createUser"},"Create a user")," endpoint."),(0,o.kt)("p",null,"You will either get an HTTP status code of ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"409"),". If you got a ",(0,o.kt)("inlineCode",{parentName:"p"},"409"),", then the user already exists, and you can obtain the users ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the success response of the endpoint mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"#check-if-user-exist"},"previous step"),".\nIf you got a ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," remember the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," returned in the response object."),(0,o.kt)("h3",{id:"send-a-passcode"},"Send a passcode"),(0,o.kt)("p",null,"To verify an email address or to log in the user, you need to send a passcode to the provided email and verify that the user has access to the emails. To send a passcode just use the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/Passcode/operation/passcodeInit"},"Initialize passcode login")," endpoint.\nYou need to provide the user's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," you obtained in one of the previous steps. If sending the passcode was successful, you will get an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," for the passcode in the response object. Remember this ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", because you will need it to finalize the passcode."),(0,o.kt)("p",null,"When the user entered the passcode, send it together with the passcode ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/Passcode/operation/passcodeInit"},"Init endpoint")," to the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/Passcode/operation/passcodeFinal"},"Finalize passcode login")," endpoint.\nWhen the passcode is correct you will get a JWT either as a cookie or in the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Auth-Token")," header (depends on the configuration of the Hanko backend) ."),(0,o.kt)("p",null,"The user is now logged in. To verify (in your backend) that the JWT is valid, see our ",(0,o.kt)("a",{parentName:"p",href:"/guides/backend"},"Backend guide"),".\nOptionally you can offer the user to register a passkey, to login faster the next time. See the next step on how to do it."),(0,o.kt)("h3",{id:"create-a-passkey-optional"},"Create a passkey (optional)"),(0,o.kt)("p",null,"To create a passkey you will need to use the native APIs, that ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/fido/android/native-apps"},"Google"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider"},"Apple"),"\nprovide for their systems. Find out how to use them ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys"},"here"),"\n(Apple) and ",(0,o.kt)("a",{parentName:"p",href:"https://codelabs.developers.google.com/codelabs/fido2-for-android#0"},"here")," (Android)."),(0,o.kt)("p",null,"For both you will need ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKeyCredentialAttestationOptions")," which you can get from the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/WebAuthn/operation/webauthnRegInit"},"Initialize WebAuthn registration")," endpoint."),(0,o.kt)("p",null,"After the native system APIs were called with the options you will receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKeyCredentialAttestationResponse"),". Send the response to the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/WebAuthn/operation/webauthnRegFinal"},"Finalize WebAuthn registration")," endpoint.\nIf successful, the user can use the created passkey to login faster the next time."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The two endpoints (",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/WebAuthn/operation/webauthnRegInit"},"Initialize WebAuthn registration")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/WebAuthn/operation/webauthnRegFinal"},"Finalize WebAuthn registration"),") mentioned above can only be called with a valid JWT.")),(0,o.kt)("h3",{id:"login-with-a-passkey-optional"},"Login with a passkey (optional)"),(0,o.kt)("p",null,'In order to use a passkey for login, add a button ("Sign in with a passkey") under your email input. After interaction with the button, call the native APIs that ',(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/fido/android/native-apps"},"Google"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/authenticationservices/asauthorizationplatformpublickeycredentialprovider"},"Apple"),"\nFind out how to use them ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/authenticationservices/public-private_key_authentication/supporting_passkeys"},"here"),"\n(Apple) and ",(0,o.kt)("a",{parentName:"p",href:"https://codelabs.developers.google.com/codelabs/fido2-for-android#0"},"here")," (Android)."),(0,o.kt)("p",null,"For both you will need ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKeyCredentialAssertionOptions")," which you can get from the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/WebAuthn/operation/webauthnLoginInit"},"Initialize WebAuthn login")," endpoint."),(0,o.kt)("p",null,"After the native system APIs were called with the options you will receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKeyCredentialAssertionResponse"),". Send the response to the ",(0,o.kt)("a",{parentName:"p",href:"/api/public#tag/WebAuthn/operation/webauthnLoginFinal"},"Finalize WebAuthn login")," endpoint.\nIf successful you will get back a JWT either as a cookie or in the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Auth-Token")," header (depends on the configuration of the Hanko backend)."),(0,o.kt)("p",null,"The user is now logged in. To verify (in your backend) that the JWT is valid, see our ",(0,o.kt)("a",{parentName:"p",href:"/guides/backend"},"Backend guide"),"."))}u.isMDXComponent=!0}}]);