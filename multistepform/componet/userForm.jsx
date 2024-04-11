import React from 'react';

function UserForm(props) {
  const { handleSubmit, handleBack, handleInputChange, form, formData, index } =
    props;
  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        {index > 0 && (
          <a href='/' onClick={handleBack}>
            Back
          </a>
        )}
        <label>{form[index].label}</label>
        <input
          required
          value={formData[form[index].id]}
          id={form[index].id}
          onChange={handleInputChange}
          type={form[index].inputType}
          placeholder={form[index].placeHolder}
        />
        <button>{form[index].buttonName}</button>
      </form>
    </div>
  );
}

export default UserForm;
