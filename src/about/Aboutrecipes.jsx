import React from 'react'
import Category from '../categories/Category'
import Recipesmenu from '../recipes/Recipesmenu'
import Popular from '../popular/Popular'
import { Button } from 'bootstrap'

const Aboutrecipes = () => {
    return (
        <>
            <section className='aboutrecipe'>
                <div className='container mt-5 bg-white p-5 rounded shadow'>
                    <div className="row align-items-center">
                        <div className='col-md-7 mx-auto'>
                            <div>
                                <h2> Everyone can be a chef in their on kitchen</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit facere accusantium mollitia expedita labore pariatur ut, ipsa sed nostrum esse autem illum vero beatae est. Modi deserunt esse quis.</p>
                            </div>
                            
                            <button className='btn btn-warning text-white mb-4'>Learn More</button>
                            
                        </div>

                        <div className='col-md-5'>
                            <div className='rounded'>
                                <img className='img-fluid' src="./cook-3117871_1280.jpg" alt="vector" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Aboutrecipes