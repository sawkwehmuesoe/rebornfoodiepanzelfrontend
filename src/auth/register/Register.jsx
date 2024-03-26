import React, { useState } from 'react'
import Button from '../../components/buttons/Button'
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/authservice';


const Register = () => {

    const [image, setImage] = useState("");
    const [inputData, setInputData] = useState({image :'', name: '', email: '',password : '', confirmation_password: '', address: '', phone: '' });

    const navigate = useNavigate();

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        console.log(image);
        const formData = new FormData();
        formData.append("image", image)
        formData.append("name", inputData.name)
        formData.append("email", inputData.email)
        formData.append("password", inputData.password)
        formData.append("confirmation_password", inputData.confirmation_password)
        formData.append("address", inputData.address)
        formData.append("phone", inputData.phone)
        

        const response = await register(formData);

        if (response.status === 200) {

            alert("Account Create Successfully");

            navigate("/login");
        }

        // console.log(inputData);
    }

    return (
        <>
            <section id="login" className="margintops" >
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className='w-75 px-5'>
                            <h3 className='text-center'>Create Account</h3>

                            <form action="" onSubmit={onHandleSubmit} encType="multipart/form-data">

                                <div className='form-group mb-3'>
                                    <input type="file" name="image" className='form-control' onChange={e => {
                                        const selectedImage = e.target.files[0];
                                        //  setImage(URL.createObjectURL(selectedImage))
                                        setImage(selectedImage)
                                        //  setInputData({ ...inputData, image: selectedImage})
                                    }

                                    } />
                                </div>

                                <div className='form-group mb-3'>
                                    <input type="text" name='name' id='name' className="form-control p-2" placeholder='Name' value={inputData.name} onChange={e =>
                                        setInputData({ ...inputData, name: e.target.value })
                                    } />
                                </div>

                                <div className='form-group mb-3'>
                                    <input type="email" name='email' id='email' className="form-control p-2" placeholder='Email' value={inputData.email} onChange={e =>
                                        setInputData({ ...inputData, email: e.target.value })
                                    } />
                                </div>

                                <div className='form-group mb-3'>
                                    <input type="password" name='password' id='password' className="form-control p-2" placeholder='Password' value={inputData.password} onChange={e =>
                                        setInputData({ ...inputData, password: e.target.value })
                                    } />
                                </div>

                                <div className='form-group mb-3'>
                                    <input type="password" name='confirmation_password' id='confirmation_password' className="form-control p-2" placeholder='Comfirm Password' value={inputData.confirmation_password} onChange={e =>
                                        setInputData({ ...inputData, confirmation_password: e.target.value })
                                    } />
                                </div>

                                <div className='form-group mb-3'>
                                    <input type="text" name='address' id='address' className="form-control p-2" placeholder='Address' value={inputData.address} onChange={e =>
                                        setInputData({ ...inputData, address: e.target.value })
                                    } />
                                </div>

                                <div className='form-group mb-3'>
                                    <input type="text" name='phone' id='phone' className="form-control p-2" placeholder='Phone' value={inputData.phone} onChange={e =>
                                        setInputData({ ...inputData, phone: e.target.value })
                                    } />
                                </div>

                                <div className='d-grid mb-4'>
                                    <button type="submit" className='btn btn-primary'>Register</button>
                                </div>

                                <p className='mt-4'>Already have an accout? <a href="login" className='text-danger'>Login Here...</a> </p>
                            </form>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img className='img-fluid' src="./recipelogin.png" alt="vector" />
                    </div>
                </div>
            </section>
        </>

    )

}

export default Register

