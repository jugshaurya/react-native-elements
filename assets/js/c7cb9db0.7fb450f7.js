"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[512,1801],{3905:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},A=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,g=u["".concat(c,".").concat(p)]||u[p]||l[p]||o;return a?n.createElement(g,i(i({ref:t},A),{},{components:a})):n.createElement(g,i({ref:t},A))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98301:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>A,toc:()=>l,default:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(70118),s=["components"],c={},d=void 0,A={unversionedId:"main/usage/Badge/Badge",id:"main/usage/Badge/Badge",title:"Badge",description:"withBadge Higher-Order Component",source:"@site/docs/main/usage/Badge/Badge.mdx",sourceDirName:"main/usage/Badge",slug:"/main/usage/Badge/",permalink:"/docs/next/main/usage/Badge/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Badge/Badge.mdx",tags:[],version:"current",frontMatter:{}},l=[{value:"withBadge Higher-Order Component",id:"withbadge-higher-order-component",children:[],level:3}],u={toc:l};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"withbadge-higher-order-component"},"withBadge Higher-Order Component"),(0,o.kt)("p",null,"The withBadge HOC allows you to easily add badges to icons and other components."),(0,o.kt)(i.default,{mdxType:"Snack"}))}p.isMDXComponent=!0},70118:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>d,toc:()=>A,default:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={},c=void 0,d={unversionedId:"main/usage/Badge/snack/index",id:"main/usage/Badge/snack/index",title:"index",description:"",source:"@site/docs/main/usage/Badge/snack/index.md",sourceDirName:"main/usage/Badge/snack",slug:"/main/usage/Badge/snack/",permalink:"/docs/next/main/usage/Badge/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Badge/snack/index.md",tags:[],version:"current",frontMatter:{}},A=[],l={toc:A};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Badge","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%2C%20Badge%2C%20Icon%2C%20withBadge%20%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20BadgedIcon%20%3D%20withBadge(15)(Icon)%3B%0A%0Aconst%20BadgeComponent%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EStandard%20Badge%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20value%3D%223%22%20status%3D%22success%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2299%2B%22%20status%3D%22error%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20value%3D%22500%22%20status%3D%22primary%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2210%22%20status%3D%22warning%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EMini%20Badge%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BtextAlign%3A%20%22center%22%7D%7D%3EThis%20type%20of%20badge%20shows%20when%20no%20value%20prop%20is%20provided.%20This%20form%20is%20effective%20for%20showing%20statuses.%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22success%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22error%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22primary%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22warning%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3ESuccess%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EError%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EPrimary%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EWarning%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBadge%20as%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F41.jpg'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22medium%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBadge%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20position%3A%20'absolute'%2C%20top%3A%205%2C%20left%3A%2040%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadgedIcon%20type%3D%22ionicon%22%20name%3D%22ios-chatbubbles%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F40.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBadge%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20status%3D%22primary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20position%3A%20'absolute'%2C%20top%3A%205%2C%20left%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)%0A%0Aexport%20default%20BadgeComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);