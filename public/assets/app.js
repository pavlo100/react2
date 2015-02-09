webpackJsonp([1],{0:function(e,t,n){var r=n(7),o=n(99),i=n(40);i.getAllTopics(),r.render(r.createElement(o,{message:"Welcome to Planet Bumi"}),document.getElementById("app"))},27:function(e,t,n){var r=n(113);e.exports=r({CREATE_TOPIC:null,TODO_COMPLETE:null,TOPIC_INCREMENT:null,TOPIC_DECREMENT:null,TOPIC_DESTROY:null,RECEIVE_RAW_TOPICS:null,RECEIVE_RAW_CREATED_TOPIC:null,FAILED_TO_CREATE_TOPIC:null,TOGGLE_MODAL:null,TOGGLE_LOGIN:null,SUBMIT_LOGIN_CREDENTIALS:null,SUBMIT_SIGNUP_CREDENTIALS:null,SUCCESSFUL_LOGIN:null,SUCCESSFUL_SIGNUP:null})},28:function(e,t,n){var r=n(110).Dispatcher;e.exports=new r},39:function(e,t,n){var r=n(28),o=n(27),i=n(62),a=n(40);e.exports={create:function(e){if(r.dispatch({actionType:o.CREATE_TOPIC,text:e}),e.trim().length>0){var t=i.getCreatedTopicData(e);a.addTopic(t)}},increment:function(e){r.dispatch({actionType:o.TOPIC_INCREMENT,id:e})},decrement:function(e){r.dispatch({actionType:o.TOPIC_DECREMENT,id:e})},updateText:function(e,t){r.dispatch({actionType:o.TODO_UPDATE_TEXT,id:e,text:t})},toggleComplete:function(e){var t=e.id;r.dispatch(e.complete?{actionType:o.TODO_UNDO_COMPLETE,id:t}:{actionType:o.TODO_COMPLETE,id:t})},toggleCompleteAll:function(){r.dispatch({actionType:o.TODO_TOGGLE_COMPLETE_ALL})},destroy:function(e){r.dispatch({actionType:o.TOPIC_DESTROY,id:e})},destroyCompleted:function(){r.dispatch({actionType:o.TODO_DESTROY_COMPLETED})}}},40:function(e,t,n){var r=n(42),o=n(98),i={url:"/topic",type:"GET",dataType:"json"};e.exports={getAllTopics:function(){r.ajax(i).then(function(e){o.receiveAllTopics(e)},function(e,t,n){console.log(n)})},addTopic:function(e){r.ajax({url:"/topic",data:JSON.stringify(e),type:"POST",contentType:"application/json"}).then(function(e){o.receiveCreatedTopic(e)},function(t,n,r){console.log(r),o.failedToCreateTopic(e,r)})},updateTopic:function(e){r.ajax({url:"/topic",data:JSON.stringify(e),type:"PUT",contentType:"application/json"}).then(function(e){console.log(e)},function(e,t,n){console.log(n)})},deleteTopic:function(e){r.ajax({url:"/topic",data:JSON.stringify({id:e}),contentType:"application/json",type:"DELETE"}).then(function(e){console.log(e)},function(e,t,n){console.log(n)})},listenToTopicChanges:function(){var e=document.location.hostname,t=io.connect("//"+e),n=this;t.on("topic change",function(){n.getAllTopics()})}}},41:function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}},59:function(e){function t(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=u[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(o(r.parts[a],t))}else{for(var s=[],a=0;a<r.parts.length;a++)s.push(o(r.parts[a],t));u[r.id]={id:r.id,refs:1,parts:s}}}}function n(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function r(){var e=document.createElement("style"),t=p();return e.type="text/css",t.appendChild(e),e}function o(e,t){var n,o,i;if(t.singleton){var u=f++;n=d||(d=r()),o=a.bind(null,n,u,!1),i=a.bind(null,n,u,!0)}else n=r(),o=s.bind(null,n),i=function(){n.parentNode.removeChild(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function i(e,t,n){var r=["/** >>"+t+" **/","/** "+t+"<< **/"],o=e.lastIndexOf(r[0]),i=n?r[0]+n+r[1]:"";if(e.lastIndexOf(r[0])>=0){var a=e.lastIndexOf(r[1])+r[1].length;return e.slice(0,o)+i+e.slice(a)}return e+i}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=i(e.styleSheet.cssText,t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(o&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(o))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(i){}if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},l=c(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),p=c(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,f=0;e.exports=function(e,r){r=r||{},"undefined"==typeof r.singleton&&(r.singleton=l());var o=n(e);return t(o,r),function(e){for(var i=[],a=0;a<o.length;a++){var s=o[a],c=u[s.id];c.refs--,i.push(c)}if(e){var l=n(e);t(l,r)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete u[c.id]}}}}},60:function(e,t,n){var r=n(28),o=n(27),i=n(63);e.exports={toggleModal:function(){r.dispatch({actionType:o.TOGGLE_MODAL})},submitLoginCredentials:function(e){r.dispatch({actionType:o.SUBMIT_LOGIN_CREDENTIALS,data:e}),i.login(e).then(function(t,n){"success"===n&&r.dispatch({actionType:o.SUCCESSFUL_LOGIN,data:e.email})},function(){})},submitSignUpCredentials:function(e){r.dispatch({actionType:o.SUBMIT_SIGNUP_CREDENTIALS,data:e}),i.signUp(e).then(function(t,n){"success"===n&&r.dispatch({actionType:o.SUCCESSFUL_SIGNUP,data:e.email})},function(){})}}},61:function(e,t,n){var r=n(7),o=r.PropTypes,i=13,a=r.createClass({displayName:"TopicTextInput",propTypes:{className:o.string,id:o.string,placeholder:o.string,onSave:o.func.isRequired,value:o.string},getInitialState:function(){return{value:this.props.value||""}},render:function(){return r.createElement("input",{className:this.props.className,id:this.props.id,placeholder:this.props.placeholder,onBlur:this._save,onChange:this._onChange,onKeyDown:this._onKeyDown,value:this.state.value,autoFocus:!0})},_save:function(){this.props.onSave(this.state.value),this.setState({value:""})},_onChange:function(e){this.setState({value:e.target.value})},_onKeyDown:function(e){e.keyCode===i&&this._save()}});e.exports=a},62:function(e,t,n){function r(e,t){d[e].count=d[e].count+t,u.updateTopic(d[e])}function o(e){delete d[e],u.deleteTopic(e)}var i=n(28),a=n(94).EventEmitter,s=n(27),u=n(40),c=n(64),l=n(29),p="change",d={},f=c({},a.prototype,{init:function(e){d=l.chain(e).map(function(e){return e.id=e.id,[e.id,e]}).object().value()},getAll:function(){return d},getTopTopic:function(){var e,t,n;return e=l.reduce(d,function(e,t){return e+t.count},0),t=l.max(d,function(e){return e.count}),n=isNaN(t.count/e)?0:t.count/e*100,c({},t,{stat:n})},getCreatedTopicData:function(e){var t=Date.now();return{id:t,count:1,text:e}},emitChange:function(){this.emit(p)},addChangeListener:function(e){this.on(p,e)},removeChangeListener:function(e){this.removeListener(p,e)}});i.register(function(e){var t;switch(e.actionType){case s.CREATE_TOPIC:if(t=e.text.trim(),t.length>0){var n=f.getCreatedTopicData(t);d[n.id]=n,f.emitChange()}break;case s.TOPIC_INCREMENT:r(e.id,1),f.emitChange();break;case s.TOPIC_DECREMENT:r(e.id,-1),f.emitChange();break;case s.TOPIC_DESTROY:o(e.id),f.emitChange();break;case s.RECEIVE_RAW_TOPICS:f.init(e.data),f.emitChange();break;case s.FAILED_TO_CREATE_TOPIC:o(e.id),f.emitChange()}}),e.exports=f},63:function(e,t,n){var r=n(42);e.exports={login:function(e){return r.ajax({url:"/login",type:"POST",data:e})},signUp:function(e){return r.ajax({url:"/signup",type:"POST",data:e})}}},64:function(e){"use strict";function t(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=Object.assign||function(e){for(var n,r,o,i=t(e),a=1;a<arguments.length;a++){r=arguments[a],o=Object.keys(Object(r));for(var s=0;s<o.length;s++)try{i[o[s]]=r[o[s]]}catch(u){void 0===n&&(n=u)}}if(n)throw n;return i}},83:function(e){function t(e){return"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}e.exports=t},94:function(e){function t(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function r(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function i(e){return void 0===e}e.exports=t,t.EventEmitter=t,t.prototype._events=void 0,t.prototype._maxListeners=void 0,t.defaultMaxListeners=10,t.prototype.setMaxListeners=function(e){if(!r(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},t.prototype.emit=function(e){var t,r,a,s,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],i(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:for(a=arguments.length,s=new Array(a-1),u=1;a>u;u++)s[u-1]=arguments[u];r.apply(this,s)}else if(o(r)){for(a=arguments.length,s=new Array(a-1),u=1;a>u;u++)s[u-1]=arguments[u];for(c=r.slice(),a=c.length,u=0;a>u;u++)c[u].apply(this,s)}return!0},t.prototype.addListener=function(e,r){var a;if(!n(r))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(r.listener)?r.listener:r),this._events[e]?o(this._events[e])?this._events[e].push(r):this._events[e]=[this._events[e],r]:this._events[e]=r,o(this._events[e])&&!this._events[e].warned){var a;a=i(this._maxListeners)?t.defaultMaxListeners:this._maxListeners,a&&a>0&&this._events[e].length>a&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},t.prototype.on=t.prototype.addListener,t.prototype.once=function(e,t){function r(){this.removeListener(e,r),o||(o=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var o=!1;return r.listener=t,this.on(e,r),this},t.prototype.removeListener=function(e,t){var r,i,a,s;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],a=r.length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(r)){for(s=a;s-->0;)if(r[s]===t||r[s].listener&&r[s].listener===t){i=s;break}if(0>i)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},t.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},t.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},t.listenerCount=function(e,t){var r;return r=e._events&&e._events[t]?n(e._events[t])?1:e._events[t].length:0}},95:function(e,t,n){t=e.exports=n(41)(),t.push([e.id,"input{line-height:16px;width:480px;border:1px solid #d2d2d2;padding:0;display:block;margin:0 10px;height:48px}",""])},96:function(e,t,n){t=e.exports=n(41)(),t.push([e.id,".div-modal__overlay{background-color:rgba(0,0,0,.5);position:fixed;left:0;right:0;top:0;bottom:0}.div-modal__content--show{position:absolute;width:500px;height:400px;border-radius:4px;top:0;bottom:0;left:0;right:0;margin:auto;background-color:#fff;transition:all 450ms cubic-bezier(.23,1,.32,1)0ms}.div-modal__content--hide{position:absolute;visibility:hidden;left:-9999px;bottom:-9999px}.div-modal__logintoggle{cursor:pointer;text-align:center;color:#2196F3}.mui-button__login{display:block;margin:15px auto;font-size:1rem;line-height:1rem;width:12rem;height:2rem;border:none;background-color:#d23f31;box-shadow:0 2px 5px 0 rgba(0,0,0,.25);border-radius:2px;font-family:'Roboto Condensed';color:#fff}",""])},97:function(e,t,n){t=e.exports=n(41)(),t.push([e.id,"nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}nav .div-navwrapper{padding:0 10px;position:relative;height:100%}nav .div-navwrapper a{text-decoration:none;color:#fff}nav .div-navwrapper__logo{position:absolute;display:inline-block;font-size:2.1rem;padding:0}@media only screen and (max-width:992px){nav .div-navwrapper__logo{left:0;width:100%;text-align:center;z-index:0}}nav .div-navwrapper ul{margin:0;float:right;list-style:none}",""])},98:function(e,t,n){var r=n(28),o=n(27);e.exports={receiveAllTopics:function(e){r.dispatch({actionType:o.RECEIVE_RAW_TOPICS,data:e})},receiveCreatedTopic:function(e){r.dispatch({actionType:o.RECEIVE_RAW_CREATED_TOPIC,rawTopic:e})},failedToCreateTopic:function(e,t){r.dispatch({actionType:o.FAILED_TO_CREATE_TOPIC,id:e.id,reason:t})}}},99:function(e,t,n){function r(){return{allTopics:l.getAll(),topTopic:l.getTopTopic(),user:p.getUserData()}}var o=n(100),i=n(105),a=n(103),s=n(104),u=n(102),c=n(7),l=n(62),p=n(109),d=c.createClass({displayName:"App",getInitialState:function(){return r()},componentDidMount:function(){l.addChangeListener(this._onTopicChange),p.addChangeListener(this._onUserChange)},componentWillUnmount:function(){l.removeChangeListener(this._onTopicChange),p.removeChangeListener(this._onUserChange)},render:function(){return c.createElement("div",null,c.createElement(s,{isLoggedIn:this.state.user.isLoggedIn,email:this.state.user.email}),c.createElement(u,{modal:this.state.user.modal}),c.createElement(o,{topTopic:this.state.topTopic.text,topStat:this.state.topTopic.stat}),c.createElement(i,{allTopics:this.state.allTopics}),c.createElement(a,{allTopics:this.state.allTopics}))},_onTopicChange:function(){this.setState({allTopics:l.getAll(),topTopic:l.getTopTopic()})},_onUserChange:function(){this.setState({user:p.getUserData()})}});e.exports=d},100:function(e,t,n){var r=n(7),o=n(39),i=n(61),a=n(106),s=r.createClass({displayName:"Header",render:function(){return r.createElement("header",{id:"header"},r.createElement("h1",null,"Trending Burger Places"),r.createElement("h2",null,"Top Burger"),r.createElement(a,{topTopic:this.props.topTopic,topStat:this.props.topStat}),r.createElement(i,{id:"new-topic",placeholder:"Fav burger?",onSave:this._onSave}))},_onSave:function(e){e.trim()&&o.create(e)}});e.exports=s},101:function(e,t,n){var r=n(7);n(183);var o=r.createClass({displayName:"InputFormField",render:function(){return r.createElement("input",{type:this.props.type,placeholder:this.props.placeholder,ref:this.props.ref})}});e.exports=o},102:function(e,t,n){var r=n(7),o=n(83),i=n(101),a=n(60);n(184);var s=r.createClass({displayName:"LoginApp",_toggleRegister:function(){this.setState({showLogin:!this.state.showLogin})},_loginSubmit:function(){var e,t;e=this.refs.emailForm.getDOMNode().value,t=this.refs.passwordForm.getDOMNode().value,a.submitLoginCredentials({email:e,password:t})},_registerSubmit:function(){var e,t;e=this.refs.emailForm.getDOMNode().value,t=this.refs.passwordForm.getDOMNode().value,cpswd=this.refs.passwordConfirmForm.getDOMNode().value,a.submitSignUpCredentials({email:e,password:t})},getInitialState:function(){return{showLogin:!0}},render:function(){var e,t;return this.state.showLogin?(e=r.createElement("fieldset",null,r.createElement(i,{type:"email",placeholder:"Email",ref:"emailForm"}),r.createElement(i,{type:"password",placeholder:"Password",ref:"passwordForm"}),r.createElement("button",{className:"mui-button__login",onClick:this._loginSubmit},"Login")),t="I do not have a ninja account"):(e=r.createElement("fieldset",null,r.createElement(i,{type:"email",placeholder:"Email",ref:"emailForm"}),r.createElement(i,{type:"password",placeholder:"Password",ref:"passwordForm"}),r.createElement(i,{type:"password",placeholder:"Confirm Password",ref:"passwordConfirmForm"}),r.createElement("button",{className:"mui-button__login",onClick:this._registerSubmit},"Register")),t="I already have an ninja account, log me in!"),r.createElement("div",{className:o({"div-modal__overlay":this.props.modal})},r.createElement("div",{className:o({"div-modal__content--show":this.props.modal,"div-modal__content--hide":!this.props.modal})},r.createElement("h1",null,"Login to unlock awesome"),e,r.createElement("div",{className:"div-modal__logintoggle",onClick:this._toggleRegister},t)))}});e.exports=s},103:function(e,t,n){var r=n(7),o=r.PropTypes,i=n(108),a=n(29),s=r.createClass({displayName:"MainSection",propTypes:{allTopics:o.object.isRequired},render:function(){if(Object.keys(this.props.allTopics).length<1)return null;var e=this.props.allTopics,t=[];return a.forEach(e,function(e,n){t.push(r.createElement(i,{id:n,key:n,topic:e}))}),r.createElement("section",{id:"main-section"},r.createElement("h3",null,"Vote"),r.createElement("ul",{id:"topic-list"},t))}});e.exports=s},104:function(e,t,n){var r=n(7),o=n(60),i={color:"#fff",backgroundColor:"transparent",cursor:"pointer",border:"none",fontSize:"1rem",fontFamily:"Roboto Condensed"};n(185);var a=r.createClass({displayName:"NavigationBar",render:function(){var e;return e=this.props.isLoggedIn?r.createElement("span",{style:i},this.props.email):r.createElement("span",{style:i,onClick:this._toggleModal},"Login | Register"),r.createElement("nav",null,r.createElement("div",{className:"div-navwrapper"},r.createElement("a",{href:"#",className:"div-navwrapper__logo"},"Ninja Ocean"),r.createElement("ul",null,r.createElement("li",null,e))))},_toggleModal:function(){o.toggleModal()}});e.exports=a},105:function(e,t,n){var r=n(7),o=r.PropTypes,i=n(39),a=n(107),s=n(29),u=r.createClass({displayName:"SideSection",propTypes:{allTopics:o.object.isRequired},render:function(){var e=this.props.allTopics,t=[];return s.forEach(e,function(e){t.push(r.createElement(a,{key:e.id,title:e.text,count:e.count}))}),r.createElement("div",{id:"side-section"},r.createElement("h3",null,"Tally"),r.createElement("ul",null,t))},_onClearCompletedClick:function(){i.destroyCompleted()}});e.exports=u},106:function(e,t,n){var r=n(7),o=r.createClass({displayName:"Statistics",render:function(){return r.createElement("div",{id:"stat-section"},r.createElement("span",{className:"topic"},this.props.topTopic),r.createElement("span",{className:"stat"},this.props.topStat+"%"))}});e.exports=o},107:function(e,t,n){var r=n(7),o=r.createClass({displayName:"TopicCountItem",render:function(){return r.createElement("li",{key:this.props.key},r.createElement("span",{className:"title"},this.props.title),r.createElement("span",{className:"count"},this.props.count))}});e.exports=o},108:function(e,t,n){var r=n(7),o=r.PropTypes,i=n(39),a=n(61),s=n(83),u=r.createClass({displayName:"TopicItem",propTypes:{topic:o.object.isRequired},getInitialState:function(){return{isEditing:!1}},render:function(){var e,t=this.props.topic;return this.state.isEditing&&(e=r.createElement(a,{className:"edit",onSave:this._onSave,value:t.text})),r.createElement("li",{className:s({editing:this.state.isEditing}),key:t.id},r.createElement("div",{className:"view"},r.createElement("label",{onDoubleClick:this._onDoubleClick},t.text),r.createElement("button",{className:"increment",onClick:this._onIncrement},"+"),r.createElement("button",{className:"decrement",onClick:this._onDecrement},"-"),r.createElement("button",{className:"destroy",onClick:this._onDestroyClick},String.fromCharCode(215))),e)},_onToggleComplete:function(){i.toggleComplete(this.props.topic)},_onDoubleClick:function(){this.setState({isEditing:!0})},_onIncrement:function(){i.increment(this.props.topic.id)},_onDecrement:function(){i.decrement(this.props.topic.id)},_onSave:function(e){i.updateText(this.props.topic.id,e),this.setState({isEditing:!1})},_onDestroyClick:function(){i.destroy(this.props.topic.id)}});e.exports=u},109:function(e,t,n){var r=n(28),o=n(94).EventEmitter,i=n(27),a=(n(63),n(64)),s=(n(29),"change"),u={},c=a({},o.prototype,{init:function(){u.email="",u.password="",u.modal=!1},getUserData:function(){return u},emitChange:function(){this.emit(s)},addChangeListener:function(e){this.on(s,e)},removeChangeListener:function(e){this.removeListener(s,e)}});c.init(),r.register(function(e){switch(e.actionType){case i.TOGGLE_MODAL:console.log("Converting"+u.modal),u.modal=!u.modal,c.emitChange();break;case i.SUCCESSFUL_LOGIN:case i.SUCCESSFUL_SIGNUP:u.email=e.data,u.isLoggedIn=!0,u.modal=!1,c.emitChange()}}),e.exports=c},110:function(e,t,n){e.exports.Dispatcher=n(111)},111:function(e,t,n){"use strict";function r(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}var o=n(112),i=1,a="ID_";r.prototype.register=function(e){var t=a+i++;return this.$Dispatcher_callbacks[t]=e,t},r.prototype.unregister=function(e){o(this.$Dispatcher_callbacks[e],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",e),delete this.$Dispatcher_callbacks[e]},r.prototype.waitFor=function(e){o(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var t=0;t<e.length;t++){var n=e[t];this.$Dispatcher_isPending[n]?o(this.$Dispatcher_isHandled[n],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):(o(this.$Dispatcher_callbacks[n],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this.$Dispatcher_invokeCallback(n))}},r.prototype.dispatch=function(e){o(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(e);try{for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]||this.$Dispatcher_invokeCallback(t)}finally{this.$Dispatcher_stopDispatching()}},r.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},r.prototype.$Dispatcher_invokeCallback=function(e){this.$Dispatcher_isPending[e]=!0,this.$Dispatcher_callbacks[e](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[e]=!0},r.prototype.$Dispatcher_startDispatching=function(e){for(var t in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[t]=!1,this.$Dispatcher_isHandled[t]=!1;this.$Dispatcher_pendingPayload=e,this.$Dispatcher_isDispatching=!0},r.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},e.exports=r},112:function(e){"use strict";var t=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return c[l++]}))}throw u.framesToPop=1,u}};e.exports=t},113:function(e){"use strict";var t=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=t},183:function(e,t,n){var r=n(95);"string"==typeof r&&(r=[[e.id,r,""]]);n(59)(r,{})},184:function(e,t,n){var r=n(96);"string"==typeof r&&(r=[[e.id,r,""]]);n(59)(r,{})},185:function(e,t,n){var r=n(97);"string"==typeof r&&(r=[[e.id,r,""]]);n(59)(r,{})}});