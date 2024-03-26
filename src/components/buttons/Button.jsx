import React from 'react'
import "./button.css"
import { useNavigate } from 'react-router-dom';

const Button = ({name,clickname}) => {

    const navigate = useNavigate();

    const dataFunction = (item) => {

        console.log(item);
        
        navigate("/show",{state: item})
    
      };
    

    // const handleButtonClick = (item) => {
        
        
    //     clickname(dataToSend);
    //   };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <a className="btn px-4 btncos" type="button" onClick={()=>dataFunction(clickname)}>{name}</a>
            </div>
        </>
    )
}

export default Button
