import React, { useEffect, useState } from "react";
import http from "../Pages/http";
import { useNavigate } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitForm = () => {
    http.post("/users", inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2 className="col-sm-2 justify-content-center mx-auto">New User</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center mx-auto">
          <div className="card p-4">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              value={inputs.name || ""}
              onChange={handleChange}
            />

            <label htmlFor="">Email</label>
            <input
              type="Email"
              name="email"
              className="form-control mb-2"
              value={inputs.email || ""}
              onChange={handleChange}
            />

            <label htmlFor="">Password</label>
            <input
              type="Password"
              name="password"
              className="form-control mb-2"
              value={inputs.password || ""}
              onChange={handleChange}
            />

            <button
              type="button"
              className="btn btn-info mt-2"
              onClick={submitForm}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
