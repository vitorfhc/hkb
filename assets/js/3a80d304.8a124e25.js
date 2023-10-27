"use strict";(self.webpackChunkhkb=self.webpackChunkhkb||[]).push([[854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={},l="Bash",s={unversionedId:"commands-cheatsheet/linux/bash",id:"commands-cheatsheet/linux/bash",title:"Bash",description:"Processes",source:"@site/docs/commands-cheatsheet/00-linux/bash.md",sourceDirName:"commands-cheatsheet/00-linux",slug:"/commands-cheatsheet/linux/bash",permalink:"/commands-cheatsheet/linux/bash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/"},next:{title:"Batch and Powershell",permalink:"/commands-cheatsheet/windows/batch-and-powershell"}},o={},c=[{value:"Processes",id:"processes",level:2},{value:"List processes",id:"list-processes",level:3},{value:"Trace processes system calls",id:"trace-processes-system-calls",level:3},{value:"File System",id:"file-system",level:2},{value:"Find files by name",id:"find-files-by-name",level:3},{value:"Find files by content",id:"find-files-by-content",level:3},{value:"Create a <code>.tar</code> archive",id:"create-a-tar-archive",level:3},{value:"Extract a <code>.tar</code> archive",id:"extract-a-tar-archive",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bash"},"Bash"),(0,i.kt)("h2",{id:"processes"},"Processes"),(0,i.kt)("h3",{id:"list-processes"},"List processes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="List all processes"',title:'"List',all:!0,'processes"':!0},"ps aux\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="List all processes running as root"',title:'"List',all:!0,processes:!0,running:!0,as:!0,'root"':!0},"ps aux | grep ^root\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="List the processes tree"',title:'"List',the:!0,processes:!0,'tree"':!0},"ps auxf\n")),(0,i.kt)("admonition",{title:"Command explanation",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," lists processes from all users"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"u")," displays the process's user/owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," lists processes without a controlling terminal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"f")," displays a tree of processes"))),(0,i.kt)("h3",{id:"trace-processes-system-calls"},"Trace processes system calls"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run and trace a process"',title:'"Run',and:!0,trace:!0,a:!0,'process"':!0},"strace <command>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Trace a process"',title:'"Trace',a:!0,'process"':!0},"strace -p <pid>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Trace a process and its children"',title:'"Trace',a:!0,process:!0,and:!0,its:!0,'children"':!0},"strace -p <pid> -f\n")),(0,i.kt)("admonition",{title:"strace",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You'll need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"strace")," on the target machine to use it. Also, you'll need to be root to trace processes you don't own.")),(0,i.kt)("admonition",{title:"Containers",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you're tracing a process inside a container, you'll need ",(0,i.kt)("inlineCode",{parentName:"p"},"SYS_PTRACE")," capabilities.")),(0,i.kt)("h2",{id:"file-system"},"File System"),(0,i.kt)("h3",{id:"find-files-by-name"},"Find files by name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Simple find"',title:'"Simple','find"':!0},"# Find flag.txt recursively from root\nfind / -name flag.txt 2>/dev/null\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can change ",(0,i.kt)("inlineCode",{parentName:"p"},"-name")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"-iname")," to make the search case-insensitive.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find every executable file with SUID permissions"',title:'"Find',every:!0,executable:!0,file:!0,with:!0,SUID:!0,'permissions"':!0},"find / -perm -u=s -type f 2>/dev/null\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Find every executable file with SUID permissions owned by root"',title:'"Find',every:!0,executable:!0,file:!0,with:!0,SUID:!0,permissions:!0,owned:!0,by:!0,'root"':!0},"find / -uid 0 -perm -u=s -type f 2>/dev/null\n")),(0,i.kt)("admonition",{title:"Command explanation",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-uid 0")," specifies the user ID to search for (in this case, root)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-perm -u=s")," specifies the permissions to search for (in this case, SUID)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-type f")," specifies the file type to search for (in this case, a file)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2> /dev/null")," redirects errors to ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/null")))),(0,i.kt)("h3",{id:"find-files-by-content"},"Find files by content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\"Find everyfile which contains the word 'password'\"",title:'"Find',everyfile:!0,which:!0,contains:!0,the:!0,word:!0,"'password'\"":!0},"grep -irn / -e password 2>/dev/null\n")),(0,i.kt)("admonition",{title:"Command explanation",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-i")," makes the search case-insensitive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-r")," makes the search recursive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-n")," prints the line number of the match"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-e")," specifies the regex pattern to search for"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2> /dev/null")," redirects errors to ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/null")))),(0,i.kt)("h3",{id:"create-a-tar-archive"},"Create a ",(0,i.kt)("inlineCode",{parentName:"h3"},".tar")," archive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create a .tar archive"',title:'"Create',a:!0,".tar":!0,'archive"':!0},"tar -czvf archive.tar <file>\n")),(0,i.kt)("admonition",{title:"Command explanation",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-c")," creates a new archive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-z")," compresses the archive with gzip"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," prints the files being archived"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f")," specifies the archive file"))),(0,i.kt)("h3",{id:"extract-a-tar-archive"},"Extract a ",(0,i.kt)("inlineCode",{parentName:"h3"},".tar")," archive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Extract a .tar archive"',title:'"Extract',a:!0,".tar":!0,'archive"':!0},"tar -xzvf archive.tar\n")),(0,i.kt)("admonition",{title:"Command explanation",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-x")," extracts the archive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-z")," specifies the archive is compressed with gzip"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v")," prints the files being extracted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f")," specifies the archive file"))))}d.isMDXComponent=!0}}]);