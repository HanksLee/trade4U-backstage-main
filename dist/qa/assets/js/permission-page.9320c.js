(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1064:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),a=n(1046),o=n.n(a),i=(n(1045),n(34));n(1065);function c(e){var t=i.a.getPageBreadcrumb(e.location.pathname),n=e.title,a=e.links,c=e.tabs,l=e.currentTab;return r.createElement("div",{className:"common-header"},r.createElement("section",{className:"common-header-breadcrumb"},t&&r.createElement(o.a,null,t.map((function(e,t){return r.createElement(o.a.Item,{key:t},e.title)})))),r.createElement("section",{className:"common-header-title"},r.createElement("h2",null,n),r.createElement("div",{className:"common-header-links"},a&&a.map((function(t,n){return r.createElement("a",{key:n,onClick:function(){e.history.push(t.path)}},t.title)})))),r.createElement("section",{className:"common-header-tabs"},c&&c.map((function(t,n){return r.createElement("a",{onClick:function(){e.onTabClick(t.id)},className:"".concat(l===t.id?"tab-active":""," ")},r.createElement("span",null,t.title),t.tipComponent&&t.tipComponent())}))))}},1065:function(e,t,n){},1066:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n(94);function o(e,t){return function(n){return function(){return r.createElement(a.b,Object.assign({path:e},Object.assign({exact:!0},t),{render:function(e){return r.createElement(n,Object.assign({},e))}}))}}}},1067:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n(1),a=(n(1068),n(97)),o=n.n(a),i=(n(133),n(289)),c=n.n(i),l=(n(433),n(134)),s=n.n(l),u=(n(204),n(1044)),m=n.n(u),p=(n(1043),n(1048)),d=n.n(p),f=(n(1047),n(205)),h=n.n(f),b=(n(435),n(17)),g=n.n(b),y=(n(203),n(438)),v=n.n(y),E=(n(437),n(439)),w=n.n(E),O=(n(436),n(441)),C=n.n(O),S=(n(440),n(34)),j=n(21),k=n.n(j);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=c.a.Option,I=s.a.Group,T=d.a.RangePicker,B=C.a.CheckableTag,D={SelectInput:function(e){var t=e.selectValue,n=e.inputValue,a=e.placeholder,o=e.options,i=e.onSelectChange,l=e.onInputChange,u=e.onPressEnter,m=e.selectStyle;return r.createElement(I,{compact:!0},r.createElement(c.a,{style:m?Object.assign({width:110},m):{width:110},value:t,onChange:i},o&&o.map((function(e,t){return r.createElement(F,{key:t,value:e.value},e.title)}))),r.createElement(s.a,{style:{width:238},value:n,onChange:l,placeholder:a,onPressEnter:u}))},Select:function(e){var t=e.option,n=e.label,a=e.mode,o=e.onSearch,i=e.onSelect,l=e.onBlur,s=e.onFocus,u=e.value,m=e.placeholder,p=e.showSearch,d=e.width,f=e.filterOption,h=e.onChange,b=e.allowClear,g=e.onPopupScroll;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(c.a,{allowClear:b,value:u,mode:a||!1,style:{minWidth:d||258,width:d},showSearch:p,placeholder:m,filterOption:f,onSearch:o,onSelect:i,onChange:h,onBlur:l,onPopupScroll:g,onFocus:s},t.data.map((function(e){return r.createElement(F,{key:e[t.key]||e.id,value:e[t.value]||e.id,$data:e},e[t.title])})))))},DatePicker:function(e){var t=e.label,n=e.placeholder,a=e.onChange,o=e.value,i=e.style,c=e.format,l=e.showTime;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(d.a,{format:c||!1,style:i,showTime:l,placeholder:n,value:o,onChange:a})))},RangePicker:function(e){var t=e.label,n=e.alias,a=e.placeholder,i=e.onChange,c=e.value,l=e.showTime,s=e.format;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(T,{style:{width:400},showTime:l,format:s,placeholder:a,value:c,onChange:i}),r.createElement("span",{className:"common-list-control-date-alias"},!S.a.isEmpty(n)&&n.map((function(e,t){return r.createElement(o.a,{key:t,onClick:function(){return i([k()(Date.now()-864e5*e).startOf("day"),k()()])}},e," 天内")})))))},Input:function(e){var t=e.label,n=e.value,a=e.placeholder,o=e.onChange,i=e.width,c=e.onPressEnter;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(s.a,{style:{minWidth:i||258},value:n,onChange:o,placeholder:a,onPressEnter:c})))},Checkbox:function(e){var t=e.label,n=e.value,a=e.onChange;return r.createElement(h.a,{checked:n,onChange:a},t)},CheckableTag:function(e){var t=e.label,n=e.option,a=e.value,o=e.onChange;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},!S.a.isEmpty(n)&&n.map((function(e){return r.createElement(B,{key:e.value,checked:e.value===a,onChange:function(){o(e)}},e.title)}))))},Label:function(e,t){var n=e.label;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},t))},Custom:function(e){return r.createElement("div",null,(void 0).props.children)}},M=function(e){function t(){var e;return N(this,t),(e=R(this,x(t).apply(this,arguments))).state={collapse:!0},e.toggleCollapse=function(t){e.setState({collapse:!e.state.collapse})},e.renderSearcher=function(){var t=e.props.config,n=t.searcher,a=t.table,i=e.state.collapse,c=a&&a.tableHeader;return n&&r.createElement("section",{className:"common-list-search"},e.renderWidgets(n.widgets),c&&r.createElement(c,null),r.createElement("div",{className:"common-list-search-right"},!n.hideSearcher&&r.createElement(r.Fragment,null,r.createElement(o.a,{type:"primary",onClick:n.onSearch},"查询"),r.createElement(o.a,{onClick:n.onReset},"重置")),n.collapseControl&&n.collapseControl.showMoreBtn&&r.createElement("span",{className:"common-list-serach-more"},r.createElement("a",{onClick:e.toggleCollapse},i?"更多":"收起"," ",r.createElement(g.a,{type:i?"down":"up"})))))},e.renderWidgets=function(t){var n=e.state.collapse,a=e.props.config.searcher;return t&&r.createElement("div",{className:"common-list-search-left"},t.map((function(t,o){return Array.isArray(t)?r.createElement("div",{key:o,className:"common-list-search-row",style:{display:a.collapseControl&&a.collapseControl.showMoreBtn&&n&&o>0?"none":"flex"}},t.map((function(t){return r.createElement("div",{key:t.label,className:"common-list-search-col",style:Object.assign({},t.style)},D[t.type]&&D[t.type](t,t.children?e.renderWidgets(t.children):null))}))):r.createElement("div",{key:t.label,className:"common-list-search-row ".concat(t.className)},D[t.type]&&D[t.type](t,t.children?e.renderWidgets(t.children):null))})))},e.renderAddBtn=function(){var t=e.props.config,n=t.addBtn,a=t.searcher,o=n&&n.title;return n&&r.createElement("section",{className:"common-list-addbtn",style:n.style},"function"==typeof n.title?r.createElement(o,null):n.title,r.createElement("div",{className:"common-list-search-batch"},a.batchControl.showBatchControl&&r.createElement(c.a,{placeholder:a.batchControl.placeholder,style:{minWidth:120},defaultValue:void 0,onChange:a.batchControl.onBatch},a.batchControl.options.map((function(e){return r.createElement(F,{key:e.value,value:e.value},e.title)})))))},e.renderTableHeader=function(){var t=e.props.config.tableHeader,n=t;return r.createElement("section",{className:"common-list-table-header"},t&&r.createElement(n,null))},e.renderTable=function(){var t=e.props.config.table,n=t.rowKey,a=t.rowSelection,o=t.columns,i=t.dataSource,c=t.pagination,l=t.onChange,s=t.loading,u=t.locale;return r.createElement("section",{className:"common-list-table"},r.createElement(m.a,{locale:u,rowKey:n||"id",rowSelection:a,columns:o,dataSource:i,loading:s,pagination:c,onChange:l}))},e.renderCards=function(){var t=e.props.config.cards,n=t.dataSource,a=t.loading,o=t.pagination,i=t.renderCard,c=t.addBtn;return r.createElement("div",{className:"common-list-cards-wrapper"},r.createElement("ul",{className:"common-list-cards"},a?r.createElement("div",{className:"common-list-cards-loading"},r.createElement(w.a,null)):r.createElement(r.Fragment,null,r.createElement("li",{className:"common-list-card add-btn"},r.createElement("div",{className:"common-list-card-item",onClick:c.onAddBtnClick},c.icon?r.createElement("img",{src:c.icon,alt:""}):r.createElement(g.a,{type:"plus-circle"}),r.createElement("p",null,c.title))),n.map((function(e){return r.createElement("li",{className:"common-list-card"},r.createElement("div",{className:"common-list-card-item"},i(e)))})))),r.createElement("section",{className:"common-list-cards-pagination"},r.createElement(v.a,Object.assign({},o))))},e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props.config;return r.createElement("div",{className:"common-list"},this.renderSearcher(),this.renderAddBtn(),this.renderTableHeader(),e.table&&this.renderTable(),e.cards&&this.renderCards())}}])&&_(n.prototype,a),i&&_(n,i),t}(r.Component)},1068:function(e,t,n){},1088:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(1064),o=n(1067),i=n(1),c=n(97),l=n.n(c),s=(n(133),n(17)),u=n.n(s),m=(n(203),n(1050)),p=n.n(m),d=(n(1049),n(34));function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){var t=[{title:"权限名",dataIndex:"name"},{title:"code",dataIndex:"code"},{title:"父菜单名称",dataIndex:"parent_menu_name",render:function(e){return e||"--"}},{title:"子菜单名称",dataIndex:"child_menu_name",render:function(e){return e||"--"}},{title:"是否默认",dataIndex:"is_default",render:function(e){return e?"是":"否"}},{title:"操作",render:function(t,n){return i.createElement("div",{className:"common-list-table-operation"},i.createElement("span",{onClick:function(){return e.showEditPermissionModal(n)}},"编辑"),i.createElement("span",{className:"common-list-table-operation-spliter"}),i.createElement(p.a,{title:"请问是否确定删除权限",onConfirm:function(){return e.deletePermission(n.id)}},i.createElement("span",null,"删除")))}}],n=Object.assign(Object.assign({},e.props.common.paginationConfig),{total:e.state.total,current:e.props.permission.filter.page,pageSize:e.props.permission.filter.page_size,onChange:function(e,t){},onShowSizeChange:function(t,n){e.getDataList({page_size:n,page:t})}});return{addBtn:{title:function(){return i.createElement(l.a,{type:"primary",onClick:function(){return e.showEditPermissionModal()}},i.createElement(u.a,{type:"plus"})," 添加")}},searcher:{batchControl:{placeholder:"请选择",showBatchControl:!d.a.isEmpty(e.state.selectedRowKeys),options:[{title:"删除",value:"delete"}],onBatch:function(t){e.onBatch(t)}},widgets:[[{type:"Input",label:"权限名称",placeholder:"请输入权限名称",value:e.state.tempFilter.name||void 0,onChange:function(t){e.onInputChanged("name",t.target.value)},onPressEnter:function(t){e.onSearch()}},{type:"Input",label:"code",placeholder:"请输入权限code",value:e.state.tempFilter.code||void 0,onChange:function(t){e.onInputChanged("code",t.target.value)},onPressEnter:function(t){e.onSearch()}}]],onSearch:function(){e.onSearch()},onReset:function(){e.onReset()}},table:{rowKey:"id",columns:t,dataSource:e.state.permissionList,pagination:n,onChange:function(t,n){var r={};if(!d.a.isEmpty(n))for(var a=0,o=Object.entries(n);a<o.length;a++){var i=f(o[a],2),c=i[0],l=i[1];r[c]=l?l[0]:void 0}e.getDataList({page_size:t.pageSize,page:t.current})}}}},b=n(84),g=n(86),y=n.n(g),v=(n(434),n(134)),E=n.n(v),w=(n(204),n(1052)),O=n.n(w),C=(n(1051),n(1057)),S=n.n(C),j=(n(1056),n(205)),k=n.n(j),P=(n(435),n(85));function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?F(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=y.a.Item,B=function(e,t,n){return{labelCol:{span:e,offset:n},wrapperCol:{span:t}}},D=function(e){function t(){var e;return _(this,t),(e=x(this,L(t).apply(this,arguments))).state={menuOptions:[],confirmLoading:!1},e.handleSubmit=function(t){return Object(r.a)(F(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.form.validateFields((function(e,n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var r,a,o,i,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e||(r=this.props,a=r.permission,o=r.onOk,i={name:n.name,code:n.code,parent_menu:n.menuIds[0],child_menu:n.menuIds[1],is_default:n.is_default?1:0},this.setState({confirmLoading:!0}),a?this.$api.permission.updatePermission(a.id,i).then((function(){c.$msg.success("权限更新成功"),o()}),(function(){c.setState({confirmLoading:!1})})):this.$api.permission.createPermission(i).then((function(){c.$msg.success("权限创建成功"),o()}),(function(){c.setState({confirmLoading:!1})})));case 1:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.menus.getMenuList();case 2:t=e.sent,this.setState({menuOptions:t.data});case 4:case"end":return e.stop()}}),e,this)})))}},{key:"render",value:function(){var e=this.props,t=e.form,n=e.permission,r=e.onCancel,a=this.state,o=a.menuOptions,c=a.confirmLoading,l=t.getFieldDecorator;return i.createElement(O.a,{visible:!0,title:n?"编辑":"添加",onOk:this.handleSubmit,onCancel:r,confirmLoading:c},i.createElement(y.a,{className:"editor-form"},i.createElement(T,Object.assign({label:"所属菜单"},B(5,13),{required:!0}),l("menuIds",{initialValue:n&&[n.parent_menu,n.child_menu],rules:[{required:!0,message:"请选择所属菜单"}]})(i.createElement(S.a,{placeholder:"请选择菜单",options:o,fieldNames:{label:"name",value:"id"}}))),i.createElement(T,Object.assign({label:"权限名称"},B(5,13),{required:!0}),l("name",{initialValue:n&&n.name,rules:[{required:!0,message:"请填写权限名称"}]})(i.createElement(E.a,{placeholder:"请输入权限名称"}))),i.createElement(T,Object.assign({label:"code"},B(5,13),{required:!0}),l("code",{initialValue:n&&n.code,rules:[{required:!0,message:"请填写权限码"}]})(i.createElement(E.a,{placeholder:"请输入code"}))),i.createElement(T,Object.assign({label:"是否默认"},B(5,13),{required:!0}),l("is_default",{initialValue:!(!n||!n.is_default),valuePropName:"checked"})(i.createElement(k.a,null)))))}}])&&R(n.prototype,a),o&&R(n,o),t}(b.a),M=D=Object(r.b)([y.a.create(),Object(P.b)("common","permission"),P.c],D),z=n(1066),$=n(94);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?J(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){var e;return V(this,t),(e=K(this,H(t).apply(this,arguments))).state={permissionList:[],tableLoading:!1,selectedRowKeys:[],currentPermission:null,isShowEditPermissionModal:!1,tempFilter:{},total:0},e.getDataList=function(t){return Object(r.a)(J(e),void 0,void 0,regeneratorRuntime.mark((function e(){var n,r,a,o,i,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?Object.assign(Object.assign({},this.props.permission.filter),t):this.props.permission.filter,this.setState({tableLoading:!0}),e.next=4,this.$api.permission.getPermissionList({params:n});case 4:r=e.sent,a=r.data,o=a.results,i=a.page_size,c=a.current_page,l=a.count,0===r.data.results.length&&0!==r.data.offset?this.getDataList(Object.assign(Object.assign({},n),{page:c-1})):(this.props.permission.setFilter({page_size:i,page:c,name:n.name,code:n.code}),this.setState({permissionList:o,tableLoading:!1,total:l}));case 7:case"end":return e.stop()}}),e,this)})))},e.onSearch=function(){return Object(r.a)(J(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getDataList(Object.assign({page:1},this.state.tempFilter));case 1:case"end":return e.stop()}}),e,this)})))},e.onReset=function(){return Object(r.a)(J(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getDataList({name:void 0,code:void 0,page:1}),this.setState({tempFilter:{}});case 2:case"end":return e.stop()}}),e,this)})))},e.onInputChanged=function(t,n){e.setState((function(e){return{tempFilter:Object.assign(Object.assign({},e.tempFilter),q({},t,n))}}))},e.showEditPermissionModal=function(t){e.setState({currentPermission:t||null,isShowEditPermissionModal:!0})},e.hideEditPermissionModal=function(){e.setState({currentPermission:null,isShowEditPermissionModal:!1})},e.handleEditPermission=function(){e.hideEditPermissionModal(),e.getDataList()},e.deletePermission=function(t){return Object(r.a)(J(e),void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.permission.deletePermission(t);case 2:204===(n=e.sent).status?this.getDataList():this.$msg.error(n.data.message);case 4:case"end":return e.stop()}}),e,this)})))},e}var n,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),n=t,(c=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.common.paginationConfig,this.getDataList({page_size:t.defaultPageSize,page:1});case 2:case"end":return e.stop()}}),e,this)})))}},{key:"componentDidUpdate",value:function(){"/dashboard/permission"===this.props.location.pathname&&this.props.history.replace("/dashboard/permission/list")}},{key:"render",value:function(){var e=this,t=this.props.match,n=this.state,r=n.currentPermission,c=n.isShowEditPermissionModal;return i.createElement("div",null,i.createElement(a.a,Object.assign({},this.props,{links:[],title:"权限管理"})),i.createElement($.b,{path:"".concat(t.url,"/list"),render:function(t){return i.createElement(o.a,Object.assign({},t,{config:h(e)}))}}),c&&i.createElement(M,{permission:r,onOk:this.handleEditPermission,onCancel:this.hideEditPermissionModal}))}}])&&W(n.prototype,c),l&&W(n,l),t}(b.a);U=Object(r.b)([Object(z.a)("/dashboard/permission",{exact:!1}),Object(P.b)("common","permission"),P.c],U);t.default=U}}]);