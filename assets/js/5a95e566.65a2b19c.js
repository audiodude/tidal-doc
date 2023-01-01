"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(3117),s=(n(7294),n(3905));const r={title:"OSC",id:"osc",permalink:"wiki/MIDI/",layout:"wiki"},i=void 0,o={unversionedId:"configuration/MIDIOSC/osc",id:"configuration/MIDIOSC/osc",title:"OSC",description:"Open Sound Control (OSC) is a standard network protocol, ostensibly designed for music, but it's really just an easy way to send numbers and other data across a network. A range of live coding and other systems including DAWs (Digital Audio Workstations), visualisers and mixers are compatible with OSC.",source:"@site/docs/configuration/MIDIOSC/OSC.md",sourceDirName:"configuration/MIDIOSC",slug:"/configuration/MIDIOSC/osc",permalink:"/docs/configuration/MIDIOSC/osc",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/MIDIOSC/OSC.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1672577314,formattedLastUpdatedAt:"Jan 1, 2023",frontMatter:{title:"OSC",id:"osc",permalink:"wiki/MIDI/",layout:"wiki"},sidebar:"docs",previous:{title:"MIDI",permalink:"/docs/configuration/MIDIOSC/midi"},next:{title:"DAW",permalink:"/docs/configuration/MIDIOSC/connecting_to_a_daw"}},l={},p=[{value:"Extensive Tutorial",id:"extensive-tutorial",level:2},{value:"Defining a Target",id:"defining-a-target",level:3},{value:"Defining OSC message structure",id:"defining-osc-message-structure",level:3},{value:"Named parameters",id:"named-parameters",level:3},{value:"Defining additional parameters",id:"defining-additional-parameters",level:3},{value:"Mapping message structures to targets",id:"mapping-message-structures-to-targets",level:3},{value:"Starting and sending patterns to the stream",id:"starting-and-sending-patterns-to-the-stream",level:3},{value:"Shortcuts",id:"shortcuts",level:3},{value:"Recap",id:"recap",level:3},{value:"Multiple targets and messages",id:"multiple-targets-and-messages",level:3},{value:"Complex targets with multiple message formats",id:"complex-targets-with-multiple-message-formats",level:3},{value:"Controller input",id:"controller-input",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Debugging",id:"debugging",level:2},{value:"OSC SuperDirt API",id:"osc-superdirt-api",level:2},{value:"Playback controllers",id:"playback-controllers",level:2},{value:"Open Sound Control Functions",id:"open-sound-control-functions",level:3},{value:"Mute a Pattern",id:"mute-a-pattern",level:4},{value:"Solo a Pattern",id:"solo-a-pattern",level:4},{value:"Control All Patterns",id:"control-all-patterns",level:4},{value:"MIDI Example",id:"midi-example",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Open Sound Control (OSC)")," is a standard network protocol, ostensibly designed for music, but it's really just an easy way to send numbers and other data across a network. A range of live coding and other systems including DAWs (Digital Audio Workstations), visualisers and mixers are compatible with OSC."),(0,s.kt)("p",null,"Really the one and only job of Tidal Cycles is to send patterned OSC messages, most often to the ",(0,s.kt)("strong",{parentName:"p"},"SuperDirt")," audio framework. It's fairly straightforward to configure ",(0,s.kt)("strong",{parentName:"p"},"Tidal")," to send OSC to another system. It involves specifying where messages should be sent to (the target) - and the structure of the OSC data that is sent (the shape or format of the message)."),(0,s.kt)("h2",{id:"extensive-tutorial"},"Extensive Tutorial"),(0,s.kt)("h3",{id:"defining-a-target"},"Defining a Target"),(0,s.kt)("p",null,"First, define a target:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let target =\n      Target {oName = "visualiser",   -- A friendly name for the target (only used in error messages)\n              oAddress = "localhost", -- The target\'s network address, normally "localhost"\n              oPort = 5050,           -- The network port the target is listening on\n              oLatency = 0.2,         -- Additional delay, to smooth out network jitter/get things in sync\n              oSchedule = Live,       -- The scheduling method - see below\n              oWindow = Nothing,      -- Not yet used\n              oHandshake = False,     -- SuperDirt specific\n              oBusPort = Nothing      -- Also SuperDirt specific\n             }\n')),(0,s.kt)("p",null,"The scheduling method for oSchedule can be one of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Live"),": causes Tidal to schedule messages so that they are sent out at the 'right' time, minus the ",(0,s.kt)("inlineCode",{parentName:"p"},"oLatency")," value. This is the simplest approach, that will work well in most cases.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Pre BundleStamp"),": sends each OSC message wrapped in an OSC 'bundle' with a bundle timestamp. The bundled messages will be sent out once per frame in batches, but ahead of time (according to the ",(0,s.kt)("inlineCode",{parentName:"p"},"oLatency")," configuration value). Tidal doesn't attempt to send them out with 'correct' timing, instead the target is expected schedule them accurately. This is more work for the target, but is potentially more accurate than the above, as potential network/processing jitter can be avoided.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Pre MessageStamp"),": as with ",(0,s.kt)("inlineCode",{parentName:"p"},"BundleStamp"),' above, but the timestamp is added to the OSC message itself, filling in the two integer fields "sec" and "usec". You have to explicitly include these in the argument list of your osc format (see later for an example).'))),(0,s.kt)("h3",{id:"defining-osc-message-structure"},"Defining OSC message structure"),(0,s.kt)("p",null,"Next, define the structure of the OSC message. It's worth first spending a bit of time familiarising yourself with the OSC spec. There are two ways to structure the OSC messages that Tidal sends. Either as an argument list, or as name-value pairs."),(0,s.kt)("p",null,"The argument list approach is most common. It looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let oscplay = OSC "/play" $ ArgList [("s", Nothing),\n                                     ("vowel", Just $ VS "a"),\n                                     ("pan", Just $ VF 0.5),\n                                     ("cut", Just $ VI 1),\n                                     ("intensity", Just $ VI 0)\n                                   ]\n')),(0,s.kt)("p",null,'To define the OSC structure, you start with OSC, followed by the OSC "address pattern", in this case ',(0,s.kt)("inlineCode",{parentName:"p"},'"/play"'),". Then you list the message arguments, in order. Each argument is given as a 'tuple', containing the name of the parameter, and its default value."),(0,s.kt)("p",null,"In the above example, the first parameter called ",(0,s.kt)("inlineCode",{parentName:"p"},'"s"')," doesn't have a default, indicated by the keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"Nothing"),". This means that if no s parameter is given by a pattern, no OSC message will be sent."),(0,s.kt)("p",null,"The other arguments in the example have defaults indicated by the keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"Just"),", followed by the type of the argument and its default value. ",(0,s.kt)("inlineCode",{parentName:"p"},"VS")," gives a default as a string, ",(0,s.kt)("inlineCode",{parentName:"p"},"VF")," as a floating point number, and ",(0,s.kt)("inlineCode",{parentName:"p"},"VI")," as an integer. Other available types are ",(0,s.kt)("inlineCode",{parentName:"p"},"VB")," for true/false boolean values (which are converted to 1 / 0 integer values in the message) and ",(0,s.kt)("inlineCode",{parentName:"p"},"VX")," for binary 'blobs'. If one or more of these arguments-with-defaults aren't present in a pattern, the message will still be sent with these default values."),(0,s.kt)("p",null,"If you are using ",(0,s.kt)("strong",{parentName:"p"},"Pre MessageStamp"),", you will need to add the ",(0,s.kt)("inlineCode",{parentName:"p"},"sec")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"usec")," message parameters in order for them to be sent:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let oscplay = OSC "/play" $ ArgList [("s", Nothing),\n                                     ("vowel", Just $ VS "a"),\n                                     ("pan", Just $ VF 0.5),\n                                     ("cut", Just $ VI 1),\n                                     ("intensity", Just $ VI 0),\n                                     ("sec", Just $ VF 0),\n                                     ("usec", Just $ VF 0)\n                                   ]\n')),(0,s.kt)("p",null,"As well as ",(0,s.kt)("inlineCode",{parentName:"p"},"sec")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"usec"),", there are three other parameters that Tidal will always fill in if present; ",(0,s.kt)("inlineCode",{parentName:"p"},"cps")," (cycles per second), ",(0,s.kt)("inlineCode",{parentName:"p"},"cycle")," (the start of the event in cycles) and ",(0,s.kt)("inlineCode",{parentName:"p"},"delta")," (the duration of the event in cycles). So add those too, if you want that information to be sent to the target:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let oscplay = OSC "/play" $ ArgList [("s", Nothing),\n                                     ("vowel", Just $ VS "a"),\n                                     ("pan", Just $ VF 0.5),\n                                     ("cut", Just $ VI 1),\n                                     ("intensity", Just $ VI 0),\n                                     ("sec", Just $ VF 0),\n                                     ("usec", Just $ VF 0),\n                                     ("cps", Just $ VF 0),\n                                     ("cycle", Just $ VF 0),\n                                     ("delta", Just $ VF 0)\n                                   ]\n')),(0,s.kt)("h3",{id:"named-parameters"},"Named parameters"),(0,s.kt)("p",null,"Instead of giving an argument list as above, you can specify named parameters like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let oscplay = OSC "/play" Named {requiredArgs = ["s"]}\n')),(0,s.kt)("p",null,"With such a definition, all parameters in a pattern will be sent to the target. Instead of having fixed positions in a message as with an argument list, the parameters will be in an arbitrary order, but as name-value pairs. That is, each parameter will be prefixed by an additional string parameter, giving its name. As you can see in the example, a list of 'required' parameters is given - unless all of the parameters named in this list are present in an patterned event, it will not be sent."),(0,s.kt)("h3",{id:"defining-additional-parameters"},"Defining additional parameters"),(0,s.kt)("p",null,"Many parameters are defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"Sound.Tidal.Params"),", and available to a Tidal session. If you want to send parameters which aren't already defined, you can define them yourself. For example ",(0,s.kt)("inlineCode",{parentName:"p"},"'intensity'")," used above needs to be defined, like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let intensity = pF "intensity"\n')),(0,s.kt)("h3",{id:"mapping-message-structures-to-targets"},"Mapping message structures to targets"),(0,s.kt)("p",null,"The final thing that needs defining, is a mapping between targets and the OSC message structures they accept. In this case there's only one target that accepts a single kind of OSC message, so it's simple:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"let oscmap = [(target, [oscplay])]\n")),(0,s.kt)("h3",{id:"starting-and-sending-patterns-to-the-stream"},"Starting and sending patterns to the stream"),(0,s.kt)("p",null,"Then you can start a ",(0,s.kt)("inlineCode",{parentName:"p"},"'stream'")," for turning patterns into OSC like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"stream <- startStream defaultConfig oscmap\n")),(0,s.kt)("p",null,"And start sending a pattern like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'streamReplace stream 1 $ s "hello" # cut 1 # intensity 3\n')),(0,s.kt)("h3",{id:"shortcuts"},"Shortcuts"),(0,s.kt)("p",null,"You can define some shortcuts like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"let x1 = streamReplace stream 1\n    x2 = streamReplace stream 2\n    x3 = streamReplace stream 3\n    x4 = streamReplace stream 4\n")),(0,s.kt)("p",null,"Then this will work:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'x1 $ s "hello" # cut 1 # intensity 3\n')),(0,s.kt)("p",null,"This is much like how ",(0,s.kt)("inlineCode",{parentName:"p"},"d1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"d2"),", etc... are defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"BootTidal.hs"),". Refer to the the default ",(0,s.kt)("inlineCode",{parentName:"p"},"BootTidal.hs")," file (look at the sidebar) to see how the other tidal functions are normally defined."),(0,s.kt)("h3",{id:"recap"},"Recap"),(0,s.kt)("p",null,"Here's all that code together:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let target =\n      Target {oName = "visualiser",   -- A friendly name for the target (only used in error messages)\n              oAddress = "localhost", -- The target\'s network address, normally "localhost"\n              oPort = 5050,           -- The network port the target is listening on\n              oLatency = 0.2,         -- Additional delay, to smooth out network jitter/get things in sync\n              oSchedule = Live,       -- The scheduling method - see below\n              oWindow = Nothing,      -- Not yet used\n              oHandshake = False,     -- SuperDirt specific\n              oBusPort = Nothing      -- Also SuperDirt specific\n             }\n    oscplay = OSC "/play" $ ArgList [("s", Nothing),\n                                     ("vowel", Just $ VS "a"),\n                                     ("pan", Just $ VF 0.5),\n                                     ("volume", Just $ VF 1),\n                                     ("cut", Just $ VI 1),\n                                     ("intensity", Just $ VI 0)\n                                   ]\n    intensity = pF "intensity"\n    oscmap = [(target, [oscplay])]\n\n\nstream <- startStream defaultConfig oscmap\n\nlet x1 = streamReplace stream 1\n    x2 = streamReplace stream 2\n    x3 = streamReplace stream 3\n    x4 = streamReplace stream 4\n')),(0,s.kt)("h3",{id:"multiple-targets-and-messages"},"Multiple targets and messages"),(0,s.kt)("p",null,"It's possible to pattern multiple OSC messages and send them to multiple targets, from the same ",(0,s.kt)("inlineCode",{parentName:"p"},"'stream'"),". For example to make a stream that sends both to the above target and to ",(0,s.kt)("strong",{parentName:"p"},"SuperDirt"),", you could do this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let oscmap = [(target, [oscplay]),\n              (superdirtTarget, [superdirtShape])\n             ]\n\nstream <- startStream defaultConfig oscmap\n\nd = streamReplace stream\n\nd 1 $ s "bd"\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"bd")," above will be sent to both ",(0,s.kt)("inlineCode",{parentName:"p"},"target")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"superdirtTarget"),"."),(0,s.kt)("h3",{id:"complex-targets-with-multiple-message-formats"},"Complex targets with multiple message formats"),(0,s.kt)("p",null,"Some OSC targets are more complicated, accept multiple OSC formats and also specifying data in the osc 'address pattern'. Lets take the ASCII-Simple-Video-Synth as an example. Here's the Tidal specification for it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'let target = Target {oName = "ascii",\n                     oAddress = "127.0.0.1",\n                     oPort = 5050,\n                     oLatency = 0.2,\n                     oWindow = Nothing,\n                     oSchedule = Live,\n                     oHandshake = False,\n                     oBusPort = Nothing \n                    }\n    formats = [OSC "/{asccolour}/speed"  $ ArgList [("ascspeed", Nothing)],\n               OSC "/{asccolour}/mode"   $ ArgList [("ascmode", Nothing)],\n               OSC "/{asccolour}/offset" $ ArgList [("ascoffset", Nothing)],\n               OSC "/{asccolour}/scale"  $ ArgList [("ascscale", Nothing)],\n               OSC "/shape/sides" $ ArgList [("ascsides", Nothing)],\n               OSC "/shape/size"  $ ArgList [("ascsize", Nothing)],\n               OSC "/shape/xinc"  $ ArgList [("ascxinc", Nothing)],\n               OSC "/shape/yinc"  $ ArgList [("ascyinc", Nothing)]\n              ]\n    ascspeed  = pI "ascspeed"\n    ascmode   = pI "ascmode"\n    ascoffset = pI "ascoffset"\n    ascscale  = pI "ascscale"\n    ascsides  = pI "ascsides"\n    ascsize   = pI "ascsize"\n    ascxinc   = pI "ascxinc"\n    ascyinc   = pI "ascyinc"\n    asccolour = pS "asccolour"\n    oscmap = [(target, formats)]\n\nstream <- startStream defaultConfig oscmap\n\nstreamReplace stream 1 $ asccolour "blue green red"\n  # ascspeed "38 15"\n  # ascsides 3\n  # ascoffset 10\n  # ascxinc 10\n  # ascyinc 10\n  # ascmode 0\n  # ascsize 30\n')),(0,s.kt)("p",null,"This software accepts a number of address patterns, some of which include the colour which is being addressed. To make this colour patternable, it is given a name in curly braces, ",(0,s.kt)("inlineCode",{parentName:"p"},'"{asccolour}"'),". This is then patternable with the ",(0,s.kt)("inlineCode",{parentName:"p"},"'ascColour'")," parameter in the Tidal pattern."),(0,s.kt)("p",null,"When you assign multiple OSC message formats to a stream, it's a good idea to make sure that every format has at least one unique, non-default argument. This ensures that messages will only be sent when the non-default arguments are set in the pattern. Otherwise, all the formats will be sent for every patterned event."),(0,s.kt)("h2",{id:"controller-input"},"Controller input"),(0,s.kt)("p",null,"Tidal 1.0.0 now has support for external input, using the ",(0,s.kt)("strong",{parentName:"p"},"OSC")," protocol. Here's a quick guide to getting it going, including using a simple 'bridge' for getting MIDI input working. "),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"If you just want to get ",(0,s.kt)("strong",{parentName:"p"},"MIDI")," input into tidal, check the MIDI page in the sidbar."),(0,s.kt)("p",null,"With version 1.0.0 installed and configured, then by default ",(0,s.kt)("strong",{parentName:"p"},"Tidal")," will automatically listen for external control messages over the ",(0,s.kt)("strong",{parentName:"p"},"OSC")," network protocol, on localhost (127.0.0.1), port 6010. This is configurable - if you prefer it to listen to for example all network interfaces, and port 6060 you can change your configuration (",(0,s.kt)("inlineCode",{parentName:"p"},"BootTidal.hs"),") to this: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},'tidal <- startTidal superdirtTarget (defaultConfig {cCtrlAddr = "0.0.0.0", cCtrlPort = 6060})\n')),(0,s.kt)("p",null,"If you prefer to switch off listening to controls all together, use this instead:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"tidal <- startTidal superdirtTarget (defaultConfig {cCtrlListen = False})\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"OSC")," message that Tidal expects has the path ",(0,s.kt)("inlineCode",{parentName:"p"},"/ctrl"),", and two values - the key and the value. The key can either be a string or an integer (tidal will convert an integer to a string for you). The value can be a string, integer or float. For example the ",(0,s.kt)("strong",{parentName:"p"},"OSC")," message ",(0,s.kt)("inlineCode",{parentName:"p"},"/ctrl sf hello 0.4"),", for a message to set the ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," control to ",(0,s.kt)("inlineCode",{parentName:"p"},"0.4"),". In this example ",(0,s.kt)("inlineCode",{parentName:"p"},"sf")," is the ",(0,s.kt)("strong",{parentName:"p"},"OSC")," typetag. It specifies that the first value is a (s)tring and the second value is a(f)loat see ",(0,s.kt)("a",{parentName:"p",href:"http://opensoundcontrol.org/spec-1_0"},"OSC specs"),". "),(0,s.kt)("p",null,"You could then use this control in a pattern like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd" # speed (cF 1 "hello")\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cF")," is what you use for floating point controls. The second parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," is the default value, for when tidal hasn't received that control yet. There is also ",(0,s.kt)("inlineCode",{parentName:"p"},"cS")," for strings and ",(0,s.kt)("inlineCode",{parentName:"p"},"cI")," for integers. For time values (for using e.g. as the first parameter of fast/slow), use ",(0,s.kt)("inlineCode",{parentName:"p"},"cT"),". For ratios add ",(0,s.kt)("inlineCode",{parentName:"p"},"cR"),". If you want to receive entire patterns (written as a string of mini notation), use ",(0,s.kt)("inlineCode",{parentName:"p"},"cP"),"."),(0,s.kt)("h2",{id:"debugging"},"Debugging"),(0,s.kt)("p",null,"One way to debug OSC is to use a packet sniffer like ",(0,s.kt)("a",{parentName:"p",href:"https://www.wireshark.org/"},"WireShark"),". You can put ",(0,s.kt)("inlineCode",{parentName:"p"},"osc")," in the filter field to filter out everything except OSC packets. If you click on an ",(0,s.kt)("inlineCode",{parentName:"p"},"OSC network packet")," and expand fields you can find a nicely formatted representation of your OSC message. "),(0,s.kt)("h2",{id:"osc-superdirt-api"},"OSC SuperDirt API"),(0,s.kt)("p",null,"For the curious, this is what an OSC trigger message from ",(0,s.kt)("strong",{parentName:"p"},"Tidal Cycles")," to ",(0,s.kt)("strong",{parentName:"p"},"SuperDirt")," looks like, as of ",(0,s.kt)("strong",{parentName:"p"},"Tidal")," version 1.7.x and probably later:"),(0,s.kt)("p",null,"Lets consider this pattern: ",(0,s.kt)("inlineCode",{parentName:"p"},'sound "bd" # speed 2'),". This is the kind of OSC message it generates: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Bundle"},"Timetag: Feb 22, 2021 21:54:04.960054397 UTC\nSize: 92 bytes\nMessage: /dirt/play ,sfsfsfsisssf\n    Header\n        Path: /dirt/play\n        Format: ,sfsfsfsisssf\n    String: cps\n    Float: 0.4\n    String: cycle\n    Float: 40549\n    String: delta\n    Float: 2.5\n    String: orbit\n    Int32: 0\n    String: s\n    String: bd\n    String: speed\n     Float: 2\n")),(0,s.kt)("p",null,"It consists of a single message, wrapped in a bundle, which provides the timestamp for when the event should be triggered. Because the OSC target for superdirt has ",(0,s.kt)("inlineCode",{parentName:"p"},"oSchedule")," set to ",(0,s.kt)("inlineCode",{parentName:"p"},"Pre BundleStamp"),", messages will be sent in bursts, ahead of time, and it's up to the receiver (such as superdirt) to schedule them accurately."),(0,s.kt)("p",null,"The message inside the bundle has the path ",(0,s.kt)("inlineCode",{parentName:"p"},"/dirt/play"),", and contains a variable number of name-value pairs. You can see the ",(0,s.kt)("inlineCode",{parentName:"p"},"s bd"),' and "speed 2" pairs, but Tidal adds a number of additional ones.. The current ',(0,s.kt)("inlineCode",{parentName:"p"},"cps")," tempo, the position of the event in cycles (since ",(0,s.kt)("strong",{parentName:"p"},"Tidal")," started), the ",(0,s.kt)("inlineCode",{parentName:"p"},"delta")," or duration of the event in seconds, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"orbit")," number."),(0,s.kt)("h2",{id:"playback-controllers"},"Playback controllers"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Tidal")," ",(0,s.kt)("inlineCode",{parentName:"p"},"1.7.4")," adds the ability to interact with patterns through the same OSC interface used for controller input. By default, it listens for OSC messages on localhost (",(0,s.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"), port ",(0,s.kt)("inlineCode",{parentName:"p"},"6010"),". "),(0,s.kt)("p",null,"The next section describes the playback control functions that are available, followed by an example of using MIDI control in ",(0,s.kt)("strong",{parentName:"p"},"SuperCollider")," to control several patterns."),(0,s.kt)("h3",{id:"open-sound-control-functions"},"Open Sound Control Functions"),(0,s.kt)("h4",{id:"mute-a-pattern"},"Mute a Pattern"),(0,s.kt)("p",null,"You can mute or unmute a pattern by sending an OSC message with the path ",(0,s.kt)("inlineCode",{parentName:"p"},"/mute")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"/unmute")," and an argument specifying a pattern. Just like in regular tidal code, this can be either a number (for ",(0,s.kt)("inlineCode",{parentName:"p"},"d1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"d2"),", etc) or a string (for named patterns)."),(0,s.kt)("p",null,"For example the OSC message ",(0,s.kt)("inlineCode",{parentName:"p"},"/mute 3")," would mute ",(0,s.kt)("inlineCode",{parentName:"p"},"d3"),"."),(0,s.kt)("h4",{id:"solo-a-pattern"},"Solo a Pattern"),(0,s.kt)("p",null,"You can also solo or unsolo a pattern by sending an OSC message with the path ",(0,s.kt)("inlineCode",{parentName:"p"},"/solo")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"/unsolo")," and an argument specifying a pattern, which can again be a number and a string."),(0,s.kt)("p",null,"For example the OSC message ",(0,s.kt)("inlineCode",{parentName:"p"},"/solo 3")," would solo ",(0,s.kt)("inlineCode",{parentName:"p"},"d3"),"."),(0,s.kt)("h4",{id:"control-all-patterns"},"Control All Patterns"),(0,s.kt)("p",null,"You can also control all playing patterns using the OSC paths ",(0,s.kt)("inlineCode",{parentName:"p"},"/muteAll"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"/unmuteAll"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"/unsoloAll")," and, of course, ",(0,s.kt)("inlineCode",{parentName:"p"},"/hush"),". All of these messages have no arguments."),(0,s.kt)("h4",{id:"midi-example"},"MIDI Example"),(0,s.kt)("p",null,"Here is a full ",(0,s.kt)("strong",{parentName:"p"},"SuperCollider")," example for mapping buttons on a ",(0,s.kt)("strong",{parentName:"p"},"MIDI")," controller to patterns so that the note on/off messages from the buttons toggle pattern muting or trigger other effects."),(0,s.kt)("p",null,"This example uses the ",(0,s.kt)("strong",{parentName:"p"},"MIDI")," buttons for the notes ",(0,s.kt)("inlineCode",{parentName:"p"},"C4")," (MIDI value 60), ",(0,s.kt)("inlineCode",{parentName:"p"},"D4")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"E4")," for toggling mute on ",(0,s.kt)("inlineCode",{parentName:"p"},"d1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"d2")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"d3"),". It uses notes ",(0,s.kt)("inlineCode",{parentName:"p"},"F4"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"G4")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"A4")," to toggle solo on ",(0,s.kt)("inlineCode",{parentName:"p"},"d1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"d2")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"d3"),". It also uses the note ",(0,s.kt)("inlineCode",{parentName:"p"},"C5")," to trigger muteAll and note ",(0,s.kt)("inlineCode",{parentName:"p"},"D5")," to trigger unmuteAll."),(0,s.kt)("p",null,"Edit the first section of the code (MIDI Controller Mapping) to define which controller buttons you want to use for controlling patterns. The rest of the code should work with the mappings you define, and shouldn't need any editing, but can also be useful for adapting."),(0,s.kt)("p",null,"Start with ",(0,s.kt)("strong",{parentName:"p"},"Tidal")," (e.g. inside ",(0,s.kt)("inlineCode",{parentName:"p"},"Atom"),") and ",(0,s.kt)("strong",{parentName:"p"},"SuperDirt")," already running and then run the below code block in ",(0,s.kt)("strong",{parentName:"p"},"SuperCollider"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'// Evaluate the block below to start the mapping MIDI -> OSC.\n(\nvar mutes, solos, muteAll, unmuteAll, unsoloAll, hush;\nvar playbackControl, playbackState;\nvar osc;\n\n/* -- MIDI Controller Mapping ---------------------------- */\n// Edit this section to configure your MIDI controller\n\n// "mutes" and "solos" are each a Dictionary of MIDI numbers -> Pattern IDs\n\n// In this case, C4, D4 & E4 mute patterns d1, d2 & d3\nmutes = Dictionary[\n    60 -> 1,\n    62 -> 2,\n    64 -> 3\n];\n\n// In this case, F4, G4 & A4 solo patterns d1, d2 & d3\nsolos = Dictionary[\n    65 -> 1,\n    67 -> 2,\n    69 -> 3\n];\n\n// This MIDI note triggers "muteAll"\n// In this case, it\'s set to C5\nmuteAll = 72;\n\n// This MIDI note triggers "unmuteAll"\n// In this case, it\'s set to D5\nunmuteAll = 74;\n\n// This MIDI note triggers "unsoloAll"\n// In this case, it\'s unused\nunsoloAll = nil;\n\n// This MIDI note triggers "hush"\n// In this case, it\'s unused\nhush = nil;\n\n/* ------------------------------------------------------- */\n\nplaybackState = Dictionary[];\n\nunion(mutes.values.asSet, solos.values.asSet).do({\n    arg item;\n    playbackState.put(item, Dictionary[\\mute -> false, \\solo -> false]);\n});\n\nosc = NetAddr.new("127.0.0.1", 6010);\n\nMIDIClient.init;\nMIDIIn.connectAll;\n\nplaybackControl = MIDIFunc.noteOn({ |val, num, chan, src|\n    var patID, patState;\n    if (mutes.at(num) !== nil, {\n        patID = mutes.at(num);\n        patState = playbackState.at(patID);\n        if (patState.trueAt(\\mute), {\n            osc.sendMsg("/unmute", patID);\n            patState.put(\\mute, false);\n        }, {\n            osc.sendMsg("/mute", patID);\n            patState.put(\\mute, true);\n        });\n    });\n\n    if (solos.at(num) !== nil, {\n        patID = solos.at(num);\n        patState = playbackState.at(patID);\n        if (patState.trueAt(\\solo), {\n            osc.sendMsg("/unsolo", patID);\n            patState.put(\\solo, false);\n        }, {\n            osc.sendMsg("/solo", patID);\n            patState.put(\\solo, true);\n        });\n    });\n\n    if (muteAll == num, {\n        osc.sendMsg("/muteAll");\n        playbackState.do({\n            arg patState;\n            patState.put(\\mute, true);\n        });\n    });\n\n    if (unmuteAll == num, {\n        osc.sendMsg("/unmuteAll");\n        playbackState.do({\n            arg patState;\n            patState.put(\\mute, false);\n        });\n    });\n\n    if (unsoloAll == num, {\n        osc.sendMsg("/unsoloAll");\n        playbackState.do({\n            arg patState;\n            patState.put(\\solo, false);\n        });\n    });\n\n    if (hush == num, {\n        osc.sendMsg("/hush");\n    });\n});\n\nif (~stopMidiMuteControl != nil, {\n    ~stopMidiMuteControl.value;\n});\n\n~stopMidiMuteControl = {\n    playbackControl.free;\n};\n)\n\n// Evaluate the line below to stop it.\n~stopMidiMuteControl.value;\n')))}d.isMDXComponent=!0}}]);