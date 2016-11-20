import React from 'react';
import ProgressBar from './progressBarComponent';

var HeaderComponent = function (props) {
    return (
        <div>
            <div className="row">
                <div className="col-xs-4">
                    <h1>To-Do List</h1>
                </div>
                <div className="col-xs-8 search-field">
                    <div className="form-inline pull-right">
                        <div className="form-group">
                            <label className="checkbox-inline">
                                <input type="checkbox" id="showActiveChbx" />&nbsp;Show active&nbsp;
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" value="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <ProgressBar value={0.6} />
            </div>
        </div>
    );
};

export default HeaderComponent;