(this["webpackJsonpmantis-free-react-admin-template"]=this["webpackJsonpmantis-free-react-admin-template"]||[]).push([[25],{612:function(t,e,n){"use strict";var r=n(967),c=n(659),a=n.n(c),i=r.a.create({baseURL:"http://camping-gaja-go.com",paramsSerializer:function(t){return a.a.stringify(t)}});i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t.data})),e.a=i},660:function(t,e){},771:function(t,e,n){"use strict";n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return j})),n.d(e,"e",(function(){return p}));var r=n(111),c=n(151),a=n(612),i="/api/v1/posts",u=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.a.get(i,e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.abrupt("return",a.a.get("".concat(i,"/").concat(n)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.abrupt("return",a.a.delete("".concat(i,"/").concat(n)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a.a.post("".concat(i),e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e,n){var c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.id,t.abrupt("return",a.a.put("".concat(i,"/").concat(c),n));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},958:function(t,e,n){"use strict";n.r(e);var r=n(111),c=n(151),a=n(10),i=n(0),u=n(16),s=n(771),o=n(555),j=n(577),p=n(791),b=n(589),f=n(592),d=n(110),l=n(565),O=n(591),h=n(790),x=n(580),v=n(835),m=n(981),w=n(155),g=n(1);e.default=function(){var t=Object(u.e)(),e=Object(w.b)().enqueueSnackbar,n=Object(u.f)().id,y=Object(i.useState)(null),k=Object(a.a)(y,2),C=k[0],S=k[1],R=Object(i.useState)(!1),q=Object(a.a)(R,2),F=q[0],J=q[1];Object(i.useEffect)((function(){T()}),[n]);var T=function(){var t=Object(c.a)(Object(r.a)().mark((function t(){var e;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.c)({id:n});case 2:e=t.sent,S(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){t("/board")},A=function(){var t=Object(c.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,J(!0),t.next=4,Object(s.b)({id:n});case 4:e("\uac8c\uc2dc\uae00\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",{variant:"success"}),J(!1),z(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e(t.t0,{variant:"error"}),J(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t("/post/update",{state:{id:n,title:C.title,content:C.content}});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(o.a,{direction:"row",spacing:2,children:[Object(g.jsx)(j.a,{container:!0,children:Object(g.jsx)(j.a,{item:!0,children:Object(g.jsx)(p.a,{variant:"contained",onClick:z,children:"\ubaa9\ub85d"})})}),Object(g.jsxs)(j.a,{container:!0,justifyContent:"flex-end",children:[Object(g.jsx)(j.a,{item:!0,children:Object(g.jsx)(p.a,{variant:"outlined",onClick:E,style:{marginRight:10},children:"\uc218\uc815"})}),Object(g.jsx)(j.a,{item:!0,children:Object(g.jsx)(m.a,{variant:"contained",onClick:A,color:"error",loading:F,children:"\uc0ad\uc81c"})})]})]}),Object(g.jsxs)(b.a,{sx:{p:2},style:{borderRadius:"8px",marginTop:15},children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(d.a,{sx:{flex:"1 1 100%"},variant:"h4",id:"tableTitle",component:"div",children:null!==C&&void 0!==C&&C.title?C.title:""})}),Object(g.jsx)(l.a,{}),Object(g.jsx)(O.a,{children:C?Object(g.jsx)(j.a,{item:!0,xs:12,children:Object(g.jsxs)(o.a,{spacing:1,children:[Object(g.jsx)(j.a,{container:!0,justifyContent:"flex-end",children:Object(g.jsxs)(h.a,{htmlFor:"desc-signup",children:["\uc791\uc131\uc790 : ",C.author]})}),Object(g.jsx)(d.a,{variant:"body1","aria-label":"maximum height",placeholder:"\ub0b4\uc6a9",children:C.content})]})}):Object(g.jsx)(x.a,{sx:{py:3,minHeight:560},style:{textAlign:"center"},children:Object(g.jsx)(v.a,{})})})]})]})}}}]);
//# sourceMappingURL=25.4225770f.chunk.js.map