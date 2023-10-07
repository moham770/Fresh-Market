import axios from 'axios'
import './ForgetPassword.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Puff } from 'react-loader-spinner'



export default function ForgetPassword() {


 const navigate =  useNavigate()
 const [Loading, setLoading] = useState(false)
 async  function  getCodeForResetPassword(){
   const emailValue= document.getElementById('email')
   try {
         setLoading(true)
        return await  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
          email:emailValue.value
        })
         .then((res)=>{ 
          if(res.data.statusMsg ==='success'){
            navigate('/VerifyResetCode')
          
          }
          setLoading(false)
        })
         .catch((err)=>{err
          setLoading(false)
        })

    } catch (error) {
        error
      console.log('error',error)
    }


   }
  
  
  
  return  <>
    <div className="mx-auto my-5 w-75 bg-main-light p-5 rounded-3 shadow">
      <form>

        <h3>Forgot password</h3>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' placeholder='Enter Your Email' className='form-control mt-1' />
        <p style={{fontSize:"15px"}} className='lead text-muted mt-2'>We’ll send a verification code to this email</p>


        <button onClick={()=>{getCodeForResetPassword()}} type='button' className='btn bg-main text-white my-3'>
        {Loading ? <Puff
                  height="35"
                  width="35"
                  radius={1}
                  color="#fff"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />:"Submit"}

        </button>
      </form>
    </div>

    </>

}
