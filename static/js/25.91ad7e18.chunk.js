(this["webpackJsonpmantis-free-react-admin-template"]=this["webpackJsonpmantis-free-react-admin-template"]||[]).push([[25],{612:function(e,t,n){"use strict";var r=n(970),a=n(659),c=n.n(a),i=r.a.create({baseURL:"http://camping-gaja-go.com",paramsSerializer:function(e){return c.a.stringify(e)}});i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e.data})),t.a=i},660:function(e,t){},766:function(e,t,n){"use strict";var r=n(10),a=n(0),c=n(942),i=n(943),s=n(944),u=n(945),o=n(946),j=n(947),l=n(580),b=n(836),d=n(939),f=n(1);t.a=function(e){var t=e.columns,n=e.rows,p=e.rowsPerPageOptions,O=void 0===p?[10,25,100]:p,h=e.isLoading,g=e.rowClick,m=Object(a.useState)(0),w=Object(r.a)(m,2),x=w[0],v=w[1],y=Object(a.useState)(10),P=Object(r.a)(y,2),k=P[0],C=P[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(c.a,{sx:{},children:Object(f.jsxs)(i.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(f.jsx)(s.a,{children:Object(f.jsx)(u.a,{children:t.map((function(e){return Object(f.jsx)(o.a,{align:e.align?e.align:"center",style:{width:e.width},children:e.label},e.id)}))})}),Object(f.jsx)(j.a,{children:h?Object(f.jsx)(u.a,{children:Object(f.jsx)(o.a,{align:"center",colSpan:6,children:Object(f.jsx)(l.a,{sx:{py:3,minHeight:560},children:Object(f.jsx)(b.a,{})})})}):n&&n.slice(x*k,x*k+k).map((function(e){return Object(f.jsx)(u.a,{hover:!0,tabIndex:-1,onClick:g?function(t){return g(t,e)}:function(){},style:{cursor:"pointer"},children:t.map((function(t){var n=e[t.id];return Object(f.jsx)(o.a,{align:t.align?t.align:"center",children:t.render?t.render(e):n},t.id)}))},e.id)}))})]})}),Object(f.jsx)(d.a,{rowsPerPageOptions:O,component:"div",count:n?n.length:0,rowsPerPage:k,page:x,onPageChange:function(e,t){v(t)},onRowsPerPageChange:function(e){C(+e.target.value),v(0)}})]})}},848:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(111),a=n(151),c=n(612),i="/review",s=function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.abrupt("return",c.a.get("".concat(i,"/myreivew?user_id=").concat(n),{withCredentials:!0}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("".concat(i),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},967:function(e,t,n){"use strict";n.r(t);var r=n(111),a=n(151),c=n(10),i=n(0),s=n(577),u=n(766),o=n(16),j=n(848),l=n(1);t.default=function(){var e=Object(o.e)(),t=Object(i.useState)([]),n=Object(c.a)(t,2),d=n[0],f=n[1],p=Object(i.useState)(!1),O=Object(c.a)(p,2),h=O[0],g=O[1];Object(i.useEffect)((function(){m()}),[]);var m=function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,Object(j.b)();case 3:t=e.sent,f(t),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=Object(i.useCallback)((function(t,n){var r=n.id;e("/campsite/".concat(r))}),[]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{container:!0,direction:"row",justifyContent:"flex-end",spacing:2}),Object(l.jsx)(u.a,{columns:b,rows:d,rowsPerPageOptions:[10,20,30],isLoading:h,rowClick:w})]})};var b=[{id:"image",label:"\ub300\ud45c\uc774\ubbf8\uc9c0",width:60,align:"left",render:function(e){return Object(l.jsx)("img",{src:e.campsiteThumImage,alt:"campsite",height:"150",style:{objectFit:"cover"}})}},{id:"campsiteName",label:"\uc0ac\uc774\ud2b8 \uc774\ub984",width:300,align:"left"},{id:"price",label:"\uc774\uc6a9 \uc694\uae08(\uc6d0)",width:100,align:"left"}]}}]);
//# sourceMappingURL=25.91ad7e18.chunk.js.map