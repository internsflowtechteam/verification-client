import React, { useState } from 'react'
import styles from './styles.module.scss';
import axios from 'axios';
const Verfication=()=>{
  const [verificationid, setFormData]=useState("");
  const handleChange=(e)=>{
    setFormData({...verificationid,[e.target.name]:e.target.value});
  };
    const handleSubmit=async(e)=>{
      e.preventDefault() ;
      try{
        axios.post('http://localhost:3004/verify/verify', {
        verification: verificationid,
      })
      .then(function (response) {
       
      })
      }
      catch(err){
        console.log(err);
      }
    }
  return (
    <div>
    <div className={styles.card}>
  <p className={styles.head}><strong>Verification</strong></p>
  <p>Enter your verification code of the <strong>certificate/offerletter</strong></p>
  <input type='text' name='verificationid' onChange={handleChange}/>
  <button onClick={handleSubmit}>Verify</button>
  <p className={styles.cardfooter}>Internsflow</p>
</div>
    </div>
  )
}
export default Verfication;
