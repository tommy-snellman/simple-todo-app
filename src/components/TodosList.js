import React from "react";
import Todoitem from "./TodoItem";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </>
    );
  }
}

export default TodosList;
