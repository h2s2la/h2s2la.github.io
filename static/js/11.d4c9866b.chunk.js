(this["webpackJsonpmantis-free-react-admin-template"]=this["webpackJsonpmantis-free-react-admin-template"]||[]).push([[11],{605:function(e,t,r){"use strict";var n=r(839),a=r(611),i=r.n(a),o=n.a.create({baseURL:"http://localhost:8080",paramsSerializer:function(e){return i.a.stringify(e)}});o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e.data})),t.a=o},612:function(e,t){},617:function(e,t,r){"use strict";r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return d}));var n=r(111),a=r(149),i=r(605),o="/api/v1/posts",c=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.get(o,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.abrupt("return",i.a.get("".concat(o,"/").concat(r)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.abrupt("return",i.a.delete("".concat(o,"/").concat(r)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.post("".concat(o),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.abrupt("return",i.a.put("".concat(o,"/").concat(a),r));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},655:function(e,t,r){"use strict";var n=r(10),a=r(4),i=r(2),o=r(0),c=r(6),u=r(144),l=r(12),s=r(8),d=r(618),b=r(9);var p=function(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},f=r(614),m=r(109),j=r(145);function h(e){return Object(m.a)("MuiFormControl",e)}Object(j.a)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var v=r(1),O=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],x=Object(s.a)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return Object(i.a)({},t.root,t["margin".concat(Object(b.a)(r.margin))],r.fullWidth&&t.fullWidth)}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===t.margin&&{marginTop:16,marginBottom:8},"dense"===t.margin&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})})),g=o.forwardRef((function(e,t){var r=Object(l.a)({props:e,name:"MuiFormControl"}),s=r.children,m=r.className,j=r.color,g=void 0===j?"primary":j,w=r.component,y=void 0===w?"div":w,S=r.disabled,C=void 0!==S&&S,F=r.error,R=void 0!==F&&F,W=r.focused,k=r.fullWidth,P=void 0!==k&&k,q=r.hiddenLabel,T=void 0!==q&&q,N=r.margin,B=void 0===N?"none":N,I=r.required,M=void 0!==I&&I,z=r.size,E=void 0===z?"medium":z,L=r.variant,V=void 0===L?"outlined":L,A=Object(a.a)(r,O),D=Object(i.a)({},r,{color:g,component:y,disabled:C,error:R,fullWidth:P,hiddenLabel:T,margin:B,required:M,size:E,variant:V}),H=function(e){var t=e.classes,r=e.margin,n=e.fullWidth,a={root:["root","none"!==r&&"margin".concat(Object(b.a)(r)),n&&"fullWidth"]};return Object(u.a)(a,h,t)}(D),J=o.useState((function(){var e=!1;return s&&o.Children.forEach(s,(function(t){if(p(t,["Input","Select"])){var r=p(t,["Select"])?t.props.input:t;r&&Object(d.a)(r.props)&&(e=!0)}})),e})),U=Object(n.a)(J,2),G=U[0],K=U[1],Q=o.useState((function(){var e=!1;return s&&o.Children.forEach(s,(function(t){p(t,["Input","Select"])&&Object(d.b)(t.props,!0)&&(e=!0)})),e})),X=Object(n.a)(Q,2),Y=X[0],Z=X[1],$=o.useState(!1),_=Object(n.a)($,2),ee=_[0],te=_[1];C&&ee&&te(!1);var re=void 0===W||C?ee:W,ne=o.useCallback((function(){Z(!0)}),[]),ae={adornedStart:G,setAdornedStart:K,color:g,disabled:C,error:R,filled:Y,focused:re,fullWidth:P,hiddenLabel:T,size:E,onBlur:function(){te(!1)},onEmpty:o.useCallback((function(){Z(!1)}),[]),onFilled:ne,onFocus:function(){te(!0)},registerEffect:undefined,required:M,variant:V};return Object(v.jsx)(f.a.Provider,{value:ae,children:Object(v.jsx)(x,Object(i.a)({as:y,ownerState:D,className:Object(c.a)(H.root,m),ref:t},A,{children:s}))})}));t.a=g},690:function(e,t,r){"use strict";var n=r(2),a=r(4),i=r(0),o=r(6),c=r(144),u=r(523),l=r(8),s=r(12),d=r(857),b=r(858),p=r(844),f=r(812),m=r(655),j=r(849),h=r(840),v=r(109),O=r(145);function x(e){return Object(v.a)("MuiTextField",e)}Object(O.a)("MuiTextField",["root"]);var g=r(1),w=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],y={standard:d.a,filled:b.a,outlined:p.a},S=Object(l.a)(m.a,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),C=i.forwardRef((function(e,t){var r=Object(s.a)({props:e,name:"MuiTextField"}),i=r.autoComplete,l=r.autoFocus,d=void 0!==l&&l,b=r.children,p=r.className,m=r.color,v=void 0===m?"primary":m,O=r.defaultValue,C=r.disabled,F=void 0!==C&&C,R=r.error,W=void 0!==R&&R,k=r.FormHelperTextProps,P=r.fullWidth,q=void 0!==P&&P,T=r.helperText,N=r.id,B=r.InputLabelProps,I=r.inputProps,M=r.InputProps,z=r.inputRef,E=r.label,L=r.maxRows,V=r.minRows,A=r.multiline,D=void 0!==A&&A,H=r.name,J=r.onBlur,U=r.onChange,G=r.onFocus,K=r.placeholder,Q=r.required,X=void 0!==Q&&Q,Y=r.rows,Z=r.select,$=void 0!==Z&&Z,_=r.SelectProps,ee=r.type,te=r.value,re=r.variant,ne=void 0===re?"outlined":re,ae=Object(a.a)(r,w),ie=Object(n.a)({},r,{autoFocus:d,color:v,disabled:F,error:W,fullWidth:q,multiline:D,required:X,select:$,variant:ne}),oe=function(e){var t=e.classes;return Object(c.a)({root:["root"]},x,t)}(ie);var ce={};"outlined"===ne&&(B&&"undefined"!==typeof B.shrink&&(ce.notched=B.shrink),ce.label=E),$&&(_&&_.native||(ce.id=void 0),ce["aria-describedby"]=void 0);var ue=Object(u.a)(N),le=T&&ue?"".concat(ue,"-helper-text"):void 0,se=E&&ue?"".concat(ue,"-label"):void 0,de=y[ne],be=Object(g.jsx)(de,Object(n.a)({"aria-describedby":le,autoComplete:i,autoFocus:d,defaultValue:O,fullWidth:q,multiline:D,name:H,rows:Y,maxRows:L,minRows:V,type:ee,value:te,id:ue,inputRef:z,onBlur:J,onChange:U,onFocus:G,placeholder:K,inputProps:I},ce,M));return Object(g.jsxs)(S,Object(n.a)({className:Object(o.a)(oe.root,p),disabled:F,error:W,fullWidth:q,ref:t,required:X,color:v,variant:ne,ownerState:ie},ae,{children:[null!=E&&""!==E&&Object(g.jsx)(f.a,Object(n.a)({htmlFor:ue,id:se},B,{children:E})),$?Object(g.jsx)(h.a,Object(n.a)({"aria-describedby":le,id:ue,labelId:se,value:te,input:be},_,{children:b})):be,T&&Object(g.jsx)(j.a,Object(n.a)({id:le},k,{children:T}))]}))}));t.a=C},834:function(e,t,r){"use strict";r.r(t);var n=r(111),a=r(149),i=(r(0),r(623)),o=r(578),c=r(556),u=r(690),l=r(849),s=r(831),d=r(845),b=r(622),p=r(617),f=r(16),m=r(150),j=r(32),h=r(1);t.default=function(){var e=Object(m.b)().enqueueSnackbar,t=Object(f.e)(),r=Object(j.c)((function(e){return e.user})),O=r.id,x=r.name,g=function(){t("/board")};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b.a,{initialValues:{title:"",content:"",author:{authorId:O,authorName:x},submit:null},validationSchema:i.a().shape({title:i.c().max(255).required("\uc81c\ubaa9\uc740 \ud544\uc218\uc785\ub2c8\ub2e4.")}),onSubmit:function(){var t=Object(a.a)(Object(n.a)().mark((function t(r,a){var i;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=a.setSubmitting)(!0),t.next=4,Object(p.a)(r);case 4:i(!1),e("\uac8c\uc2dc\uae00\uc744 \ub4f1\ub85d\ud558\uc600\uc2b5\ub2c8\ub2e4.",{variant:"success"}),g();case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),children:function(e){var t=e.errors,r=e.handleBlur,n=e.handleChange,a=e.handleSubmit,i=e.isSubmitting,b=e.touched,p=e.values;return Object(h.jsx)("form",{noValidate:!0,onSubmit:a,children:Object(h.jsxs)(o.a,{container:!0,spacing:3,children:[Object(h.jsx)(o.a,{item:!0,xs:24,md:12,children:Object(h.jsxs)(c.a,{spacing:1,children:[Object(h.jsx)(u.a,{fullWidth:!0,error:Boolean(b.title&&t.title),id:"title",value:p.title,name:"title",onChange:n,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",style:{backgroundColor:"white"}}),b.title&&t.title&&Object(h.jsx)(l.a,{error:!0,id:"helper-text-title-signup",children:t.title})]})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(c.a,{spacing:1,children:Object(h.jsx)(s.a,{id:"content",name:"content",minRows:5,"aria-label":"maximum height",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",value:p.content,style:v,onBlur:r,onChange:n})})}),t.submit&&Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(l.a,{error:!0,children:t.submit})}),Object(h.jsxs)(o.a,{container:!0,justifyContent:"flex-end",style:{marginTop:10},spacing:2,children:[Object(h.jsx)(o.a,{item:!0,children:Object(h.jsx)(d.a,{disableElevation:!0,disabled:i,size:"large",type:"submit",variant:"contained",color:"primary",children:"\ub4f1\ub85d"})}),Object(h.jsx)(o.a,{item:!0,children:Object(h.jsx)(d.a,{disableElevation:!0,size:"large",variant:"contained",onClick:g,color:"error",children:"\ucde8\uc18c"})})]})]})})}})})};var v={padding:"10.5px 14px 10.5px 12px",font:"inherit",borderRadius:"4px",borderColor:"#d9d9d9"}}}]);
//# sourceMappingURL=11.d4c9866b.chunk.js.map