"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?l.createElement(m,o(o({ref:t},u),{},{components:a})):l.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:n,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},48:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=a(3117),n=(a(7294),a(3905));const i={title:"Windows",id:"windows_install"},o=void 0,r={unversionedId:"getting-started/windows_install",id:"getting-started/windows_install",title:"Windows",description:"May 5 Updates",source:"@site/docs/getting-started/windows_install.md",sourceDirName:"getting-started",slug:"/getting-started/windows_install",permalink:"/docs/getting-started/windows_install",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/windows_install.md",tags:[],version:"current",lastUpdatedAt:1701804581,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"Windows",id:"windows_install"},sidebar:"docs",previous:{title:"MacOS",permalink:"/docs/getting-started/macos_install"},next:{title:"Start Tidal",permalink:"/docs/getting-started/tidal_start"}},s={},p=[{value:"Automatic installation - Chocolatey",id:"automatic-installation---chocolatey",level:2},{value:"Installation procedure",id:"installation-procedure",level:3},{value:"Manual installation",id:"manual-installation",level:2},{value:"Haskell",id:"haskell",level:3},{value:"SuperCollider",id:"supercollider",level:3},{value:"SC3 Plugins",id:"sc3-plugins",level:3},{value:"SuperDirt",id:"superdirt",level:3},{value:"Tidal Cycles",id:"tidal-cycles",level:3},{value:"Pulsar",id:"pulsar",level:3},{value:"Getting Help",id:"getting-help",level:2},{value:"Note for Windows 7 users",id:"note-for-windows-7-users",level:2},{value:"I&#39;ve installed Tidal Cycles. What&#39;s next?",id:"ive-installed-tidal-cycles-whats-next",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"May 5 Updates")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The automated install method with Chocolatey is working."),(0,n.kt)("li",{parentName:"ul"},"There is also a new version of the Tidal Cycles package in Chocolatey coming soon."),(0,n.kt)("li",{parentName:"ul"},"The problem with ghc 9.6.1 on Windows was identified by the Haskell team. There is a new version of the ",(0,n.kt)("a",{parentName:"li",href:"https://hackage.haskell.org/package/network"},"network package")," - ",(0,n.kt)("inlineCode",{parentName:"li"},"network-3.1.2.9"),". This should also resolve network package errors that come up with the Tidal package install. ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/23309"},"See details"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ghc 9.6.1 and cabal 3.10.1.0")," are now the recommended versions for Windows."),(0,n.kt)("li",{parentName:"ul"},"The steps to install individual components via Chocolatey have been removed. This is not a recommended direction unless you are familiar with choco commands and how choco handles packages installs locally."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://tidalcycles.org/docs/troubleshoot/troubleshoot_windows"},"Troubleshooting on Windows")," page has been updated. Use that page for help installing Haskell.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"May 11 Updates")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is a known issue with the Chocolatey automated install of SuperDirt. Sometimes during the step to install SuperDirt into SuperCollier, the installation hangs after SuperDirt is installed. The cause is likely an orphaned process which can be terminated. See the ",(0,n.kt)("a",{parentName:"li",href:"https://tidalcycles.org/docs/troubleshoot/troubleshoot_windows"},"Troubleshooting on Windows")," for instructions."),(0,n.kt)("li",{parentName:"ul"},"Instructions are available to clean up from chocolatey installs. See ",(0,n.kt)("a",{parentName:"li",href:"https://tidalcycles.org/docs/getting-started/windows-choco-cleanup"},"Windows Chocolatey Cleanup"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"automatic-installation---chocolatey"},"Automatic installation - Chocolatey"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"note:")," ",(0,n.kt)("em",{parentName:"p"},"Installation with Chocolatey works again.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you have a prior install from chocolatey with an older version of Haskell, you may experience problems running Tidal after a completed new install. This can be caused by multiple versions of Haskell. For example, if you have ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\tools\\ghc-8.10.7")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\tools\\ghc-9.6.1"),". To fix this, you need to remove the older Haskell version(s) and reinstall the Tidal package. Detailed steps are provided in ",(0,n.kt)("a",{parentName:"p",href:"https://tidalcycles.org/docs/getting-started/windows-choco-cleanup"},"Windows Chocolatey cleanup"),".")),(0,n.kt)("p",null,"This method uses the package manager ",(0,n.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," and will install everything you need, including required dependencies. Please note that this is a significant install process and takes time, but in the end all components will be ready for use. The installer assumes that these aren't installed already. If you do have some components (SuperCollider, SuperDirt, etc) it is recommended to use Manual install steps for the remaining components (see below)."),(0,n.kt)("p",null,"Components installed via Chocolatey package manager:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://supercollider.github.io/"},"SuperCollider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://supercollider.github.io/sc3-plugins/"},"sc3-plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.msys2.org/"},"msys2")," - (only needed for the choco install)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Haskell - ghc")," & ",(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/cabal/"},"cabal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt")," with the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/Dirt-Samples"},"dirt sample library")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider-quarks/Vowel"},"Vowel quark")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"Pulsar-dev Editor")," with TidalCycles plugin package")),(0,n.kt)("h3",{id:"installation-procedure"},"Installation procedure"),(0,n.kt)("p",null,"Installation has 3 steps. You may get security pop-up windows for you to accept. Windows 7 users: please review the prep steps outlined at the end of this page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"I - Starting powershell as administrator")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Windows 10 - Hold down the windows key\nand press 'x', then choose Windows PowerShell (admin) in\nthe menu that pops up."),(0,n.kt)("li",{parentName:"ul"},"Windows 7 - Click the start button, type ",(0,n.kt)("inlineCode",{parentName:"li"},"powershell"),", then\nclick with the right mouse button and choose ",(0,n.kt)("strong",{parentName:"li"},"Run as\nAdministrator"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"II - Installing Chocolatey: the package manager")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package\nmanager is required. If you haven't installed it previously, you can\nget it by running this command:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"III - Installing TidalCycles")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Run the following command to install Tidal Cycles using Chocolatey:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"choco install tidalcycles\n")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The full install will take time (30+ minutes). It is best to let it run to the end, but if it exits without completion or if you need to abort - you can try running this command again. Choco will skip over any package dependencies that are already complete.")),(0,n.kt)("p",null,"After the powershell script is finished, you should review the choco install logs for any errors.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\ProgramData\\chocolatey\\logs\\chocolatey.log")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"IV - Potential problems and fixes")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"SuperCollider quarks install failed for SuperDirt, Dirt Samples, and/or Vowel"),(0,n.kt)("br",{parentName:"p"}),"\n","These can be installed manually within the SuperCollider IDE. See the command to execute in the Manual installation section below.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Tidal package install failed")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can confirm the status of your tidal install with this command: ",(0,n.kt)("inlineCode",{parentName:"p"},"cabal info tidal"),'. If you get a message that "There is no package named tidal" then something went wrong and you need to run these commands.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can attempt the Tidal package install manually. But before installing/reinstalling the Tidal package it is recommended to ",(0,n.kt)("strong",{parentName:"p"},"delete")," (or rename) your local ghc and cabal directories. These are found in your user ",(0,n.kt)("inlineCode",{parentName:"p"},"\\AppData\\Roaming")," directory but could also be in other directories under ",(0,n.kt)("inlineCode",{parentName:"p"},"\\AppData\\"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"C:\\Users\\<yourUser>\\AppData\\Roaming\\ghc\\\nC:\\Users\\<yourUser>\\AppData\\Roaming\\cabal\\\nC:\\Users\\<yourUser>\\AppData\\Local\\ghc\\\nC:\\Users\\<yourUser>\\AppData\\Local\\cabal\\\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now install Tidal:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cabal\xa0update\ncabal\xa0v1-install\xa0tidal\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Pulsar install failed"),"  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Download the installer manually from ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"Pulsar-dev"),". Once installed, follow the step below to install the TidalCycles plugin package."),(0,n.kt)("li",{parentName:"ul"},"You can also try to install just Pulsar from choco: ",(0,n.kt)("inlineCode",{parentName:"li"},"choco install pulsar")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Pulsar install succeeded but didn't install the TidalCycles plugin package"),(0,n.kt)("br",{parentName:"p"}),"\n",'This can done manually from within Pulsar. From the top menu, open the Package Manager, select Install, then search for TidalCycles, and select install. This will install the TidalCycle package into Pulsar. For more details, see the Pulsar page in the "Get a Text Editor" section.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Haskell (ghc) or cabal install fails."),(0,n.kt)("br",{parentName:"p"}),"\n","You can try running the ",(0,n.kt)("inlineCode",{parentName:"p"},"choco install tidalcycles")," command again. Or you can try installing Haskell components with choco:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install ghc\nchoco install cabal\n## use these commands if you know the version numbers\nchoco install ghc --version=9.6.1\nchoco install cabal --version=3.10.1.0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The installer hangs after SuperDirt completes. You may be able to resolve this by killing an orphaned process. See the Troubleshooting on Windows guide.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For other problems, see the ",(0,n.kt)("a",{parentName:"p",href:"../troubleshoot/troubleshoot_windows"},"Troubleshooting on Windows")," page."))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,n.kt)("p",null,"This method is recommended for users who already have some of the components installed. Ensure that all components below are installed."),(0,n.kt)("h3",{id:"haskell"},"Haskell"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install ghcup (Haskell package installer)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://www.haskell.org/ghcup/"},"Haskell ghcup")," for info."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bB4fmQiUYPw"},"YouTube - windows ghcup install")," for assistance."),(0,n.kt)("li",{parentName:"ul"},"Run this command in Windows Powershell (as admin):",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-Powershell"},"Set-ExecutionPolicy Bypass -Scope Process -Force;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; try { Invoke-Command -ScriptBlock ([ScriptBlock]::Create((Invoke-WebRequest https://www.haskell.org/ghcup/sh/bootstrap-haskell.ps1 -UseBasicParsing))) -ArgumentList $true } catch { Write-Error $_ }\n"))))),(0,n.kt)("li",{parentName:"ul"},"This should install ghci v9.25. But Tidal 1.9.3+ is best with ghc 9.6.1 ",(0,n.kt)("strong",{parentName:"li"},"and")," cabal 3.10.1.0"),(0,n.kt)("li",{parentName:"ul"},"Run these commands from powershell (admin) to get the correct ghc and cabal versions:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Powershell"},"ghcup install ghc 9.6.1\nghcup install cabal 3.10.1.0\nghcup set ghc 9.6.1\nghcup set cabal 3.10.1.0\n\n-- Validate\nghci --version  \ncabal --version\n")),(0,n.kt)("h3",{id:"supercollider"},"SuperCollider"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://supercollider.github.io/downloads"},"SuperCollider Downloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider/supercollider"},"SuperCollider Readme"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider/supercollider/blob/develop/README_WINDOWS.md"},"Windows Readme"))))),(0,n.kt)("h3",{id:"sc3-plugins"},"SC3 Plugins"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://supercollider.github.io/sc3-plugins/"},"SC3 Plugins")," is needed if you want to use any of the synthesizers included with Tidal Cycles. Most of the examples in the documentation will still work, but your installation will likely be incomplete without it. You can skip the installation but be sure to come back later to install it if you want."),(0,n.kt)("h3",{id:"superdirt"},"SuperDirt"),(0,n.kt)("p",null,"SuperDirt is the audio engine used by Tidal. Without it, Tidal Cycles will not emit any sound and will not be able to communicate through OSC or MIDI with other synthesizers. To install it, open SuperCollider and run the following command in the interactive editor (press Ctrl+Return to evaluate):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})\n')),(0,n.kt)("p",null,"The installation will take a little while. You will know when the installation process is done by looking at the logs window. It will likely print something like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"Installing SuperDirt\nInstalling Vowel\nVowel installed\nInstalling Dirt-Samples\nDirt-Samples installed\nSuperDirt installed\ncompiling class library...\n...\n(then some blah blah, and finally, something like:)\n...\n\n*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.\n")),(0,n.kt)("h3",{id:"tidal-cycles"},"Tidal Cycles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure your Haskell environment is correct (above) and that you have ",(0,n.kt)("inlineCode",{parentName:"li"},"ghci v9.6 1")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"cabal 3.10.1.0")),(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("inlineCode",{parentName:"li"},"PowerShell")," in ",(0,n.kt)("strong",{parentName:"li"},"administrator mode")," (see above)."),(0,n.kt)("li",{parentName:"ul"},"Enter the following commands:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cabal\xa0update\ncabal\xa0v1-install\xa0tidal\n")),(0,n.kt)("p",null,"Make sure to use ",(0,n.kt)("inlineCode",{parentName:"p"},"v1-install"),", as ",(0,n.kt)("inlineCode",{parentName:"p"},"v2-install tidal")," ",(0,n.kt)("em",{parentName:"p"},"may not work"),".\nThe last command might take some time to complete. Be patient \ud83d\ude04."),(0,n.kt)("h3",{id:"pulsar"},"Pulsar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/download.html"},"Pulsar-edit Downloads")," to download and install."),(0,n.kt)("li",{parentName:"ul"},"OR go to the Pulsar page under Installation > Get a Text Editor  section in the left navigation pane."),(0,n.kt)("li",{parentName:"ul"},"Once you have Pulsar, you need the TidalCycles plugin. Use the Pulsar Package Manager. See details on our Pulsar page.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getting-help"},"Getting Help"),(0,n.kt)("p",null,"If you are having trouble with installation, here are options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Review this page carefully and make sure you are following all instructions.  "),(0,n.kt)("li",{parentName:"ul"},"For individual component problems - such as SuperCollider and SuperDirt - check their ReadMe pages in GitHub:  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/supercollider/supercollider"},"SuperCollider Readme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt"},"SuperDirt Readme")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.com/channels/779427371270275082/779487905822801930"},"TidalCycles Discord - Installation Help Channel"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Try searching this channel to see if your problem has been experienced by others"),(0,n.kt)("li",{parentName:"ul"},"Be sure to post details - what exact problem, error messages, what Windows version, etc."),(0,n.kt)("li",{parentName:"ul"},'See the "how to ask" channel for more about getting help from our community'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/"},"Forums - Tidal Club"),"  A lot of smart people hang out here."),(0,n.kt)("li",{parentName:"ul"},"Don't get discouraged! Tidal has a complex stack, but these components are all proven, robust and stable. Once it is all working, it rarely needs to have any attention.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"note-for-windows-7-users"},"Note for Windows 7 users"),(0,n.kt)("p",null,"If you are using Windows 7, some extra preparation is required before installing everything else:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure Windows 7 is up to date with the latest patches."),(0,n.kt)("li",{parentName:"ol"},"Install/upgrade to .NET 4.5. You can ",(0,n.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-gb/download/details.aspx?id=30653"},"download it here"),"."),(0,n.kt)("li",{parentName:"ol"},"Install Visual C++ redistributable. You can ",(0,n.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-gb/help/2977003/the-latest-supported-visual-c-downloads"},"download it here"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"ive-installed-tidal-cycles-whats-next"},"I've installed Tidal Cycles. What's next?"),(0,n.kt)("p",null,"Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing \ud83d\ude04."),(0,n.kt)("p",null,"Be sure to follow the instructions to start SuperDirt."))}c.isMDXComponent=!0}}]);