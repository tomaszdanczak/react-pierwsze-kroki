(this["webpackJsonpreact-pierwsze-kroki"]=this["webpackJsonpreact-pierwsze-kroki"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(11),o=n.n(r),c=n(12),s=n(10),u=n(4),d=n(5),l=n(7),v=n(6),h=(n(17),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={visible:!1},e.toogleVisible=function(){e.setState((function(e){return{visible:!e.visible}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.visible?"overlay__modal overlay__modal--visible":"overlay__modal";return Object(h.jsxs)("div",{className:"overlay",children:[Object(h.jsx)("span",{onClick:this.toogleVisible,children:"info"}),Object(h.jsxs)("div",{className:e,children:[Object(h.jsx)("span",{onClick:this.toogleVisible,children:"close"}),this.props.children]})]})}}]),n}(i.Component),j=function(e){isNaN(parseInt(e.key))&&e.preventDefault()},f=function(e){return""===e||isNaN(parseInt(e))?-1:parseInt(e)},b=function(e,t){return 3600*e+60*t},p=(n(19),n(20),function(e){var t=e.name,n=e.hour,i=e.minute,a=e.timeNow,r=e.onRemove,o=e.onEditInit,c=e.id,s=b(n,i)-(b(a.hour,a.minute)+a.seconds),u=s>0?function(e){var t=e,n=Math.floor(t/3600).toString().padStart(2,0);t-=3600*n;var i=Math.floor(t/60).toString().padStart(2,0);return t=(t-=60*i).toString().padStart(2,0),"".concat(n,":").concat(i,":").concat(t)}(s):"tomorrow";return Object(h.jsxs)("div",{className:"countdown",children:[Object(h.jsx)("strong",{children:t})," - ",u,Object(h.jsxs)("div",{className:"countdown__icons",children:[Object(h.jsx)("i",{className:"icon edit",onClick:function(){return o(c)}}),Object(h.jsx)("i",{className:"icon times",onClick:function(){return r(c)}})]}),Object(h.jsxs)(m,{children:[Object(h.jsx)("h1",{children:t}),Object(h.jsxs)("p",{children:[n.toString().padStart(2,0),":",i.toString().padStart(2,0)]})]})]})}),O=n(3),g=n(2),S=n.n(g),x=(n(23),function(e){var t=e.onInputChange,n=e.onSave,i=e.onCancel,a=e.name,r=e.hour,o=e.minute,c=a.length>0&&function(e){return e>=0&&e<=23}(r)&&function(e){return e>=0&&e<=59}(o),s=""===a&&-1===r&&-1===o;return Object(h.jsxs)("div",{className:"edit-event",children:[Object(h.jsxs)("div",{className:"edit-event__input-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"name"}),Object(h.jsx)("input",{type:"text",id:"name",name:"name",value:a,onChange:function(e){t(Object(O.a)({},e.target.name,e.target.value))}})]}),Object(h.jsxs)("div",{className:"edit-event__input-group",children:[Object(h.jsx)("label",{htmlFor:"hour",children:"hour"}),Object(h.jsx)("input",{type:"tel",id:"hour",name:"hour",value:-1===r?"":r,onKeyPress:function(e){return j(e)},onChange:function(e){t(Object(O.a)({},e.target.name,f(e.target.value)))}})]}),Object(h.jsxs)("div",{className:"edit-event__input-group",children:[Object(h.jsx)("label",{htmlFor:"minute",children:"minute"}),Object(h.jsx)("input",{type:"tel",id:"minute",name:"minute",value:-1===o?"":o,onKeyPress:function(e){return j(e)},onChange:function(e){t(Object(O.a)({},e.target.name,f(e.target.value)))}})]}),Object(h.jsx)("button",{disabled:!c,onClick:n,children:"OK"}),Object(h.jsx)("button",{disabled:s,onClick:i,children:"Cancel"})]})});x.PropType={name:S.a.string,hour:S.a.number,minute:S.a.number,onInputChange:S.a.func,onSave:S.a.func,onCancel:S.a.func};var E=x,y=n(8),w=n.n(y),C=(n(25),function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={events:[{id:0,name:"\u015bniadanie",hour:7,minute:0},{id:1,name:"obiad",hour:15,minute:0},{id:2,name:"kolacja",hour:19,minute:0}],editedEvent:{id:w()(),name:"",hour:-1,minute:-1},now:{hour:(new Date).getHours(),minute:(new Date).getMinutes(),seconds:(new Date).getSeconds()}},e.handleEditEvent=function(t){e.setState((function(e){return{editedEvent:Object(s.a)(Object(s.a)({},e.editedEvent),t)}}))},e.handleSaveEvent=function(){e.setState((function(e){return{events:e.events.find((function(t){return t.id===e.editedEvent.id}))?e.events.map((function(t){return t.id===e.editedEvent.id?e.editedEvent:t})):[].concat(Object(c.a)(e.events),[e.editedEvent]),editedEvent:{id:w()(),name:"",hour:-1,minute:-1}}}),(function(){localStorage.setItem("events",JSON.stringify(e.state.events))}))},e.handleRemoveEvent=function(t){e.setState((function(e){return{events:e.events.filter((function(e){return e.id!==t}))}}),(function(){localStorage.setItem("events",JSON.stringify(e.state.events))}))},e.handleEditInit=function(t){e.setState((function(e){return{editedEvent:e.events.find((function(e){return e.id===t}))}}))},e.handleEditCancel=function(){e.setState({editedEvent:{id:w()(),name:"",hour:-1,minute:-1}})},e.timer=function(){e.setState({now:{hour:(new Date).getHours(),minute:(new Date).getMinutes(),seconds:(new Date).getSeconds()}})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("events"))||[];this.setState({events:e});var t=setInterval(this.timer,1e3);this.setState({intervalId:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this,t=this.state.events.map((function(t){return Object(h.jsx)(p,{name:t.name,hour:t.hour,minute:t.minute,timeNow:e.state.now,id:t.id,onRemove:function(t){return e.handleRemoveEvent(t)},onEditInit:function(t){return e.handleEditInit(t)}},t.id)})),n=this.state.editedEvent,i=n.name,a=n.hour,r=n.minute;return Object(h.jsxs)("div",{className:"app",children:[t,Object(h.jsx)(E,{name:i,hour:a,minute:r,onInputChange:function(t){return e.handleEditEvent(t)},onSave:this.handleSaveEvent,onCancel:this.handleEditCancel})]})}}]),n}(i.Component));n(26);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9c945449.chunk.js.map