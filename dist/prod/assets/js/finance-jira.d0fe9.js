(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1419:function(e,t,n){"use strict";n.d(t,"a",function(){return D});var r=n(1),a=n(109),o=(n(1422),n(146)),i=n.n(o),c=(n(167),n(353)),l=n.n(c),s=(n(578),n(352)),u=n.n(s),m=(n(248),n(1377)),p=n.n(m),f=(n(1376),n(1371)),d=n.n(f),h=(n(1370),n(168)),g=n.n(h),y=(n(354),n(23)),v=n.n(y),b=(n(351),n(582)),E=n.n(b),w=(n(581),n(584)),C=n.n(w),k=(n(583),n(580)),S=n.n(k),N=(n(579),n(11)),O=n(16),j=n.n(O);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=l.a.Option,$=u.a.Group,L=d.a.RangePicker,I=S.a.CheckableTag,B={SelectInput:function(e){var t=e.selectValue,n=e.inputValue,a=e.placeholder,o=e.options,i=e.onSelectChange,c=e.onInputChange,s=e.onPressEnter,m=e.selectStyle;return r.createElement($,{compact:!0},r.createElement(l.a,{style:m?Object.assign({width:110},m):{width:110},value:t,onChange:i},o&&o.map(function(e,t){return r.createElement(T,{key:t,value:e.value},e.title)})),r.createElement(u.a,{style:{width:238},value:n,onChange:c,placeholder:a,onPressEnter:s}))},Select:function(e){var t=e.option,n=e.label,a=e.mode,o=e.onSearch,i=e.onSelect,c=e.onBlur,s=e.onFocus,u=e.value,m=e.placeholder,p=e.showSearch,f=e.width,d=e.filterOption,h=e.onChange,g=e.allowClear,y=e.onPopupScroll;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(l.a,{allowClear:g,value:u,mode:a||!1,style:{minWidth:f||258,width:f},showSearch:p,placeholder:m,filterOption:d,onSearch:o,onSelect:i,onChange:h,onBlur:c,onPopupScroll:y,onFocus:s},t.data.map(function(e){return r.createElement(T,{key:e[t.key]||e.id,value:e[t.value]||e.id,$data:e},e[t.title])}))))},DatePicker:function(e){var t=e.label,n=e.placeholder,a=e.onChange,o=e.value,i=e.style,c=e.format,l=e.showTime;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(d.a,{format:c||!1,style:i,showTime:l,placeholder:n,value:o,onChange:a})))},RangePicker:function(e){var t=e.label,n=e.alias,a=e.placeholder,o=e.onChange,c=e.value,l=e.showTime,s=e.format;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(L,{style:{width:400},showTime:l,format:s,placeholder:a,value:c,onChange:o}),r.createElement("span",{className:"common-list-control-date-alias"},!N.a.isEmpty(n)&&n.map(function(e,t){return r.createElement(i.a,{key:t,onClick:function(){return o([j()(Date.now()-864e5*e).startOf("day"),j()()])}},e," 天内")}))))},Input:function(e){var t=e.label,n=e.value,a=e.placeholder,o=e.onChange,i=e.width,c=e.onPressEnter;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(u.a,{style:{minWidth:i||258},value:n,onChange:o,placeholder:a,onPressEnter:c})))},Checkbox:function(e){var t=e.label,n=e.value,a=e.onChange;return r.createElement(g.a,{checked:n,onChange:a},t)},CheckableTag:function(e){var t=e.label,n=e.option,a=e.value,o=e.onChange;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},!N.a.isEmpty(n)&&n.map(function(e){return r.createElement(I,{key:e.value,checked:e.value===a,onChange:function(){o(e)}},e.title)})))},Label:function(e,t){var n=e.label;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},t))},Custom:function(e){return r.createElement("div",null,(void 0).props.children)}},D=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=P(this,_(t).apply(this,arguments))).state={collapse:!0},e.toggleCollapse=function(t){e.setState({collapse:!e.state.collapse})},e.renderSearcher=function(){var t=e.props.config,n=t.searcher,a=t.table,o=e.state.collapse;return n&&r.createElement("section",{className:"common-list-search"},e.renderWidgets(n.widgets),a&&a.tableHeader&&a.tableHeader(),r.createElement("div",{className:"common-list-search-right"},!n.hideSearcher&&r.createElement(r.Fragment,null,r.createElement(i.a,{type:"primary",onClick:n.onSearch},"查询"),r.createElement(i.a,{onClick:n.onReset},"重置")),n.collapseControl&&n.collapseControl.showMoreBtn&&r.createElement("span",{className:"common-list-serach-more"},r.createElement("a",{onClick:e.toggleCollapse},o?"更多":"收起"," ",r.createElement(v.a,{type:o?"down":"up"})))))},e.renderWidgets=function(t){var n=e.state.collapse,a=e.props.config.searcher;return t&&r.createElement("div",{className:"common-list-search-left"},t.map(function(t,o){return Array.isArray(t)?r.createElement("div",{key:o,className:"common-list-search-row",style:{display:a.collapseControl&&a.collapseControl.showMoreBtn&&n&&o>0?"none":"flex"}},t.map(function(t){return r.createElement("div",{key:t.label,className:"common-list-search-col",style:Object.assign({},t.style)},B[t.type]&&B[t.type](t,t.children?e.renderWidgets(t.children):null))})):r.createElement("div",{key:t.label,className:"common-list-search-row ".concat(t.className)},B[t.type]&&B[t.type](t,t.children?e.renderWidgets(t.children):null))}))},e.renderAddBtn=function(){var t=e.props.config,n=t.addBtn,a=t.searcher;return n&&r.createElement("section",{className:"common-list-addbtn",style:n.style},"function"==typeof n.title?r.createElement(n.title,null):n.title,r.createElement("div",{className:"common-list-search-batch"},a.batchControl.showBatchControl&&r.createElement(l.a,{placeholder:a.batchControl.placeholder,style:{minWidth:120},defaultValue:void 0,onChange:a.batchControl.onBatch},a.batchControl.options.map(function(e){return r.createElement(T,{key:e.value,value:e.value},e.title)}))))},e.renderTableHeader=function(){var t=e.props.config.tableHeader;return r.createElement("section",{className:"common-list-table-header"},t&&t())},e.renderTable=function(){var t=e.props.config.table,n=t.rowKey,a=t.rowSelection,o=t.columns,i=t.dataSource,c=t.pagination,l=t.onChange,s=t.loading,u=t.locale;return r.createElement("section",{className:"common-list-table"},r.createElement(p.a,{locale:u,rowKey:n||"id",rowSelection:a,columns:o,dataSource:i,loading:s,pagination:c,onChange:l}))},e.renderCards=function(){var t=e.props.config.cards,n=t.dataSource,a=t.loading,o=t.pagination,i=t.renderCard,c=t.addBtn;return r.createElement("div",{className:"common-list-cards-wrapper"},r.createElement("ul",{className:"common-list-cards"},a?r.createElement("div",{className:"common-list-cards-loading"},r.createElement(C.a,null)):r.createElement(r.Fragment,null,r.createElement("li",{className:"common-list-card add-btn"},r.createElement("div",{className:"common-list-card-item",onClick:c.onAddBtnClick},c.icon?r.createElement("img",{src:c.icon,alt:""}):r.createElement(v.a,{type:"plus-circle"}),r.createElement("p",null,c.title))),n.map(function(e){return r.createElement("li",{className:"common-list-card"},r.createElement("div",{className:"common-list-card-item"},i(e)))}))),r.createElement("section",{className:"common-list-cards-pagination"},r.createElement(E.a,Object.assign({},o))))},e}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,a["a"]),n=t,(o=[{key:"render",value:function(){var e=this.props.config;return r.createElement("div",{className:"common-list"},this.renderSearcher(),this.renderAddBtn(),this.renderTableHeader(),e.table&&this.renderTable(),e.cards&&this.renderCards())}}])&&R(n.prototype,o),c&&R(n,c),t}()},1420:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(1),a=n(1375),o=n.n(a),i=(n(1374),n(11));n(1421);function c(e){var t=i.a.getPageBreadcrumb(e.location.pathname),n=e.title,a=e.links,c=e.tabs,l=e.currentTab;return r.createElement("div",{className:"common-header"},r.createElement("section",{className:"common-header-breadcrumb"},t&&r.createElement(o.a,null,t.map(function(e,t){return r.createElement(o.a.Item,{key:t},e.title)}))),r.createElement("section",{className:"common-header-title"},r.createElement("h2",null,n),r.createElement("div",{className:"common-header-links"},a&&a.map(function(t,n){return r.createElement("a",{key:n,onClick:function(){e.history.push(t.path)}},t.title)}))),r.createElement("section",{className:"common-header-tabs"},c&&c.map(function(t,n){return r.createElement("a",{onClick:function(){e.onTabClick(t.id)},className:"".concat(l===t.id?"tab-active":""," ")},r.createElement("span",null,t.title),t.tipComponent&&t.tipComponent())})))}},1421:function(e,t,n){},1422:function(e,t,n){},1423:function(e,t,n){"use strict";var r=function(e){var t=e;return 15===e.length&&(t=function(e){if(/^\d{15}$/.test(e)){e=e.substr(0,6)+"19"+e.substr(6,e.length-6);for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=0,r=0;r<e.length;r++)n+=parseInt(e.substr(r,1))*t[r];return e+["1","0","X","9","8","7","6","5","4","3","2"][n%11]}return e}(e)),function(e){if(!/^\d{17}(\d|x)$/i.test(e))return!1;return null!=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙",21:"辽宁",22:"吉林",23:"黑龙",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",83:"台湾",91:"国外"}[parseInt(e.substr(0,2))]}(t)},a=function(e){return/^[HMhm]{1}([0-9]{8})$/.test(e)},o=function(e){return/^[0-9]{8}$/.test(e)||/^[0-9]{10}$/.test(e)},i=function(e){return/^[a-zA-Z]{5, 17}$/.test(e)||/^[a-zA-Z0-9]$/.test(e)},c=n(11);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return u});var s={isNonEmpty:function(e,t,n){if(0!==e&&c.a.isEmpty(e))return n&&n(),t},maxLength:function(e,t,n,r){if(e.length>t)return r&&r(),n},minLength:function(e,t,n,r){if(e.length<t)return r&&r(),n},isEmail:function(e,t,n){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e))return n&&n(),t},isMobile:function(e,t,n){if(!/^(13[0-9]|14[57]|15[012356789]|16[0-9]|18[0-9]|17[0-9]|19[0-9])\d{8}$/.test(e))return n&&n(),t},isID:function(e,t,n,c){var l=null;if("id"===t?l=r:"HKMC"===t?l=a:"TW"===t?l=o:"PSPort"===t&&(l=i),!l(e))return c&&c(),n},isNumber:function(e,t,n){if(e&&Number.isNaN(Number(e)))return n&&n(),t},isHexColor:function(e,t,n){var r=e.toString();if(!r||!function(e){if("#"!==e[0])return!1;var t=e.slice(1);return 6===t.length&&/^[0-9a-fA-f]{6}$/.test(t)}(r))return n&&n(),t},customReg:function(e,t,n,r){var a=e.toString();if(!a||!new RegExp(t).test(a))return r&&r(),n}},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cache=[]}var t,n,r;return t=e,(n=[{key:"add",value:function(e,t){var n=this,r=!0,a=!1,o=void 0;try{for(var i,c=function(){var t=i.value,r=t.strategy.split(":");n.cache.push(function(){var n=r.shift();return r.unshift(e),r.push(t.errMsg),r.push(t.cb),s[n].apply(null,r)})},l=t[Symbol.iterator]();!(r=(i=l.next()).done);r=!0)c()}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}}},{key:"start",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,a=this.cache[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=(0,r.value)();if(o)return o}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}}])&&l(t.prototype,n),r&&l(t,r),e}()},1505:function(e,t,n){},1506:function(e,t,n){},1523:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),o=n(109),i=n(200),c=n(120),l=n(1369),s=n.n(l),u=(n(1368),n(1505),n(110)),m=n(251),p=n.n(m),f=n(1420),d=n(1419),h=n(1373),g=n.n(h),y=(n(1372),n(352)),v=n.n(y),b=(n(248),n(353)),E=n.n(b),w=(n(578),n(146)),C=n.n(w),k=(n(167),n(1380),n(1371)),S=n.n(k),N=(n(1370),n(23)),O=n.n(N),j=(n(351),n(1389),n(1506),n(1423)),x=n(11);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=g.a.Item,L=(E.a.Option,s.a.confirm),I=(S.a.RangePicker,a.createElement("div",null,a.createElement(O.a,{type:"plus"}),a.createElement("div",{className:"ant-upload-text"},"上传图片")),function(e,t,n){return{labelCol:{span:e,offset:n},wrapperCol:{span:t}}}),B=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=_(t).apply(this,arguments),(e=!o||"object"!==R(o)&&"function"!=typeof o?J(n):o).state={mode:"add"},e.init=function(){return r.a(J(e),void 0,void 0,regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.$qs.parse(this.props.location.search),this.setState({mode:0==t.id?"add":"edit"},function(){return r.a(n,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=x.a.getLStorage("currentJira"))?L({title:"Jira 记录恢复操作",content:"检测到您存在未提交的 Jira 记录，请问是否从上次编辑中恢复状态？",onOk:function(){n.props.finance.setCurrentJira(t)},onCancel:function(){n.init(),x.a.rmLStorage("currentJira")}}):"edit"===this.state.mode||this.props.finance.setCurrentJira({},!0,!1);case 2:case"end":return e.stop()}},e,this)}))});case 2:case"end":return e.stop()}},e,this)}))},e.renderEditor=function(){var t=e.props.form.getFieldDecorator,n=e.props.finance,r=n.setCurrentJira,o=n.currentJira;return a.createElement(g.a,{className:"editor-form"},a.createElement($,Object.assign({label:"项目 Id"},I(2,12),{required:!0}),t("project_id",{initialValue:o&&o.project_id})(a.createElement(v.a,{placeholder:"请输入项目 ID",onChange:function(e){r({project_id:e.target.value},!1)},style:{display:"inline-block",width:200}}))),a.createElement($,Object.assign({label:"项目类型"},I(2,12),{required:!0}),t("type",{initialValue:o&&o.type})(a.createElement(v.a,{placeholder:"请输入项目类型",onChange:function(e){r({type:e.target.value},!1)},style:{display:"inline-block",width:200}}))),a.createElement($,Object.assign({label:"项目名称"},I(2,12),{required:!0}),t("name",{initialValue:o&&o.name})(a.createElement(v.a,{placeholder:"请输入项目名称",onChange:function(e){r({name:e.target.value},!1)},style:{display:"inline-block",width:200}}))),a.createElement($,Object.assign({label:"项目负责人"},I(2,12),{required:!0}),t("principal",{initialValue:o&&o.principal})(a.createElement(v.a,{placeholder:"请输入项目名称",onChange:function(e){r({principal:e.target.value},!1)},style:{display:"inline-block",width:200}}))),a.createElement($,Object.assign({label:"客户/渠道"},I(2,12),{required:!0}),t("clientele",{initialValue:o&&o.clientele})(a.createElement(v.a,{placeholder:"请输入客户/渠道",onChange:function(e){r({clientele:e.target.value},!1)},style:{display:"inline-block",width:200}}))),a.createElement($,{className:"editor-form-btns"},a.createElement(C.a,{type:"primary",onClick:e.handleSubmit},"edit"==e.state.mode?"确认修改":"保存"),a.createElement(C.a,{onClick:e.goBack},"取消")))},e.goBack=function(){setTimeout(function(){e.props.history.goBack(),e.props.finance.setCurrentJira({}),x.a.rmLStorage("currentJira")},300)},e.handleSubmit=function(t){return r.a(J(e),void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.form.validateFields(function(e,n){return r.a(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n,r,a,o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=8;break}if(n=this.props.finance.currentJira,r=this.state.mode,a={project_id:n.project_id,type:n.type,name:n.name,principal:n.principal,clientele:n.clientele},!(o=this.getValidation(a))){t.next=7;break}return t.abrupt("return",this.$msg.warn(o));case 7:"add"==r?this.$api.finance.updateJira(a).then(function(e){i.$msg.success("Jira 记录创建成功"),setTimeout(function(){i.goBack(),i.$store.finance.getJiraList({pageNum:1,pageSize:10})},1500)}):(a.id=n.id,this.$api.finance.updateJira(a).then(function(e){i.$msg.success("Jira 记录更新成功"),setTimeout(function(){i.goBack(),i.$store.finance.getJiraList({pageNum:1,pageSize:10})},1500)}));case 8:case"end":return t.stop()}},t,this)}))});case 1:case"end":return e.stop()}},e,this)}))},e.getValidation=function(e){var t=new j.a;return t.add(e.project_id,[{strategy:"isNonEmpty",errMsg:"请输入项目 ID"}]),t.add(e.type,[{strategy:"isNonEmpty",errMsg:"请输入项目类型"}]),t.add(e.name,[{strategy:"isNonEmpty",errMsg:"请输入项目名称"}]),t.add(e.principal,[{strategy:"isNonEmpty",errMsg:"请输入项目负责人"}]),t.add(e.clientele,[{strategy:"isNonEmpty",errMsg:"请输入客户/渠道"}]),t.start()},e}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,o["a"]),n=t,(i=[{key:"componentDidMount",value:function(){return r.a(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.init();case 1:case"end":return e.stop()}},e,this)}))}},{key:"componentWillUnmount",value:function(){this.props.finance.setCurrentJira({},!0,!1)}},{key:"render",value:function(){return a.createElement("div",{className:"editor food-card-editor"},a.createElement("section",{className:"editor-content panel-block"},this.renderEditor()))}}])&&P(n.prototype,i),c&&P(n,c),t}(),D=B=r.b([g.a.create(),Object(u.b)("common","finance"),u.c],B),A=n(1381),F=n.n(A);var M=function(e){var t=[{width:80,title:"项目 ID",dataIndex:"project_id"},{width:120,title:"项目类型",dataIndex:"type",render:function(e){return e||"--"}},{width:260,title:"项目名称",dataIndex:"name",render:function(e){return e||"--"}},{width:200,title:"项目负责人",dataIndex:"principal",render:function(e){return e||"--"}},{width:300,title:"客户/渠道",dataIndex:"clientele",render:function(e,t){return e}},{width:200,title:"操作",render:function(t,n){return a.createElement("div",{className:"common-list-table-operation"},a.createElement("span",{onClick:function(){return e.goToEditor(n)}},"编辑"),"    ",a.createElement("span",{onClick:function(){return e.delOperation(n)}},"删除"))}}],n=Object.assign({},e.props.common.paginationConfig,{total:e.props.finance.jiraListMeta.total,onChange:function(e,t){},onShowSizeChange:function(e,t){}});return{addBtn:{title:function(){return a.createElement(C.a,{type:"primary",onClick:function(){return e.goToEditor({})}},a.createElement(O.a,{type:"plus"})," 添加")}},searcher:{hideSearcher:!0,batchControl:{showBatchControl:!1},widgets:[]},tableHeader:function(){var t={accept:"text/excel",fileList:e.state.file,beforeUpload:function(e){return!0},customRequest:function(t){e.setState({file:[t.file]},function(){return r.a(void 0,void 0,void 0,regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=x.a.getFormData({file:t.file}),n.next=3,e.$api.finance.uploadFile(r);case 3:n.sent.data.data?e.$msg.success("文件上传成功"):e.$msg.error("文件上传失败");case 5:case"end":return n.stop()}},n)}))})},onRemove:function(t){e.setState({file:null})}};return a.createElement("div",{style:{margin:"10px 0"}},a.createElement(F.a,Object.assign({},t),a.createElement(C.a,null,a.createElement(O.a,{type:"upload"}),"上传 Excel"),a.createElement("a",{target:"_blank",href:"http://joyrun-web-cdn.thejoyrun.com/neo/file/jira_template.xlsx",style:{marginLeft:10,color:"#1890ff"}},"Excel 模板")))},table:{rowKey:"id",columns:t,loading:e.state.tableLoading,dataSource:e.props.finance.jiraList,pagination:n,current:e.state.currentPage,onChange:function(e,t,n){}}}};function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=s.a.confirm,K=[],U=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=H(t).apply(this,arguments),(e=!o||"object"!==z(o)&&"function"!=typeof o?W(n):o).state={filter:{},tableLoading:!1,currentPage:1},e.getDataList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({tableLoading:!0,filter:Object.assign({},e.state.filter,t)},function(){return r.a(W(e),void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.finance.getJiraList(Object.assign({},this.state.filter,t));case 2:this.setState({tableLoading:!1});case 3:case"end":return e.stop()}},e,this)}))})},e.resetPagination=function(t,n){return r.a(W(e),void 0,void 0,regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({filter:Object.assign({},this.state.filter,{pageSize:t,pageNum:n})},function(){return r.a(a,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.getDataList(t);case 2:case"end":return e.stop()}},e,this)}))});case 1:case"end":return e.stop()}},e,this)}))},e.onSearch=function(){return r.a(W(e),void 0,void 0,regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.setState({filter:Object.assign({},t,{pageNum:1}),currentPage:1},function(){n.getDataList(n.state.filter)});case 2:case"end":return e.stop()}},e,this)}))},e.onReset=function(){return r.a(W(e),void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={pageNum:1,pageSize:this.state.filter.pageSize},n=this.props.location.pathname,this.props.history.replace(n),this.setState({filter:t,currentPage:1},function(){r.getDataList(r.state.filter)});case 4:case"end":return e.stop()}},e,this)}))},e.goToEditor=function(t){var n="/admin/finance/jira/editor?id=".concat(p()(t)?0:t.foodCardId);e.props.history.push(n),e.props.finance.setCurrentJira(t,!0,!1)},e.delOperation=function(t){return r.a(W(e),void 0,void 0,regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Z({title:"JIRA 删除操作",content:a.createElement("span",null,"请问是否删除当前选中的 JIRA"),onOk:function(){return r.a(n,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.finance.deleteJira({params:{id:t.id}});case 2:this.getDataList();case 3:case"end":return e.stop()}},e,this)}))},onCancel:function(){return r.a(n,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))}});case 1:case"end":return e.stop()}},e)}))},e}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,o["a"]),n=t,(i=[{key:"componentDidMount",value:function(){return r.a(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.common.paginationConfig,n=t.defaultPageSize,r=t.defaultCurrent,this.resetPagination(n,r);case 2:case"end":return e.stop()}},e,this)}))}},{key:"componentDidUpdate",value:function(){"/admin/finance/jira"===this.props.location.pathname&&this.props.history.replace("/admin/finance/jira/list")}},{key:"render",value:function(){var e=this,t=this.props.match;return a.createElement("div",{className:"food-card"},a.createElement(f.a,Object.assign({},this.props,{links:K,title:"JIRA 管理"})),a.createElement(c.a,{path:"".concat(t.url,"/list"),render:function(t){return a.createElement(d.a,Object.assign({},t,{config:M(e)}))}}),a.createElement(c.a,{path:"".concat(t.url,"/editor"),render:function(e){return a.createElement(D,Object.assign({},e))}}))}}])&&V(n.prototype,i),l&&V(n,l),t}();U=r.b([Object(i.a)("/admin/finance/jira",{exact:!1}),Object(u.b)("common","finance"),u.c],U);t.default=U}}]);