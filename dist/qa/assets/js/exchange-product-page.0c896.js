(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1064:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),a=n(1046),o=n.n(a),i=(n(1045),n(29));n(1065);function c(e){var t=i.a.getPageBreadcrumb(e.location.pathname),n=e.title,a=e.links,c=e.tabs,l=e.currentTab;return r.createElement("div",{className:"common-header"},r.createElement("section",{className:"common-header-breadcrumb"},t&&r.createElement(o.a,null,t.map((function(e,t){return r.createElement(o.a.Item,{key:t},e.title)})))),r.createElement("section",{className:"common-header-title"},r.createElement("h2",null,n),r.createElement("div",{className:"common-header-links"},a&&a.map((function(t,n){return r.createElement("a",{key:n,onClick:function(){e.history.push(t.path)}},t.title)})))),r.createElement("section",{className:"common-header-tabs"},c&&c.map((function(t,n){return r.createElement("a",{onClick:function(){e.onTabClick(t.id)},className:"".concat(l===t.id?"tab-active":""," ")},r.createElement("span",null,t.title),t.tipComponent&&t.tipComponent())}))))}},1065:function(e,t,n){},1066:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n(1),a=(n(1067),n(96)),o=n.n(a),i=(n(133),n(289)),c=n.n(i),l=(n(433),n(134)),s=n.n(l),u=(n(204),n(1044)),m=n.n(u),p=(n(1043),n(1050)),d=n.n(p),f=(n(1049),n(205)),h=n.n(f),g=(n(435),n(17)),b=n.n(g),y=(n(203),n(438)),v=n.n(y),E=(n(437),n(439)),_=n.n(E),w=(n(436),n(441)),k=n.n(w),C=(n(440),n(29)),O=n(22),j=n.n(O);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=c.a.Option,V=s.a.Group,$=d.a.RangePicker,L=k.a.CheckableTag,I={SelectInput:function(e){var t=e.selectValue,n=e.inputValue,a=e.placeholder,o=e.options,i=e.onSelectChange,l=e.onInputChange,u=e.onPressEnter,m=e.selectStyle;return r.createElement(V,{compact:!0},r.createElement(c.a,{style:m?Object.assign({width:110},m):{width:110},value:t,onChange:i},o&&o.map((function(e,t){return r.createElement(T,{key:t,value:e.value},e.title)}))),r.createElement(s.a,{style:{width:238},value:n,onChange:l,placeholder:a,onPressEnter:u}))},Select:function(e){var t=e.option,n=e.label,a=e.mode,o=e.onSearch,i=e.onSelect,l=e.onBlur,s=e.onFocus,u=e.value,m=e.placeholder,p=e.showSearch,d=e.width,f=e.filterOption,h=e.onChange,g=e.allowClear,b=e.onPopupScroll;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(c.a,{allowClear:g,value:u,mode:a||!1,style:{minWidth:d||258,width:d},showSearch:p,placeholder:m,filterOption:f,onSearch:o,onSelect:i,onChange:h,onBlur:l,onPopupScroll:b,onFocus:s},t.data.map((function(e){return r.createElement(T,{key:e[t.key]||e.id,value:e[t.value]||e.id,$data:e},e[t.title])})))))},DatePicker:function(e){var t=e.label,n=e.placeholder,a=e.onChange,o=e.value,i=e.style,c=e.format,l=e.showTime;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(d.a,{format:c||!1,style:i,showTime:l,placeholder:n,value:o,onChange:a})))},RangePicker:function(e){var t=e.label,n=e.alias,a=e.placeholder,i=e.onChange,c=e.value,l=e.showTime,s=e.format;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement($,{style:{width:400},showTime:l,format:s,placeholder:a,value:c,onChange:i}),r.createElement("span",{className:"common-list-control-date-alias"},!C.a.isEmpty(n)&&n.map((function(e,t){return r.createElement(o.a,{key:t,onClick:function(){return i([j()(Date.now()-864e5*e).startOf("day"),j()()])}},e," 天内")})))))},Input:function(e){var t=e.label,n=e.value,a=e.placeholder,o=e.onChange,i=e.width,c=e.onPressEnter;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(s.a,{style:{minWidth:i||258},value:n,onChange:o,placeholder:a,onPressEnter:c})))},Checkbox:function(e){var t=e.label,n=e.value,a=e.onChange;return r.createElement(h.a,{checked:n,onChange:a},t)},CheckableTag:function(e){var t=e.label,n=e.option,a=e.value,o=e.onChange;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},!C.a.isEmpty(n)&&n.map((function(e){return r.createElement(L,{key:e.value,checked:e.value===a,onChange:function(){o(e)}},e.title)}))))},Label:function(e,t){var n=e.label;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},t))},Custom:function(e){return r.createElement("div",null,(void 0).props.children)}},M=function(e){function t(){var e;return S(this,t),(e=P(this,R(t).apply(this,arguments))).state={collapse:!0},e.toggleCollapse=function(t){e.setState({collapse:!e.state.collapse})},e.renderSearcher=function(){var t=e.props.config,n=t.searcher,a=t.table,i=e.state.collapse,c=a&&a.tableHeader;return n&&r.createElement("section",{className:"common-list-search"},e.renderWidgets(n.widgets),c&&r.createElement(c,null),r.createElement("div",{className:"common-list-search-right"},!n.hideSearcher&&r.createElement(r.Fragment,null,r.createElement(o.a,{type:"primary",onClick:n.onSearch},"查询"),r.createElement(o.a,{onClick:n.onReset},"重置")),n.collapseControl&&n.collapseControl.showMoreBtn&&r.createElement("span",{className:"common-list-serach-more"},r.createElement("a",{onClick:e.toggleCollapse},i?"更多":"收起"," ",r.createElement(b.a,{type:i?"down":"up"})))))},e.renderWidgets=function(t){var n=e.state.collapse,a=e.props.config.searcher;return t&&r.createElement("div",{className:"common-list-search-left"},t.map((function(t,o){return Array.isArray(t)?r.createElement("div",{key:o,className:"common-list-search-row",style:{display:a.collapseControl&&a.collapseControl.showMoreBtn&&n&&o>0?"none":"flex"}},t.map((function(t){return r.createElement("div",{key:t.label,className:"common-list-search-col",style:Object.assign({},t.style)},I[t.type]&&I[t.type](t,t.children?e.renderWidgets(t.children):null))}))):r.createElement("div",{key:t.label,className:"common-list-search-row ".concat(t.className)},I[t.type]&&I[t.type](t,t.children?e.renderWidgets(t.children):null))})))},e.renderAddBtn=function(){var t=e.props.config,n=t.addBtn,a=t.searcher,o=n&&n.title;return n&&r.createElement("section",{className:"common-list-addbtn",style:n.style},"function"==typeof n.title?r.createElement(o,null):n.title,r.createElement("div",{className:"common-list-search-batch"},a.batchControl.showBatchControl&&r.createElement(c.a,{placeholder:a.batchControl.placeholder,style:{minWidth:120},defaultValue:void 0,onChange:a.batchControl.onBatch},a.batchControl.options.map((function(e){return r.createElement(T,{key:e.value,value:e.value},e.title)})))))},e.renderTableHeader=function(){var t=e.props.config.tableHeader,n=t;return r.createElement("section",{className:"common-list-table-header"},t&&r.createElement(n,null))},e.renderTable=function(){var t=e.props.config.table,n=t.rowKey,a=t.rowSelection,o=t.columns,i=t.dataSource,c=t.pagination,l=t.onChange,s=t.loading,u=t.locale;return r.createElement("section",{className:"common-list-table"},r.createElement(m.a,{locale:u,rowKey:n||"id",rowSelection:a,columns:o,dataSource:i,loading:s,pagination:c,onChange:l}))},e.renderCards=function(){var t=e.props.config.cards,n=t.dataSource,a=t.loading,o=t.pagination,i=t.renderCard,c=t.addBtn;return r.createElement("div",{className:"common-list-cards-wrapper"},r.createElement("ul",{className:"common-list-cards"},a?r.createElement("div",{className:"common-list-cards-loading"},r.createElement(_.a,null)):r.createElement(r.Fragment,null,r.createElement("li",{className:"common-list-card add-btn"},r.createElement("div",{className:"common-list-card-item",onClick:c.onAddBtnClick},c.icon?r.createElement("img",{src:c.icon,alt:""}):r.createElement(b.a,{type:"plus-circle"}),r.createElement("p",null,c.title))),n.map((function(e){return r.createElement("li",{className:"common-list-card"},r.createElement("div",{className:"common-list-card-item"},i(e)))})))),r.createElement("section",{className:"common-list-cards-pagination"},r.createElement(v.a,Object.assign({},o))))},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props.config;return r.createElement("div",{className:"common-list"},this.renderSearcher(),this.renderAddBtn(),this.renderTableHeader(),e.table&&this.renderTable(),e.cards&&this.renderCards())}}])&&N(n.prototype,a),i&&N(n,i),t}(r.Component)},1067:function(e,t,n){},1068:function(e,t,n){"use strict";var r=function(e){var t=e;return 15===e.length&&(t=function(e){if(/^\d{15}$/.test(e)){e=e.substr(0,6)+"19"+e.substr(6,e.length-6);for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=0,r=0;r<e.length;r++)n+=parseInt(e.substr(r,1))*t[r];return e+["1","0","X","9","8","7","6","5","4","3","2"][n%11]}return e}(e)),function(e){if(!/^\d{17}(\d|x)$/i.test(e))return!1;return null!=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙",21:"辽宁",22:"吉林",23:"黑龙",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",83:"台湾",91:"国外"}[parseInt(e.substr(0,2))]}(t)},a=function(e){return/^[HMhm]{1}([0-9]{8})$/.test(e)},o=function(e){return/^[0-9]{8}$/.test(e)||/^[0-9]{10}$/.test(e)},i=function(e){return/^[a-zA-Z]{5, 17}$/.test(e)||/^[a-zA-Z0-9]$/.test(e)},c=n(29);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return u}));var s={isNonEmpty:function(e,t,n){if(0!==e&&c.a.isEmpty(e))return n&&n(),t},maxLength:function(e,t,n,r){if(e.length>t)return r&&r(),n},minLength:function(e,t,n,r){if(e.length<t)return r&&r(),n},isEmail:function(e,t,n){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e))return n&&n(),t},isMobile:function(e,t,n){if(!/^(13[0-9]|14[57]|15[012356789]|16[0-9]|18[0-9]|17[0-9]|19[0-9])\d{8}$/.test(e))return n&&n(),t},isID:function(e,t,n,c){var l=null;if("id"===t?l=r:"HKMC"===t?l=a:"TW"===t?l=o:"PSPort"===t&&(l=i),!l(e))return c&&c(),n},isNumber:function(e,t,n){if(e&&Number.isNaN(Number(e)))return n&&n(),t},isHexColor:function(e,t,n){var r=e.toString();if(!r||!function(e){if("#"!==e[0])return!1;var t=e.slice(1);return 6===t.length&&/^[0-9a-fA-f]{6}$/.test(t)}(r))return n&&n(),t},customReg:function(e,t,n,r){var a=e.toString();if(!a||!new RegExp(t).test(a))return r&&r(),n}},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cache=[]}var t,n,r;return t=e,(n=[{key:"add",value:function(e,t){var n=this,r=!0,a=!1,o=void 0;try{for(var i,c=function(){var t=i.value,r=t.strategy.split(":");n.cache.push((function(){var n=r.shift();return r.unshift(e),r.push(t.errMsg),r.push(t.cb),s[n].apply(null,r)}))},l=t[Symbol.iterator]();!(r=(i=l.next()).done);r=!0)c()}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}}},{key:"start",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,a=this.cache[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=(0,r.value)();if(o)return o}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}}])&&l(t.prototype,n),r&&l(t,r),e}()},1079:function(e,t,n){},1080:function(e,t,n){},1083:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(1064),o=n(1066),i=n(1),c=n(96),l=n.n(c),s=(n(133),n(17)),u=n.n(s),m=(n(203),n(1048)),p=n.n(m),d=(n(1047),n(29));function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){var t={selectedRowKeys:e.state.selectedRowKeys,onChange:function(t,n){e.setState({selectedRowKeys:t})}},n=[{title:"交易品种 ID",dataIndex:"id"},{title:"交易品种",dataIndex:"symbol",render:function(e,t){return e||"--"}},{title:"行情品种",dataIndex:"source",render:function(e,t){return e||"--"}},{title:"类型",dataIndex:"type",render:function(e,t){return e||"--"}},{title:"执行",dataIndex:"function",render:function(e,t){return e||"--"}},{title:"价差",dataIndex:"price_gap",render:function(e,t){return e||"--"}},{title:"停止",dataIndex:"stop_point",render:function(e,t){return e||"--"}},{title:"买入",dataIndex:"buy_point",render:function(e,t){return e||"--"}},{title:"卖出",dataIndex:"sale_point",render:function(e,t){return e||"--"}},{title:"位数",dataIndex:"digits",render:function(e,t){return e||"--"}},{title:"交易",dataIndex:"exchange",render:function(e,t){return e||"--"}},{title:"操作",render:function(t,n){return i.createElement("div",{className:"common-list-table-operation"},i.createElement("span",{onClick:function(){e.goToEditor(n)}},"编辑"),i.createElement("span",{className:"common-list-table-operation-spliter"}),i.createElement(p.a,{title:"请问是否确定删除当前规则",onConfirm:function(){return Object(r.a)(void 0,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.exchange.deleteProduct({id:n.id});case 2:200===(r=t.sent).data.status?e.getDataList(e.state.filter):e.$msg.error(r.data.message);case 4:case"end":return t.stop()}}),t)})))},onCancel:function(){}},i.createElement("span",null,"删除")))}}],a=Object.assign(Object.assign({},e.props.common.paginationConfig),{total:e.props.exchange.productListMeta.total,current:e.state.currentPage,onChange:function(e,t){},onShowSizeChange:function(t,n){e.resetPagination(n,t)}});return{addBtn:{title:function(){return i.createElement(l.a,{type:"primary",onClick:function(){e.goToEditor({})}},i.createElement(u.a,{type:"plus"}),"添加")}},searcher:{hideSearcher:!0,batchControl:{placeholder:"请选择",showBatchControl:!d.a.isEmpty(e.state.selectedRowKeys),options:[{title:"删除",value:"delete"}],onBatch:function(t){e.onBatch(t)}},widgets:[],onSearch:function(){},onReset:function(){}},table:{rowKey:"id",rowSelection:t,columns:n,dataSource:e.props.exchange.productList,pagination:a,onChange:function(t,n,r){var a={pageNum:t.current,pageSize:t.pageSize};if(!d.a.isEmpty(n))for(var o=0,i=Object.entries(n);o<i.length;o++){var c=f(i[o],2),l=c[0],s=c[1];a[l]=s?s[0]:void 0}d.a.isEmpty(r)?(delete a.orderBy,delete a.sort):(a.orderBy="".concat(r.field),a.sort="".concat("descend"===r.order?"desc":"asc")),e.setState({filter:Object.assign(Object.assign({},e.state.filter),a),currentPage:t.current},(function(){e.getDataList(e.state.filter)}))}}}},g=n(290),b=n(84),y=n(86),v=n.n(y),E=(n(434),n(134)),_=n.n(E),w=(n(204),n(289)),k=n.n(w),C=(n(433),n(1042)),O=n.n(C),j=(n(1041),n(442),n(1058)),x=n.n(j),S=(n(1057),n(1079),n(1068)),N=n(85);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?$(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=v.a.Item,M=k.a.Option,F=O.a.confirm,z=_.a.TextArea,A=function(e,t,n){return{labelCol:{span:e,offset:n},wrapperCol:{span:t}}},D=function(e){function t(){var e;return R(this,t),(e=T(this,V(t).apply(this,arguments))).state={mode:"add",typeOptions:[],marketOptions:[]},e.init=function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.$qs.parse(this.props.location.search),this.setState({mode:0==t.id?"add":"edit"},(function(){return Object(r.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=d.a.getLStorage("currentExchangeProduct"))?F({title:"行情产品恢复操作",content:"检测到您存在未提交的行情产品记录，请问是否从上次编辑中恢复状态？",onOk:function(){n.props.exchange.setCurrentProduct(t)},onCancel:function(){n.init(),d.a.rmLStorage("currentExchangeProduct")}}):"edit"===this.state.mode||this.props.exchange.setCurrentProduct({},!0,!1);case 2:case"end":return e.stop()}}),e,this)})))}));case 2:case"end":return e.stop()}}),e,this)})))},e.getGenreOptions=function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.exchange.getGenreList({offset:0,limit:200});case 2:t=e.sent,this.setState({marketOptions:t.data.results,marketMeta:{total:t.count}});case 4:case"end":return e.stop()}}),e,this)})))},e.getMarketOptions=function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.market.getProductList({offset:0,limit:200});case 2:t=e.sent,this.setState({marketOptions:t.data.results,marketMeta:{total:t.count}});case 4:case"end":return e.stop()}}),e,this)})))},e.renderEditor=function(){var t=e.props.form.getFieldDecorator,n=e.props.exchange,a=n.setCurrentProduct,o=n.currentShowProduct,c=e.state,s=c.typeOptions,u=c.marketOptions;return i.createElement(v.a,{className:"editor-form"},i.createElement(I,null,i.createElement("h2",{className:"editor-form-title form-title"},"基本配置")),i.createElement(I,Object.assign({label:"产品名称"},A(3,12),{required:!0}),t("name",{initialValue:o&&o.name})(i.createElement(_.a,{placeholder:"请输入产品名称",onChange:function(e){a({name:e.target.value},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"行情产品",className:"push-type-select"},A(3,6),{required:!0}),t("product_id",{initialValue:o&&o.product_id})(i.createElement(k.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择行情产品",onChange:function(e,t){a({product_id:e},!1)},onFocus:function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},u.map((function(e){return i.createElement(M,{key:e.id.toString()},e.name)}))))),i.createElement(I,Object.assign({label:"小位数"},A(3,12)),t("decimals_place",{initialValue:o&&o.decimals_place})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入小位数",onChange:function(e){a({decimals_place:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"描述"},A(3,8)),t("description",{initialValue:o&&o.description,rules:[]})(i.createElement(z,{placeholder:"请输入产品描述",rows:6,onChange:function(e){a({description:e.target.value},!1)}}))),i.createElement(I,Object.assign({label:"交易品种类型",className:"push-type-select"},A(3,6),{required:!0}),t("type",{initialValue:o&&o.type})(i.createElement(k.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择交易品种类型",onChange:function(e,t){a({type:e},!1)},onFocus:function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},s.map((function(e){return i.createElement(M,{key:e.id.toString()},e.name)}))))),i.createElement(I,Object.assign({label:"成交模式",className:"push-type-select"},A(3,6),{required:!0}),t("profit_currency",{initialValue:o&&o.profit_currency})(i.createElement(k.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择成交模式",onChange:function(e,t){a({profit_currency:e},!1)},onFocus:function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},u.map((function(e){return i.createElement(M,{key:e.id.toString()},e.name)}))))),i.createElement(I,Object.assign({label:"背景颜色",className:"push-type-select"},A(3,6),{required:!0}),t("background",{initialValue:o&&o.background})(i.createElement(k.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择背景颜色",onChange:function(e,t){a({background:e},!1)},onFocus:function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},u.map((function(e){return i.createElement(M,{key:e.id.toString()},e.name)}))))),i.createElement(I,Object.assign({label:"获利货币",className:"push-type-select"},A(3,6),{required:!0}),t("profit_currency",{initialValue:o&&o.profit_currency})(i.createElement(k.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择获利货币",onChange:function(e,t){a({profit_currency:e},!1)},onFocus:function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},u.map((function(e){return i.createElement(M,{key:e.id.toString()},e.name)}))))),i.createElement(I,Object.assign({label:"预付款货币",className:"push-type-select"},A(3,6),{required:!0}),t("margin_currency",{initialValue:o&&o.margin_currency})(i.createElement(k.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择预付款货币",onChange:function(e,t){a({margin_currency:e},!1)},onFocus:function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},u.map((function(e){return i.createElement(M,{key:e.id.toString()},e.name)}))))),i.createElement(I,Object.assign({label:"最大交易量"},A(3,12)),t("max_trading_volume",{initialValue:o&&o.max_trading_volume})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入最大交易量",onChange:function(e){a({max_trading_volume:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"最小交易量"},A(3,12)),t("min_trading_volume",{initialValue:o&&o.min_trading_volume})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入最小交易量",onChange:function(e){a({min_trading_volume:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"挂单模式\n          ",className:"push-type-select"},A(3,6),{required:!0}),t("orders_mode",{initialValue:o&&o.orders_mode})(i.createElement(k.a,{getPopupContainer:function(){return document.getElementsByClassName("push-type-select")[0]},placeholder:"请选择挂单模式",onChange:function(e,t){a({orders_mode:e},!1)},onFocus:function(){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},u.map((function(e){return i.createElement(M,{key:e.id.toString()},e.name)}))))),i.createElement(I,Object.assign({label:"点差"},A(3,12)),t("spread",{initialValue:o&&o.spread})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入点差",onChange:function(e){a({spread:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"止盈止损位"},A(3,12)),t("limit_stop_level",{initialValue:o&&o.limit_stop_level})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入点差",onChange:function(e){a({limit_stop_level:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"交易量步长"},A(3,12)),t("volume_step",{initialValue:o&&o.volume_step})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入交易量步长",onChange:function(e){a({volume_step:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"价格变动最小单位\n"},A(3,12)),t("volume_step",{initialValue:o&&o.min_unit_of_price_change})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入价格变动最小单位\n          ",onChange:function(e){a({min_unit_of_price_change:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,null,i.createElement("h2",{className:"editor-form-title form-title"},"保证金计算")),i.createElement(I,Object.assign({label:"合约大小"},A(3,12)),t("contract_size",{initialValue:o&&o.contract_size})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入合约大小",onChange:function(e){a({contract_size:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,null,i.createElement("h2",{className:"editor-form-title form-title"},"利润设定")),i.createElement(I,Object.assign({label:"买入库存费"},A(3,12)),t("purchase_fee",{initialValue:o&&o.purchase_fee})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入买入库存费\n          ",onChange:function(e){a({purchase_fee:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"卖出库存费\n"},A(3,12)),t("selling_fee",{initialValue:o&&o.selling_fee})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入卖出库存费",onChange:function(e){a({selling_fee:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"交易手续费（多）"},A(3,12)),t("hands_fee_for_bought",{initialValue:o&&o.hands_fee_for_bought})(i.createElement(x.a,{min:0,type:"number",placeholder:"交易手续费（多）",onChange:function(e){a({hands_fee_for_bought:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,Object.assign({label:"交易手续费（空）"},A(3,12)),t("hands_fee_for_sale",{initialValue:o&&o.hands_fee_for_sale})(i.createElement(x.a,{min:0,type:"number",placeholder:"请输入交易手续费（空）",onChange:function(e){a({hands_fee_for_sale:e},!1)},style:{display:"inline-block",width:200}}))),i.createElement(I,{className:"editor-form-btns"},i.createElement(l.a,{type:"primary",onClick:e.handleSubmit},"edit"==e.state.mode?"确认修改":"保存"),i.createElement(l.a,{onClick:e.goBack},"取消")))},e.goBack=function(){setTimeout((function(){e.props.history.goBack(),e.props.exchange.setCurrentProduct({}),d.a.rmLStorage("currentExchangeProduct")}),300)},e.handleSubmit=function(t){return Object(r.a)($(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.form.validateFields((function(e,n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,a,o,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=18;break}if(n=this.props.exchange.currentProduct,r=this.state.mode,a={name:n.name,type:n.type,product_id:n.product_id,decimals_place:n.decimals_place,contract_size:n.contract_size,spread:n.spread,limit_stop_level:n.limit_stop_level,margin_currency:n.margin_currency,profit_currency:n.profit_currency,max_trading_volume:n.max_trading_volume,min_trading_volume:n.min_trading_volume,volume_step:n.volume_step,min_unit_of_price_change:n.min_unit_of_price_change,transaction_mode:n.transaction_mode,purchase_fee:n.purchase_fee,selling_fee:n.selling_fee,description:n.description,background:n.background,orders_mode:n.orders_mode,hands_fee_for_bought:n.hands_fee_for_bought,hands_fee_for_sale:n.hands_fee_for_sale},!(o=this.getValidation(a))){t.next=7;break}return t.abrupt("return",this.$msg.warn(o));case 7:if("add"!=r){t.next=14;break}return t.next=10,this.$api.exchange.createProduct(a);case 10:201==t.sent.status&&(this.$msg.success("交易品种创建成功"),setTimeout((function(){i.goBack(),i.$store.exchange.getProductList({offset:0,limit:10})}),1500)),t.next=18;break;case 14:return t.next=16,this.$api.exchange.updateProduct(n.id,a);case 16:200==t.sent.status&&(this.$msg.success("交易品种更新成功"),setTimeout((function(){i.goBack(),i.$store.exchange.getProductList({offset:0,limit:10})}),1500));case 18:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.getValidation=function(e){var t=new S.a;return t.add(e.name,[{strategy:"isNonEmpty",errMsg:"请输入交易品种名字"}]),t.add(e.type,[{strategy:"isNonEmpty",errMsg:"请选择交易品种类型"}]),t.add(e.product_id,[{strategy:"isNonEmpty",errMsg:"请选择行情产品"}]),t.add(e.margin_currency,[{strategy:"isNonEmpty",errMsg:"请选择预售货币款"}]),t.add(e.profit_currency,[{strategy:"isNonEmpty",errMsg:"请选择获利货币"}]),t.add(e.transaction_mode,[{strategy:"isNonEmpty",errMsg:"请选择成交模式"}]),t.start()},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.init(),this.getGenreOptions(),this.getMarketOptions();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"componentWillUnmount",value:function(){this.props.exchange.setCurrentProduct({},!0,!1)}},{key:"render",value:function(){return i.createElement("div",{className:"editor food-card-editor"},i.createElement("section",{className:"editor-content panel-block"},this.renderEditor()))}}])&&B(n.prototype,a),o&&B(n,o),t}(b.a),q=D=Object(r.b)([v.a.create(),Object(N.b)("common","exchange"),N.c],D),K=n(82);n(1080);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?U(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(){var e;return H(this,t),(e=G(this,J(t).apply(this,arguments))).state={filter:{},tableLoading:!1,currentPage:1,selectedRowKeys:[]},e.getDataList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({tableLoading:!0,filter:Object.assign(Object.assign({},e.state.filter),t)},(function(){return Object(r.a)(U(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.exchange.getProductList(Object.assign(Object.assign({},this.state.filter),t));case 2:this.setState({tableLoading:!1});case 3:case"end":return e.stop()}}),e,this)})))}))},e.resetPagination=function(t,n){return Object(r.a)(U(e),void 0,void 0,regeneratorRuntime.mark((function e(){var a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({filter:Object.assign(Object.assign({},this.state.filter),{pageSize:t,pageNum:n})},(function(){return Object(r.a)(a,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.getDataList(t);case 2:case"end":return e.stop()}}),e,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.onSearch=function(){return Object(r.a)(U(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.setState({filter:Object.assign(Object.assign({},t),{pageNum:1}),currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.onReset=function(){return Object(r.a)(U(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={pageNum:1,pageSize:this.state.filter.pageSize},this.setState({filter:t,currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.goToEditor=function(t){var n="/dashboard/exchange/product/editor?id=".concat(d.a.isEmpty(t)?0:t.id);e.props.history.push(n),e.props.exchange.setCurrentProduct(t,!0,!1)},e.renderMenu=function(e){return null},e.onBatch=function(t){return Object(r.a)(U(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},e}var n,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),n=t,(c=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.common.paginationConfig,n=t.defaultPageSize,r=t.defaultCurrent,this.resetPagination(n,r);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"componentDidUpdate",value:function(){"/dashboard/exchange/product"===this.props.location.pathname&&this.props.history.replace("/dashboard/exchange/product/list")}},{key:"render",value:function(){var e=this,t=this.props.match;return i.createElement("div",null,i.createElement(a.a,Object.assign({},this.props,{links:[],title:"交易品种设置"})),i.createElement(K.b,{path:"".concat(t.url,"/list"),render:function(t){return i.createElement(o.a,Object.assign({},t,{config:h(e)}))}}),i.createElement(K.b,{path:"".concat(t.url,"/editor"),render:function(e){return i.createElement(q,Object.assign({},e))}}))}}])&&Z(n.prototype,c),l&&Z(n,l),t}(b.a);Q=Object(r.b)([Object(g.a)("/dashboard/exchange/product",{exact:!1}),Object(N.b)("common","exchange"),N.c],Q);t.default=Q}}]);