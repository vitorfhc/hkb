"use strict";(self.webpackChunkhkb=self.webpackChunkhkb||[]).push([[854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(k,s(s({ref:t},h),{},{components:a})):r.createElement(k,s({ref:t},h))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={},s="Pass the Key / Overpass the Hash",i={unversionedId:"lateral-movement/windows/pass-the-key",id:"lateral-movement/windows/pass-the-key",title:"Pass the Key / Overpass the Hash",description:"The traditional Pass the Hash technique involves reusing an NTLM password hash that doesn't touch Kerberos. The Pass the Key or Overpass the Hash approach converts a hash/key for a domain-joined user into a full Ticket-Granting-Ticket (TGT).",source:"@site/docs/lateral-movement/windows/pass-the-key.md",sourceDirName:"lateral-movement/windows",slug:"/lateral-movement/windows/pass-the-key",permalink:"/hkb/lateral-movement/windows/pass-the-key",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pass the Hash",permalink:"/hkb/lateral-movement/windows/pass-the-hash"},next:{title:"Pass the Ticket",permalink:"/hkb/lateral-movement/windows/pass-the-ticket"}},c={},l=[{value:"Examples",id:"examples",level:2},{value:"Mimikatz and Rubeus",id:"mimikatz-and-rubeus",level:3},{value:"External Resources",id:"external-resources",level:2}],h={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pass-the-key--overpass-the-hash"},"Pass the Key / Overpass the Hash"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The traditional Pass the Hash technique involves reusing an NTLM password hash that doesn't touch Kerberos. The Pass the Key or Overpass the Hash approach converts a hash/key for a domain-joined user into a full Ticket-Granting-Ticket (TGT)."),(0,n.kt)("p",{parentName:"blockquote"},"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://academy.hackthebox.com/module/147/section/1639"},"HackTheBox Academy"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This attack aims to use the user NTLM hash or AES keys to request Kerberos tickets, as an alternative to the common Pass The Hash over NTLM protocol. Therefore, this could be especially useful in networks where NTLM protocol is disabled and only Kerberos is allowed as authentication protocol."),(0,n.kt)("p",{parentName:"blockquote"},"In order to perform this attack, the NTLM hash (or password) of the target user account is needed. Thus, once a user hash is obtained, a TGT can be requested for that account. Finally, it is possible to access any service or machine where the user account has permissions."),(0,n.kt)("p",{parentName:"blockquote"},"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/over-pass-the-hash-pass-the-key"},"HackTricks"))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"mimikatz-and-rubeus"},"Mimikatz and Rubeus"),(0,n.kt)("p",null,"You must first harvest the Kerberos encryption keys from the target machine. This can be done with Mimikatz or Rubeus."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},'mimikatz.exe "sekurlsa::ekeys" "exit"\n')),(0,n.kt)("p",null,"Then, you can use Rubeus to request a TGT for the target user."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-batch"},"Rubeus.exe asktgt /user:<user> /rc4:<hash> /domain:<domain>\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"/ptt")," flag to Rubeus command to inject the ticket into the current session."),(0,n.kt)("p",{parentName:"admonition"},"Now, you are also performing a ",(0,n.kt)("a",{parentName:"p",href:"/lateral-movement/windows/pass-the-ticket"},"Pass the Ticket (PtT) attack"),".")),(0,n.kt)("h2",{id:"external-resources"},"External Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tarlogic.com/blog/how-to-attack-kerberos/#Overpass_The_HashPass_The_Key_PTK"},"How to Attack Kerberos by Tarlogic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/over-pass-the-hash-pass-the-key"},"HackTricks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GhostPack/Rubeus#example-over-pass-the-hash"},"Rubeus docs on the difference between PtH and PtK"))))}u.isMDXComponent=!0}}]);