import React from 'react'
import seafood from '../assets/img/receipes/seafood.jpg'
import Button from '../components/buttons/Button'


const Popularitem = () => {
    return (
        <>
            <div className="row mb-5">
                <div className="col-6">
                    <img src={seafood} alt="seafood" className="popularimgs" />
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-between mb-2">
                        <div>
                            <span>By Hanabi</span>
                        </div>
                        <div>
                            <span>21/2/2023</span>
                        </div>
                    </div>
                    <p className="h5 fw-bold">Bean Slad</p>
                    <p className="text-muted">Figma ipsum component variant main layer. Text team line insert.</p>

                    <Button name="Buy" />
                </div>
            </div>
        </>
    )
}

export default Popularitem