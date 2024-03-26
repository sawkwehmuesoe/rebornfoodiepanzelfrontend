import React, { useState } from 'react'
import { login } from '../../api/authservice';
import Bannerrecipe from '../../banner/Bannerrecipe';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [inputData,setInputData] = useState({});
  const navigate = useNavigate();

  const onHandleSubmit = async(e)=>{
      e.preventDefault();

      const response = await login(inputData)

      if(response.status === 200){
          // alert(response.data.data.token);

          localStorage.setItem('token',response.data.data.token);

          // console.log();

          // <Bannerrecipe/>
          navigate("/home");
          window.location.reload();
      }
  }

  return (
    <>
      <section id="login" className="" >
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className='w-75 p-5'>
              <form onSubmit={onHandleSubmit}>

                <h3 className="fw-bold text-center mb-5">Login</h3>

                <div className="form-group mb-4">
                  <input type="text" id="email" className='form-control' placeholder='Email' value={inputData.email} onChange={e=>
                    setInputData({...inputData,email:e.target.value})
                  } />
                </div>

                <div className="form-group mb-4">
                  <input type="password" className='form-control mb-2' placeholder='Password' value={inputData.password} onChange={e=>
                    setInputData({...inputData,password:e.target.value})
                  } />
                </div>

                <div className='d-grid mb-4'>
                  <button type="submit" className='btn btn-primary'>Login</button>
                </div>
                <p className='fs-6'>Don&#39;t have an account? <a href='/register' className='text-danger'>Create here...</a> </p>

              </form>
            </div>
          </div>
          <div className='col-md-6 d-none d-md-block'>
            <div className='d-flex justify-content-center'>
              <img className='img-fluid' src="./recipelogin.png" alt="vector" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login