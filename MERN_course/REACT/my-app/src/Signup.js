import React, { useState } from 'react'
import './Signup.css'

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({...formData,name:""});//
        //Checking password match or not
        if(formData.password !== formData.confirmPassword){
            alert('Password does not match!!');
            return;
        }
        console.log('Form data:', formData);
      };     
    return (
        <div className="form-container">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(event)=>handleInputChange(event)}
              required
            />
            <p>{formData.name}</p>
            <br/>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(event)=>handleInputChange(event)}
              required
            />
            <p>{formData.email}</p>
            <br/>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(event)=>handleInputChange(event)}
              required
            />
            <br/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(event)=>handleInputChange(event)}
              required
            />
            <br/>
            <button type="submit">Register</button>
            
          </form>

        </div>

        
      );
}

export default Signup