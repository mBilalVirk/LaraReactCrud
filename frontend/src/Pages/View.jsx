import React, { useEffect, useState } from "react";
import http from "./http";
import { useNavigate, useParams } from "react-router-dom";

function View(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get("/users/" + id + "/edit").then((res) => {
      setUser(res.data);
    });
  };

  const goBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <div>
      <h2>User Details</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <div className="card p-4">
            <p>
              <strong>Name: </strong> {user.name}
            </p>
            <p>
              <strong>Email: </strong> {user.email}
            </p>
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={goBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
