import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="all-polls">
        <ul className="polls-list">
        <Poll/>
          <li>
            <div className="poll-card">
              <header>
                <Question/>
                <Delete/>
              </header>
              <div className="content">
                <ul className="answers">
                  <li>
                    <div className="answer">
                      <p className="title">Yes:<span>1</span></p>
                      <p className="title">No:<span>3</span></p>
                      <div className="buttons">
                        <button className="up">UP</button>
                        <button className="down">DOWN</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

class Poll extends Component {
  render() {
    return <h1>Poll</h1>;
  }
}

class Question extends Component {
  render() {
    return <p className="question">First question</p>;
  }
}

class Delete extends Component {
  render() {
    return <button className="button">X</button>;
  }
}

export default App;
