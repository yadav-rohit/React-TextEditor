(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),l=n.n(r),s=(n(9),n(2)),i=(n(10),n(0));function o(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.style," bg-").concat(e.style),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.modeselect,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label text-".concat("light"===e.style?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"switch mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container mb-3 xl",children:[Object(i.jsx)("h1",{className:"text-".concat("light"===e.style?"dark":"light"),children:e.tsst}),Object(i.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.style?"white":"#471b68",color:"light"===e.style?"black":"white"},value:a,onChange:function(e){r(e.target.value)},id:"myBox",rows:"8"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var e=a.toUpperCase();r(e)},children:"To Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var e=a.toLowerCase();r(e)},children:"To lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var e=a.split(/[ ]+ /);r(e.join(" "))},children:"Clear extraspace"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var e=a,t=document.createElement("a");t.download="user-text.txt";var n=new Blob([e],{type:"text/plain"});t.href=window.URL.createObjectURL(n),t.click()},children:"Download .txt file"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var e=a;navigator.clipboard.writeText(e)},children:"Copy text"}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h1",{children:"Summary of text"}),Object(i.jsxs)("p",{children:[" ",a.split(" ").filter((function(e){return 0!==e.length})).length,"  Words",Object(i.jsx)("br",{}),a.length," Characters"]}),Object(i.jsxs)("p",{children:["Time required to read - ",.008*a.split(" ").filter((function(e){return 0!==e.length})).length," minutes"]}),Object(i.jsxs)("h2",{children:["Preview - ",Object(i.jsx)("br",{})]}),Object(i.jsx)("p",{children:a.length>0?a:"Enter Text To Preview"})]})]})})}var d=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{title:"Text Editor",style:n,modeselect:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="rgb(112 8 191)",document.body.style.color="white"):(a("light"),document.body.style.backgroundColor="white",document.body.style.color="black")}}),Object(i.jsx)("div",{className:" my-3",children:Object(i.jsx)(b,{tsst:"Enter Yout Text To Analyze",style:n})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.628c8775.chunk.js.map