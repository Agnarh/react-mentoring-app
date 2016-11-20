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
                    <div className="col-xs-9">
                        <strong>{item.title}</strong>
                    </div>
                    <div className="col-xs-2">
                        <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-edit"></span></button>
                    </div>
                </div>
            </li>
        );
    }
});

export default TodoListItem;