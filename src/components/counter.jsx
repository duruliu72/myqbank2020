import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: ["Tag1"]
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tag!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "please Create tags"}
        {this.renderTags()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  countFormat() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
