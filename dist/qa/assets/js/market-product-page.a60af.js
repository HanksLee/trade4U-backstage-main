(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1063:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),a=n(1045),o=n.n(a),i=(n(1044),n(31));n(1064);function c(e){var t=i.a.getPageBreadcrumb(e.location.pathname),n=e.title,a=e.links,c=e.tabs,s=e.currentTab;return r.createElement("div",{className:"common-header"},r.createElement("section",{className:"common-header-breadcrumb"},t&&r.createElement(o.a,null,t.map((function(e,t){return r.createElement(o.a.Item,{key:t},e.title)})))),r.createElement("section",{className:"common-header-title"},r.createElement("h2",null,n),r.createElement("div",{className:"common-header-links"},a&&a.map((function(t,n){return r.createElement("a",{key:n,onClick:function(){e.history.push(t.path)}},t.title)})))),r.createElement("section",{className:"common-header-tabs"},c&&c.map((function(t,n){return r.createElement("a",{onClick:function(){e.onTabClick(t.id)},className:"".concat(s===t.id?"tab-active":""," ")},r.createElement("span",null,t.title),t.tipComponent&&t.tipComponent())}))))}},1064:function(e,t,n){},1065:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n(93);function o(e,t){return function(n){return function(){return r.createElement(a.b,Object.assign({path:e},Object.assign({exact:!0},t),{render:function(e){return r.createElement(n,Object.assign({},e))}}))}}}},1066:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(1),a=(n(1067),n(96)),o=n.n(a),i=(n(133),n(289)),c=n.n(i),s=(n(432),n(134)),l=n.n(s),u=(n(204),n(1043)),m=n.n(u),f=(n(1042),n(1049)),p=n.n(f),d=(n(1048),n(205)),h=n.n(d),b=(n(434),n(17)),g=n.n(b),y=(n(203),n(437)),v=n.n(y),E=(n(436),n(438)),k=n.n(E),w=(n(435),n(440)),O=n.n(w),C=(n(439),n(31)),S=n(22),j=n.n(S);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=c.a.Option,M=l.a.Group,L=p.a.RangePicker,I=O.a.CheckableTag,$={SelectInput:function(e){var t=e.selectValue,n=e.inputValue,a=e.placeholder,o=e.options,i=e.onSelectChange,s=e.onInputChange,u=e.onPressEnter,m=e.selectStyle;return r.createElement(M,{compact:!0},r.createElement(c.a,{style:m?Object.assign({width:110},m):{width:110},value:t,onChange:i},o&&o.map((function(e,t){return r.createElement(B,{key:t,value:e.value},e.title)}))),r.createElement(l.a,{style:{width:238},value:n,onChange:s,placeholder:a,onPressEnter:u}))},Select:function(e){var t=e.option,n=e.label,a=e.mode,o=e.onSearch,i=e.onSelect,s=e.onBlur,l=e.onFocus,u=e.value,m=e.placeholder,f=e.showSearch,p=e.width,d=e.filterOption,h=e.onChange,b=e.allowClear,g=e.onPopupScroll;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(c.a,{allowClear:b,value:u,mode:a||!1,style:{minWidth:p||258,width:p},showSearch:f,placeholder:m,filterOption:d,onSearch:o,onSelect:i,onChange:h,onBlur:s,onPopupScroll:g,onFocus:l},t.data.map((function(e){return r.createElement(B,{key:e[t.key]||e.id,value:e[t.value]||e.id,$data:e},e[t.title])})))))},DatePicker:function(e){var t=e.label,n=e.placeholder,a=e.onChange,o=e.value,i=e.style,c=e.format,s=e.showTime;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(p.a,{format:c||!1,style:i,showTime:s,placeholder:n,value:o,onChange:a})))},RangePicker:function(e){var t=e.label,n=e.alias,a=e.placeholder,i=e.onChange,c=e.value,s=e.showTime,l=e.format;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(L,{style:{width:400},showTime:s,format:l,placeholder:a,value:c,onChange:i}),r.createElement("span",{className:"common-list-control-date-alias"},!C.a.isEmpty(n)&&n.map((function(e,t){return r.createElement(o.a,{key:t,onClick:function(){return i([j()(Date.now()-864e5*e).startOf("day"),j()()])}},e," 天内")})))))},Input:function(e){var t=e.label,n=e.value,a=e.placeholder,o=e.onChange,i=e.width,c=e.onPressEnter;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(l.a,{style:{minWidth:i||258},value:n,onChange:o,placeholder:a,onPressEnter:c})))},Checkbox:function(e){var t=e.label,n=e.value,a=e.onChange;return r.createElement(h.a,{checked:n,onChange:a},t)},CheckableTag:function(e){var t=e.label,n=e.option,a=e.value,o=e.onChange;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},!C.a.isEmpty(n)&&n.map((function(e){return r.createElement(I,{key:e.value,checked:e.value===a,onChange:function(){o(e)}},e.title)}))))},Label:function(e,t){var n=e.label;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},t))},Custom:function(e){return r.createElement("div",null,(void 0).props.children)}},A=function(e){function t(){var e;return P(this,t),(e=x(this,_(t).apply(this,arguments))).state={collapse:!0},e.toggleCollapse=function(t){e.setState({collapse:!e.state.collapse})},e.renderSearcher=function(){var t=e.props.config,n=t.searcher,a=t.table,i=e.state.collapse,c=a&&a.tableHeader;return n&&r.createElement("section",{className:"common-list-search"},e.renderWidgets(n.widgets),c&&r.createElement(c,null),r.createElement("div",{className:"common-list-search-right"},!n.hideSearcher&&r.createElement(r.Fragment,null,r.createElement(o.a,{type:"primary",onClick:n.onSearch},"查询"),r.createElement(o.a,{onClick:n.onReset},"重置")),n.collapseControl&&n.collapseControl.showMoreBtn&&r.createElement("span",{className:"common-list-serach-more"},r.createElement("a",{onClick:e.toggleCollapse},i?"更多":"收起"," ",r.createElement(g.a,{type:i?"down":"up"})))))},e.renderWidgets=function(t){var n=e.state.collapse,a=e.props.config.searcher;return t&&r.createElement("div",{className:"common-list-search-left"},t.map((function(t,o){return Array.isArray(t)?r.createElement("div",{key:o,className:"common-list-search-row",style:{display:a.collapseControl&&a.collapseControl.showMoreBtn&&n&&o>0?"none":"flex"}},t.map((function(t){return r.createElement("div",{key:t.label,className:"common-list-search-col",style:Object.assign({},t.style)},$[t.type]&&$[t.type](t,t.children?e.renderWidgets(t.children):null))}))):r.createElement("div",{key:t.label,className:"common-list-search-row ".concat(t.className)},$[t.type]&&$[t.type](t,t.children?e.renderWidgets(t.children):null))})))},e.renderAddBtn=function(){var t=e.props.config,n=t.addBtn,a=t.searcher,o=n&&n.title;return n&&r.createElement("section",{className:"common-list-addbtn",style:n.style},"function"==typeof n.title?r.createElement(o,null):n.title,r.createElement("div",{className:"common-list-search-batch"},a.batchControl.showBatchControl&&r.createElement(c.a,{placeholder:a.batchControl.placeholder,style:{minWidth:120},defaultValue:void 0,onChange:a.batchControl.onBatch},a.batchControl.options.map((function(e){return r.createElement(B,{key:e.value,value:e.value},e.title)})))))},e.renderTableHeader=function(){var t=e.props.config.tableHeader,n=t;return r.createElement("section",{className:"common-list-table-header"},t&&r.createElement(n,null))},e.renderTable=function(){var t=e.props.config.table,n=t.rowKey,a=t.rowSelection,o=t.columns,i=t.dataSource,c=t.pagination,s=t.onChange,l=t.loading,u=t.locale;return r.createElement("section",{className:"common-list-table"},r.createElement(m.a,{locale:u,rowKey:n||"id",rowSelection:a,columns:o,dataSource:i,loading:l,pagination:c,onChange:s}))},e.renderCards=function(){var t=e.props.config.cards,n=t.dataSource,a=t.loading,o=t.pagination,i=t.renderCard,c=t.addBtn;return r.createElement("div",{className:"common-list-cards-wrapper"},r.createElement("ul",{className:"common-list-cards"},a?r.createElement("div",{className:"common-list-cards-loading"},r.createElement(k.a,null)):r.createElement(r.Fragment,null,r.createElement("li",{className:"common-list-card add-btn"},r.createElement("div",{className:"common-list-card-item",onClick:c.onAddBtnClick},c.icon?r.createElement("img",{src:c.icon,alt:""}):r.createElement(g.a,{type:"plus-circle"}),r.createElement("p",null,c.title))),n.map((function(e){return r.createElement("li",{className:"common-list-card"},r.createElement("div",{className:"common-list-card-item"},i(e)))})))),r.createElement("section",{className:"common-list-cards-pagination"},r.createElement(v.a,Object.assign({},o))))},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props.config;return r.createElement("div",{className:"common-list"},this.renderSearcher(),this.renderAddBtn(),this.renderTableHeader(),e.table&&this.renderTable(),e.cards&&this.renderCards())}}])&&R(n.prototype,a),i&&R(n,i),t}(r.Component)},1067:function(e,t,n){},1068:function(e,t,n){"use strict";var r=function(e){var t=e;return 15===e.length&&(t=function(e){if(/^\d{15}$/.test(e)){e=e.substr(0,6)+"19"+e.substr(6,e.length-6);for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=0,r=0;r<e.length;r++)n+=parseInt(e.substr(r,1))*t[r];return e+["1","0","X","9","8","7","6","5","4","3","2"][n%11]}return e}(e)),function(e){if(!/^\d{17}(\d|x)$/i.test(e))return!1;return null!=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙",21:"辽宁",22:"吉林",23:"黑龙",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",83:"台湾",91:"国外"}[parseInt(e.substr(0,2))]}(t)},a=function(e){return/^[HMhm]{1}([0-9]{8})$/.test(e)},o=function(e){return/^[0-9]{8}$/.test(e)||/^[0-9]{10}$/.test(e)},i=function(e){return/^[a-zA-Z]{5, 17}$/.test(e)||/^[a-zA-Z0-9]$/.test(e)},c=n(31);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return u}));var l={isNonEmpty:function(e,t,n){if(0!==e&&c.a.isEmpty(e))return n&&n(),t},maxLength:function(e,t,n,r){if(e.length>t)return r&&r(),n},minLength:function(e,t,n,r){if(e.length<t)return r&&r(),n},isEmail:function(e,t,n){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e))return n&&n(),t},isMobile:function(e,t,n){if(!/^(13[0-9]|14[57]|15[012356789]|16[0-9]|18[0-9]|17[0-9]|19[0-9])\d{8}$/.test(e))return n&&n(),t},isID:function(e,t,n,c){var s=null;if("id"===t?s=r:"HKMC"===t?s=a:"TW"===t?s=o:"PSPort"===t&&(s=i),!s(e))return c&&c(),n},isNumber:function(e,t,n){if(e&&Number.isNaN(Number(e)))return n&&n(),t},isHexColor:function(e,t,n){var r=e.toString();if(!r||!function(e){if("#"!==e[0])return!1;var t=e.slice(1);return 6===t.length&&/^[0-9a-fA-f]{6}$/.test(t)}(r))return n&&n(),t},customReg:function(e,t,n,r){var a=e.toString();if(!a||!new RegExp(t).test(a))return r&&r(),n}},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cache=[]}var t,n,r;return t=e,(n=[{key:"add",value:function(e,t){var n=this,r=!0,a=!1,o=void 0;try{for(var i,c=function(){var t=i.value,r=t.strategy.split(":");n.cache.push((function(){var n=r.shift();return r.unshift(e),r.push(t.errMsg),r.push(t.cb),l[n].apply(null,r)}))},s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0)c()}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}}},{key:"start",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,a=this.cache[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=(0,r.value)();if(o)return o}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}}])&&s(t.prototype,n),r&&s(t,r),e}()},1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(1);n(1070);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u={hot:"hot",normal:"normal",wait:"wait",block:"block"},m=function(e){function t(){return o(this,t),c(this,s(t).apply(this,arguments))}var n,a,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.text,n=e.type;return r.createElement("span",{className:"status-text ".concat(u[n])},r.createElement("span",{className:"status-text-dot ".concat(u[n])}),r.createElement("span",null,t))}}])&&i(n.prototype,a),m&&i(n,m),t}(r.Component)},1070:function(e,t,n){},1073:function(e,t,n){},1074:function(e,t,n){},1087:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(1063),o=n(1066),i=n(1),c=n(96),s=n.n(c),l=(n(133),n(17)),u=n.n(l),m=(n(203),n(1047)),f=n.n(m),p=(n(1046),n(31)),d=n(1069),h=n(22),b=n.n(h),g=n(129);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){var t={selectedRowKeys:e.state.selectedRowKeys,onChange:function(t,n){e.setState({selectedRowKeys:t})}},n=[{title:"产品 ID",dataIndex:"id"},{title:"交易市场",dataIndex:"market",render:function(e,t){return e||"--"}},{title:"产品名称",dataIndex:"name",render:function(e,t){return e||"--"}},{title:"简拼",dataIndex:"pinyin",render:function(e,t){return e||"--"}},{title:"股票代码",dataIndex:"code",render:function(e,t){return e||"--"}},{title:"上架状态",render:function(e,t){return i.createElement(d.a,{type:{1:"normal",0:"block"}[t.status],text:{1:"上架",0:"下架"}[t.status]})}},{title:"更新时间",dataIndex:"updateTime",render:function(e,t){return e&&b()(e).format(g.a)||"--"}},{title:"操作",render:function(t,n){return i.createElement("div",{className:"common-list-table-operation"},i.createElement("span",{onClick:function(){return e.goToEditor(n)}},"编辑"),i.createElement("span",{className:"common-list-table-operation-spliter"}),i.createElement(f.a,{title:"请问是否确定删除行情产品",onConfirm:function(){return Object(r.a)(void 0,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.market.deleteProduct(n.id);case 2:204===(r=t.sent).data.status?e.getDataList(e.state.filter):e.$msg.error(r.data.message);case 4:case"end":return t.stop()}}),t)})))},onCancel:function(){}},i.createElement("span",null,"删除")))}}],a=Object.assign(Object.assign({},e.props.common.paginationConfig),{total:e.props.market.productListMeta.total,current:e.state.currentPage,onChange:function(e,t){},onShowSizeChange:function(t,n){e.resetPagination(n,t)}});return{addBtn:{title:function(){return i.createElement(s.a,{type:"primary",onClick:function(){return e.goToEditor({})}},i.createElement(u.a,{type:"plus"})," 添加")}},searcher:{batchControl:{placeholder:"请选择",showBatchControl:!p.a.isEmpty(e.state.selectedRowKeys),options:[{title:"删除",value:"delete"}],onBatch:function(t){e.onBatch(t)}},widgets:[[{type:"Input",label:"产品名称",placeholder:"请输入产品名称",value:e.state.name||void 0,onChange:function(t){e.onInputChanged("name",t.target.value)},onPressEnter:function(t){e.onSearch()}},{type:"Select",label:"交易市场",showSearch:!1,placeholder:"请选择交易市场",allowClear:!1,width:150,value:e.state.market,option:{key:"field",value:"field",title:"translation",data:e.state.marketOptions||[]},onSelect:function(t,n){e.onMarketSelected(t,n)}}],{type:"Input",label:"产品编码",placeholder:"请输入产品编码",value:e.state.code||void 0,onChange:function(t){e.onInputChanged("code",t.target.value)},onPressEnter:function(t){e.onSearch()}}],onSearch:function(){e.onSearch()},onReset:function(){e.onReset()}},table:{rowKey:"id",rowSelection:t,columns:n,dataSource:e.props.market.productList,pagination:a,onChange:function(t,n,r){var a={offset:t.current-1,limit:t.pageSize};if(!p.a.isEmpty(n))for(var o=0,i=Object.entries(n);o<i.length;o++){var c=y(i[o],2),s=c[0],l=c[1];a[s]=l?l[0]:void 0}p.a.isEmpty(r)?(delete a.orderBy,delete a.sort):(a.orderBy="".concat(r.field),a.sort="".concat("descend"===r.order?"desc":"asc")),e.setState({filter:Object.assign(Object.assign({},e.state.filter),a),currentPage:t.current},(function(){e.getDataList(e.state.filter)}))}}}},E=n(1065),k=n(83),w=n(85),O=n.n(w),C=(n(433),n(134)),S=n.n(C),j=(n(204),n(289)),N=n.n(j),P=(n(432),n(1041)),R=n.n(P),x=(n(1040),n(290)),_=n.n(x),T=(n(441),n(1073),n(1068)),B=n(84);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?D(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=O.a.Item,V=N.a.Option,K=R.a.confirm,W={display:"block",marginBottom:12},H=function(e,t,n){return{labelCol:{span:e,offset:n},wrapperCol:{span:t}}},q=function(e){function t(){var e;return L(this,t),(e=$(this,A(t).apply(this,arguments))).state={mode:"add",marketOptions:[]},e.init=function(){return Object(r.a)(D(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.$qs.parse(this.props.location.search),this.setState({mode:0==t.id?"add":"edit"},(function(){return Object(r.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=p.a.getLStorage("currentMarketProduct"))?K({title:"行情产品恢复操作",content:"检测到您存在未提交的行情产品记录，请问是否从上次编辑中恢复状态？",onOk:function(){n.props.market.setCurrentProduct(t)},onCancel:function(){n.init(),p.a.rmLStorage("currentMarketProduct")}}):"edit"===this.state.mode||this.props.market.setCurrentProduct({},!0,!1);case 2:case"end":return e.stop()}}),e,this)})))}));case 2:case"end":return e.stop()}}),e,this)})))},e.renderEditor=function(){var t=e.props.form.getFieldDecorator,n=e.props.market,a=n.setCurrentProduct,o=n.currentShowProduct,c=n.marketList,l=e.state.marketOptions;return i.createElement(O.a,{className:"editor-form"},i.createElement(z,Object.assign({label:"交易市场",className:"push-type-select"},H(2,6),{required:!0}),t("market",{initialValue:o&&o.market})(i.createElement(N.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择交易",onChange:function(e,t){a({market:e},!1)},onFocus:function(){return Object(r.a)(D(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.market.getMarketList({offset:0,limit:200});case 2:e.sent,this.setState({marketOptions:c});case 4:case"end":return e.stop()}}),e,this)})))}},l.map((function(e){return i.createElement(V,{key:e.field},e.translation)}))))),i.createElement(z,Object.assign({label:"产品名称"},H(2,12),{required:!0}),t("name",{initialValue:o&&o.name})(i.createElement(S.a,{placeholder:"请输入产品名称",onChange:function(e){a({name:e.target.value},!1)},style:{display:"inline-block",width:200}}))),i.createElement(z,Object.assign({label:"简拼"},H(2,12),{required:!0}),t("jianpin",{initialValue:o&&o.pinyin})(i.createElement(S.a,{placeholder:"请输入产品简拼",onChange:function(e){a({pinyin:e.target.value},!1)},style:{display:"inline-block",width:200}}))),i.createElement(z,Object.assign({label:"产品代码"},H(2,12),{required:!0}),t("code",{initialValue:o&&o.code})(i.createElement(S.a,{placeholder:"请输入产品编码",onChange:function(e){a({code:e.target.value},!1)},style:{display:"inline-block",width:200}}))),i.createElement(z,Object.assign({label:"是否上架",required:!0},H(2,6),{className:"editor-upshelf"}),t("status",{initialValue:o&&o.status})(i.createElement(_.a.Group,{onChange:function(e){a({status:e.target.value},!1)}},i.createElement(_.a,{style:W,value:1},"是"),i.createElement(_.a,{style:W,value:0},"否")))),i.createElement(z,{className:"editor-form-btns"},i.createElement(s.a,{type:"primary",onClick:e.handleSubmit},"edit"==e.state.mode?"确认修改":"保存"),i.createElement(s.a,{onClick:e.goBack},"取消")))},e.goBack=function(){setTimeout((function(){e.props.history.goBack(),e.props.market.setCurrentProduct({}),p.a.rmLStorage("currentMarketProduct")}),300)},e.handleSubmit=function(t){return Object(r.a)(D(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.form.validateFields((function(e,n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,a,o,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}if(n=this.props.market.currentProduct,this.props.common.userInfo,r=this.state.mode,a={market:n.market,name:n.name,pinyin:n.pinyin,code:n.code,status:n.status},!(o=this.getValidation(a))){t.next=8;break}return t.abrupt("return",this.$msg.warn(o));case 8:"add"==r?this.$api.market.createProduct(a).then((function(e){i.$msg.success("行情产品创建成功"),setTimeout((function(){i.goBack(),i.$store.market.getProductList({offset:0,limit:10})}),1500)})):this.$api.market.updateProduct(n.id,a).then((function(e){i.$msg.success("行情产品更新成功"),setTimeout((function(){i.goBack(),i.props.market.getProductList({offset:0,limit:10})}),1500)}));case 9:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.getValidation=function(e){var t=new T.a;return t.add(e.market,[{strategy:"isNonEmpty",errMsg:"请选择交易市场"}]),t.add(e.name,[{strategy:"isNonEmpty",errMsg:"请输入产品名称"}]),t.add(e.pinyin,[{strategy:"isNonEmpty",errMsg:"请输入简拼"}]),t.add(e.code,[{strategy:"isNonEmpty",errMsg:"请输入产品编码"}]),t.add(e.status,[{strategy:"isNonEmpty",errMsg:"请选择上架状态"}]),t.start()},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.init();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"componentWillUnmount",value:function(){this.props.market.setCurrentProduct({},!0,!1)}},{key:"render",value:function(){return i.createElement("div",{className:"editor food-card-editor"},i.createElement("section",{className:"editor-content panel-block"},this.renderEditor()))}}])&&I(n.prototype,a),o&&I(n,o),t}(k.a),Z=q=Object(r.b)([O.a.create(),Object(B.b)("common","market"),B.c],q),G=n(93);n(1074);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?te(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){function t(){var e;return X(this,t),(e=Y(this,ee(t).apply(this,arguments))).state={filter:{},tableLoading:!1,currentPage:1,selectedRowKeys:[],name:void 0,code:void 0,market:void 0},e.getMarketOptions=function(){return Object(r.a)(te(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.market.getMarketList();case 2:200===(t=e.sent).status&&this.setState({marketOptions:t.data.data});case 4:case"end":return e.stop()}}),e,this)})))},e.onMarketSelected=function(t,n){e.setState({market:t,filter:Object.assign(Object.assign({},e.state.filter),{market:t})})},e.getDataList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({tableLoading:!0,filter:Object.assign(Object.assign({},e.state.filter),t)},(function(){return Object(r.a)(te(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.market.getProductList({params:Object.assign(Object.assign({},this.state.filter),t)});case 2:this.setState({tableLoading:!1});case 3:case"end":return e.stop()}}),e,this)})))}))},e.resetPagination=function(t,n){return Object(r.a)(te(e),void 0,void 0,regeneratorRuntime.mark((function e(){var a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({filter:Object.assign(Object.assign({},this.state.filter),{limit:t,offset:n})},(function(){return Object(r.a)(a,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.getDataList(t);case 2:case"end":return e.stop()}}),e,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.onSearch=function(){return Object(r.a)(te(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.setState({filter:Object.assign(Object.assign({},t),{pageNum:1}),currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.onReset=function(){return Object(r.a)(te(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={offset:0,pageSize:this.state.filter.pageSize},this.setState({filter:t,currentPage:1,name:void 0,market:void 0,code:void 0},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.onInputChanged=function(t,n){var r;e.setState((U(r={},t,n),U(r,"filter",Object.assign(Object.assign({},e.state.filter),U({},t,n||void 0))),r))},e.goToEditor=function(t){var n="/dashboard/market-product/editor?id=".concat(p.a.isEmpty(t)?0:t.id);e.props.history.push(n),e.props.market.setCurrentProduct(t,!0,!1)},e.renderMenu=function(e){return null},e.onBatch=function(t){return Object(r.a)(te(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},e}var n,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,e),n=t,(c=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.common.paginationConfig,n=t.defaultPageSize,r=t.defaultCurrent,this.resetPagination(n,r),this.props.market.getMarketList(),this.getMarketOptions();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"componentDidUpdate",value:function(){"/dashboard/market-product"===this.props.location.pathname&&this.props.history.replace("/dashboard/market-product/list")}},{key:"render",value:function(){var e=this,t=this.props.match;return i.createElement("div",null,i.createElement(a.a,Object.assign({},this.props,{links:[],title:"行情产品管理"})),i.createElement(G.b,{path:"".concat(t.url,"/list"),render:function(t){return i.createElement(o.a,Object.assign({},t,{config:v(e)}))}}),i.createElement(G.b,{path:"".concat(t.url,"/editor"),render:function(e){return i.createElement(Z,Object.assign({},e))}}))}}])&&Q(n.prototype,c),s&&Q(n,s),t}(k.a);re=Object(r.b)([Object(E.a)("/dashboard/market-product",{exact:!1}),Object(B.b)("common","market"),B.c],re);t.default=re}}]);