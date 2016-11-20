import React from 'react';
import Header from './header/headerComponent';
import CategoryTree from './categoryTree/categoryTreeComponent';
import ToDoList from './todoList/todoListComponent';

var App = function (props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-5">
                    <CategoryTree />
                </div>
                <div className="col-xs-7">
                    <ToDoList />
                </div>
            </div>
        </div>
    );
};

export default App;