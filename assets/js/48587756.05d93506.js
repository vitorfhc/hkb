"use strict";(self.webpackChunkhkb=self.webpackChunkhkb||[]).push([[457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const s={},o="Password Mutations",i={unversionedId:"usernames-and-passwords/password-mutations",id:"usernames-and-passwords/password-mutations",title:"Password Mutations",description:"Password mutations in security refer to systematic alterations of a base password to form related, but new, passwords.",source:"@site/docs/usernames-and-passwords/password-mutations.md",sourceDirName:"usernames-and-passwords",slug:"/usernames-and-passwords/password-mutations",permalink:"/usernames-and-passwords/password-mutations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Default Credentials",permalink:"/usernames-and-passwords/default-credentials"},next:{title:"Usernames and Emails",permalink:"/usernames-and-passwords/usernames-and-emails"}},l={},u=[{value:"Hashcat",id:"hashcat",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"password-mutations"},"Password Mutations"),(0,n.kt)("p",null,"Password mutations in security refer to systematic alterations of a base password to form related, but new, passwords."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Mutation Example"',title:'"Mutation','Example"':!0},"Password: password\nMutations:\n  p@ssw0rd\n  password!\n  Password123\n")),(0,n.kt)("h2",{id:"hashcat"},"Hashcat"),(0,n.kt)("p",null,"Hashcat has a built-in password mutation engine that can be used to generate mutations of a base password."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Hashcat"',title:'"Hashcat"'},"hashcat --stdout <base_password> -r <rulesfile> | tee passwords.txt\n")),(0,n.kt)("p",null,"You can find the rules using the command below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find Hashcat Rules"',title:'"Find',Hashcat:!0,'Rules"':!0},"find / -name '*.rule' 2> /dev/null | grep hashcat\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"best64.rule")," rule is a good starting point."))}d.isMDXComponent=!0}}]);