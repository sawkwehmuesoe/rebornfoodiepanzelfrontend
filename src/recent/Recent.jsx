import React from 'react'
import Recentimageitem from './Recentimageitem'
import dessert from '../assets/img/receipes/dessert.jpg'
import dessert2 from '../assets/img/receipes/dessert2.jpg'


const Recent = () => {
  return (
    <>
        <div className="row">

            <Recentimageitem name="Phyu Phyu" imagename={dessert}/>
            <Recentimageitem name="Theingi Phwe" imagename={dessert2}/>

        </div>
    </>
  )
}

export default Recent