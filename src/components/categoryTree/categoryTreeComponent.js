import React from 'react';
import InputWithButton from '../common/inputWithButtonComponent';
import CategoryTreeItem from './categoryTreeItemComponent';

var CategoryTree = React.createClass({
    getInitialState: function () {
        return {
            categories: [
                { id: 1, title: 'Category 1', children: null },
                { id: 2, title: 'Category 2', children: null },
                { id: 3, title: 'Category 3', children: null },
                { id: 4, title: 'Category 4', children: null },
                { id: 5, title: 'Category 5', children: [
                    { id: 6, title: 'Subcategory 1', children: null },
                    { id: 7, title: 'Subcategory 2', children: [
                        { id: 9, title: 'SubSubCategory test', children: null }
                    ]},
                    { id: 8, title: 'Subcategory 3', children: null },
                ]}
            ]
        };
    },
    renderCategoryItem: function (item) {
        return (
            <CategoryTreeItem key={item.id} item={item} />
        );
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-xs-10">
                    <InputWithButton onClickHandler={this.onCategoryAdd}/>
                </div>
                <div className="col-xs-12">
                    <div className="list-group category-group">
                        {this.state.categories.map(this.renderCategoryItem)}
                    </div>
                </div>
            </div>
        );
    }
});

export default CategoryTree;