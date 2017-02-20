import React, { Component } from 'react';
import Grade from './Grade';

class Student extends Component {
    render() {
        const marks = this.props.student.marks.map((m, i) =>
            <li key={i}><Grade grade={m} /></li>);
        return (
            <div>
                <h3>{this.props.student.name}</h3>
                <ol>
                    {marks}
                </ol>
            </div>
        );
    }
}

export default Student;
