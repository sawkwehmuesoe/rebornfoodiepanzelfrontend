import React, { useEffect, useState } from 'react'
import { createrecipes } from '../api/getrecipes';
import { getcategory } from '../api/getcategories';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CreateRecipes = () => {
    const [image, setImage] = useState("");
    const [inputData, setInputData] = useState({ image: '' || '', title: '', description: '',instruction : '', category_id: '1', amount: '', type: 'free' });


    

    // const handleImageChange = (event) => {
    //     const selectedImage = event.target.files[0];

    //     console.log(selectedImage);
    //     setImage(selectedImage);
    //   };

    const [error, setError] = useState("");
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getcategory().then((response) => {
            if (response.status === 200) {
                // console.log(response);
                setCategory(response.data.data)
                // console.log(category);
            }
        }).catch(e => console.log(e))

    }, []);

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image)
        formData.append("title", inputData.title)
        formData.append("description", inputData.description)
        formData.append("instruction", inputData.instruction)
        formData.append("category_id", inputData.category_id)
        formData.append("amount", inputData.amount)
        formData.append("type", inputData.type)
        

        try {

            const response = await createrecipes(formData);

            if (response.status === 200) {
                //  alert("success");
                //  console.log(response);
                
                navigate("/recipes");
            }

        } catch (e) {


            if (e.response.status === 422) {
                // console.log(e.response.data);
                setError(e.response.data.data);

            }

        }

        // console.log(inputData);


    }

    const backHandler = () => {
        navigate("/recipes");
    }

    return (
        <>
            <section className="margintops">
                <div className="col-md-5 mx-auto">
                    <div className="bg-white p-5 rounded">

                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-outline-secondary' onClick={backHandler}><FontAwesomeIcon icon={faX} /></button>
                        </div>
                        <form onSubmit={onHandleSubmit} action="" encType="multipart/form-data" >

                            <div className='form-group mb-3'>
                                <label htmlFor="image">Image</label>
                                <input type="file" name="image" id="image" className='form-control' onChange={e => {
                                    const selectedImage = e.target.files[0];
                                    //  setImage(URL.createObjectURL(selectedImage))
                                    setImage(selectedImage)

                                    //  setInputData({ ...inputData, image: selectedImage})
                                }

                                } />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" className='form-control' value={inputData.title} onChange={e =>
                                    setInputData({ ...inputData, title: e.target.value })
                                } />
                                {error && error.title && <span className='text-danger'>{error.title}</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" cols="30" rows="5" className='form-control' value={inputData.description} onChange={e =>
                                    setInputData({ ...inputData, description: e.target.value })
                                } ></textarea>
                                {error && error.description && <span className='text-danger'>{error.description}</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="instruction">Instruction</label>
                                <textarea name="instruction" id="instruction" cols="30" rows="5" className='form-control' value={inputData.instruction} onChange={e =>
                                    setInputData({ ...inputData, instruction: e.target.value })
                                } ></textarea>
                                {error && error.instruction && <span className='text-danger'>{error.instruction}</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="category">Category</label>
                                <select name="category" id="category" className='form-select' defaultValue={inputData.id} onChange={e => setInputData({ ...inputData, id: e.target.value })} >
                                    <option selected disabled>Choose Category</option>
                                    {category.length > 0 && (
                                        category.map((item, idx) =>
                                            <option key={idx} value={item.id}>{item.category}</option>
                                        )
                                    )}
                                </select>
                                {error && error.category && <span className='text-danger'>{error.category}</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" name="amount" id="amount" className='form-control' value={inputData.amount} onChange={e =>
                                    setInputData({ ...inputData, amount: e.target.value })
                                } />
                                {error && error.amount && <span className='text-danger'>{error.amount}</span>}
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="type">Type</label>
                                <select name="type" id="type" className='form-select' value={inputData.type} onChange={e => setInputData({ ...inputData, type: e.target.value })}>
                                    <option value="free">Free</option>
                                    <option value="premium">Premium</option>
                                </select>
                                {error && error.type && <span className='text-danger'>{error.type}</span>}
                            </div>

                            <div className='d-grid'>
                                <button type="submit" className='btn btn-primary'>Create Recipes</button>
                            </div>
                        </form>




                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateRecipes