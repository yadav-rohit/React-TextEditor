(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(4),r=c.n(l),s=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.style," bg-").concat(e.style),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.modeselect,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.style?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"switch mode"})]})]})]})})}function b(e){var t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],l=c[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container mb-3 xl",children:[Object(o.jsx)("h1",{className:"text-".concat("light"===e.style?"dark":"light"),children:e.tsst}),Object(o.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.style?"white":"grey",color:"light"===e.style?"black":"white"},value:a,onChange:function(e){console.log("Text changed"),l(e.target.value)},id:"myBox",rows:"8"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){console.log("upper case was pressed");var e=a.toUpperCase();l(e)},children:"To Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){console.log("upper case was pressed");var e=a.toLowerCase();l(e)},children:"To lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var e=a,t=document.createElement("a");t.download="user-text.txt";var c=new Blob([e],{type:"text/plain"});t.href=window.URL.createObjectURL(c),t.click()},children:"Download .txt file"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var e=a;navigator.clipboard.writeText(e)},children:"Copy text"}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{children:"Summary of text"}),Object(o.jsxs)("p",{children:[" ",a.split(" ").filter((function(e){return 0!==e.length})).length,"  Words",Object(o.jsx)("br",{}),a.length," Characters"]}),Object(o.jsxs)("p",{children:["Time required to read - ",.008*a.split(" ").filter((function(e){return 0!==e.length})).length," minutes"]}),Object(o.jsxs)("h2",{children:["Preview - ",Object(o.jsx)("br",{})]}),Object(o.jsx)("p",{children:a.length>0?a:"Enter Text To Preview"})]})]})})}var d=function(){var e=Object(n.useState)("light"),t=Object(s.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Text Editor",style:c,modeselect:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="#360989",document.body.style.color="white"):(a("light"),document.body.style.backgroundColor="white",document.body.style.color="black")}}),Object(o.jsx)("div",{className:" my-3",children:Object(o.jsx)(b,{tsst:"Enter Yout Text To Analyze",style:c})})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),l(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.50fb9b51.chunk.js.map