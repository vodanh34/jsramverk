import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Readme from "../../README.md";

class Week1 extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
      fetch(Readme)
          .then(res => res.text())
              .then(text => this.setState({ markdown: text }));
    }

    render() {
      const { markdown } = this.state;
      return (
          <div className="contents">
              <h1>Report of Week 1</h1>

              <p>Link to <a href="https://github.com/vodanh34/jsramverk">Github</a></p>

              <ReactMarkdown source={markdown} />

          </div>
      );
    }
}

export default Week1;
