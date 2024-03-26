import React from 'react'
import Title from '../components/titles/Title'

const Category = () => {

    const categoryHandler =()=>{
        
    }

    return (
        <>

            <Title titleone="Choose Category" titletwo="Recipes Categories" />

            <div className='container'>
                {/* <div className="category-slider">
                    <div className="category-card">
                        <div className='category-box'>
                            <img src="/english-breakfast.png" alt="category1" />
                            <div className="overlay">
                                <h5 className='text-white fw-bold'>Breakfast</h5>
                            </div>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="./assets/img/receipes/breakfast.jpg" alt="category1" />
                        <div className="overlay">
                            <h5 className='text-white fw-bold'>Dessert</h5>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="./assets/img/receipes/dessert.jpg" alt="category1" />
                        <div className="overlay">
                            <h5 className='text-white fw-bold'>Meal</h5>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="./assets/img/receipes/dessert2.jpg" alt="category1" />
                        <div className="overlay">
                            <h5 className='text-white fw-bold'>Soup</h5>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="./assets/img/receipes/meal.jpg" alt="category1" />
                        <div className="overlay">
                            <h5 className='text-white fw-bold'>Vegetable</h5>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="./assets/img/receipes/seafood.jpg" alt="category1" />
                        <div className="overlay">
                            <h5 className='text-white fw-bold'>Salad</h5>
                        </div>
                    </div>

                </div> */}

                <div className='row'>

                    <div className='col-md-2'>
                        <div className="category-card shadow" onClick={categoryHandler}>
                            <div className='category-box'>
                                <img src="/english-breakfast.png" alt="category1" />
                                <div className="overlay">
                                    <h5 className='text-dark fw-bold'>Breakfast</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="category-card shadow" onClick={categoryHandler}>
                            <div className='category-box'>
                                <img src="/sweets.png" alt="category1" />
                                <div className="overlay">
                                    <h5 className='text-dark fw-bold'>Dessert</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="category-card shadow" onClick={categoryHandler}>
                            <div className='category-box'>
                                <img src="/dinner.png" alt="category1" />
                                <div className="overlay">
                                    <h5 className='text-dark fw-bold'>Meal</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="category-card shadow" onClick={categoryHandler}>
                            <div className='category-box'>
                                <img src="/soup.png" alt="category1" />
                                <div className="overlay">
                                    <h5 className='text-dark fw-bold'>Soup</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="category-card shadow" onClick={categoryHandler}>
                            <div className='category-box'>
                                <img src="/vegetable.png" alt="category1" />
                                <div className="overlay">
                                    <h5 className='text-dark fw-bold'>Vegetable</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className="category-card shadow" onClick={categoryHandler}>
                            <div className='category-box'>
                                <img src="/salad.png" alt="category1" />
                                <div className="overlay">
                                    <h5 className='text-dark fw-bold'>Salad</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Category


