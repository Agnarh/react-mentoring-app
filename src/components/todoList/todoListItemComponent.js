import React from 'react';

var TodoListItem = React.createClass({
    onChangeHandler: function () {
        this.props.onTodoCheck(this.props.item.id);
    },
    render: function () {
        var item = this.props.item;
        
        return (
            <li className="list-group-item todo-item" key={item.id}>
                <div className="row">
                    <div className="col-xs-1">
                        <input 
                            type="checkbox"
                            checked={item.isDone}
                            onChange={this.onChangeHandler} />
                    </div>
                    <div className="col-xs-10">
                        <strong>{item.title}</strong>
                    </div>
                    <div className="col-xs-1">
                        <a href="/"><span className="glyphicon glyphicon-edit"></span></a>
                    </div>
                </div>
            </li>
        );
    }
});

export default TodoListItem;