import React, { useEffect, useState } from "react";
import http from "../Pages/http";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http
      .get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  };

  const deleteUser = (id) => {
    http
      .delete("/users/" + id)
      .then((res) => {
        fetchAllUsers(); // Refresh the list after deleting a user
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Home Page</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={{ pathname: "/edit/" + user.id }}
                  className="btn btn-primary me-2 mt-2"
                >
                  Edit
                </Link>

                <Link
                  to={{ pathname: "/view/" + user.id }}
                  className="btn btn-info me-2 mt-2"
                >
                  View
                </Link>
                <button
                  type="button"
                  className="btn btn-danger me-2 mt-2"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
