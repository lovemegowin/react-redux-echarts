webpackJsonp([25],{264:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(1),u=l(s),c=n(7),f=l(c),h=n(11),d=(l(h),n(13)),p=n(10),m=l(p),y=n(3),S=l(y);n(19);var g=n(562),v=l(g),C=n(27),b=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.resizeFun=function(){n.state.resizeHandler&&clearTimeout(n.state.resizeHandler),n.state.resizeHandler=setTimeout(function(){n.state.singleSellerStayBarChart.resize()},100)},n.state={singleSellerStayBarChart:"",resizeHandler:"",time:"",timeList:"",numList:"",tableSpace:1},n}return a(t,e),o(t,[{key:"componentDidMount",value:function(){this.state.time=this.props.time,this.props.singleSellerStayBar(this.props.params.id,this.state.time);var e=f.default.findDOMNode(this.refs.singleSellerStayBarChart);this.state.singleSellerStayBarChart=S.default.init(e),this.state.singleSellerStayBarChart.showLoading(),window.addEventListener("resize",this.resizeFun)}},{key:"componentWillReceiveProps",value:function(e,t){if(this.state.time!=e.time)return this.setState({time:e.time}),void this.props.singleSellerStayBar(e.params.id,e.time);var n=e.stayBar.toJS();if(n.series&&n.series[0]&&n.series[0].data&&n.series[0].data[0]){var l=n.xAxis[0].data,r=n.series[0].data;this.setState({timeList:l,numList:r}),this.state.singleSellerStayBarChart.setOption(n),this.state.singleSellerStayBarChart.hideLoading()}}},{key:"componentWillUnmount",value:function(){this.state.singleSellerStayBarChart.dispose(),window.removeEventListener("resize",this.resizeFun)}},{key:"render",value:function(){var e=this.state,t=e.timeList,n=e.numList,l=(e.tableSpace,e.time),r=[];switch(l){case"day":l="最近一天";break;case"week":l="最近一周";break;case"month":l="最近一月";break;case"year":l="最近一年";break;case"more":l="开店以来";break;default:l=l.split(",").join(" 至 ")}return t&&t.forEach(function(e,i){r.push(u.default.createElement("tr",{key:i},u.default.createElement("td",null,l),u.default.createElement("td",null,t[i]),u.default.createElement("td",null,n[i])))}),u.default.createElement("div",null,u.default.createElement("div",{className:"panel"},u.default.createElement("div",{className:"panelHead"},"驻店时长 ",u.default.createElement(C,{className:"questionMark"}),u.default.createElement("div",{className:"messageMark"},u.default.createElement("p",null,"展示在一定时间内顾客在店铺的停留时长",u.default.createElement("br",null)))),u.default.createElement("div",{className:"panelBody"},u.default.createElement("div",{className:"singleSellerStayBarChart",ref:"singleSellerStayBarChart"}))),u.default.createElement("div",{className:"panel"},u.default.createElement("div",{className:"panelHead"},"驻店时长明细"),u.default.createElement("div",{className:"panelBody"},u.default.createElement("table",{className:"Table"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"时间范围"),u.default.createElement("th",null,"驻店时长"),u.default.createElement("th",null,"人数"))),u.default.createElement("tbody",null,r)))))}}]),t}(u.default.Component);b.propTypes={singleSellerStayBar:u.default.PropTypes.func.isRequired,stayBar:u.default.PropTypes.instanceOf(m.default.Map)};var I=function(e){return{stayBar:e.getIn(["b","stayBar"])}};t.default=(0,d.connect)(I,v.default)(b)},562:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(128),i=l(r),a=n(46),o=l(a),s=o.default.sellers,u=i.default.sellers,c={sellersListInit:function(){return function(e){fetch(u.sellersListInit+"/").then(function(e){return e.json()}).then(function(t){e({type:s.sellersListInit,payload:t})}).catch(function(e){console.log(e)})}},allSellersLineChartInit:function(e,t){return function(n){var l=u.allSellersLineChartInit+e+"/"+t+"/";fetch(l).then(function(e){return e.json()}).then(function(e){n({type:s.allSellersLineChartInit,payload:e})}).catch(function(e){console.log(e)})}},singleSellerLineChartInit:function(e,t){return function(n){var l=u.singleSellerLineChartInit+e+"/"+t+"/";fetch(l).then(function(e){return e.json()}).then(function(e){n({type:s.singleSellerLineChartInit,payload:e})}).catch(function(e){console.log(e)})}},singleSellerCustomerNumInit:function(e){return function(t){var n=u.singleSellerCustomerNumInit+e+"/";fetch(n).then(function(e){return e.json()}).then(function(e){t({type:s.singleSellerCustomerNumInit,payload:e})}).catch(function(e){console.log(e)})}},singleSellerCustomerNumFetch:function(e){var t=u.singleSellerCustomerNumFetch+e+"/";return function(e){fetch(t).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerNumFetch,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCustomerAvgInit:function(e,t){var n=u.singleSellerCustomerAvgInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerAvgInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCustomerFlowInit:function(e,t){var n=u.singleSellerCustomerFlowInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerFlowInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCustomerInInit:function(e,t){var n=u.singleSellerCustomerInInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCustomerInInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerRadar:function(e){var t=u.singleSellerRadar+e+"/";return function(e){fetch(t).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerRadar,payload:t})}).catch(function(e){console.log(e)})}},singleSellerStayBar:function(e,t){var n=u.singleSellerStayBar+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerStayBar,payload:t})}).catch(function(e){console.log(e)})}},singleSellerOldOrNew:function(e,t){var n=u.singleSellerOldOrNew+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerOldOrNew,payload:t})}).catch(function(e){console.log(e)})}},singleSellerTimeSection:function(e,t){var n=u.singleSellerTimeSection+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerTimeSection,payload:t})}).catch(function(e){console.log(e)})}},singleSellerDeepVisit:function(e,t){var n=u.singleSellerDeepVisit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerDeepVisit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerCycleInit:function(e,t){var n=u.singleSellerCycleInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerCycleInit,payload:t})}).catch(function(e){console.log(e)})}},singleSellerActiveInit:function(e,t){var n=u.singleSellerActiveInit+e+"/"+t+"/";return function(e){fetch(n).then(function(e){return e.json()}).then(function(t){e({type:s.singleSellerActiveInit,payload:t})}).catch(function(e){console.log(e)})}}};t.default=c}});