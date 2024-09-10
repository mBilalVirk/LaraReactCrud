import React, { useState } from "react";

export default function addfood() {
  const [input, setInput] = useState();
  return (
    <div>
      <h2 className="col-sm-2 justify-content-center mx-auto">New User</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center mx-auto">
          <div className="card p-4">
            <label htmlFor="">Food Name</label>
            <input type="text" name="foodname" className="form-control mb-2" />

            <label htmlFor="">Food Price</label>
            <input type="Email" name="email" className="form-control mb-2" />

            <label htmlFor="">Food Image</label>
            <input type="file" name="img" className="form-control mb-2" />

            <button type="button" className="btn btn-info mt-2">
              Add Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
