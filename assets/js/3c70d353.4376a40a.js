"use strict";(self.webpackChunkhkb=self.webpackChunkhkb||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,b=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={},o="SMB",i={unversionedId:"services/smb",id:"services/smb",title:"SMB",description:"The Server Message Block (SMB) protocol is a network file sharing protocol primarily used by Microsoft Windows systems. It enables users to read, write, and request services from remote servers and facilitates the sharing of resources, such as files, printers, and serial ports among devices on a network.",source:"@site/docs/services/smb.md",sourceDirName:"services",slug:"/services/smb",permalink:"/services/smb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FTP",permalink:"/services/ftp"},next:{title:"Default Credentials",permalink:"/usernames-and-passwords/default-credentials"}},l={},c=[{value:"Footprinting",id:"footprinting",level:2},{value:"Null Sessions",id:"null-sessions",level:2},{value:"RCE",id:"rce",level:2},{value:"Resources",id:"resources",level:2},{value:"Internal",id:"internal",level:3},{value:"External",id:"external",level:3}],m={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"smb"},"SMB"),(0,s.kt)("p",null,"The Server Message Block (SMB) protocol is a network file sharing protocol primarily used by Microsoft Windows systems. It enables users to read, write, and request services from remote servers and facilitates the sharing of resources, such as files, printers, and serial ports among devices on a network."),(0,s.kt)("h2",{id:"footprinting"},"Footprinting"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using nmap"',title:'"Using','nmap"':!0},"nmap -p 445 -sCV <ip>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="SMB scripts for nmap"',title:'"SMB',scripts:!0,for:!0,'nmap"':!0},"smb-psexec\nsmb-vuln-ms07-029\nsmb-enum-processes\nsmb-enum-domains\nsmb-vuln-cve-2017-7494\nsmb-brute\nsmb-vuln-conficker\nsmb-enum-groups\nsmb2-capabilities\nsmb-ls\nsmb2-time\nsmb2-vuln-uptime\nsmb-vuln-ms06-025\nsmb-webexec-exploit\nsmb-vuln-ms08-067\nsmb-enum-sessions\nsmb-enum-services\nsmb-mbenum\nsmb-vuln-ms17-010\nsmb-enum-users\nsmb-security-mode\nsmb-vuln-webexec\nsmb-os-discovery\nsmb-protocols\nsmb-vuln-ms10-061\nsmb-vuln-regsvc-dos\nsmb-flood\nsmb-vuln-cve2009-3103\nsmb-print-text\nsmb-vuln-ms10-054\nsmb2-security-mode\nsmb-double-pulsar-backdoor\nsmb-server-stats\nsmb-system-info\nsmb-enum-shares\n")),(0,s.kt)("h2",{id:"null-sessions"},"Null Sessions"),(0,s.kt)("p",null,"The SMB null session is a type of anonymous, non-authenticated connection that can be established with a server. It provides an avenue to query system details such as shared resources, user accounts, and system configurations without the need for credentials. It can be exploited by malicious actors who can gather sensitive information about the system, potentially facilitating unauthorized access, data breaches, or other cyberattacks."),(0,s.kt)("p",null,"You can use CrackMapExec to try for this type of connection."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"crackmapexec smb <ip> -u '' -p '' --shares\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"There's a difference between using ",(0,s.kt)("inlineCode",{parentName:"p"},"-u ''")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"-u ' '"),". It seems related to guest sessions."),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Make sure to test both."))),(0,s.kt)("h2",{id:"rce"},"RCE"),(0,s.kt)("p",null,"You can achieve RCE using several tools and methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Impacket PsExec - Python PsExec like functionality example using RemComSvc."),(0,s.kt)("li",{parentName:"ul"},"Impacket SMBExec - A similar approach to PsExec without using RemComSvc. The technique is described here. This implementation goes one step further, instantiating a local SMB server to receive the output of the commands. This is useful when the target machine does NOT have a writeable share available."),(0,s.kt)("li",{parentName:"ul"},"Impacket atexec - This example executes a command on the target machine through the Task Scheduler service and returns the output of the executed command."),(0,s.kt)("li",{parentName:"ul"},"CrackMapExec - includes an implementation of smbexec and atexec."),(0,s.kt)("li",{parentName:"ul"},"Metasploit PsExec - Ruby PsExec implementation."),(0,s.kt)("li",{parentName:"ul"},"SMBClient")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You may want to try several tools if one doesn't work. Also, make sure to change the ",(0,s.kt)("inlineCode",{parentName:"p"},"--exec-method")," for CrackMapExec.")),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("h3",{id:"internal"},"Internal"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/commands-cheatsheet/crackmapexec"},"SMB Cheatsheet"))),(0,s.kt)("h3",{id:"external"},"External"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://book.hacktricks.xyz/network-services-pentesting/pentesting-smb"},"HackTricks Book"))))}p.isMDXComponent=!0}}]);