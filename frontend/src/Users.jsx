import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/users")
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} : {user.email}
            </li>
          ))}
        </ul>
      );
    }
  }
}
