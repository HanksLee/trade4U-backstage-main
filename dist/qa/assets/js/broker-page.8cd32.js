(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1063:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),o=n(1045),a=n.n(o),i=(n(1044),n(31));n(1064);function c(e){var t=i.a.getPageBreadcrumb(e.location.pathname),n=e.title,o=e.links,c=e.tabs,s=e.currentTab;return r.createElement("div",{className:"common-header"},r.createElement("section",{className:"common-header-breadcrumb"},t&&r.createElement(a.a,null,t.map((function(e,t){return r.createElement(a.a.Item,{key:t},e.title)})))),r.createElement("section",{className:"common-header-title"},r.createElement("h2",null,n),r.createElement("div",{className:"common-header-links"},o&&o.map((function(t,n){return r.createElement("a",{key:n,onClick:function(){e.history.push(t.path)}},t.title)})))),r.createElement("section",{className:"common-header-tabs"},c&&c.map((function(t,n){return r.createElement("a",{onClick:function(){e.onTabClick(t.id)},className:"".concat(s===t.id?"tab-active":""," ")},r.createElement("span",null,t.title),t.tipComponent&&t.tipComponent())}))))}},1064:function(e,t,n){},1065:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),o=n(93);function a(e,t){return function(n){return function(){return r.createElement(o.b,Object.assign({path:e},Object.assign({exact:!0},t),{render:function(e){return r.createElement(n,Object.assign({},e))}}))}}}},1066:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n(1),o=(n(1067),n(96)),a=n.n(o),i=(n(133),n(289)),c=n.n(i),s=(n(432),n(134)),l=n.n(s),u=(n(204),n(1043)),m=n.n(u),f=(n(1042),n(1049)),d=n.n(f),p=(n(1048),n(205)),h=n.n(p),b=(n(434),n(17)),g=n.n(b),v=(n(203),n(437)),y=n.n(v),k=(n(436),n(438)),E=n.n(k),w=(n(435),n(440)),O=n.n(w),C=(n(439),n(31)),S=n(22),j=n.n(S);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=c.a.Option,I=l.a.Group,L=d.a.RangePicker,T=O.a.CheckableTag,$={SelectInput:function(e){var t=e.selectValue,n=e.inputValue,o=e.placeholder,a=e.options,i=e.onSelectChange,s=e.onInputChange,u=e.onPressEnter,m=e.selectStyle;return r.createElement(I,{compact:!0},r.createElement(c.a,{style:m?Object.assign({width:110},m):{width:110},value:t,onChange:i},a&&a.map((function(e,t){return r.createElement(_,{key:t,value:e.value},e.title)}))),r.createElement(l.a,{style:{width:238},value:n,onChange:s,placeholder:o,onPressEnter:u}))},Select:function(e){var t=e.option,n=e.label,o=e.mode,a=e.onSearch,i=e.onSelect,s=e.onBlur,l=e.onFocus,u=e.value,m=e.placeholder,f=e.showSearch,d=e.width,p=e.filterOption,h=e.onChange,b=e.allowClear,g=e.onPopupScroll;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(c.a,{allowClear:b,value:u,mode:o||!1,style:{minWidth:d||258,width:d},showSearch:f,placeholder:m,filterOption:p,onSearch:a,onSelect:i,onChange:h,onBlur:s,onPopupScroll:g,onFocus:l},t.data.map((function(e){return r.createElement(_,{key:e[t.key]||e.id,value:e[t.value]||e.id,$data:e},e[t.title])})))))},DatePicker:function(e){var t=e.label,n=e.placeholder,o=e.onChange,a=e.value,i=e.style,c=e.format,s=e.showTime;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(d.a,{format:c||!1,style:i,showTime:s,placeholder:n,value:a,onChange:o})))},RangePicker:function(e){var t=e.label,n=e.alias,o=e.placeholder,i=e.onChange,c=e.value,s=e.showTime,l=e.format;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(L,{style:{width:400},showTime:s,format:l,placeholder:o,value:c,onChange:i}),r.createElement("span",{className:"common-list-control-date-alias"},!C.a.isEmpty(n)&&n.map((function(e,t){return r.createElement(a.a,{key:t,onClick:function(){return i([j()(Date.now()-864e5*e).startOf("day"),j()()])}},e," 天内")})))))},Input:function(e){var t=e.label,n=e.value,o=e.placeholder,a=e.onChange,i=e.width,c=e.onPressEnter;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},r.createElement(l.a,{style:{minWidth:i||258},value:n,onChange:a,placeholder:o,onPressEnter:c})))},Checkbox:function(e){var t=e.label,n=e.value,o=e.onChange;return r.createElement(h.a,{checked:n,onChange:o},t)},CheckableTag:function(e){var t=e.label,n=e.option,o=e.value,a=e.onChange;return r.createElement(r.Fragment,null,t&&r.createElement("span",{className:"common-list-label"},"".concat(t,"：")),r.createElement("span",{className:"common-list-control"},!C.a.isEmpty(n)&&n.map((function(e){return r.createElement(T,{key:e.value,checked:e.value===o,onChange:function(){a(e)}},e.title)}))))},Label:function(e,t){var n=e.label;return r.createElement(r.Fragment,null,n&&r.createElement("span",{className:"common-list-label"},"".concat(n,"：")),r.createElement("span",{className:"common-list-control"},t))},Custom:function(e){return r.createElement("div",null,(void 0).props.children)}},A=function(e){function t(){var e;return P(this,t),(e=x(this,R(t).apply(this,arguments))).state={collapse:!0},e.toggleCollapse=function(t){e.setState({collapse:!e.state.collapse})},e.renderSearcher=function(){var t=e.props.config,n=t.searcher,o=t.table,i=e.state.collapse,c=o&&o.tableHeader;return n&&r.createElement("section",{className:"common-list-search"},e.renderWidgets(n.widgets),c&&r.createElement(c,null),r.createElement("div",{className:"common-list-search-right"},!n.hideSearcher&&r.createElement(r.Fragment,null,r.createElement(a.a,{type:"primary",onClick:n.onSearch},"查询"),r.createElement(a.a,{onClick:n.onReset},"重置")),n.collapseControl&&n.collapseControl.showMoreBtn&&r.createElement("span",{className:"common-list-serach-more"},r.createElement("a",{onClick:e.toggleCollapse},i?"更多":"收起"," ",r.createElement(g.a,{type:i?"down":"up"})))))},e.renderWidgets=function(t){var n=e.state.collapse,o=e.props.config.searcher;return t&&r.createElement("div",{className:"common-list-search-left"},t.map((function(t,a){return Array.isArray(t)?r.createElement("div",{key:a,className:"common-list-search-row",style:{display:o.collapseControl&&o.collapseControl.showMoreBtn&&n&&a>0?"none":"flex"}},t.map((function(t){return r.createElement("div",{key:t.label,className:"common-list-search-col",style:Object.assign({},t.style)},$[t.type]&&$[t.type](t,t.children?e.renderWidgets(t.children):null))}))):r.createElement("div",{key:t.label,className:"common-list-search-row ".concat(t.className)},$[t.type]&&$[t.type](t,t.children?e.renderWidgets(t.children):null))})))},e.renderAddBtn=function(){var t=e.props.config,n=t.addBtn,o=t.searcher,a=n&&n.title;return n&&r.createElement("section",{className:"common-list-addbtn",style:n.style},"function"==typeof n.title?r.createElement(a,null):n.title,r.createElement("div",{className:"common-list-search-batch"},o.batchControl.showBatchControl&&r.createElement(c.a,{placeholder:o.batchControl.placeholder,style:{minWidth:120},defaultValue:void 0,onChange:o.batchControl.onBatch},o.batchControl.options.map((function(e){return r.createElement(_,{key:e.value,value:e.value},e.title)})))))},e.renderTableHeader=function(){var t=e.props.config.tableHeader,n=t;return r.createElement("section",{className:"common-list-table-header"},t&&r.createElement(n,null))},e.renderTable=function(){var t=e.props.config.table,n=t.rowKey,o=t.rowSelection,a=t.columns,i=t.dataSource,c=t.pagination,s=t.onChange,l=t.loading,u=t.locale;return r.createElement("section",{className:"common-list-table"},r.createElement(m.a,{locale:u,rowKey:n||"id",rowSelection:o,columns:a,dataSource:i,loading:l,pagination:c,onChange:s}))},e.renderCards=function(){var t=e.props.config.cards,n=t.dataSource,o=t.loading,a=t.pagination,i=t.renderCard,c=t.addBtn;return r.createElement("div",{className:"common-list-cards-wrapper"},r.createElement("ul",{className:"common-list-cards"},o?r.createElement("div",{className:"common-list-cards-loading"},r.createElement(E.a,null)):r.createElement(r.Fragment,null,r.createElement("li",{className:"common-list-card add-btn"},r.createElement("div",{className:"common-list-card-item",onClick:c.onAddBtnClick},c.icon?r.createElement("img",{src:c.icon,alt:""}):r.createElement(g.a,{type:"plus-circle"}),r.createElement("p",null,c.title))),n.map((function(e){return r.createElement("li",{className:"common-list-card"},r.createElement("div",{className:"common-list-card-item"},i(e)))})))),r.createElement("section",{className:"common-list-cards-pagination"},r.createElement(y.a,Object.assign({},a))))},e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props.config;return r.createElement("div",{className:"common-list"},this.renderSearcher(),this.renderAddBtn(),this.renderTableHeader(),e.table&&this.renderTable(),e.cards&&this.renderCards())}}])&&B(n.prototype,o),i&&B(n,i),t}(r.Component)},1067:function(e,t,n){},1068:function(e,t,n){"use strict";var r=function(e){var t=e;return 15===e.length&&(t=function(e){if(/^\d{15}$/.test(e)){e=e.substr(0,6)+"19"+e.substr(6,e.length-6);for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=0,r=0;r<e.length;r++)n+=parseInt(e.substr(r,1))*t[r];return e+["1","0","X","9","8","7","6","5","4","3","2"][n%11]}return e}(e)),function(e){if(!/^\d{17}(\d|x)$/i.test(e))return!1;return null!=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙",21:"辽宁",22:"吉林",23:"黑龙",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",83:"台湾",91:"国外"}[parseInt(e.substr(0,2))]}(t)},o=function(e){return/^[HMhm]{1}([0-9]{8})$/.test(e)},a=function(e){return/^[0-9]{8}$/.test(e)||/^[0-9]{10}$/.test(e)},i=function(e){return/^[a-zA-Z]{5, 17}$/.test(e)||/^[a-zA-Z0-9]$/.test(e)},c=n(31);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return u}));var l={isNonEmpty:function(e,t,n){if(0!==e&&c.a.isEmpty(e))return n&&n(),t},maxLength:function(e,t,n,r){if(e.length>t)return r&&r(),n},minLength:function(e,t,n,r){if(e.length<t)return r&&r(),n},isEmail:function(e,t,n){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e))return n&&n(),t},isMobile:function(e,t,n){if(!/^(13[0-9]|14[57]|15[012356789]|16[0-9]|18[0-9]|17[0-9]|19[0-9])\d{8}$/.test(e))return n&&n(),t},isID:function(e,t,n,c){var s=null;if("id"===t?s=r:"HKMC"===t?s=o:"TW"===t?s=a:"PSPort"===t&&(s=i),!s(e))return c&&c(),n},isNumber:function(e,t,n){if(e&&Number.isNaN(Number(e)))return n&&n(),t},isHexColor:function(e,t,n){var r=e.toString();if(!r||!function(e){if("#"!==e[0])return!1;var t=e.slice(1);return 6===t.length&&/^[0-9a-fA-f]{6}$/.test(t)}(r))return n&&n(),t},customReg:function(e,t,n,r){var o=e.toString();if(!o||!new RegExp(t).test(o))return r&&r(),n}},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cache=[]}var t,n,r;return t=e,(n=[{key:"add",value:function(e,t){var n=this,r=!0,o=!1,a=void 0;try{for(var i,c=function(){var t=i.value,r=t.strategy.split(":");n.cache.push((function(){var n=r.shift();return r.unshift(e),r.push(t.errMsg),r.push(t.cb),l[n].apply(null,r)}))},s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0)c()}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}}},{key:"start",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.cache[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var a=(0,r.value)();if(a)return a}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}}}])&&s(t.prototype,n),r&&s(t,r),e}()},1071:function(e,t,n){},1081:function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(1068),a=n(31),i=n(1),c=n(83),s=n(85),l=n.n(s),u=(n(433),n(134)),m=n.n(u),f=(n(204),n(96)),d=n.n(f),p=(n(133),n(1041)),h=n.n(p),b=(n(1040),n(1052)),g=n.n(b),v=(n(1051),n(17)),y=n.n(v),k=(n(203),n(84));function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?N(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=l.a.Item,x=h.a.confirm,R=function(e,t,n){return{labelCol:{span:e,offset:n},wrapperCol:{span:t}}},M=function(e){function t(){var e;return O(this,t),(e=S(this,j(t).apply(this,arguments))).state={mode:"add",brokerOptions:[]},e.init=function(){return Object(r.a)(N(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,o,i,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.broker,o=t.location,i=this.$qs.parse(o.search),this.setState({mode:0==i.id?"add":"edit"},(function(){return Object(r.a)(c,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=a.a.getLStorage("currentBroker"))?x({title:"券商恢复操作",content:"检测到您存在未提交的券商记录，请问是否从上次编辑中恢复状态？",onOk:function(){n.setCurrentBroker(t)},onCancel:function(){r.init(),a.a.rmLStorage("currentBroker")}}):"add"===this.state.mode&&n.setCurrentBroker({},!0,!1);case 2:case"end":return e.stop()}}),e,this)})))}));case 3:case"end":return e.stop()}}),e,this)})))},e.renderEditor=function(){var t=e.props.form.getFieldDecorator,n=e.props.broker,r=n.setCurrentBroker,o=n.currentShowBroker;return i.createElement(l.a,{className:"editor-form"},i.createElement(B,Object.assign({label:"券商名称"},R(3,12),{required:!0}),t("name",{initialValue:o&&o.name})(i.createElement(m.a,{placeholder:"请输入券商名称",onChange:function(e){r({name:e.target.value},!1)},style:{display:"inline-block",width:200}}))),i.createElement(B,Object.assign({label:"域名"},R(3,12),{required:!0}),t("domain",{initialValue:o&&o.pinyin})(i.createElement(m.a,{placeholder:"请输入域名",onChange:function(e){r({domain:e.target.value},!1)},style:{display:"inline-block",width:200}}))),i.createElement(B,Object.assign({label:"后台角标"},R(3,12),{required:!0}),t("background_corner")(i.createElement(g.a,{accept:"image/*",listType:"picture-card",showUploadList:!1,beforeUpload:e.beforeBackgroundCornerUpload},o&&o.background_corner?i.createElement("div",{className:"upload-image-preview",style:{backgroundImage:"url(".concat(o.background_corner,")")}}):i.createElement("div",{className:"upload-image-preview"},i.createElement(y.a,{type:"plug"}))))),i.createElement(B,Object.assign({label:"logo"},R(3,12),{required:!0}),t("logo")(i.createElement(g.a,{accept:"image/*",listType:"picture-card",showUploadList:!1,beforeUpload:e.beforeLogoUpload},o&&o.logo?i.createElement("div",{className:"upload-image-preview",style:{backgroundImage:"url(".concat(o.logo,")")}}):i.createElement("div",{className:"upload-image-preview"},i.createElement(y.a,{type:"plus"}))))),i.createElement(B,{className:"editor-form-btns"},i.createElement(d.a,{type:"primary",onClick:e.handleSubmit},"edit"===e.state.mode?"确认修改":"保存"),i.createElement(d.a,{onClick:e.goBack},"取消")))},e.beforeBackgroundCornerUpload=function(t){return e.uploadFile(t,"background_corner"),!1},e.beforeLogoUpload=function(t){return e.uploadFile(t,"logo"),!1},e.uploadFile=function(t,n){return Object(r.a)(N(e),void 0,void 0,regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",t),e.next=4,this.$api.common.uploadFile(r);case 4:o=e.sent,this.props.broker.setCurrentBroker(w({},n,o.data.file_path),!1);case 6:case"end":return e.stop()}}),e,this)})))},e.goBack=function(){setTimeout((function(){e.props.history.goBack(),e.props.broker.setCurrentBroker({}),a.a.rmLStorage("currentBroker")}),300)},e.handleSubmit=function(t){return Object(r.a)(N(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.form.validateFields((function(e,n){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,o,a,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=8;break}if(n=this.props.broker.currentBroker,r=this.state.mode,o={name:n.name,domain:n.domain,background_corner:n.background_corner,logo:n.logo},!(a=this.getValidation(o))){t.next=7;break}return t.abrupt("return",this.$msg.warn(a));case 7:"add"==r?this.$api.broker.createBroker(o).then((function(e){i.$msg.success("券商创建成功"),setTimeout((function(){i.goBack(),i.$store.broker.getBrokerList({offset:0,limit:10})}),1500)})):this.$api.broker.updateBroker(n.id,o).then((function(e){i.$msg.success("券商更新成功"),setTimeout((function(){i.goBack(),i.props.broker.getBrokerList({offset:0,limit:10})}),1500)}));case 8:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.getValidation=function(e){var t=new o.a;return t.add(e.name,[{strategy:"isNonEmpty",errMsg:"请输入券商名称"}]),t.add(e.domain,[{strategy:"isNonEmpty",errMsg:"请输入域名"}]),t.add(e.background_corner,[{strategy:"isNonEmpty",errMsg:"请上传后台角标"}]),t.add(e.logo,[{strategy:"isNonEmpty",errMsg:"请上传logo"}]),t.start()},e}var n,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(c=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.init();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"componentWillUnmount",value:function(){this.props.broker.setCurrentBroker({},!0,!1)}},{key:"render",value:function(){return i.createElement("div",{className:"editor food-card-editor"},i.createElement("section",{className:"editor-content panel-block"},this.renderEditor()))}}])&&C(n.prototype,c),s&&C(n,s),t}(c.a),_=M=Object(r.b)([l.a.create(),Object(k.b)("common","broker"),k.c],M),I=n(1043),L=n.n(I),T=(n(1042),n(205)),$=n.n(T);n(434),n(1071);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(e){var n,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,c=U(t).call(this,e),(n=!c||"object"!==A(c)&&"function"!=typeof c?z(o):c).state={isEditing:!1,menuList:[],formatedMenuList:[],selectedPermissions:[]},n.formateMenuList=function(e){var t=[];return e.forEach((function(e){e.children&&e.children.length>0?e.children.forEach((function(n,r){t.push({parentMenuId:e.id,parentMenuName:e.name,childMenuId:n.id,childMenuName:n.name,permission:n.permission,rowSpan:0===r?e.children.length:0})})):t.push({parentMenuId:e.id,parentMenuName:e.name,permission:e.permission,rowSpan:1})})),t},n.getBrokerMenuList=function(){return Object(r.a)(z(n),void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.broker.getBrokerMenuList();case 2:t=e.sent,this.setState({menuList:t.data,formatedMenuList:this.formateMenuList(t.data)});case 4:case"end":return e.stop()}}),e,this)})))},n.getBrokePermission=function(){return Object(r.a)(z(n),void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$api.broker.getBrokerDetail(this.brokerId);case 2:t=e.sent,this.setState({selectedPermissions:t.data.permissions});case 4:case"end":return e.stop()}}),e,this)})))},n.goBack=function(){setTimeout((function(){n.props.history.goBack(),n.props.broker.setCurrentBroker({}),a.a.rmLStorage("currentBroker")}),300)},n.editPermission=function(){n.setState({isEditing:!0})},n.savePermission=function(){return Object(r.a)(z(n),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.selectedPermissions,this.$api.broker.updateBrokerPermission({broker_id:this.brokerId,permission_ids:t}).then((function(){n.$msg.success("权限更新成功"),setTimeout((function(){n.goBack(),n.props.broker.getBrokerList({offset:0,limit:10})}),1500)}));case 2:case"end":return e.stop()}}),e,this)})))},n.getTableColumns=function(){var e=n.state.isEditing;return[{key:"parentMenuName",title:"父菜单名称",dataIndex:"parentMenuName",align:"center",render:function(t,r){return{children:i.createElement(i.Fragment,null,i.createElement("div",{style:{marginBottom:"5px"}},t),r.permission.length>0&&i.createElement($.a,{checked:n.isCheck(r.parentMenuId),disabled:!e,onChange:function(e){return n.handleSelectAllChange(e.target.checked,r.parentMenuId)}},"全选")),props:{rowSpan:r.rowSpan}}}},{key:"childMenuName",title:"子菜单名称",dataIndex:"childMenuName",align:"center"},{key:"permission",title:"权限名称",className:"broker-permission-column",render:function(t,r){return i.createElement(i.Fragment,null,r.permission.length>0&&i.createElement("div",{className:"select-all-permission-row"},i.createElement($.a,{disabled:!e,checked:n.isCheck(r.childMenuId),onChange:function(e){return n.handleSelectAllChange(e.target.checked,r.childMenuId)}},"全选")),i.createElement("div",{className:"select-permission-row"},r.permission.map((function(t){return i.createElement($.a,{disabled:!e,checked:-1!==n.state.selectedPermissions.indexOf(t.id),onChange:function(e){return n.handlePermissionCheckboxChange(t.id,e.target.checked)}},t.name)}))))}}]},n.handlePermissionCheckboxChange=function(e,t){var r=n.state.selectedPermissions;if(t)n.setState({selectedPermissions:[].concat(F(r),[e])});else{var o=r.indexOf(e);if(-1!==o){var a=F(r);a.splice(o,1),n.setState({selectedPermissions:a})}}},n.handleSelectAllChange=function(e,t){var r=n.state,o=r.formatedMenuList,a=F(r.selectedPermissions);e?o.forEach((function(e){e.parentMenuId!==t&&e.childMenuId!==t||e.permission.forEach((function(e){-1===a.indexOf(e.id)&&a.push(e.id)}))})):o.forEach((function(e){e.parentMenuId!==t&&e.childMenuId!==t||e.permission.forEach((function(e){-1!==a.indexOf(e.id)&&a.splice(a.indexOf(e.id),1)}))})),n.setState({selectedPermissions:a})},n.isCheck=function(e){for(var t=n.state,r=t.formatedMenuList,o=t.selectedPermissions,a=0;a<r.length;a++){var i=r[a];if(i.parentMenuId===e||i.childMenuId===e)for(var c=0;c<i.permission.length;c++)if(-1===o.indexOf(i.permission[c].id))return!1}return!0},n.brokerId=n.$qs.parse(n.props.location.search).id,n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getBrokerMenuList(),this.getBrokePermission();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"componentWillUnmount",value:function(){this.props.broker.setCurrentBroker({},!0,!1)}},{key:"render",value:function(){var e=this,t=this.state,n=t.formatedMenuList,r=t.isEditing;return i.createElement("div",{className:"editor"},i.createElement("section",{className:"editor-content panel-block common-list"},i.createElement("section",{className:"common-list-addbtn"},r?i.createElement(d.a,{onClick:function(){return e.savePermission()}},"保存编辑"):i.createElement(d.a,{type:"primary",onClick:this.editPermission},"编辑权限"),i.createElement(d.a,{onClick:function(){return e.goBack()}},"取消")),i.createElement(L.a,{className:"broker-permission-table",columns:this.getTableColumns(),dataSource:n,pagination:!1,bordered:!0})))}}])&&D(n.prototype,o),c&&D(n,c),t}(c.a),H=K=Object(r.b)([Object(k.b)("common","broker"),k.c],K),V=n(1063),q=n(1066),Z=n(1047),J=n.n(Z);n(1046);function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var X=function(e){var t={selectedRowKeys:e.state.selectedRowKeys,onChange:function(t){e.setState({selectedRowKeys:t})}},n=[{title:"券商 ID",dataIndex:"id"},{title:"券商名称",dataIndex:"name"},{title:"域名",dataIndex:"domain",render:function(e,t){return e||"--"}},{title:"后台角标",dataIndex:"background_corner",render:function(e,t){return i.createElement("div",{className:"upload-image-preview",style:{background:"url(".concat(e,")")}})}},{title:"logo",dataIndex:"logo",render:function(e,t){return i.createElement("div",{className:"upload-image-preview",style:{background:"url(".concat(e,")")}})}},{title:"操作",render:function(t,n){return i.createElement("div",{className:"common-list-table-operation"},i.createElement("span",{onClick:function(){return e.goToEditor(n)}},"编辑"),i.createElement("span",{className:"common-list-table-operation-spliter"}),i.createElement("span",{onClick:function(){return e.goToPermissionEditor(n)}},"授权"),i.createElement("span",{className:"common-list-table-operation-spliter"}),i.createElement(J.a,{title:"请问是否确定删除券商",onConfirm:function(){return Object(r.a)(void 0,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.broker.deleteBroker(n.id);case 2:204===(r=t.sent).status?e.getDataList(e.state.filter):e.$msg.error(r.data.message);case 4:case"end":return t.stop()}}),t)})))},onCancel:function(){}},i.createElement("span",null,"删除")))}}],o=Object.assign(Object.assign({},e.props.common.paginationConfig),{total:e.props.broker.brokerListMeta.total,current:e.state.currentPage,onChange:function(e,t){},onShowSizeChange:function(t,n){e.resetPagination(n,t)}});return{addBtn:{title:function(){return i.createElement(d.a,{type:"primary",onClick:function(){return e.goToEditor({})}},i.createElement(y.a,{type:"plus"})," 添加")}},searcher:{batchControl:{placeholder:"请选择",showBatchControl:!a.a.isEmpty(e.state.selectedRowKeys),options:[{title:"删除",value:"delete"}],onBatch:function(t){e.onBatch(t)}},widgets:[[{type:"Input",label:"券商名称",placeholder:"请输入券商名称",value:e.state.name||void 0,onChange:function(t){e.onInputChanged("name",t.target.value)},onPressEnter:function(t){e.onSearch()}}]],onSearch:function(){e.onSearch()},onReset:function(){e.onReset()}},table:{rowKey:"id",rowSelection:t,columns:n,dataSource:e.props.broker.brokerList,pagination:o,onChange:function(t,n,r){var o={offset:t.current-1,limit:t.pageSize};if(!a.a.isEmpty(n))for(var i=0,c=Object.entries(n);i<c.length;i++){var s=G(c[i],2),l=s[0],u=s[1];o[l]=u?u[0]:void 0}a.a.isEmpty(r)?(delete o.orderBy,delete o.sort):(o.orderBy="".concat(r.field),o.sort="".concat("descend"===r.order?"desc":"asc")),e.setState({filter:Object.assign(Object.assign({},e.state.filter),o),currentPage:t.current},(function(){e.getDataList(e.state.filter)}))}}}},Q=n(1065),Y=n(93);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?ie(e):t}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var se=function(e){function t(){var e;return ne(this,t),(e=oe(this,ae(t).apply(this,arguments))).state={filter:{},tableLoading:!1,currentPage:1,selectedRowKeys:[],name:void 0,code:void 0,market:void 0},e.getDataList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({tableLoading:!0,filter:Object.assign(Object.assign({},e.state.filter),t)},(function(){return Object(r.a)(ie(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.broker.getBrokerList({params:Object.assign(Object.assign({},this.state.filter),t)});case 2:this.setState({tableLoading:!1});case 3:case"end":return e.stop()}}),e,this)})))}))},e.resetPagination=function(t,n){return Object(r.a)(ie(e),void 0,void 0,regeneratorRuntime.mark((function e(){var o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({filter:Object.assign(Object.assign({},this.state.filter),{limit:t,offset:(n-1)*t})},(function(){return Object(r.a)(o,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.getDataList(t);case 2:case"end":return e.stop()}}),e,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))},e.onSearch=function(){return Object(r.a)(ie(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.filter,this.setState({filter:Object.assign(Object.assign({},t),{pageNum:1}),currentPage:1},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.onReset=function(){return Object(r.a)(ie(e),void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={offset:0,pageSize:this.state.filter.pageSize},this.setState({filter:t,currentPage:1,name:void 0,market:void 0,code:void 0},(function(){n.getDataList(n.state.filter)}));case 2:case"end":return e.stop()}}),e,this)})))},e.onInputChanged=function(t,n){var r;e.setState((te(r={},t,n),te(r,"filter",Object.assign(Object.assign({},e.state.filter),te({},t,n||void 0))),r))},e.goToEditor=function(t){var n="/dashboard/broker/editor?id=".concat(a.a.isEmpty(t)?0:t.id);e.props.history.push(n),e.props.broker.setCurrentBroker(t,!0,!1)},e.goToPermissionEditor=function(t){var n="/dashboard/broker/permission?id=".concat(a.a.isEmpty(t)?0:t.id);e.props.history.push(n),e.props.broker.setCurrentBroker(t,!0,!1)},e.renderMenu=function(e){return null},e.onBatch=function(t){return Object(r.a)(ie(e),void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))},e}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.common.paginationConfig,n=t.defaultPageSize,r=t.defaultCurrent,this.resetPagination(n,r);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"componentDidUpdate",value:function(){"/dashboard/broker"===this.props.location.pathname&&this.props.history.replace("/dashboard/broker/list")}},{key:"render",value:function(){var e=this,t=this.props.match;return i.createElement("div",null,i.createElement(V.a,Object.assign({},this.props,{links:[],title:"券商管理"})),i.createElement(Y.b,{path:"".concat(t.url,"/list"),render:function(t){return i.createElement(q.a,Object.assign({},t,{config:X(e)}))}}),i.createElement(Y.b,{path:"".concat(t.url,"/editor"),render:function(e){return i.createElement(_,Object.assign({},e))}}),i.createElement(Y.b,{path:"".concat(t.url,"/permission"),render:function(e){return i.createElement(H,Object.assign({},e))}}))}}])&&re(n.prototype,o),c&&re(n,c),t}(c.a);se=Object(r.b)([Object(Q.a)("/dashboard/broker",{exact:!1}),Object(k.b)("common","broker"),k.c],se);t.default=se}}]);