(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,o=n(6),s=n.n(o),i=n(5),a=n(7),r=n(1),l=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(r.useState)(c.NONE),e=Object(i.a)(t,2),n=e[0],o=e[1],s=Object(r.useState)(!1),b=Object(i.a)(s,2),h=b[0],j=b[1],d=function(t,e,n){var o=Object(a.a)(t);return o.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&o.reverse(),console.log(e,n),o}(u,n,h);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:"button is-info \n          ".concat(n===c.ALPHABET?"":"is-light"),onClick:function(){o(c.ALPHABET)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:"button is-success  \n          ".concat(n===c.LENGTH?"":"is-light"),onClick:function(){o(c.LENGTH)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:"button is-warning \n          ".concat(h?"":"is-light"),onClick:function(){j(!h)},children:"Reverse"}),n!==c.NONE||!1!==h?Object(l.jsx)("button",{type:"button","data-cy":"button",className:"button is-danger is-light ",onClick:function(){o(c.NONE),j(!1)},children:"Reset"}):""]}),Object(l.jsx)("ul",{children:d.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d189fde5.chunk.js.map