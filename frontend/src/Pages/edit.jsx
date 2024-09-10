import React, { useEffect, useState } from "react";
import http from "./http";
import { useNavigate, useParams } from "react-router-dom";
function Edit(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitForm = () => {
    http.put("/users/" + id, inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Edit User</h2>
      <div className="row ">
        <div className="col-sm-6 justify-content-center">
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

            <button
              type="button"
              className="btn btn-info mt-2"
              onClick={submitForm}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
