import React from 'react'
import recipe1 from '../assets/img/receipes/meal.jpg'
import Button from '../components/buttons/Button'



const Recipesitem = ({name,date,title,text,image}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 recipescards pb-3">
                    <img src={image} alt="recipe1" className="recipeimgs" />
                    <div className="p-3">
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <span>{name}</span>
                            </div>
                            <div>
                                <span>{date}</span>
                            </div>
                        </div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <Button name="Buy"/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Recipesitem