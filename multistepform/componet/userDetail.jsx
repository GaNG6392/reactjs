import React from 'react';

function UserDetail(props) {
  const { formData } = props;
  return (
    <div>
      <div>
        <h1>Success !</h1>
        <hr />
        <div className=''>
          <span>Name :--- {formData.name}</span>

          <br />
          <span>Email:---{formData.email}</span>
          <br />
          <span>Password:---{formData.password}</span>
          <br />
          <span>DOB:---{formData.dob}</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
