(this["webpackJsonpforms-steps"]=this["webpackJsonpforms-steps"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(9),s=n.n(i),r=(n(14),n(15),n(6)),m=n(4),o=n(8),u=n(2),j=n(0);function d(t){var e=t.onAddItem,n=t.handleTimestamp,a=t.handleDistance,i=Object(c.useRef)();return Object(j.jsxs)("form",{ref:i,className:"form",onSubmit:function(t){return e(t)},children:[Object(j.jsxs)("div",{className:"form__date",children:[Object(j.jsx)("div",{children:"\u0414\u0430\u0442\u0430 (\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(j.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",id:"date",name:"date",type:"text",onChange:function(t){return n(t)}})]}),Object(j.jsxs)("div",{className:"form__distance",children:[Object(j.jsx)("div",{children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(j.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044e",id:"distance",name:"distance",type:"text",onChange:function(t){return a(t)}})]}),Object(j.jsx)("input",{onClick:function(t){i.current.reset()},id:"submit",type:"submit",value:"OK"})]})}function l(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"table__title",children:[Object(j.jsx)("span",{children:"\u0414\u0430\u0442\u0430 (\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(j.jsx)("span",{children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(j.jsx)("span",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]})})}function b(t){var e=t.item,n=t.onDeleteItem;return Object(j.jsxs)("div",{className:"table__item",children:[Object(j.jsx)("div",{className:"table__timestamp",children:e.timestamp}),Object(j.jsx)("div",{className:"table__distance",children:e.distance}),Object(j.jsx)("div",{className:"table__delete",onClick:n,children:"\u2718"})]},e.key)}function f(t){var e=t.items,n=t.setState;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"table__items",children:e.map((function(t,c){return Object(j.jsx)(b,{item:t,onDeleteItem:function(){return function(t){var c=Object(r.a)(e);c.splice(t,1),n((function(){return c}))}(c)}},t.key)}))})})}function O(t){var e=t.items,n=t.setState;return Object(j.jsxs)("div",{className:"table",children:[Object(j.jsx)(l,{}),Object(j.jsx)(f,{items:e,setState:n})]})}var p=function(t){var e=t.split(".");return new Date(e[2],e[1]-1,e[0])},h=[{key:Object(u.a)(5),timestamp:"20.07.2019",distance:"5"},{key:Object(u.a)(5),timestamp:"08.12.1996",distance:"10"},{key:Object(u.a)(5),timestamp:"18.07.2019",distance:"8.8"}];function v(){var t=Object(c.useState)(h.sort((function(t,e){return p(t.timestamp)<p(e.timestamp)?1:-1}))),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)({timestamp:"",distance:""}),s=Object(o.a)(i,2),l=s[0],b=s[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d,{setForm:b,onAddItem:function(t){t.preventDefault();var e=p(l.timestamp),c=l.distance,i=function(t){var e=1===t.getDate().toString().length?"0".concat(t.getDate()):t.getDate(),n=1===t.getMonth().toString().length?"0".concat(t.getMonth()+1):t.getMonth()+1;return"".concat(e,".").concat(n.toString(),".").concat(t.getFullYear())}(e);n.find((function(t){return t.timestamp===i}))?a((function(t){var e=[];return t.forEach((function(t){if(t.timestamp===i){var n=(+t.distance+ +c).toString();t={key:Object(u.a)(5),timestamp:i,distance:n}}e.push(t)})),e.sort((function(t,e){return p(t.timestamp)<p(e.timestamp)?1:-1}))})):a((function(t){return[].concat(Object(r.a)(t),[{key:Object(u.a)(5),timestamp:i,distance:c}]).sort((function(t,e){return p(t.timestamp)<p(e.timestamp)?1:-1}))}))},handleTimestamp:function(t){var e=t.target.value;b((function(t){return Object(m.a)(Object(m.a)({},t),{},{timestamp:e})}))},handleDistance:function(t){var e=t.target.value;b((function(t){return Object(m.a)(Object(m.a)({},t),{},{distance:e})}))}}),Object(j.jsx)(O,{items:n,setState:a})]})}function x(){return Object(j.jsx)(v,{})}var g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.f71c98b3.chunk.js.map