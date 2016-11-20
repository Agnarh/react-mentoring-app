import React from 'react';

var CategoryTreeItem = React.createClass({
    renderTreeItem: function (item) {
        return (
            <div key={item.id} className="list-group-item">
                <div className="row">
                    <div className="col-xs-8">
                        <a href="/"><span className="pr-5">{item.title}</span></a>
                        <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-edit"></span></button>
                    </div>
                    <div className="col-xs-4">
                        <div className="pull-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-trash"></span></button>
                                <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-plus"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                {item.children ? <div className="list-group category-group">{item.children.map(this.renderTreeItem)}</div> : null}
            </div>
        );
    },
    render: function () {
        return this.renderTreeItem(this.props.item);
    }
});

export default CategoryTreeItem;