import React, { Component } from 'react';
import Student from './Student';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: 'Bob', marks: [{ subject: 'Math', mark: 93 }, { subject: 'English', mark: 92 }] },
        { name: 'Sam', marks: [{ subject: 'Math', mark: 97 }, { subject: 'English', mark: 95 }] },
        { name: 'Joe', marks: [{ subject: 'Math', mark: 82 }, { subject: 'English', mark: 89 }] }
      ]
    };
  }

  render() {
    /*const students = this.state.students.map(function (s, i) {
      return <Student key={i} student={s}/>
    });*/
    const students = this.state.students.map((s, i) => <Student key={i} student={s} />);

    return (
      <div>
        {students}
      </div>
    );
  }
}

export default App;
