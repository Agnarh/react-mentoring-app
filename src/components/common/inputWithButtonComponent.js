import React from 'react';

var InputWithButton = React.createClass({
    getInitialState: function () {
        return { 
            value: '',
            isValid: false
        };
    },
    onChange: function (event) {
        this.setState({ 
            value: event.target.value,
            isValid: true 
        });
    },
    onClick: function () {
        var newState = this.getInitialState();

        if (this.state.value) {
            this.props.onClickHandler(this.state.value);
        } else {
            newState.isValid = false;
        }

        this.setState(newState);
    },
    render: function () {
        return (
            <div className="form-group">
                <div className="input-group">
                    <input 
                        className="form-control"
                        type="text"  
                        placeholder="Text input with button"
                        value={this.state.value}
                        onChange={this.onChange} />
                    <span className="input-group-btn">
                        <button 
                            className="btn btn-default" 
                            type="button" 
                            onClick={this.onClick}
                            disabled={!this.state.isValid}>
                            Add
                        </button>
                    </span>
                </div>
            </div>
        );
    }
});

export default InputWithButton;