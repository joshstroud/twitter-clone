(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(30),i=n.n(c),r=(n(40),n(31)),o=n(32),l=n(35),j=n(34),d=n(10),b=n(3),u=(n(41),n(11)),h=n(12),O=n.p+"static/media/twitter-login-image.ee316e0d.png",m=n(1);var p=function(e){return Object(m.jsxs)("div",{className:"login-splash",children:[Object(m.jsxs)("div",{className:"splash-image",children:[Object(m.jsx)("img",{src:O}),Object(m.jsx)(u.a,{className:"twitter-icon",icon:h.a})]}),Object(m.jsxs)("div",{className:"splash-text-container",children:[Object(m.jsx)(u.a,{className:"twitter-icon",icon:h.a}),Object(m.jsx)("h1",{children:"Happening now"}),Object(m.jsx)("h3",{children:" Join Twitter today."}),Object(m.jsx)(d.b,{to:"/signup",children:Object(m.jsx)("div",{className:"button primary",children:"Sign up"})}),Object(m.jsx)(d.b,{to:"/login",children:Object(m.jsx)("div",{className:"button secondary",children:"Log in"})})]})]})},x=n(9),g="http://localhost:8080/api",v=n(14),w=n.n(v);var f=function(e){var t=Object(a.useState)(""),n=Object(x.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),r=Object(x.a)(i,2),o=r[0],l=r[1],j=function(e){"username"===e.currentTarget.name&&c(e.target.value),"password"===e.currentTarget.name&&l(e.target.value)},O=Object(a.useState)(!1),p=Object(x.a)(O,2),v=p[0],f=p[1],N=Object(a.useState)(null),S=Object(x.a)(N,2),y=S[0],C=S[1];return Object(m.jsxs)("div",{className:"login-container",children:[v?Object(m.jsx)(b.a,{to:"/"}):null,Object(m.jsxs)("main",{children:[Object(m.jsx)(u.a,{className:"twitter-icon",icon:h.a}),Object(m.jsx)("h1",{children:"Log in to Twitter"}),Object(m.jsx)("div",{className:"flash",children:y}),Object(m.jsxs)("div",{className:"input-box",children:[Object(m.jsx)("label",{htmlFor:"username",children:"Email or handle"}),Object(m.jsx)("input",{type:"text",name:"username",id:"username",value:s,onChange:j})]}),Object(m.jsxs)("div",{className:"input-box",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",value:o,onChange:j})]}),"3",Object(m.jsx)("div",{className:"button primary",onClick:function(e){w.a.post("".concat(g,"/session"),{username:s,password:o}).then((function(e){return f(!0)})).catch((function(e){C(e.response.data.error)}))},children:"Log in"}),Object(m.jsx)("div",{className:"footer-link-container",children:Object(m.jsx)(d.b,{className:"footer-link",to:"/signup",children:"Sign up for Twitter"})}),v]})]})};var N=function(e){var t=Object(a.useState)(""),n=Object(x.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),r=Object(x.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)(""),O=Object(x.a)(j,2),p=O[0],v=O[1],f=function(e){"email"===e.currentTarget.name?c(e.target.value):"password"===e.currentTarget.name?v(e.target.value):"handle"===e.currentTarget.name&&l(e.target.value)},N=Object(a.useState)(null),S=Object(x.a)(N,2),y=S[0],C=S[1],T=Object(a.useState)(!1),k=Object(x.a)(T,2),F=k[0],L=k[1];return Object(m.jsxs)("div",{className:"login-container",children:[F?Object(m.jsx)(b.a,{to:"/"}):null,Object(m.jsxs)("main",{children:[Object(m.jsx)(u.a,{className:"twitter-icon",icon:h.a}),Object(m.jsx)("h1",{children:"Sign up for Twitter"}),Object(m.jsx)("div",{className:"flash",children:y}),Object(m.jsxs)("div",{className:"input-box",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email or handle"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",value:s,onChange:f})]}),Object(m.jsxs)("div",{className:"input-box",children:[Object(m.jsx)("label",{htmlFor:"handle",children:"Handle"}),Object(m.jsx)("input",{type:"text",name:"handle",id:"handle",value:o,onChange:f})]}),Object(m.jsxs)("div",{className:"input-box",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",value:p,onChange:f})]}),Object(m.jsx)("div",{className:"button primary",onClick:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s.toLowerCase())?/^[0-9a-zA-Z]+$/.test(o.toLowerCase())?/^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/.test(p.toLowerCase())?null:"Not a valid password. Password is minimum six characters.":"Not a valid handle. Handle can only be a-z letters and numbers.":"Not a valid email";t?C(t):w.a.post("".concat(g,"/users"),{email:s,handle:o,password:p}).then((function(e){return w.a.post("".concat(g,"/session"),{username:s,password:p})})).then((function(e){return L(!0)})).catch((function(e){C(e.response.data.error)}))},children:"Sign up"}),Object(m.jsx)("div",{className:"footer-link-container",children:Object(m.jsx)(d.b,{className:"footer-link",to:"/login",children:"Log in to Twitter"})}),F]})]})},S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{exact:!0,path:"/",component:p}),Object(m.jsx)(b.b,{path:"/login",component:f}),Object(m.jsx)(b.b,{path:"/signup",component:N})]})})})}}]),n}(a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),y()}},[[69,1,2]]]);
//# sourceMappingURL=main.f92ebcbe.chunk.js.map