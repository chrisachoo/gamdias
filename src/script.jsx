import React, { useState } from 'react'
import { Input } from './components'

function App() {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mail: ''
  });

  const handleFormChange = (event) => {
    const updatedForm = { ...form };
    updatedForm[event.target.name] = event.target.value

    // console.log('Form changed: ', updatedForm)
    setForm(updatedForm);
    
  };

  const handleSubmit = (event, form) => {
    event.preventDefault();
    console.log("form submited" + form)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input type={`text`} name={`firstName`} value={form.firstName} placeholder={`firstName`} onChange={handleFormChange} />
        <Input type={`text`} name={`lastName`} value={form.lastName} placeholder={`lastName`} onChange={handleFormChange} />
        <Input type={`email`} name={`mail`} value={form.mail} placeholder={`mail`} onChange={handleFormChange} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App