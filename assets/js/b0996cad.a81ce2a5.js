"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=l,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(3117),l=(a(7294),a(3905));const o={title:"TroubleShoot on Windows",id:"troubleshoot_windows"},r=void 0,i={unversionedId:"troubleshoot/troubleshoot_windows",id:"troubleshoot/troubleshoot_windows",title:"TroubleShoot on Windows",description:"- Haskell: the issue with ghc version 9.6.1 has been resolved.",source:"@site/docs/troubleshoot/TroubleShoot_Windows.md",sourceDirName:"troubleshoot",slug:"/troubleshoot/troubleshoot_windows",permalink:"/docs/troubleshoot/troubleshoot_windows",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/troubleshoot/TroubleShoot_Windows.md",tags:[],version:"current",lastUpdatedAt:1683829230,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{title:"TroubleShoot on Windows",id:"troubleshoot_windows"},sidebar:"docs",previous:{title:"Troubleshoot on MacOS",permalink:"/docs/troubleshoot/troubleshoot_macos"},next:{title:"Atom",permalink:"/docs/getting-started/editor/Atom"}},s={},p=[{value:"Haskell ghci version issues",id:"haskell-ghci-version-issues",level:3},{value:"SuperDirt install hangs during choco install",id:"superdirt-install-hangs-during-choco-install",level:3},{value:"network-3.1.2.8 error during Tidal package install",id:"network-3128-error-during-tidal-package-install",level:3},{value:"other package errors from Tidal package install",id:"other-package-errors-from-tidal-package-install",level:3},{value:"Is Haskell installed?",id:"is-haskell-installed",level:3},{value:"Is the Tidal Library installed?",id:"is-the-tidal-library-installed",level:3},{value:"Is SuperDirt alright?",id:"is-superdirt-alright",level:2},{value:"CLASS Not Found",id:"class-not-found",level:3},{value:"Could not bind to requested port",id:"could-not-bind-to-requested-port",level:3},{value:"Why don&#39;t I hear anything?",id:"why-dont-i-hear-anything",level:2},{value:"Missing samples",id:"missing-samples",level:3},{value:"Audio configuration",id:"audio-configuration",level:3},{value:"Installing via &#39;stack&#39; rather than &#39;cabal&#39;",id:"installing-via-stack-rather-than-cabal",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Haskell: the issue with ghc version 9.6.1 has been resolved."),(0,l.kt)("li",{parentName:"ul"},"Haskell: A new network package is available (",(0,l.kt)("inlineCode",{parentName:"li"},"network-3.1.2.9"),"). This will be automatically installed when you use the most current ghc/cabal versions."),(0,l.kt)("li",{parentName:"ul"},"A new troubleshooting step is available for SuperDirt install hangs during chocolatey install."))),(0,l.kt)("h3",{id:"haskell-ghci-version-issues"},"Haskell ghci version issues"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Haskell install method - choco vs ghcup"),(0,l.kt)("div",null,(0,l.kt)("div",null,"If you are experiencing Haskell problems, it is important to know what install method you used (choco vs ghcup). You also need to decide if you want to continue using choco to resolve install issues, or switch to ghcup, the native Haskell installer. If you switch to ghcup, you should consider removing components from choco, and starting from a clean system."),(0,l.kt)("br",null))),(0,l.kt)("p",null,"Version 9.6.1 is now compatible with Tidal. Cabal ",(0,l.kt)("inlineCode",{parentName:"p"},"3.10.1.0")," is now ",(0,l.kt)("strong",{parentName:"p"},"required")," to get the correct current version of the network package ",(0,l.kt)("inlineCode",{parentName:"p"},"network-3.1.2.9"),". On Windows, these are the ",(0,l.kt)("strong",{parentName:"p"},"recommended versions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ghci 9.6.1"),(0,l.kt)("li",{parentName:"ul"},"cabal 3.10.1.0")),(0,l.kt)("p",null,"To upgrade versions with choco, first uninstall ghc/cabal, then install with the exact version argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"choco uninstall ghc\nchoco uninstall cabal\nchoco install ghc --version=9.6.1\nchoco install cabal --version=3.10.1.0\n\n")),(0,l.kt)("p",null,"To change versions with ghcup:",(0,l.kt)("br",{parentName:"p"}),"\n","(If you don't have ghcup, see ",(0,l.kt)("a",{parentName:"p",href:"https://www.haskell.org/ghcup/install/"},"Haskell ghcup install"),".)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"ghcup install ghc 9.6.1\nghcup install cabal 3.10.1.0\nghcup set ghc 9.6.1\nghcup set cabal 3.10.1.0\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Before installing/reinstalling the Tidal package it is recommended to ",(0,l.kt)("strong",{parentName:"li"},"delete")," your local ghc and cabal directories. These are usually in your user ",(0,l.kt)("inlineCode",{parentName:"li"},"\\AppData\\Roaming")," directory but could also be in other directories under ",(0,l.kt)("inlineCode",{parentName:"li"},"\\AppData\\"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\Users\\<yourUser>\\AppData\\Roaming\\ghc\\\nC:\\Users\\<yourUser>\\AppData\\Roaming\\cabal\\\nC:\\Users\\<yourUser>\\AppData\\Local\\ghc\\\nC:\\Users\\<yourUser>\\AppData\\Local\\cabal\\\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Now run the Tidal package install commands:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"cabal update\ncabal v1-install tidal\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The steps to delete your local ghc/cabal directories and then run Tidal cabal commands are standard practice for any issue where your Tidal install fails.")),(0,l.kt)("h3",{id:"superdirt-install-hangs-during-choco-install"},"SuperDirt install hangs during choco install"),(0,l.kt)("p",null,"SuperDirt is installed using a command that runs in SuperCollider. Sometimes the install process doesn't complete properly and the choco installer won't continue. This is most likely due to an orphaned process in SuperCollider. You can resolve this by killing the process in Windows Task Manager."),(0,l.kt)("p",null,"If you see the install process with this message and no further activity for a long time (> 5+ mins), it is likely stuck:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"...\nSuperDirt installed\n** Downloading samples ** - please be patient, this may take a while.\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installation complete!\nBooting server 'localhost' on address 127.0.0.1:57110.\ncleaning up OSC\n")),(0,l.kt)("p",null,"Steps to resolve:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Start the Windows Task Manager"),(0,l.kt)("li",{parentName:"ul"},"Identify the orphaned SuperCollider process (sclang or scide.exe)"),(0,l.kt)("li",{parentName:"ul"},'Highlight the task and select the "End task" button',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'To be more exact, use "More details" to view all running processes.'),(0,l.kt)("li",{parentName:"ul"},'Find an orphaned process connected to SuperCollider and select "End task"'))),(0,l.kt)("li",{parentName:"ul"},"This should let the choco install process continue")),(0,l.kt)("h3",{id:"network-3128-error-during-tidal-package-install"},"network-3.1.2.8 error during Tidal package install"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"failed to install network-3.1.2.8",(0,l.kt)("br",{parentName:"p"}),"\n","package has a ./configure script. If on windows, this requires a unix compatibility\ntoolchain such as MinGW+MSYS or Cygwin.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This error shows that you don't have the current version of the network package.\nInstall of Cygwin is not needed. Haskell installs from either choco or ghcup will install msys2 which provides the unix shell. What is missing is that cabal can't find it, so you need to fix your PATH.")),(0,l.kt)("p",null,"Steps to resolve:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FIRST - follow the steps above to make sure you have the correct versions of ghc and cabal. Note that cabal 3.8.1.0 will install the wrong version of the network package and won't resolve this error."),(0,l.kt)("li",{parentName:"ul"},"Remove your local ghc and cabal directories (see above)."),(0,l.kt)("li",{parentName:"ul"},"Install tidal package again (see above)."),(0,l.kt)("li",{parentName:"ul"},"If you continue to have problems, you may have problems with your PATH environment v"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Choco:")," Add these values to your system PATH environment variable:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\tools\\ghc-9.4.4\\mingw\\bin\nC:\\tools\\msys64\\usr\\bin\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ghcup:")," Add these values to your system PATH environment variable:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\ghcup\\ghc\\9.4.4\\mingw\\bin\nC:\\ghcup\\msys64\\usr\\bin\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"exit and restart powershell (as admin)",(0,l.kt)("br",{parentName:"p"}),"\n","Don't skip this - it will ensure your new PATH settings are applied.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Follow the steps outlined above to delete your local ghc and cabal directories, and then run the Tidal package install commands again."))),(0,l.kt)("h3",{id:"other-package-errors-from-tidal-package-install"},"other package errors from Tidal package install"),(0,l.kt)("p",null,"Sometimes the Tidal package install (from cabal) will fail with multiple errors. Sometimes you even see a long string of errors. Often these are related to the ",(0,l.kt)("inlineCode",{parentName:"p"},"network-3.1.2.8")," error and will be resolved by following those steps."),(0,l.kt)("p",null,"If your errors don't include the network-3.1.2.8 error, the first path to resolution is to clean out your package install, and run the cabal commands again (above)."),(0,l.kt)("p",null,"Other things to check:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Be sure to clean out all ghc/cabal directories in your local \\AppData","."," (See above)"),(0,l.kt)("li",{parentName:"ul"},"If you have Haskell components installed by both choco and ghcup, this could cause problems."),(0,l.kt)("li",{parentName:"ul"},"Check your environment variables, restart PowerShell (as admin). Reboot.")),(0,l.kt)("h3",{id:"is-haskell-installed"},"Is Haskell installed?"),(0,l.kt)("p",null,"Open a terminal window, and type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ghci\n")),(0,l.kt)("p",null,"You should see something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GHCi, version 8.6.3: http://www.haskell.org/ghc/  :? for help\nPrelude>\n")),(0,l.kt)("p",null,"If you don't see something like the above, you probably need to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.haskell.org/"},"Haskell"),". You might well see a different version number, don't worry. At the time of writing, Tidal is tested against versions right back to 7.10.3."),(0,l.kt)("p",null,"To get more information, refer back to the installation page for Windows."),(0,l.kt)("h3",{id:"is-the-tidal-library-installed"},"Is the Tidal Library installed?"),(0,l.kt)("p",null,"Keeping that ",(0,l.kt)("strong",{parentName:"p"},"ghci")," window open, type (or paste in):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"import Sound.Tidal.Context\n")),(0,l.kt)("p",null,"You should now see something like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"GHCi, version 9.4.4: http://www.haskell.org/ghc/  :? for help\nPrelude> import Sound.Tidal.Context\nPrelude Sound.Tidal.Context>\n")),(0,l.kt)("p",null,"If you instead see an error message like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"<no location info>: error:\n  Could not find module \u2018Sound.Tidal.Context\u2019\n")),(0,l.kt)("p",null,"This means that the Tidal library isn't installed. To install it, open a new terminal window and type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cabal update\ncabal v1-install tidal\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"You can ignore warnings about ",(0,l.kt)("em",{parentName:"p"},"'legacy v1 style'"),".")),(0,l.kt)("p",null,"If you still see an error message, then make sure you have installed the ",(0,l.kt)("strong",{parentName:"p"},"Full")," Haskell Platform and try again. If it still doesn't work, ask help on the Forum or on the Discord or RocketChat."),(0,l.kt)("h2",{id:"is-superdirt-alright"},"Is SuperDirt alright?"),(0,l.kt)("h3",{id:"class-not-found"},"CLASS Not Found"),(0,l.kt)("p",null,"If you see the following error:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ERROR: Class not defined.\n")),(0,l.kt)("p",null,"This means ",(0,l.kt)("strong",{parentName:"p"},"SuperDirt")," isn't installed. Install it by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},' include("SuperDirt")\n')),(0,l.kt)("p",null,"If it fails to install, make sure you have the ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," command installed. You can do this by running ",(0,l.kt)("inlineCode",{parentName:"p"},"git --version")," from a command prompt. If the command isn't found, then check the install page for how to install ",(0,l.kt)("strong",{parentName:"p"},"Git"),". Once it's installed, you'll need to restart ",(0,l.kt)("strong",{parentName:"p"},"SuperCollider")," before trying again."),(0,l.kt)("p",null,"For users who have just installed SuperCollider, restarting it prior to running ",(0,l.kt)("inlineCode",{parentName:"p"},'include("SuperDirt")')," could also resolve the error."),(0,l.kt)("h3",{id:"could-not-bind-to-requested-port"},"Could not bind to requested port"),(0,l.kt)("p",null,"If you see an error like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"Could not bind to requested port. This may mean it is in use already by another application.\nERROR: Could not open UDP port 57120\n")),(0,l.kt)("p",null,"This probably means you have stray ",(0,l.kt)("strong",{parentName:"p"},"SuperCollider")," processes running, blocking network ports. Shut down ",(0,l.kt)("strong",{parentName:"p"},"SuperCollider"),", and force quit ",(0,l.kt)("inlineCode",{parentName:"p"},"sclang")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"scserver")," in your task manager. Failing that, a reboot will clear them."),(0,l.kt)("h2",{id:"why-dont-i-hear-anything"},"Why don't I hear anything?"),(0,l.kt)("h3",{id:"missing-samples"},"Missing samples"),(0,l.kt)("p",null,"Tidal Cycles is installed with an extensive library of ",(0,l.kt)("em",{parentName:"p"},"default")," audio samples. The download can sometimes fail, leaving you without any sound to play. If everything seems to be working, but not all sounds play, then probably there was a problem causing the download of Tidal's sound library to fail part way through."),(0,l.kt)("p",null,"You can fix this by finding the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dirt-Samples")," folder, via the SuperCollider menus: Open ",(0,l.kt)("inlineCode",{parentName:"p"},"File > Open user Support directory")," (top-menu). Find the ",(0,l.kt)("inlineCode",{parentName:"p"},"downloaded-quarks")," and then the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dirt-Samples")," folder. You'll probably find that many of the folders are missing or empty. You can download the missing samples from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/Dirt-Samples"},"this link")," and place them here."),(0,l.kt)("h3",{id:"audio-configuration"},"Audio configuration"),(0,l.kt)("p",null,"The problem can also come from your sound system. Check that everything is plugged correctly, check if you selected the right audio interface and that the volume is up. If you still don't hear anything, it might come from something else."),(0,l.kt)("h2",{id:"installing-via-stack-rather-than-cabal"},"Installing via 'stack' rather than 'cabal'"),(0,l.kt)("p",null,"If the ",(0,l.kt)("strong",{parentName:"p"},"Tidal Haskell Library")," has stubborn problems when installed with\n",(0,l.kt)("inlineCode",{parentName:"p"},"cabal"),", particularly if it brings up errors related to the 'network'\nlibrary under library, then instead installing with ",(0,l.kt)("inlineCode",{parentName:"p"},"stack")," solves it."),(0,l.kt)("p",null,"This is done with the following command in a terminal window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"stack install tidal\n")),(0,l.kt)("p",null,"Once that's done, you just have to tell your editor plugin to use the Tidal\ninstalled with ",(0,l.kt)("inlineCode",{parentName:"p"},"stack"),". In ",(0,l.kt)("strong",{parentName:"p"},"Atom"),", find the settings for the Tidal Cycles\npackage, and set the ",(0,l.kt)("inlineCode",{parentName:"p"},"ghci path")," setting to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"stack exec --package tidal -- ghci\n")),(0,l.kt)("p",null,"Restart *Atom** and all should be well."))}d.isMDXComponent=!0}}]);