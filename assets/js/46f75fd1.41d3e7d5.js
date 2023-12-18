"use strict";(self.webpackChunkhkb=self.webpackChunkhkb||[]).push([[919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="Batch and Powershell",s={unversionedId:"cheatsheets/windows/batch-and-powershell",id:"cheatsheets/windows/batch-and-powershell",title:"Batch and Powershell",description:"Active Directory",source:"@site/docs/cheatsheets/00-windows/batch-and-powershell.md",sourceDirName:"cheatsheets/00-windows",slug:"/cheatsheets/windows/batch-and-powershell",permalink:"/hkb/cheatsheets/windows/batch-and-powershell",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/hkb/cheatsheets/linux/bash"},next:{title:"Dumping Credentials",permalink:"/hkb/cheatsheets/windows/dumping-credentials"}},o={},c=[{value:"Active Directory",id:"active-directory",level:2},{value:"Load the built-in Active Directory PowerShell module",id:"load-the-built-in-active-directory-powershell-module",level:3},{value:"List domain users using Get-ADUser and filter by the username",id:"list-domain-users-using-get-aduser-and-filter-by-the-username",level:3},{value:"Check the description field of domain users for sensitive data such as passwords",id:"check-the-description-field-of-domain-users-for-sensitive-data-such-as-passwords",level:3},{value:"Applications, processes, and services",id:"applications-processes-and-services",level:2},{value:"Show running processes",id:"show-running-processes",level:3},{value:"Users and groups",id:"users-and-groups",level:2},{value:"Current user security privileges",id:"current-user-security-privileges",level:3},{value:"Current user local groups",id:"current-user-local-groups",level:3},{value:"File System",id:"file-system",level:2},{value:"Display List of Files and Directories",id:"display-list-of-files-and-directories",level:3},{value:"Changing Directory",id:"changing-directory",level:3},{value:"Creating a New Directory",id:"creating-a-new-directory",level:3},{value:"Deleting a File",id:"deleting-a-file",level:3},{value:"Copying Files",id:"copying-files",level:3},{value:"Displaying Content of a File",id:"displaying-content-of-a-file",level:3},{value:"Find files by content",id:"find-files-by-content",level:3},{value:"Mount SMB share",id:"mount-smb-share",level:3},{value:"Move file to unmounted SMB share",id:"move-file-to-unmounted-smb-share",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"batch-and-powershell"},"Batch and Powershell"),(0,a.kt)("h2",{id:"active-directory"},"Active Directory"),(0,a.kt)("h3",{id:"load-the-built-in-active-directory-powershell-module"},"Load the built-in Active Directory PowerShell module"),(0,a.kt)("p",null,"Use one of the following commands to install the Active Directory module (",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/19182497/import-module-the-specified-module-activedirectory-was-not-loaded-because-no"},"source"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Add-WindowsFeature RSAT-AD-PowerShell\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -FeatureName ActiveDirectory-Powershell -Online -All\n")),(0,a.kt)("p",null,"Then, load the module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"Import-Module ActiveDirectory\n")),(0,a.kt)("h3",{id:"list-domain-users-using-get-aduser-and-filter-by-the-username"},"List domain users using Get-ADUser and filter by the username"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"Get-ADUser -Filter * | select Name\n")),(0,a.kt)("h3",{id:"check-the-description-field-of-domain-users-for-sensitive-data-such-as-passwords"},"Check the description field of domain users for sensitive data such as passwords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"Get-DomainUser * | Select-Object samaccountname,description\n")),(0,a.kt)("h2",{id:"applications-processes-and-services"},"Applications, processes, and services"),(0,a.kt)("h3",{id:"show-running-processes"},"Show running processes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="cmd.exe"',title:'"cmd.exe"'},"tasklist\ntasklist /svc\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"Get-Process\nGet-Process <process> # the name must be exact\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"External resources:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/tasklist"},(0,a.kt)("inlineCode",{parentName:"a"},"tasklist")," Docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-process"},(0,a.kt)("inlineCode",{parentName:"a"},"Get-Process")," Docs"))),(0,a.kt)("h2",{id:"users-and-groups"},"Users and groups"),(0,a.kt)("h3",{id:"current-user-security-privileges"},"Current user security privileges"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="cmd.exe"',title:'"cmd.exe"'},"whoami /priv\n")),(0,a.kt)("h3",{id:"current-user-local-groups"},"Current user local groups"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="cmd.exe"',title:'"cmd.exe"'},"net localgroup\n")),(0,a.kt)("h2",{id:"file-system"},"File System"),(0,a.kt)("p",null,"Absolutely, here are some common PowerShell and Batch commands. "),(0,a.kt)("h3",{id:"display-list-of-files-and-directories"},"Display List of Files and Directories"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using dir"',title:'"Using','dir"':!0},"dir\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using Get-ChildItem"',title:'"Using','Get-ChildItem"':!0},"Get-ChildItem\n")),(0,a.kt)("h3",{id:"changing-directory"},"Changing Directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using cd"',title:'"Using','cd"':!0},"cd \\path\\to\\directory\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using Set-Location"',title:'"Using','Set-Location"':!0},"Set-Location -Path \\path\\to\\directory\n")),(0,a.kt)("h3",{id:"creating-a-new-directory"},"Creating a New Directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using mkdir"',title:'"Using','mkdir"':!0},"mkdir new_directory\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using New-Item"',title:'"Using','New-Item"':!0},"New-Item -ItemType Directory -Path .\\new_directory\n")),(0,a.kt)("h3",{id:"deleting-a-file"},"Deleting a File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using del"',title:'"Using','del"':!0},"del filename\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using Remove-Item"',title:'"Using','Remove-Item"':!0},"Remove-Item -Path filename\n")),(0,a.kt)("h3",{id:"copying-files"},"Copying Files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using copy"',title:'"Using','copy"':!0},"copy source destination\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using Copy-Item"',title:'"Using','Copy-Item"':!0},"Copy-Item -Path source -Destination destination\n")),(0,a.kt)("h3",{id:"displaying-content-of-a-file"},"Displaying Content of a File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using type"',title:'"Using','type"':!0},"type filename\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using Get-Content"',title:'"Using','Get-Content"':!0},"Get-Content -Path filename\n")),(0,a.kt)("h3",{id:"find-files-by-content"},"Find files by content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:"title=\"Search for 'password' using findstr\"",title:'"Search',for:!0,"'password'":!0,using:!0,'findstr"':!0},'findstr /sim /c:"password" *.txt *.ini *.cfg *.config *.xml *.git *.ps1 *.yml\n')),(0,a.kt)("admonition",{title:"Command explanation",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/s")," searches for matching files in the current directory and all subdirectories"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/i")," makes the search case-insensitive"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/m")," only prints the file names of matching files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/c")," specifies the string to search for"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"External resources:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/findstr"},(0,a.kt)("inlineCode",{parentName:"a"},"findstr")," Docs"))),(0,a.kt)("h3",{id:"mount-smb-share"},"Mount SMB share"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using net use"',title:'"Using',net:!0,'use"':!0},"net use Z: \\\\server\\share /user:username password\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using New-PSDrive"',title:'"Using','New-PSDrive"':!0},"New-PSDrive -Name Z -PSProvider FileSystem -Root \\\\server\\share -Credential username\n")),(0,a.kt)("h3",{id:"move-file-to-unmounted-smb-share"},"Move file to unmounted SMB share"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-batch",metastring:'title="Using copy"',title:'"Using','copy"':!0},"copy file.txt \\\\server\\share\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Using Copy-Item"',title:'"Using','Copy-Item"':!0},"Copy-Item -Path file.txt -Destination \\\\server\\share\n")))}u.isMDXComponent=!0}}]);