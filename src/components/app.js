import React from 'react';
import Header from './header/headerComponent';
import CategoryTree from './categoryTree/categoryTreeComponent';
import Details from './details/detailsComponent';

var App = function (props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-4">
                    <CategoryTree />
                </div>
                <div className="col-xs-8">
                    <Details />
                </div>
            </div>
        </div>
    );
};

export default App;