(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1014:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(998),o=n.n(a),c=(n(997),n(33));n(1016);function i(e){var t=c.a.getPageBreadcrumb(e.location.pathname),n=e.title,a=e.links,i=e.tabs,l=e.currentTab;return r.createElement("div",{className:"common-header"},r.createElement("section",{className:"common-header-breadcrumb"},t&&r.createElement(o.a,null,t.map((function(e,t){return r.createElement(o.a.Item,{key:t},e.title)})))),r.createElement("section",{className:"common-header-title"},r.createElement("h2",null,n),r.createElement("div",{className:"common-header-links"},a&&a.map((function(t,n){return r.createElement("a",{key:n,onClick:function(){e.history.push(t.path)}},t.title)})))),r.createElement("section",{className:"common-header-tabs"},i&&i.map((function(t,n){return r.createElement("a",{onClick:function(){e.onTabClick(t.id)},className:"".concat(l===t.id?"tab-active":""," ")},r.createElement("span",null,t.title),t.tipComponent&&t.tipComponent())}))))}},1015:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(92);function o(e,t){return function(n){return function(){return r.createElement(a.b,Object.assign({path:e},Object.assign({exact:!0},t),{render:function(e){return r.createElement(n,Object.assign({},e))}}))}}}},1016:function(e,t,n){},1017:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var r=n(0),a=(n(1018),n(95)),o=n.n(a),c=(n(129),n(279)),i=n.n(c),l=(n(409),n(151)),s=n.n(l),u=(n(278),n(1e3)),m=n.n(u),p=(n(999),n(1004)),f=n.n(p),d=(n(1003),n(198)),h=n.n(d),g=(n(411),n(16)),b=n.n(g),y=(n(197),n(416)),v=n.n(y),E=(n(413),n(417)),w=n.n(E),O=(n(412),n(415)),C=n.n(O),S=(n(414),n(33)),j=n(21),k=n.n(j);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=i.a.Option,M=s.a.Group,G=f.a.RangePicker,D=C.a.CheckableTag,L={SelectInput:function(e){var t=e.selectValue,n=e.inputValue,a=e.placeholder,o=e.options,c=e.onSelectChange,l=e.onInputChange,u=e.onPressEnter,m=e.selectStyle;return r.createElement(M,{compact:!0},r.createElement(i.a,{style:m?Object.assign({width:110},m):{width:110},value:t,onChange:c},o&&o.map((function(e,t){return r.createElement(B,{key:t,value:e.value},e.title)}))),r.createElement(s.a,{style:{width:238},value:n,onChange:l,placeholder:a,onPressEnter:u}))},Select:function(e){var t=e.option,n=e.label,a=e.mode,o=e.onSearch,c=e.onSelect,l=e.onBlur,s=e.onFocus,u=e.value,m=e.placeholder,p=e.showSearch,f=e.width,d=e.filterOption,h=e.onChange,g=e.allowClear,b=e.onPopupScroll;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(i.a,{allowClear:g,value:u,mode:a||!1,style:{minWidth:f||258,width:f},showSearch:p,placeholder:m,filterOption:d,onSearch:o,onSelect:c,onChange:h,onBlur:l,onPopupScroll:b,onFocus:s},t.data.map((function(e){return r.createElement(B,{key:e[t.key]||e.id,value:e[t.value]||e.id,$data:e},e[t.title])})))))},DatePicker:function(e){var t=e.label,n=e.placeholder,a=e.onChange,o=e.value,c=e.style,i=e.format,l=e.showTime;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(f.a,{format:i||!1,style:c,showTime:l,placeholder:n,value:o,onChange:a})))},RangePicker:function(e){var t=e.label,n=e.alias,a=e.placeholder,c=e.onChange,i=e.value,l=e.showTime,s=e.format;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(G,{style:{width:400},showTime:l,format:s,placeholder:a,value:i,onChange:c}),r.createElement("span",{className:"common-list-control-date-alias"},!S.a.isEmpty(n)&&n.map((function(e,t){return r.createElement(o.a,{key:t,onClick:function(){return c([k()(Date.now()-864e5*e).startOf("day"),k()()])}},e," 天内")})))))},Input:function(e){var t=e.label,n=e.value,a=e.placeholder,o=e.onChange,c=e.width,i=e.onPressEnter;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(s.a,{style:{minWidth:c||258},value:n,onChange:o,placeholder:a,onPressEnter:i})))},Checkbox:function(e){var t=e.label,n=e.value,a=e.onChange;return r.createElement(h.a,{checked:n,onChange:a},t)},CheckableTag:function(e){var t=e.label,n=e.option,a=e.value,o=e.onChange;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},!S.a.isEmpty(n)&&n.map((function(e){return r.createElement(D,{key:e.value,checked:e.value===a,onChange:function(){o(e)}},e.title)}))))},Label:function(e,t){var n=e.label;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},t))},Custom:function(e){return r.createElement("div",null,(void 0).props.children)}},F=function(e){function t(){var e;return N(this,t),(e=P(this,R(t).apply(this,arguments))).state={collapse:!0},e.toggleCollapse=function(t){e.setState({collapse:!e.state.collapse})},e.renderSearcher=function(){var t=e.props.config,n=t.searcher,a=t.table,c=e.state.collapse,i=a&&a.tableHeader;return n&&r.createElement("section",{className:"common-list-search"},e.renderWidgets(n.widgets),i&&r.createElement(i,null),r.createElement("div",{className:"common-list-search-right"},!n.hideSearcher&&r.createElement(r.Fragment,null,r.createElement(o.a,{type:"primary",onClick:n.onSearch},"查询"),r.createElement(o.a,{onClick:n.onReset},"重置")),n.collapseControl&&n.collapseControl.showMoreBtn&&r.createElement("span",{className:"common-list-serach-more"},r.createElement("a",{onClick:e.toggleCollapse},c?"更多":"收起"," ",r.createElement(b.a,{type:c?"down":"up"})))))},e.renderWidgets=function(t){var n=e.state.collapse,a=e.props.config.searcher;return t&&r.createElement("div",{className:"common-list-search-left"},t.map((function(t,o){return Array.isArray(t)?r.createElement("div",{key:o,className:"common-list-search-row",style:{display:a.collapseControl&&a.collapseControl.showMoreBtn&&n&&o>0?"none":"flex"}},t.map((function(t){return r.createElement("div",{key:t.label,className:"common-list-search-col",style:Object.assign({},t.style)},L[t.type]&&L[t.type](t,t.children?e.renderWidgets(t.children):null))}))):r.createElement("div",{key:t.label,className:"common-list-search-row ".concat(t.className)},L[t.type]&&L[t.type](t,t.children?e.renderWidgets(t.children):null))})))},e.renderAddBtn=function(){var t=e.props.config,n=t.addBtn,a=t.searcher,o=n&&n.title;return n&&r.createElement("section",{className:"common-list-addbtn",style:n.style},"function"==typeof n.title?r.createElement(o,null):n.title,r.createElement("div",{className:"common-list-search-batch"},a.batchControl.showBatchControl&&r.createElement(i.a,{placeholder:a.batchControl.placeholder,style:{minWidth:120},defaultValue:void 0,onChange:a.batchControl.onBatch},a.batchControl.options.map((function(e){return r.createElement(B,{key:e.value,value:e.value},e.title)})))))},e.renderTableHeader=function(){var t=e.props.config.tableHeader,n=t;return r.createElement("section",{className:"common-list-table-header"},t&&r.createElement(n,null))},e.renderTable=function(){var t=e.props.config.table,n=t.rowKey,a=t.rowSelection,o=t.columns,c=t.dataSource,i=t.pagination,l=t.onChange,s=t.loading,u=t.locale;return r.createElement("section",{className:"common-list-table"},r.createElement(m.a,{locale:u,rowKey:n||"id",rowSelection:a,columns:o,dataSource:c,loading:s,pagination:i,onChange:l}))},e.renderCards=function(){var t=e.props.config.cards,n=t.dataSource,a=t.loading,o=t.pagination,c=t.renderCard,i=t.addBtn;return r.createElement("div",{className:"common-list-cards-wrapper"},r.createElement("ul",{className:"common-list-cards"},a?r.createElement("div",{className:"common-list-cards-loading"},r.createElement(w.a,null)):r.createElement(r.Fragment,null,r.createElement("li",{className:"common-list-card add-btn"},r.createElement("div",{className:"common-list-card-item",onClick:i.onAddBtnClick},i.icon?r.createElement("img",{src:i.icon,alt:""}):r.createElement(b.a,{type:"plus-circle"}),r.createElement("p",null,i.title))),n.map((function(e){return r.createElement("li",{className:"common-list-card"},r.createElement("div",{className:"common-list-card-item"},c(e)))})))),r.createElement("section",{className:"common-list-cards-pagination"},r.createElement(v.a,Object.assign({},o))))},e}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props.config;return r.createElement("div",{className:"common-list"},this.renderSearcher(),this.renderAddBtn(),this.renderTableHeader(),e.table&&this.renderTable(),e.cards&&this.renderCards())}}])&&_(n.prototype,a),c&&_(n,c),t}(r.Component)},1018:function(e,t,n){},1020:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0);n(1021);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u={hot:"hot",normal:"normal",wait:"wait",block:"block"},m=function(e){function t(){return o(this,t),i(this,l(t).apply(this,arguments))}var n,a,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.text,n=e.type;return r.createElement("span",{className:"status-text ".concat(u[n])},r.createElement("span",{className:"status-text-dot ".concat(u[n])}),r.createElement("span",null,t))}}])&&c(n.prototype,a),m&&c(n,m),t}(r.Component)},1021:function(e,t,n){},1028:function(e,t,n){},1029:function(e,t,n){},1037:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(1014),o=n(1017),c=n(0),i=n(95),l=n.n(i),s=(n(129),n(16)),u=n.n(s),m=(n(197),n(1002)),p=n.n(m),f=(n(1001),n(33)),d=n(1020);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t={selectedRowKeys:e.state.selectedRowKeys,onChange:function(t,n){e.setState({selectedRowKeys:t})}},n=[{title:"品种类型 ID",dataIndex:"id"},{title:"品种类型名称",dataIndex:"name",render:function(e,t){return e||"--"}},{title:"可用状态",render:function(e,t){return c.createElement(d.a,{type:{1:"normal",0:"block"}[t.in_use],text:{1:"可用",0:"不可用"}[t.in_use]})}},{title:"操作",render:function(t,n){return c.createElement("div",{className:"common-list-table-operation"},c.createElement("span",{onClick:function(){e.props.exchange.setCurrentGenre(n,!0,!1),e.toggleGenreModal()}},"编辑"),c.createElement("span",{className:"common-list-table-operation-spliter"}),c.createElement(p.a,{title:"请问是否确定删除品种类型",onConfirm:function(){return Object(r.a)(void 0,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.exchange.deleteGenre(n.id);case 2:204===(r=t.sent).status?e.getDataList(e.state.filter):e.$msg.error(r.data.message);case 4:case"end":return t.stop()}}),t)})))},onCancel:function(){}},c.createElement("span",null,"删除")))}}],a=Object.assign(Object.assign({},e.props.common.paginationConfig),{total:e.props.exchange.genreListMeta.total,current:e.state.currentPage,onChange:function(e,t){},onShowSizeChange:function(t,n){e.resetPagination(n,t)}});return{addBtn:{title:function(){return c.createElement(l.a,{type:"primary",onClick:function(){e.props.exchange.setCurrentGenre({}),e.toggleGenreModal()}},c.createElement(u.a,{type:"plus"}),"添加")}},searcher:{hideSearcher:!0,batchControl:{placeholder:"请选择",showBatchControl:!f.a.isEmpty(e.state.selectedRowKeys),options:[{title:"删除",value:"delete"}],onBatch:function(t){e.onBatch(t)}},widgets:[],onSearch:function(){},onReset:function(){}},table:{rowKey:"id",rowSelection:t,columns:n,dataSource:e.props.exchange.genreList,pagination:a,onChange:function(t,n,r){var a={pageNum:t.current,pageSize:t.pageSize};if(!f.a.isEmpty(n))for(var o=0,c=Object.entries(n);o<c.length;o++){var i=h(c[o],2),l=i[0],s=i[1];a[l]=s?s[0]:void 0}f.a.isEmpty(r)?(delete a.orderBy,delete a.sort):(a.orderBy="".concat(r.field),a.sort="".concat("descend"===r.order?"desc":"asc")),e.setState({filter:Object.assign(Object.assign({},e.state.filter),a),currentPage:t.current},(function(){e.getDataList(e.state.filter)}))}}}},b=n(1015),y=n(81),v=n(90),E=n.n(v),w=(n(410),n(151)),O=n.n(w),C=(n(278),n(280)),S=n.n(C),j=(n(418),n(1028),n(82));function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=E.a.Item,B=function(e,t,n){return{labelCol:{span:e,offset:n},wrapperCol:{span:t}}},M={display:"block",marginBottom:12},G=function(e){function t(){var e;return x(this,t),(e=_(this,P(t).apply(this,arguments))).state={},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.onRef(this);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"render",value:function(){var e=this.props.exchange,t=e.currentGenre,n=e.setCurrentGenre,r=this.props.form.getFieldDecorator;return c.createElement("div",{className:"editor talent-editor"},c.createElement(E.a,{className:"editor-form"},c.createElement(T,Object.assign({label:"类型名称"},B(6,14)),r("name",{initialValue:t.name,rules:[]})(c.createElement(O.a,{placeholder:"请输入品种类型名称",onChange:function(e){n({name:e.target.value},!1)}}))),c.createElement(T,Object.assign({label:"是否上架",required:!0},B(6,14),{className:"editor-upshelf"}),r("in_use",{initialValue:t&&t.in_use})(c.createElement(S.a.Group,{onChange:function(e){n({in_use:e.target.value},!1)}},c.createElement(S.a,{style:M,value:1},"是"),c.createElement(S.a,{style:M,value:0},"否"))))))}}])&&N(n.prototype,a),o&&N(n,o),t}(y.a),D=G=Object(r.b)([E.a.create(),Object(j.b)("common","exchange")],G),L=n(92),F=(n(1029),n(996)),$=n.n(F);n(995);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?W(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){var e;return I(this,t),(e=K(this,z(t).apply(this,arguments))).$genreEditor=null,e.state={filter:{},tableLoading:!1,currentPage:1,selectedRowKeys:[],genreModalVisible:!1},e.getDataList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({tableLoading:!0,filter:Object.assign(Object.assign({},e.state.filter),t)},(function(){return Object(r.a)(W(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.exchange.getGenreList(Object.assign(Object.assign({},this.state.filter),t));case 2:this.setState({tableLoading:!1});case 3:case"end":return e.stop()}}),e,this)})))}))},e.toggleGenreModal=function(){e.setState({genreModalVisible:!e.state.genreModalVisible})},e.onModalConfirm=function(){return Object(r.a)(W(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.props.exchange.currentGenre).name){e.next=3;break}return e.abrupt("return",this.$msg.warn("请输入品种类型名称"));case 3:if(null!=t.in_use){e.next=5;break}return e.abrupt("return",this.$msg.warn("请选择品种类型是否可用"));case 5:if(r={name:t.name,in_use:t.in_use},!t.id){e.next=12;break}return e.next=9,this.$api.exchange.updateGenre(t.id,r);case 9:n=e.sent,e.next=15;break;case 12:return e.next=14,this.$api.exchange.createGenre(r);case 14:n=e.sent;case 15:a=t.id?200:201,n.status==a?(this.$msg.success(t.uid?"品种类型编辑成功":"品种类型添加成功"),this.toggleGenreModal(),this.getDataList(this.state.filter)):this.$msg.error(n.data.msg);case 17:case"end":return e.stop()}}),e,this)})))},e.onModalCancel=function(){e.setState({genreModalVisible:!1}),e.props.exchange.setCurrentGenre({})},e.resetPagination=function(t,n){return Object(r.a)(W(e),void 0,void 0,regeneratorRuntime.mark((function e(){var a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({filter:Object.assign(Object.assign({},this.state.filter),{pageSize:t,pageNum:n})},(function(){return Object(r.a)(a,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.getDataList(t);case 2:case"end":return e.stop()}}),e,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.onSearch=function(){return Object(r.a)(W(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.setState({filter:Object.assign(Object.assign({},t),{pageNum:1}),currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.onReset=function(){return Object(r.a)(W(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={pageNum:1,pageSize:this.state.filter.pageSize},this.setState({filter:t,currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.goToEditor=function(t){var n="/dashboard/exchange/genre/editor?id=".concat(f.a.isEmpty(t)?0:t.id);e.props.history.push(n),e.props.exchange.setCurrentGenre(t,!0,!1)},e.renderMenu=function(e){return null},e.onBatch=function(t){return Object(r.a)(W(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},e}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.common.paginationConfig,n=t.defaultPageSize,r=t.defaultCurrent,this.resetPagination(n,r);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"componentDidUpdate",value:function(){"/dashboard/exchange/genre"===this.props.location.pathname&&this.props.history.replace("/dashboard/exchange/genre/list")}},{key:"render",value:function(){var e=this,t=this.props.match,n=this.state.genreModalVisible,r=this.props.exchange.currentGenre;return c.createElement("div",null,c.createElement(a.a,Object.assign({},this.props,{links:[],title:"交易类型设置"})),c.createElement(L.b,{path:"".concat(t.url,"/list"),render:function(t){return c.createElement(o.a,Object.assign({},t,{config:g(e)}))}}),n&&c.createElement($.a,{width:720,visible:n,title:f.a.isEmpty(r.id)?"添加品种类型":"编辑品种类型",onOk:this.onModalConfirm,onCancel:this.onModalCancel},c.createElement(D,{onRef:function(t){return e.$genreEditor=t}})))}}])&&A(n.prototype,i),l&&A(n,l),t}(y.a);J=Object(r.b)([Object(b.a)("/dashboard/exchange/genre",{exact:!1}),Object(j.b)("common","exchange"),j.c],J);t.default=J}}]);