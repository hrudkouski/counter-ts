(this["webpackJsonpcounter-ts"]=this["webpackJsonpcounter-ts"]||[]).push([[0],{1:function(e,r,a){e.exports={app:"App_app__2YlnF",wrapper:"App_wrapper__1ezzb",buttons:"App_buttons__2hN6a",btn:"App_btn__1nRYO",display:"App_display__3Qz9J",errorValue:"App_errorValue__2NpGb",errorText:"App_errorText__3I0pv",numberDisplay:"App_numberDisplay__2j-oy",settingsDisplay:"App_settingsDisplay__2vymR",inputLocal:"App_inputLocal__3_kyQ",inputTitle:"App_inputTitle__1Soo1",inputLocalError:"App_inputLocalError__WaqN5"}},12:function(e,r,a){},14:function(e,r,a){"use strict";a.r(r);var t=a(3),n=a.n(t),o=a(7),c=a.n(o),s=(a(12),a(2)),i=a(5),l=a(1),u=a.n(l),p=a(4),b=a(0);function j(e){var r=e.errorSet,a=e.errorIncorrect,t=e.value,n=t===Object(p.a)(e,["errorSet","errorIncorrect","value"]).maxValue?"".concat(u.a.errorValue):"";return Object(b.jsx)(b.Fragment,{children:a?Object(b.jsx)("div",{className:u.a.display,children:a?Object(b.jsx)("span",{className:a?u.a.errorText:u.a.numberDisplay,children:"Incorrect value!"}):Object(b.jsx)("span",{className:"".concat(r?u.a.errorText:u.a.numberDisplay," ").concat(n),children:t})}):Object(b.jsx)("div",{className:u.a.display,children:r?Object(b.jsx)("span",{className:"".concat(u.a.numberDisplay," ").concat(n),children:t}):Object(b.jsx)("span",{className:u.a.errorText,children:"Enter values and press 'set'"})})})}function m(e){var r=e.disabled,a=e.onClickChangeValue,t=Object(p.a)(e,["disabled","onClickChangeValue"]);return Object(b.jsx)("button",{disabled:r,onClick:function(){return a()},className:u.a.btn,children:t.title})}function O(e){var r=e.value,a=e.title,t=e.onChange,n=Object(p.a)(e,["value","title","onChange"]),o=n.errorDisplayMax||n.errorDisplayMin?"".concat(u.a.inputLocalError):"";return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:u.a.inputTitle,children:a}),Object(b.jsx)("input",{className:"".concat(u.a.inputLocal," ").concat(o),onChange:t,value:r,type:"number"})]})}var d=function(){var e=Object(t.useState)(0),r=Object(i.a)(e,2),a=r[0],n=r[1],o=Object(t.useState)(0),c=Object(i.a)(o,2),l=c[0],p=c[1],d=Object(t.useState)(3),x=Object(i.a)(d,2),v=x[0],_=x[1],h=Object(t.useState)({errorCommon:!1,errorMin:!1,errorMax:!1}),C=Object(i.a)(h,2),g=C[0],M=C[1];Object(t.useEffect)((function(){var e=localStorage.getItem("maxValue");if(e){var r=JSON.parse(e);_(r)}var a=localStorage.getItem("minValue");if(a){var t=JSON.parse(a);p(t)}}),[]);var f=a===v||g.errorMin||g.errorMax,y=a===l||g.errorMin||g.errorMax,N=g.errorMin||g.errorMax;return Object(b.jsxs)("div",{className:u.a.app,children:[Object(b.jsxs)("div",{className:u.a.wrapper,children:[Object(b.jsxs)("div",{className:"".concat(u.a.display," ").concat(u.a.settingsDisplay),children:[Object(b.jsx)(O,{onChange:function(e){M(Object(s.a)(Object(s.a)({},g),{},{errorCommon:!1}));var r=e.currentTarget.valueAsNumber;M(r<=0||r<=l?Object(s.a)(Object(s.a)({},g),{},{errorCommon:!0,errorMax:!0}):Object(s.a)(Object(s.a)({},g),{},{errorMin:!(g.errorMin&&l>=0)&&g.errorMin,errorCommon:!(g.errorMin&&l>=0)&&g.errorMin,errorMax:!1})),_(r)},value:v,title:"Max Value:",errorDisplayMax:g.errorMax}),Object(b.jsx)(O,{onChange:function(e){M(Object(s.a)(Object(s.a)({},g),{},{errorCommon:!1}));var r=e.currentTarget.valueAsNumber;M(r<0||r>=v?Object(s.a)(Object(s.a)({},g),{},{errorCommon:!0,errorMin:!0}):Object(s.a)(Object(s.a)({},g),{},{errorCommon:!(g.errorMax&&v>=0)&&g.errorMax,errorMin:!1,errorMax:!(g.errorMax&&v>=0)&&g.errorMax})),p(r)},value:l,title:"Min Value: ",errorDisplayMin:g.errorMin})]}),Object(b.jsx)("div",{className:u.a.buttons,children:Object(b.jsx)(m,{title:"set",disabled:g.errorCommon,onClickChangeValue:function(){localStorage.setItem("maxValue",JSON.stringify(v)),localStorage.setItem("minValue",JSON.stringify(l)),n(l),M(Object(s.a)(Object(s.a)({},g),{},{errorCommon:!0}))}})})]}),Object(b.jsxs)("div",{className:u.a.wrapper,children:[Object(b.jsx)(j,{errorIncorrect:N,maxValue:v,value:a,errorSet:g.errorCommon}),Object(b.jsxs)("div",{className:u.a.buttons,children:[Object(b.jsx)(m,{disabled:f||!g.errorCommon,title:"+",onClickChangeValue:function(){n(a===v?a:a+1)}}),Object(b.jsx)(m,{disabled:y||!g.errorCommon,title:"-",onClickChangeValue:function(){n(a===l?a:a-1)}}),Object(b.jsx)(m,{disabled:!g.errorCommon||N,title:"res",onClickChangeValue:function(){n(l)}})]})]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(r){var a=r.getCLS,t=r.getFID,n=r.getFCP,o=r.getLCP,c=r.getTTFB;a(e),t(e),n(e),o(e),c(e)}))};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.860b3090.chunk.js.map