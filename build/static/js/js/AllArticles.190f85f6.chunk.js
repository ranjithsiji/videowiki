webpackJsonp([6],{1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(2)),a=u(n(3)),l=(u(n(4)),u(n(0))),o=n(6);function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.children,n=e.className,u=e.computer,c=e.color,s=e.floated,d=e.largeScreen,f=e.mobile,p=e.only,y=e.stretched,m=e.tablet,h=e.textAlign,v=e.verticalAlign,b=e.widescreen,g=e.width,_=(0,a.default)(c,(0,o.useKeyOnly)(y,"stretched"),(0,o.useOnlyProp)(p,"only"),(0,o.useTextAlignProp)(h),(0,o.useValueAndKey)(s,"floated"),(0,o.useVerticalAlignProp)(v),(0,o.useWidthProp)(u,"wide computer"),(0,o.useWidthProp)(d,"wide large screen"),(0,o.useWidthProp)(f,"wide mobile"),(0,o.useWidthProp)(m,"wide tablet"),(0,o.useWidthProp)(b,"wide widescreen"),(0,o.useWidthProp)(g,"wide"),"column",n),E=(0,o.getUnhandledProps)(i,e),O=(0,o.getElementType)(i,e);return l.default.createElement(O,(0,r.default)({},E,{className:_}),t)}i.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],i._meta={name:"GridColumn",parent:"Grid",type:o.META.TYPES.COLLECTION},t.default=i},1023:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});u(n(141));var r=u(n(2)),a=u(n(3)),l=(u(n(4)),u(n(0))),o=n(6);function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.centered,n=e.children,u=e.className,c=e.color,s=e.columns,d=e.divided,f=e.only,p=e.reversed,y=e.stretched,m=e.textAlign,h=e.verticalAlign,v=(0,a.default)(c,(0,o.useKeyOnly)(t,"centered"),(0,o.useKeyOnly)(d,"divided"),(0,o.useKeyOnly)(y,"stretched"),(0,o.useOnlyProp)(f),(0,o.useTextAlignProp)(m),(0,o.useValueAndKey)(p,"reversed"),(0,o.useVerticalAlignProp)(h),(0,o.useWidthProp)(s,"column",!0),"row",u),b=(0,o.getUnhandledProps)(i,e),g=(0,o.getElementType)(i,e);return l.default.createElement(g,(0,r.default)({},b,{className:v}),n)}i.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],i._meta={name:"GridRow",parent:"Grid",type:o.META.TYPES.COLLECTION},t.default=i},1043:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(2)),a=d(n(19)),l=d(n(3)),o=(d(n(4)),d(n(0))),u=n(6),i=d(n(895)),c=d(n(896)),s=d(n(897));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.children,n=e.className,d=e.description,p=e.extra,y=e.header,m=e.meta,h=(0,l.default)(n,(0,u.useKeyOnly)(p,"extra"),"content"),v=(0,u.getUnhandledProps)(f,e),b=(0,u.getElementType)(f,e);return(0,a.default)(t)?o.default.createElement(b,(0,r.default)({},v,{className:h}),(0,u.createShorthand)(c.default,function(e){return{content:e}},y),(0,u.createShorthand)(s.default,function(e){return{content:e}},m),(0,u.createShorthand)(i.default,function(e){return{content:e}},d)):o.default.createElement(b,(0,r.default)({},v,{className:h}),t)}f.handledProps=["as","children","className","description","extra","header","meta"],f._meta={name:"CardContent",parent:"Card",type:u.META.TYPES.VIEW},t.default=f},1044:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(2)),a=s(n(97)),l=s(n(19)),o=s(n(3)),u=(s(n(4)),s(n(0))),i=n(6),c=s(n(894));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.children,n=e.className,s=e.doubling,f=e.items,p=e.itemsPerRow,y=e.stackable,m=(0,o.default)("ui",(0,i.useKeyOnly)(s,"doubling"),(0,i.useKeyOnly)(y,"stackable"),(0,i.useWidthProp)(p),n,"cards"),h=(0,i.getUnhandledProps)(d,e),v=(0,i.getElementType)(d,e);if(!(0,l.default)(t))return u.default.createElement(v,(0,r.default)({},h,{className:m}),t);var b=(0,a.default)(f,function(e){var t=e.key||[e.header,e.description].join("-");return u.default.createElement(c.default,(0,r.default)({key:t},e))});return u.default.createElement(v,(0,r.default)({},h,{className:m}),b)}d.handledProps=["as","children","className","doubling","items","itemsPerRow","stackable"],d._meta={name:"CardGroup",parent:"Card",type:i.META.TYPES.VIEW},t.default=d},1075:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(140),a=n.n(r),l=n(894),o=n.n(l),u=n(0),i=n.n(u),c=n(44);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.url,n=e.image,r=e.title,l=e.className||"c-app-card";return i.a.createElement(c.b,{to:t},i.a.createElement(o.a,{className:l},i.a.createElement(a.a,{src:n}),i.a.createElement(o.a.Content,null,i.a.createElement(o.a.Header,null,r.split("_").join(" ")))))}}])&&d(n.prototype,r),l&&d(n,l),t}()},864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(874),a=n.n(r),l=n(883),o=n.n(l),u=n(0),i=n.n(u),c=n(73),s=n(1075),d=n(876),f=n(221);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=m(t).call(this,e))||"object"!==p(a)&&"function"!==typeof a?v(r):a).state={offset:0},n.handleOnScroll=n.handleOnScroll.bind(v(v(n))),n}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,u["Component"]),n=t,(r=[{key:"componentWillMount",value:function(){var e=this.state.offset;this.props.dispatch(f.a.fetchAllArticles({offset:e}))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleOnScroll)}},{key:"querySearchResult",value:function(){var e=this;"loading"!==this.props.fetchAllArticlesState&&this._hasMore()&&this.setState({offset:this.state.offset+10},function(){e.props.dispatch(f.a.fetchDeltaArticles({offset:e.state.offset}))})}},{key:"handleOnScroll",value:function(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight,n=document.documentElement.clientHeight||window.innerHeight;Math.ceil(e+n)>=t-100&&this.querySearchResult()}},{key:"_renderArticles",value:function(){return this.props.allArticles.map(function(e){var t=e.image,n=e.title,r=e._id,a=e.wikiSource;console.log(e);var l="/videowiki/".concat(n,"?wikiSource=").concat(a);return i.a.createElement(o.a.Column,{width:4,key:r,style:{margin:"1rem 0"}},i.a.createElement(s.a,{url:l,image:t,title:n}))})}},{key:"_hasMore",value:function(){return 10===this.props.deltaArticles.length}},{key:"_renderLoader",value:function(){return"loading"===this.props.fetchDeltaArticlesState?i.a.createElement(a.a,{size:"large",active:!0,inverted:!0}):null}},{key:"_render",value:function(){return i.a.createElement("div",{className:"c-app-card-layout"},i.a.createElement("h2",{className:"u-text-center"},"All Articles"),i.a.createElement(o.a,null,this._renderArticles(),this._renderLoader()))}},{key:"render",value:function(){var e=this,t=this.props.fetchAllArticlesState;return i.a.createElement(d.a,{componentState:t,loaderMessage:"Hold Tight! Loading all articles...",errorMessage:"Error while loading articles! Please try again later!",onRender:function(){return e._render()}})}}])&&y(n.prototype,r),l&&y(n,l),t}();t.default=Object(c.b)(function(e){return Object.assign({},e.article)})(b)},872:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),a=i(n(19)),l=i(n(3)),o=(i(n(4)),i(n(0))),u=n(6);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.children,n=e.className,i=e.content,s=(0,l.default)("content",n),d=(0,u.getUnhandledProps)(c,e),f=(0,u.getElementType)(c,e);return o.default.createElement(f,(0,r.default)({},d,{className:s}),(0,a.default)(t)?i:t)}c.handledProps=["as","children","className","content"],c._meta={name:"MessageItem",parent:"Message",type:u.META.TYPES.COLLECTION},c.defaultProps={as:"li"},c.create=(0,u.createShorthandFactory)(c,function(e){return{content:e}}),t.default=c},873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=b(n(2)),a=b(n(20)),l=b(n(21)),o=b(n(22)),u=b(n(23)),i=b(n(19)),c=(b(n(72)),b(n(3))),s=(b(n(4)),n(0)),d=b(s),f=n(6),p=b(n(98)),y=b(n(877)),m=b(n(878)),h=b(n(879)),v=b(n(872));function b(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(){var e,n,r,l;(0,a.default)(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=r=(0,o.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.handleDismiss=function(e){var t=r.props.onDismiss;t&&t(e,r.props)},l=n,(0,o.default)(r,l)}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,n=e.attached,a=e.children,l=e.className,o=e.color,u=e.compact,s=e.content,v=e.error,b=e.floating,g=e.header,_=e.hidden,E=e.icon,O=e.info,P=e.list,T=e.negative,M=e.onDismiss,w=e.positive,N=e.size,S=e.success,A=e.visible,C=e.warning,j=(0,c.default)("ui",o,N,(0,f.useKeyOnly)(u,"compact"),(0,f.useKeyOnly)(v,"error"),(0,f.useKeyOnly)(b,"floating"),(0,f.useKeyOnly)(_,"hidden"),(0,f.useKeyOnly)(E,"icon"),(0,f.useKeyOnly)(O,"info"),(0,f.useKeyOnly)(T,"negative"),(0,f.useKeyOnly)(w,"positive"),(0,f.useKeyOnly)(S,"success"),(0,f.useKeyOnly)(A,"visible"),(0,f.useKeyOnly)(C,"warning"),(0,f.useKeyOrValueAndKey)(n,"attached"),"message",l),K=M&&d.default.createElement(p.default,{name:"close",onClick:this.handleDismiss}),k=(0,f.getUnhandledProps)(t,this.props),L=(0,f.getElementType)(t,this.props);return(0,i.default)(a)?d.default.createElement(L,(0,r.default)({},k,{className:j}),K,p.default.create(E),(!(0,i.default)(g)||!(0,i.default)(s)||!(0,i.default)(P))&&d.default.createElement(y.default,null,m.default.create(g),h.default.create(P),(0,f.createHTMLParagraph)(s))):d.default.createElement(L,(0,r.default)({},k,{className:j}),K,a)}}]),t}(s.Component);g._meta={name:"Message",type:f.META.TYPES.COLLECTION},g.Content=y.default,g.Header=m.default,g.List=h.default,g.Item=v.default,g.handledProps=["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"],t.default=g},874:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),a=i(n(19)),l=i(n(3)),o=(i(n(4)),i(n(0))),u=n(6);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.active,n=e.children,i=e.className,s=e.content,d=e.disabled,f=e.indeterminate,p=e.inline,y=e.inverted,m=e.size,h=(0,l.default)("ui",m,(0,u.useKeyOnly)(t,"active"),(0,u.useKeyOnly)(d,"disabled"),(0,u.useKeyOnly)(f,"indeterminate"),(0,u.useKeyOnly)(y,"inverted"),(0,u.useKeyOnly)(n||s,"text"),(0,u.useKeyOrValueAndKey)(p,"inline"),"loader",i),v=(0,u.getUnhandledProps)(c,e),b=(0,u.getElementType)(c,e);return o.default.createElement(b,(0,r.default)({},v,{className:h}),(0,a.default)(n)?s:n)}c.handledProps=["active","as","children","className","content","disabled","indeterminate","inline","inverted","size"],c._meta={name:"Loader",type:u.META.TYPES.ELEMENT},t.default=c},875:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(140),a=n.n(r),l=n(366),o=n.n(l),u=n(874),i=n.n(u),c=n(0),s=n.n(c);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,c["Component"]),n=t,(r=[{key:"render",value:function(){return this.props.loaderImage?s.a.createElement(o.a,{active:!0,inverted:!0},s.a.createElement(a.a,{src:this.props.loaderImage,size:"small"}),s.a.createElement("h3",null,this.props.children)):s.a.createElement(o.a,{active:!0,inverted:!0},s.a.createElement(i.a,{size:"large",active:!0,inverted:!0},this.props.children))}}])&&f(n.prototype,r),l&&f(n,l),t}()},876:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(873),a=n.n(r),l=n(0),o=n.n(l),u=n(875);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,d(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,l["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.componentState,n=e.loaderMessage,r=e.errorMessage,l=e.onRender;switch(t){case"done":return l();case"loading":return this.props.loaderDisabled?null:o.a.createElement(u.a,{loaderImage:this.props.loaderImage},n);case"failed":return o.a.createElement(a.a,{color:"red",size:"massive"},r);default:return this.props.loaderDisabled?null:o.a.createElement(u.a,{loaderImage:this.props.loaderImage})}}}])&&c(n.prototype,r),i&&c(n,i),t}()},877:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(2)),a=u(n(3)),l=(u(n(4)),u(n(0))),o=n(6);function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.children,n=e.className,u=(0,a.default)("content",n),c=(0,o.getUnhandledProps)(i,e),s=(0,o.getElementType)(i,e);return l.default.createElement(s,(0,r.default)({},c,{className:u}),t)}i.handledProps=["as","children","className"],i._meta={name:"MessageContent",parent:"Message",type:o.META.TYPES.COLLECTION},t.default=i},878:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),a=i(n(19)),l=i(n(3)),o=(i(n(4)),i(n(0))),u=n(6);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.children,n=e.className,i=e.content,s=(0,l.default)("header",n),d=(0,u.getUnhandledProps)(c,e),f=(0,u.getElementType)(c,e);return o.default.createElement(f,(0,r.default)({},d,{className:s}),(0,a.default)(t)?i:t)}c.handledProps=["as","children","className","content"],c._meta={name:"MessageHeader",parent:"Message",type:u.META.TYPES.COLLECTION},c.create=(0,u.createShorthandFactory)(c,function(e){return{content:e}}),t.default=c},879:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(2)),a=s(n(97)),l=s(n(19)),o=s(n(3)),u=(s(n(4)),s(n(0))),i=n(6),c=s(n(872));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.children,n=e.className,s=e.items,f=(0,o.default)("list",n),p=(0,i.getUnhandledProps)(d,e),y=(0,i.getElementType)(d,e);return u.default.createElement(y,(0,r.default)({},p,{className:f}),(0,l.default)(t)?(0,a.default)(s,c.default.create):t)}d.handledProps=["as","children","className","items"],d._meta={name:"MessageList",parent:"Message",type:i.META.TYPES.COLLECTION},d.defaultProps={as:"ul"},d.create=(0,i.createShorthandFactory)(d,function(e){return{items:e}}),t.default=d},883:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});c(n(141));var r=c(n(2)),a=c(n(3)),l=(c(n(4)),c(n(0))),o=n(6),u=c(n(1022)),i=c(n(1023));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.celled,n=e.centered,u=e.children,i=e.className,c=e.columns,d=e.container,f=e.divided,p=e.doubling,y=e.inverted,m=e.padded,h=e.relaxed,v=e.reversed,b=e.stackable,g=e.stretched,_=e.textAlign,E=e.verticalAlign,O=(0,a.default)("ui",(0,o.useKeyOnly)(n,"centered"),(0,o.useKeyOnly)(d,"container"),(0,o.useKeyOnly)(p,"doubling"),(0,o.useKeyOnly)(y,"inverted"),(0,o.useKeyOnly)(b,"stackable"),(0,o.useKeyOnly)(g,"stretched"),(0,o.useKeyOrValueAndKey)(t,"celled"),(0,o.useKeyOrValueAndKey)(f,"divided"),(0,o.useKeyOrValueAndKey)(m,"padded"),(0,o.useKeyOrValueAndKey)(h,"relaxed"),(0,o.useTextAlignProp)(_),(0,o.useValueAndKey)(v,"reversed"),(0,o.useVerticalAlignProp)(E),(0,o.useWidthProp)(c,"column",!0),"grid",i),P=(0,o.getUnhandledProps)(s,e),T=(0,o.getElementType)(s,e);return l.default.createElement(T,(0,r.default)({},P,{className:O}),u)}s.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],s.Column=u.default,s.Row=i.default,s._meta={name:"Grid",type:o.META.TYPES.COLLECTION},t.default=s},894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=g(n(2)),a=g(n(20)),l=g(n(21)),o=g(n(22)),u=g(n(23)),i=g(n(19)),c=g(n(3)),s=(g(n(4)),n(0)),d=g(s),f=n(6),p=g(n(374)),y=g(n(1043)),m=g(n(895)),h=g(n(1044)),v=g(n(896)),b=g(n(897));function g(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(){var e,n,r,l;(0,a.default)(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=r=(0,o.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.handleClick=function(e){var t=r.props.onClick;t&&t(e,r.props)},l=n,(0,o.default)(r,l)}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,n=e.centered,a=e.children,l=e.className,o=e.color,u=e.description,s=e.extra,m=e.fluid,h=e.header,v=e.href,b=e.image,g=e.link,_=e.meta,E=e.onClick,O=e.raised,P=(0,c.default)("ui",o,(0,f.useKeyOnly)(n,"centered"),(0,f.useKeyOnly)(m,"fluid"),(0,f.useKeyOnly)(g,"link"),(0,f.useKeyOnly)(O,"raised"),"card",l),T=(0,f.getUnhandledProps)(t,this.props),M=(0,f.getElementType)(t,this.props,function(){if(E)return"a"});return(0,i.default)(a)?d.default.createElement(M,(0,r.default)({},T,{className:P,href:v,onClick:this.handleClick}),p.default.create(b),(u||h||_)&&d.default.createElement(y.default,{description:u,header:h,meta:_}),s&&d.default.createElement(y.default,{extra:!0},s)):d.default.createElement(M,(0,r.default)({},T,{className:P,href:v,onClick:this.handleClick}),a)}}]),t}(s.Component);_._meta={name:"Card",type:f.META.TYPES.VIEW},_.Content=y.default,_.Description=m.default,_.Group=h.default,_.Header=v.default,_.Meta=b.default,_.handledProps=["as","centered","children","className","color","description","extra","fluid","header","href","image","link","meta","onClick","raised"],t.default=_},895:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),a=i(n(19)),l=i(n(3)),o=(i(n(4)),i(n(0))),u=n(6);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.children,n=e.className,i=e.content,s=(0,l.default)(n,"description"),d=(0,u.getUnhandledProps)(c,e),f=(0,u.getElementType)(c,e);return o.default.createElement(f,(0,r.default)({},d,{className:s}),(0,a.default)(t)?i:t)}c.handledProps=["as","children","className","content"],c._meta={name:"CardDescription",parent:"Card",type:u.META.TYPES.VIEW},t.default=c},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),a=i(n(19)),l=i(n(3)),o=(i(n(4)),i(n(0))),u=n(6);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.children,n=e.className,i=e.content,s=(0,l.default)(n,"header"),d=(0,u.getUnhandledProps)(c,e),f=(0,u.getElementType)(c,e);return o.default.createElement(f,(0,r.default)({},d,{className:s}),(0,a.default)(t)?i:t)}c.handledProps=["as","children","className","content"],c._meta={name:"CardHeader",parent:"Card",type:u.META.TYPES.VIEW},t.default=c},897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),a=i(n(19)),l=i(n(3)),o=(i(n(4)),i(n(0))),u=n(6);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.children,n=e.className,i=e.content,s=(0,l.default)(n,"meta"),d=(0,u.getUnhandledProps)(c,e),f=(0,u.getElementType)(c,e);return o.default.createElement(f,(0,r.default)({},d,{className:s}),(0,a.default)(t)?i:t)}c.handledProps=["as","children","className","content"],c._meta={name:"CardMeta",parent:"Card",type:u.META.TYPES.VIEW},t.default=c}});
//# sourceMappingURL=AllArticles.190f85f6.chunk.js.map