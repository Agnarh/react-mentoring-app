import React from 'react';
import _ from 'ramda';
import TodoListItem from './todoListItemComponent';

var ToDoList = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                { id: 1, title: 'To-do item #1', isDone: false },
                { id: 2, title: 'To-do item #2', isDone: true },
                { id: 3, title: 'To-do item #3', isDone: false },
                { id: 4, title: 'To-do item #4', isDone: false },
                { id: 5, title: 'To-do item #5', isDone: false }
            ]
        };
    },
    onTodoCheck: function (id) {
        var todos = this.state.todos.map(item => { 
            if (item.id === id) {
                item.isDone = !item.isDone;
            }

            return item;
        });
        this.setState({ todos });
    },
    renderTodoItem: function (item) {
        return (
            <TodoListItem key={item.id} item={item} onTodoCheck={this.onTodoCheck} />
        );
    },
    render: function () {
        return (
            <ul className="list-group">
                {this.state.todos.map(this.renderTodoItem)}
            </ul>
        );
    }
});

export default ToDoList;