(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=n(5),i=n(1),s=n(2),d=n(3),p=n(4),u=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,a=t.id,r=t.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChangeProps(a)}}),o.a.createElement("button",{onClick:function(){return e.props.deleteTodoProps(a)}},"Delete"),o.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r)))}}]),n}(o.a.Component),m=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.props.todos.map((function(t){return o.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),n}(o.a.Component),h=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App"),o.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},f=n(8),b=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},o.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add Todo...",value:this.state.title,name:"title",onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))}}]),n}(a.Component),v=n(17),j=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(v.a)(),title:"Setup development environment",completed:!0},{id:Object(v.a)(),title:"Develop website and add content",completed:!1},{id:Object(v.a)(),title:"Deploy to live server",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodoItem=function(t){var n={id:Object(v.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[n])})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(b,{addTodoProps:this.addTodoItem}),o.a.createElement(m,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),n}(o.a.Component);n(14);c.a.render(o.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7a0bb0cf.chunk.js.map