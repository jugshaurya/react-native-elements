"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1318,7165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),k=d(a),c=n,h=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},76248:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>c});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=a(53177),m=["components"],o={id:"circularslider",title:"Circular Slider",slug:"/circularslider"},d=void 0,p={unversionedId:"universe/circularslider",id:"universe/circularslider",title:"Circular Slider",description:"This is a react-native-elements-universe component",source:"@site/docs/universe/circularSlider.md",sourceDirName:"universe",slug:"/circularslider",permalink:"/docs/next/circularslider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/universe/circularSlider.md",tags:[],version:"current",frontMatter:{id:"circularslider",title:"Circular Slider",slug:"/circularslider"},sidebar:"docs",previous:{title:"Tooltip",permalink:"/docs/next/tooltip"},next:{title:"Contributing",permalink:"/docs/next/repo/contributing"}},u=[{value:"Usage",id:"usage",children:[],level:2}],k={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,m);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is a ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-elements-universe")," component")),(0,l.kt)("p",null,"Sliders allow users to make selections from a range of values."),(0,l.kt)("div",{className:"component-preview component-preview--grid component-preview--grid-10"},(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/circularSlider1.gif",alt:"Circular Slider"}),(0,l.kt)("figcaption",null,"With Thumb (as a slider)")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/circularSlider2.gif",alt:"Circular Slider"}),(0,l.kt)("figcaption",null,"Without Thumb (as a Progress Indicator)")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/arcSlider.png",alt:"Arc Slider"}))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { CircularSlider } from 'react-native-elements-universe';\n\n<CircularSlider value={value} onChange={setValue} />;\n\n<CircularSlider value={value} noThumb />;\n\n// 90 deg Arc\n<CircularSlider maxAngle={90} />;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Either use percentage (0 to 100) in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," or specify ",(0,l.kt)("inlineCode",{parentName:"p"},"maximumValue")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"minimumValue"))),(0,l.kt)("hr",null),(0,l.kt)(i.default,{mdxType:"Props"}),(0,l.kt)("hr",null))}c.isMDXComponent=!0},53177:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>o,metadata:()=>d,toc:()=>p,default:()=>k});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],m={},o=void 0,d={unversionedId:"universe/props/circularslider",id:"universe/props/circularslider",title:"circularslider",description:"Props",source:"@site/docs/universe/props/circularslider.md",sourceDirName:"universe/props",slug:"/universe/props/circularslider",permalink:"/docs/next/universe/props/circularslider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/universe/props/circularslider.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Props",id:"props",children:[],level:2},{value:"Reference",id:"reference",children:[{value:"<code>value</code>",id:"value",children:[],level:3},{value:"<code>maximumValue</code>",id:"maximumvalue",children:[],level:3},{value:"<code>minimumValue</code>",id:"minimumvalue",children:[],level:3},{value:"<code>minAngle</code>",id:"minangle",children:[],level:3},{value:"<code>maxAngle</code>",id:"maxangle",children:[],level:3},{value:"<code>trackRadius</code>",id:"trackradius",children:[],level:3},{value:"<code>thumbRadius</code>",id:"thumbradius",children:[],level:3},{value:"<code>trackWidth</code>",id:"trackwidth",children:[],level:3},{value:"<code>trackColor</code>",id:"trackcolor",children:[],level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[],level:3},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[],level:3},{value:"<code>thumbTextColor</code>",id:"thumbtextcolor",children:[],level:3},{value:"<code>thumbTextSize</code>",id:"thumbtextsize",children:[],level:3},{value:"<code>noThumb</code>",id:"nothumb",children:[],level:3},{value:"<code>showText</code>",id:"showtext",children:[],level:3},{value:"<code>showThumbText</code>",id:"showthumbtext",children:[],level:3},{value:"<code>textColor</code>",id:"textcolor",children:[],level:3},{value:"<code>textSize</code>",id:"textsize",children:[],level:3}],level:2}],u={toc:p};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},(0,l.kt)("inlineCode",{parentName:"a"},"value"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minimumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"maximumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maximumvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"minimumValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#minangle"},(0,l.kt)("inlineCode",{parentName:"a"},"maxAngle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#maxangle"},(0,l.kt)("inlineCode",{parentName:"a"},"minAngle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackadius"},(0,l.kt)("inlineCode",{parentName:"a"},"trackRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbradius"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbRadius"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackwidth"},(0,l.kt)("inlineCode",{parentName:"a"},"trackWidth"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#trackcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"trackColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tracktintcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"trackTintColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbmarkercolor"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTextColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#thumbtextsize"},(0,l.kt)("inlineCode",{parentName:"a"},"thumbTextSize"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nothumb"},(0,l.kt)("inlineCode",{parentName:"a"},"noThumb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showtext"},(0,l.kt)("inlineCode",{parentName:"a"},"showText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showthumbtext"},(0,l.kt)("inlineCode",{parentName:"a"},"showThumbText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textcolor"},(0,l.kt)("inlineCode",{parentName:"a"},"textColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textsize"},(0,l.kt)("inlineCode",{parentName:"a"},"textSize")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("p",null,"Value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maximumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"maximumValue")),(0,l.kt)("p",null,"Maximum value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minimumvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"minimumValue")),(0,l.kt)("p",null,"Minimum value of Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minangle"},(0,l.kt)("inlineCode",{parentName:"h3"},"minAngle")),(0,l.kt)("p",null,"Minimum angle of arc (in degrees)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxangle"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxAngle")),(0,l.kt)("p",null,"Maximum angle of arc (in degress)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"359.9")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackradius"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackRadius")),(0,l.kt)("p",null,"Radius of Circular Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbradius"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbRadius")),(0,l.kt)("p",null,"Radius of Circular Slider's thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"12")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackwidth"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackWidth")),(0,l.kt)("p",null,"Width of Circular Slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackColor")),(0,l.kt)("p",null,"Color of track"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"theme primary color")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,l.kt)("p",null,"color of thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"trackColor's value")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tracktintcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"trackTintColor")),(0,l.kt)("p",null,"Tint Color of track"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"theme.primary.gray5")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtextcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTextColor")),(0,l.kt)("p",null,"Marker Text of thumb color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbtextsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbTextSize")),(0,l.kt)("p",null,"Marker Text of thumb Size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nothumb"},(0,l.kt)("inlineCode",{parentName:"h3"},"noThumb")),(0,l.kt)("p",null,"Show no thumb (for progress)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"showText")),(0,l.kt)("p",null,"Show slider value at middle of slider"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"showthumbtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"showThumbText")),(0,l.kt)("p",null,"Show value at thumb"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"textColor")),(0,l.kt)("p",null,"Slider value at middle of slider color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"color string"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"trackColor")," value")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"textsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"textSize")),(0,l.kt)("p",null,"Slider value at middle of slider font size"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"100")))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);