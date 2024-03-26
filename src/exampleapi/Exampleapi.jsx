import React, { useState } from 'react'

const Exampleapi = () => {

    const [data,setData] = useState([]);

    const addData = ()=>{
        fetch("http://127.0.0.1:8000/api/1/register").then((res)=>res.json()).then((data)=>setData(data));
    }

  return (
    <>

        <button type="button" onClick={addData}>Button</button>

        <div>
            {data.map((item)=><p>{item.name}</p>)}
        </div>

    </>
  )
}

export default Exampleapi