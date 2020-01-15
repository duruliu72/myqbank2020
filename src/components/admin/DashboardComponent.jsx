import React, { Component } from "react";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <ul>
          <li>
            <Link to="/admin/posts">Posts</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
