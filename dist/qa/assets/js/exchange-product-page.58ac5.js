(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1010:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(996),o=n.n(a),c=(n(995),n(33));n(1012);function i(e){var t=c.a.getPageBreadcrumb(e.location.pathname),n=e.title,a=e.links,i=e.tabs,s=e.currentTab;return r.createElement("div",{className:"common-header"},r.createElement("section",{className:"common-header-breadcrumb"},t&&r.createElement(o.a,null,t.map((function(e,t){return r.createElement(o.a.Item,{key:t},e.title)})))),r.createElement("section",{className:"common-header-title"},r.createElement("h2",null,n),r.createElement("div",{className:"common-header-links"},a&&a.map((function(t,n){return r.createElement("a",{key:n,onClick:function(){e.history.push(t.path)}},t.title)})))),r.createElement("section",{className:"common-header-tabs"},i&&i.map((function(t,n){return r.createElement("a",{onClick:function(){e.onTabClick(t.id)},className:"".concat(s===t.id?"tab-active":""," ")},r.createElement("span",null,t.title),t.tipComponent&&t.tipComponent())}))))}},1011:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(92);function o(e,t){return function(n){return function(){return r.createElement(a.b,Object.assign({path:e},Object.assign({exact:!0},t),{render:function(e){return r.createElement(n,Object.assign({},e))}}))}}}},1012:function(e,t,n){},1013:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(0),a=(n(1014),n(95)),o=n.n(a),c=(n(129),n(279)),i=n.n(c),s=(n(409),n(151)),l=n.n(s),u=(n(278),n(998)),m=n.n(u),p=(n(997),n(1002)),f=n.n(p),d=(n(1001),n(198)),h=n.n(d),g=(n(411),n(17)),b=n.n(g),y=(n(197),n(416)),v=n.n(y),E=(n(413),n(417)),w=n.n(E),C=(n(412),n(415)),O=n.n(C),S=(n(414),n(33)),k=n(20),j=n.n(k);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=i.a.Option,I=l.a.Group,$=f.a.RangePicker,L=O.a.CheckableTag,M={SelectInput:function(e){var t=e.selectValue,n=e.inputValue,a=e.placeholder,o=e.options,c=e.onSelectChange,s=e.onInputChange,u=e.onPressEnter,m=e.selectStyle;return r.createElement(I,{compact:!0},r.createElement(i.a,{style:m?Object.assign({width:110},m):{width:110},value:t,onChange:c},o&&o.map((function(e,t){return r.createElement(B,{key:t,value:e.value},e.title)}))),r.createElement(l.a,{style:{width:238},value:n,onChange:s,placeholder:a,onPressEnter:u}))},Select:function(e){var t=e.option,n=e.label,a=e.mode,o=e.onSearch,c=e.onSelect,s=e.onBlur,l=e.onFocus,u=e.value,m=e.placeholder,p=e.showSearch,f=e.width,d=e.filterOption,h=e.onChange,g=e.allowClear,b=e.onPopupScroll;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(i.a,{allowClear:g,value:u,mode:a||!1,style:{minWidth:f||258,width:f},showSearch:p,placeholder:m,filterOption:d,onSearch:o,onSelect:c,onChange:h,onBlur:s,onPopupScroll:b,onFocus:l},t.data.map((function(e){return r.createElement(B,{key:e[t.key]||e.id,value:e[t.value]||e.id,$data:e},e[t.title])})))))},DatePicker:function(e){var t=e.label,n=e.placeholder,a=e.onChange,o=e.value,c=e.style,i=e.format,s=e.showTime;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(f.a,{format:i||!1,style:c,showTime:s,placeholder:n,value:o,onChange:a})))},RangePicker:function(e){var t=e.label,n=e.alias,a=e.placeholder,c=e.onChange,i=e.value,s=e.showTime,l=e.format;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement($,{style:{width:400},showTime:s,format:l,placeholder:a,value:i,onChange:c}),r.createElement("span",{className:"common-list-control-date-alias"},!S.a.isEmpty(n)&&n.map((function(e,t){return r.createElement(o.a,{key:t,onClick:function(){return c([j()(Date.now()-864e5*e).startOf("day"),j()()])}},e," 天内")})))))},Input:function(e){var t=e.label,n=e.value,a=e.placeholder,o=e.onChange,c=e.width,i=e.onPressEnter;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(l.a,{style:{minWidth:c||258},value:n,onChange:o,placeholder:a,onPressEnter:i})))},Checkbox:function(e){var t=e.label,n=e.value,a=e.onChange;return r.createElement(h.a,{checked:n,onChange:a},t)},CheckableTag:function(e){var t=e.label,n=e.option,a=e.value,o=e.onChange;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},!S.a.isEmpty(n)&&n.map((function(e){return r.createElement(L,{key:e.value,checked:e.value===a,onChange:function(){o(e)}},e.title)}))))},Label:function(e,t){var n=e.label;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},t))},Custom:function(e){return r.createElement("div",null,(void 0).props.children)}},A=function(e){function t(){var e;return N(this,t),(e=R(this,_(t).apply(this,arguments))).state={collapse:!0},e.toggleCollapse=function(t){e.setState({collapse:!e.state.collapse})},e.renderSearcher=function(){var t=e.props.config,n=t.searcher,a=t.table,c=e.state.collapse,i=a&&a.tableHeader;return n&&r.createElement("section",{className:"common-list-search"},e.renderWidgets(n.widgets),i&&r.createElement(i,null),r.createElement("div",{className:"common-list-search-right"},!n.hideSearcher&&r.createElement(r.Fragment,null,r.createElement(o.a,{type:"primary",onClick:n.onSearch},"查询"),r.createElement(o.a,{onClick:n.onReset},"重置")),n.collapseControl&&n.collapseControl.showMoreBtn&&r.createElement("span",{className:"common-list-serach-more"},r.createElement("a",{onClick:e.toggleCollapse},c?"更多":"收起"," ",r.createElement(b.a,{type:c?"down":"up"})))))},e.renderWidgets=function(t){var n=e.state.collapse,a=e.props.config.searcher;return t&&r.createElement("div",{className:"common-list-search-left"},t.map((function(t,o){return Array.isArray(t)?r.createElement("div",{key:o,className:"common-list-search-row",style:{display:a.collapseControl&&a.collapseControl.showMoreBtn&&n&&o>0?"none":"flex"}},t.map((function(t){return r.createElement("div",{key:t.label,className:"common-list-search-col",style:Object.assign({},t.style)},M[t.type]&&M[t.type](t,t.children?e.renderWidgets(t.children):null))}))):r.createElement("div",{key:t.label,className:"common-list-search-row ".concat(t.className)},M[t.type]&&M[t.type](t,t.children?e.renderWidgets(t.children):null))})))},e.renderAddBtn=function(){var t=e.props.config,n=t.addBtn,a=t.searcher,o=n&&n.title;return n&&r.createElement("section",{className:"common-list-addbtn",style:n.style},"function"==typeof n.title?r.createElement(o,null):n.title,r.createElement("div",{className:"common-list-search-batch"},a.batchControl.showBatchControl&&r.createElement(i.a,{placeholder:a.batchControl.placeholder,style:{minWidth:120},defaultValue:void 0,onChange:a.batchControl.onBatch},a.batchControl.options.map((function(e){return r.createElement(B,{key:e.value,value:e.value},e.title)})))))},e.renderTableHeader=function(){var t=e.props.config.tableHeader,n=t;return r.createElement("section",{className:"common-list-table-header"},t&&r.createElement(n,null))},e.renderTable=function(){var t=e.props.config.table,n=t.rowKey,a=t.rowSelection,o=t.columns,c=t.dataSource,i=t.pagination,s=t.onChange,l=t.loading,u=t.locale;return r.createElement("section",{className:"common-list-table"},r.createElement(m.a,{locale:u,rowKey:n||"id",rowSelection:a,columns:o,dataSource:c,loading:l,pagination:i,onChange:s}))},e.renderCards=function(){var t=e.props.config.cards,n=t.dataSource,a=t.loading,o=t.pagination,c=t.renderCard,i=t.addBtn;return r.createElement("div",{className:"common-list-cards-wrapper"},r.createElement("ul",{className:"common-list-cards"},a?r.createElement("div",{className:"common-list-cards-loading"},r.createElement(w.a,null)):r.createElement(r.Fragment,null,r.createElement("li",{className:"common-list-card add-btn"},r.createElement("div",{className:"common-list-card-item",onClick:i.onAddBtnClick},i.icon?r.createElement("img",{src:i.icon,alt:""}):r.createElement(b.a,{type:"plus-circle"}),r.createElement("p",null,i.title))),n.map((function(e){return r.createElement("li",{className:"common-list-card"},r.createElement("div",{className:"common-list-card-item"},c(e)))})))),r.createElement("section",{className:"common-list-cards-pagination"},r.createElement(v.a,Object.assign({},o))))},e}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props.config;return r.createElement("div",{className:"common-list"},this.renderSearcher(),this.renderAddBtn(),this.renderTableHeader(),e.table&&this.renderTable(),e.cards&&this.renderCards())}}])&&P(n.prototype,a),c&&P(n,c),t}(r.Component)},1014:function(e,t,n){},1015:function(e,t,n){"use strict";var r=function(e){var t=e;return 15===e.length&&(t=function(e){if(/^\d{15}$/.test(e)){e=e.substr(0,6)+"19"+e.substr(6,e.length-6);for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=0,r=0;r<e.length;r++)n+=parseInt(e.substr(r,1))*t[r];return e+["1","0","X","9","8","7","6","5","4","3","2"][n%11]}return e}(e)),function(e){if(!/^\d{17}(\d|x)$/i.test(e))return!1;return null!=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙",21:"辽宁",22:"吉林",23:"黑龙",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",83:"台湾",91:"国外"}[parseInt(e.substr(0,2))]}(t)},a=function(e){return/^[HMhm]{1}([0-9]{8})$/.test(e)},o=function(e){return/^[0-9]{8}$/.test(e)||/^[0-9]{10}$/.test(e)},c=function(e){return/^[a-zA-Z]{5, 17}$/.test(e)||/^[a-zA-Z0-9]$/.test(e)},i=n(33);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return u}));var l={isNonEmpty:function(e,t,n){if(0!==e&&i.a.isEmpty(e))return n&&n(),t},maxLength:function(e,t,n,r){if(e.length>t)return r&&r(),n},minLength:function(e,t,n,r){if(e.length<t)return r&&r(),n},isEmail:function(e,t,n){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e))return n&&n(),t},isMobile:function(e,t,n){if(!/^(13[0-9]|14[57]|15[012356789]|16[0-9]|18[0-9]|17[0-9]|19[0-9])\d{8}$/.test(e))return n&&n(),t},isID:function(e,t,n,i){var s=null;if("id"===t?s=r:"HKMC"===t?s=a:"TW"===t?s=o:"PSPort"===t&&(s=c),!s(e))return i&&i(),n},isNumber:function(e,t,n){if(e&&Number.isNaN(Number(e)))return n&&n(),t},isHexColor:function(e,t,n){var r=e.toString();if(!r||!function(e){if("#"!==e[0])return!1;var t=e.slice(1);return 6===t.length&&/^[0-9a-fA-f]{6}$/.test(t)}(r))return n&&n(),t},customReg:function(e,t,n,r){var a=e.toString();if(!a||!new RegExp(t).test(a))return r&&r(),n}},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cache=[]}var t,n,r;return t=e,(n=[{key:"add",value:function(e,t){var n=this,r=!0,a=!1,o=void 0;try{for(var c,i=function(){var t=c.value,r=t.strategy.split(":");n.cache.push((function(){var n=r.shift();return r.unshift(e),r.push(t.errMsg),r.push(t.cb),l[n].apply(null,r)}))},s=t[Symbol.iterator]();!(r=(c=s.next()).done);r=!0)i()}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}}},{key:"start",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,a=this.cache[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=(0,r.value)();if(o)return o}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}}])&&s(t.prototype,n),r&&s(t,r),e}()},1027:function(e,t,n){},1028:function(e,t,n){},1033:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(1010),o=n(1013),c=n(0),i=n(95),s=n.n(i),l=(n(129),n(17)),u=n.n(l),m=(n(197),n(1e3)),p=n.n(m),f=(n(999),n(33));function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){var t={selectedRowKeys:e.state.selectedRowKeys,onChange:function(t,n){e.setState({selectedRowKeys:t})}},n=[{title:"交易品种 ID",dataIndex:"id"},{title:"交易品种",dataIndex:"symbol",render:function(e,t){return e||"--"}},{title:"行情品种",dataIndex:"source",render:function(e,t){return e||"--"}},{title:"类型",dataIndex:"type",render:function(e,t){return e||"--"}},{title:"执行",dataIndex:"function",render:function(e,t){return e||"--"}},{title:"价差",dataIndex:"price_gap",render:function(e,t){return e||"--"}},{title:"停止",dataIndex:"stop_point",render:function(e,t){return e||"--"}},{title:"买入",dataIndex:"buy_point",render:function(e,t){return e||"--"}},{title:"卖出",dataIndex:"sale_point",render:function(e,t){return e||"--"}},{title:"位数",dataIndex:"digits",render:function(e,t){return e||"--"}},{title:"交易",dataIndex:"exchange",render:function(e,t){return e||"--"}},{title:"操作",render:function(t,n){return c.createElement("div",{className:"common-list-table-operation"},c.createElement("span",{onClick:function(){e.goToEditor(n)}},"编辑"),c.createElement("span",{className:"common-list-table-operation-spliter"}),c.createElement(p.a,{title:"请问是否确定删除当前规则",onConfirm:function(){return Object(r.a)(void 0,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.exchange.deleteProduct({id:n.id});case 2:200===(r=t.sent).data.status?e.getDataList(e.state.filter):e.$msg.error(r.data.message);case 4:case"end":return t.stop()}}),t)})))},onCancel:function(){}},c.createElement("span",null,"删除")))}}],a=Object.assign(Object.assign({},e.props.common.paginationConfig),{total:e.props.exchange.productListMeta.total,current:e.state.currentPage,onChange:function(e,t){},onShowSizeChange:function(t,n){e.resetPagination(n,t)}});return{addBtn:{title:function(){return c.createElement(s.a,{type:"primary",onClick:function(){e.goToEditor({})}},c.createElement(u.a,{type:"plus"}),"添加")}},searcher:{hideSearcher:!0,batchControl:{placeholder:"请选择",showBatchControl:!f.a.isEmpty(e.state.selectedRowKeys),options:[{title:"删除",value:"delete"}],onBatch:function(t){e.onBatch(t)}},widgets:[],onSearch:function(){},onReset:function(){}},table:{rowKey:"id",rowSelection:t,columns:n,dataSource:e.props.exchange.productList,pagination:a,onChange:function(t,n,r){var a={pageNum:t.current,pageSize:t.pageSize};if(!f.a.isEmpty(n))for(var o=0,c=Object.entries(n);o<c.length;o++){var i=d(c[o],2),s=i[0],l=i[1];a[s]=l?l[0]:void 0}f.a.isEmpty(r)?(delete a.orderBy,delete a.sort):(a.orderBy="".concat(r.field),a.sort="".concat("descend"===r.order?"desc":"asc")),e.setState({filter:Object.assign(Object.assign({},e.state.filter),a),currentPage:t.current},(function(){e.getDataList(e.state.filter)}))}}}},g=n(1011),b=n(81),y=n(90),v=n.n(y),E=(n(410),n(151)),w=n.n(E),C=(n(278),n(279)),O=n.n(C),S=(n(409),n(994)),k=n.n(S),j=(n(993),n(280)),x=n.n(j),N=(n(418),n(1027),n(1015)),P=n(82),R=n(125);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?L(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=v.a.Item,D=O.a.Option,F=k.a.confirm,z={display:"block",marginBottom:12},V=function(e,t,n){return{labelCol:{span:e,offset:n},wrapperCol:{span:t}}},K=function(e){function t(){var e;return T(this,t),(e=I(this,$(t).apply(this,arguments))).state={mode:"add",marketOptions:[]},e.init=function(){return Object(r.a)(L(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.$qs.parse(this.props.location.search),this.setState({mode:0==t.id?"add":"edit"},(function(){return Object(r.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=f.a.getLStorage("currentExchangeProduct"))?F({title:"行情产品恢复操作",content:"检测到您存在未提交的行情产品记录，请问是否从上次编辑中恢复状态？",onOk:function(){n.props.exchange.setCurrentProduct(t)},onCancel:function(){n.init(),f.a.rmLStorage("currentExchangeProduct")}}):"edit"===this.state.mode||this.props.exchange.setCurrentProduct({},!0,!1);case 2:case"end":return e.stop()}}),e,this)})))}));case 2:case"end":return e.stop()}}),e,this)})))},e.renderEditor=function(){var t=e.props.form.getFieldDecorator,n=e.props.exchange,a=n.setCurrentProduct,o=n.currentShowProduct;return c.createElement(v.a,{className:"editor-form"},c.createElement(A,Object.assign({label:"交易市场",className:"push-type-select"},V(2,6),{required:!0}),t("exchange",{initialValue:o&&o.exchange})(c.createElement(O.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择交易",onChange:function(e,t){a({exchange:e},!1)},onFocus:function(){return Object(r.a)(L(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.exchange.getProductList({offset:0,limit:200});case 2:t=e.sent,this.setState({marketOptions:t.data.list,marketMeta:{total:t.data.meta.total,limit:t.data.meta.limit,offset:t.data.meta.offset}});case 4:case"end":return e.stop()}}),e,this)})))}},R.c.map((function(e){return c.createElement(D,{key:e.id},e.name)}))))),c.createElement(A,Object.assign({label:"产品名称"},V(2,12),{required:!0}),t("name",{initialValue:o&&o.name})(c.createElement(w.a,{placeholder:"请输入产品名称",onChange:function(e){a({name:e.target.value},!1)},style:{display:"inline-block",width:200}}))),c.createElement(A,Object.assign({label:"简拼"},V(2,12),{required:!0}),t("jianpin",{initialValue:o&&o.jianpin})(c.createElement(w.a,{placeholder:"请输入产品简拼",onChange:function(e){a({jianpin:e.target.value},!1)},style:{display:"inline-block",width:200}}))),c.createElement(A,Object.assign({label:"产品代码"},V(2,12),{required:!0}),t("code",{initialValue:o&&o.code})(c.createElement(w.a,{placeholder:"请输入产品代码",onChange:function(e){a({code:e.target.value},!1)},style:{display:"inline-block",width:200}}))),c.createElement(A,Object.assign({label:"是否上架",required:!0},V(2,6),{className:"editor-upshelf"}),t("status",{initialValue:o&&o.status})(c.createElement(x.a.Group,{onChange:function(e){a({status:e.target.value},!1)}},c.createElement(x.a,{style:z,value:1},"是"),c.createElement(x.a,{style:z,value:0},"否")))),c.createElement(A,Object.assign({label:"是否开牌",required:!0},V(2,6),{className:"editor-upshelf"}),t("openStatus",{initialValue:o&&o.openStatus})(c.createElement(x.a.Group,{onChange:function(e){a({openStatus:e.target.value},!1)}},c.createElement(x.a,{style:z,value:1},"正常"),c.createElement(x.a,{style:z,value:0},"禁止")))),c.createElement(A,{className:"editor-form-btns"},c.createElement(s.a,{type:"primary",onClick:e.handleSubmit},"edit"==e.state.mode?"确认修改":"保存"),c.createElement(s.a,{onClick:e.goBack},"取消")))},e.goBack=function(){setTimeout((function(){e.props.history.goBack(),e.props.exchange.setCurrentProduct({}),f.a.rmLStorage("currentExchangeProduct")}),300)},e.handleSubmit=function(t){return Object(r.a)(L(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.form.validateFields((function(e,n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,a,o,c,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}if(n=this.props.exchange.currentProduct,r=this.props.common.userInfo,a=this.state.mode,o={exchange:n.exchange,name:n.name,jianpin:n.jianpin,code:n.code,status:n.status,openStatus:n.openStatus,operator:r.id},!(c=this.getValidation(o))){t.next=8;break}return t.abrupt("return",this.$msg.warn(c));case 8:"add"==a?this.$api.exchange.updateProduct(o).then((function(e){i.$msg.success("行情产品创建成功"),setTimeout((function(){i.goBack(),i.$store.exchange.getProductList({offset:0,limit:10})}),1500)})):(o.id=n.id,this.$api.exchange.updateFoodCard(o).then((function(e){i.$msg.success("行情产品更新成功"),setTimeout((function(){i.goBack(),i.$store.exchange.getProductList({offset:0,limit:10})}),1500)})));case 9:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.getValidation=function(e){var t=new N.a;return t.add(e.exchange,[{strategy:"isNonEmpty",errMsg:"请选择交易市场"}]),t.add(e.name,[{strategy:"isNonEmpty",errMsg:"请输入产品名称"}]),t.add(e.jianpin,[{strategy:"isNonEmpty",errMsg:"请输入简拼"}]),t.add(e.code,[{strategy:"isNonEmpty",errMsg:"请输入产品代码"}]),t.add(e.status,[{strategy:"isNonEmpty",errMsg:"请选择上架状态"}]),t.add(e.openStatus,[{strategy:"isNonEmpty",errMsg:"请选择开牌状态"}]),t.start()},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.init();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"componentWillUnmount",value:function(){this.props.exchange.setCurrentProduct({},!0,!1)}},{key:"render",value:function(){return c.createElement("div",{className:"editor food-card-editor"},c.createElement("section",{className:"editor-content panel-block"},this.renderEditor()))}}])&&B(n.prototype,a),o&&B(n,o),t}(b.a),W=K=Object(r.b)([v.a.create(),Object(P.b)("common","exchange"),P.c],K),q=n(92);n(1028);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?X(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Y=function(e){function t(){var e;return Z(this,t),(e=J(this,U(t).apply(this,arguments))).state={filter:{},tableLoading:!1,currentPage:1,selectedRowKeys:[]},e.getDataList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({tableLoading:!0,filter:Object.assign(Object.assign({},e.state.filter),t)},(function(){return Object(r.a)(X(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.exchange.getProductList(Object.assign(Object.assign({},this.state.filter),t));case 2:this.setState({tableLoading:!1});case 3:case"end":return e.stop()}}),e,this)})))}))},e.resetPagination=function(t,n){return Object(r.a)(X(e),void 0,void 0,regeneratorRuntime.mark((function e(){var a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({filter:Object.assign(Object.assign({},this.state.filter),{pageSize:t,pageNum:n})},(function(){return Object(r.a)(a,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.getDataList(t);case 2:case"end":return e.stop()}}),e,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.onSearch=function(){return Object(r.a)(X(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.setState({filter:Object.assign(Object.assign({},t),{pageNum:1}),currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.onReset=function(){return Object(r.a)(X(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={pageNum:1,pageSize:this.state.filter.pageSize},this.setState({filter:t,currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.goToEditor=function(t){var n="/dashboard/exchange/product/editor?id=".concat(f.a.isEmpty(t)?0:t.id);e.props.history.push(n),e.props.exchange.setCurrentProduct(t,!0,!1)},e.renderMenu=function(e){return null},e.onBatch=function(t){return Object(r.a)(X(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},e}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.common.paginationConfig,n=t.defaultPageSize,r=t.defaultCurrent,this.resetPagination(n,r);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"componentDidUpdate",value:function(){"/dashboard/exchange/product"===this.props.location.pathname&&this.props.history.replace("/dashboard/exchange/product/list")}},{key:"render",value:function(){var e=this,t=this.props.match;return c.createElement("div",null,c.createElement(a.a,Object.assign({},this.props,{links:[],title:"交易品种设置"})),c.createElement(q.b,{path:"".concat(t.url,"/list"),render:function(t){return c.createElement(o.a,Object.assign({},t,{config:h(e)}))}}),c.createElement(q.b,{path:"".concat(t.url,"/editor"),render:function(e){return c.createElement(W,Object.assign({},e))}}))}}])&&G(n.prototype,i),s&&G(n,s),t}(b.a);Y=Object(r.b)([Object(g.a)("/dashboard/exchange/product",{exact:!1}),Object(P.b)("common","exchange"),P.c],Y);t.default=Y}}]);