import { useState } from 'react';
import UserDetail from '../componet/userDetail';
import UserForm from '../componet/userForm';
import './App.css';

function App() {
  const data = [
    {
      id: 'name',
      label: 'Name',
      inputType: 'text',
      buttonName: 'Next',
      placeHolder: 'your name  ',
    },
    {
      id: 'email',
      label: 'Email',
      inputType: 'text',
      buttonName: 'Next',
      placeHolder: 'your email',
    },
    {
      id: 'password',
      label: 'Password',
      inputType: 'password',
      buttonName: 'Next',
      placeHolder: '',
    },
    {
      id: 'dob',
      label: 'DOB',
      inputType: 'date',
      buttonName: 'Submit',
      placeHolder: '  ',
    },
  ];
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState(data);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === form.length - 1) {
      console.log('form submited');
      setIsFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };
  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
    console.log(index);
  };
  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };
  console.log('formData ->', formData);
  return (
    <div className='App'>
      {!isFormSubmitted ? (
        <UserForm
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          form={form}
          formData={formData}
          index={index}
        />
      ) : (
        <UserDetail formData={formData} />
      )}
    </div>
  );
}

export default App;
