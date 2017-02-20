import React, { Component } from 'react';

class Grade extends Component {
    render() {
        return (
            <div>
                <strong>{this.props.grade.subject}</strong> {this.props.grade.mark}
            </div>
        );
    }
}

export default Grade;
