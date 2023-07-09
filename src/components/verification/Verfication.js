import React, { useState } from 'react'
import axios from 'axios';
const Verfication=()=>{
  const [verificationid, setFormData]=useState(null);
  const handleChange=(e)=>{
    setFormData({...verificationid,[e.target.name]:e.target.value});
    
  };
    const handleSubmit=async(e)=>{
      e.preventDefault() ;
      axios.post('http://localhost:3004/verify/verify', {
        verification: verificationid,
      })
      .then(function (response) {
        console.log(response);
      })
    }
  return (
    <div>
      <form>
        <p>Enter your certificate id :</p>
        <input type='text' name='verificationid' onChange={handleChange}/>
        <button onClick={handleSubmit}>Verify</button>
      </form>
    </div>
  )
}
export default Verfication;
