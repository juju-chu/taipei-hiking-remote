(this["webpackJsonptaipei-hiking"]=this["webpackJsonptaipei-hiking"]||[]).push([[0],{35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(14),i=n.n(s),r=(n(35),n(26)),o=n.n(r),l=n(27),d=n(11),j=n(45),u=n(1),b={zIndex:1,width:"100vw"},h=function(){return Object(u.jsx)("div",{className:"header position-fixed",style:b,children:Object(u.jsx)(j.a,{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/taipei-hiking-remote",children:"\u53f0\u5317\u5e02\u5065\u884c\u6b65\u9053"})})})},x={padding:"100px 0 0 24px",width:"200px"},O=function(e){var t=e.setKeyword,n=Object(c.useState)(""),a=Object(d.a)(n,2),s=a[0],i=a[1];return Object(u.jsx)("div",{className:"search",style:x,children:Object(u.jsx)("form",{children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"\u884c\u653f\u5340\uff08\u4f8b\u5982\uff1a\u5927\u5b89\u3001\u58eb\u6797...\uff09"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"district",value:s,onChange:function(e){i(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),t(s)},children:"\u9001\u51fa"})]})})})},p=n(28),m=n.n(p),f=n(44),v=n(46),g={maxWidth:"15rem"},N=function(e){e.id;var t=e.name,n=e.district,a=e.description,s=Object(c.useState)(!1),i=Object(d.a)(s,2),r=i[0],o=i[1],l=function(){return o(!1)};return Object(u.jsxs)("div",{className:"path",children:[Object(u.jsxs)("div",{className:"card border-danger m-3",style:g,children:[Object(u.jsx)("div",{className:"card-header",children:n}),Object(u.jsxs)("div",{className:"card-body",onClick:function(){return o(!0)},children:[Object(u.jsx)("h4",{className:"card-title",children:t}),Object(u.jsx)(m.a,{text:a,id:"really-unique-id",lines:4,ellipsis:"...",button:"false",moreText:"\u986f\u793a\u66f4\u591a",lessText:"\u986f\u793a\u8f03\u5c11",className:"custom-class",innerElement:"p"})]})]}),Object(u.jsxs)(f.a,{show:r,onHide:l,children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:Object(u.jsx)(f.a.Title,{children:t})}),Object(u.jsx)(f.a.Body,{children:a}),Object(u.jsx)(f.a.Footer,{children:Object(u.jsx)(v.a,{variant:"secondary",onClick:l,children:"\u95dc\u9589"})})]})]})},y=function(e){var t=e.pathList;return Object(u.jsx)("div",{className:"pathList d-flex flex-wrap justify-content-center p-2",children:t.map((function(e){var t=e._id,n=e.\u6b65\u9053\u540d\u7a31,c=e.\u884c\u653f\u5340,a=e.\u74b0\u5883\u7279\u8272;return Object(u.jsx)(N,{id:!0,name:n,district:c,description:a},t)}))})},k=function(e){for(var t=e.count,n=e.pathsPerPage,c=e.currentPage,a=e.setPage,s=function(e){return function(){a((function(t){return e}))}},i=Math.floor(t/n),r=[],o=0;o<=i;o++)r.push(o);return Object(u.jsx)("div",{className:"pagination d-flex justify-content-center",children:Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:"page-item"+(0===c?" disabled":""),children:Object(u.jsx)("button",{className:"page-link",onClick:s(c-1),children:"\xab"})}),r.map((function(e){return Object(u.jsx)("li",{className:"page-item"+(e===c?" active":""),children:Object(u.jsx)("button",{className:"page-link",onClick:s(e),children:e+1})},e)})),Object(u.jsx)("li",{className:"page-item"+(c<i?"":" disabled"),children:Object(u.jsx)("button",{className:"page-link",onClick:s(c+1),children:"\xbb"})})]})})})},w="".concat("https://data.taipei/api/v1/dataset/1c6a4f3b-d8e9-4ee0-aed6-1ad9e2387ff5?scope=resourceAquire","&limit=").concat(8),C=(n(41),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(d.a)(s,2),r=i[0],j=i[1],b=Object(c.useState)(0),x=Object(d.a)(b,2),p=x[0],m=x[1],f=Object(c.useState)(""),v=Object(d.a)(f,2),g=v[0],N=v[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"&offset=").concat(8*r,"&q=").concat(g));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,m(c.result.count),t(c.result.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(a)}),[r,g]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"search",children:Object(u.jsx)(O,{setKeyword:N})}),Object(u.jsx)(y,{pathList:n}),Object(u.jsx)(k,{count:p,pathsPerPage:8,currentPage:r,setPage:j})]})]})});var P=function(){return Object(u.jsx)(C,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),S()}},[[42,1,2]]]);
//# sourceMappingURL=main.efea4465.chunk.js.map