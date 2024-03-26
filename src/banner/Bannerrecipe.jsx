import React, { useEffect, useState } from 'react'
import Recipesmenu from '../recipes/Recipesmenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Category from '../categories/Category'
import Popular from '../popular/Popular'
import { useNavigate } from 'react-router-dom'
import Aboutrecipes from '../about/Aboutrecipes'
import Subscribe from '../subscribe/Subscribe'
import Button from '../components/buttons/Button'
import { getrecipes } from '../api/getrecipes'
import Title from '../components/titles/Title'



const Bannerrecipe = () => {

    const [post, setPost] = useState([]);

    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    if (!token) {
        navigate("/login");
    }

    const buttonClick = () => {

        navigate("/create");
    
    }

    const viewHandler = () => {

        navigate("/recipes");
    
    }

    useEffect(() => {
        getrecipes().then((response) => {
          if (response.status === 200) {
    
            const responseData = response.data.data;

            // console.log(responseData);
    
            if(responseData.length > 6){
              const limit = responseData.slice(0,6);
            //   console.log("this is limit",limit);
                setPost(limit);
            }
    
            setPost(limit);
          }
        }).catch(e => console.log(e))
    
      }, []);

    return (
        <>
            <div id="mycarousel" className="carousel slide carousel-fade my-5" data-bs-ride="carousel"  >
                <ul className="carousel-indicators carousels-indis">
                    <li className="active" data-bs-target="#mycarousel" data-bs-slide-to="0"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    <div className=" carousel-item active banners1">
                        <div className="carousel-caption d-none d-sm-block mb-5 visuals">
                            <div className='mb-3'>
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                            </div>
                            <h1 className="text-uppercase display-4">Baked Brief</h1>
                            <p className="lead">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>

                    <div className=" carousel-item banners2">
                        <div className="carousel-caption d-none d-sm-block mb-5 visuals">
                            <div className='mb-3'>
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                            </div>
                            <h1 className="text-uppercase display-4">hygiene food</h1>
                            <p className="lead">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>

                    <div className=" carousel-item banners3">
                        <div className="carousel-caption d-none d-sm-block mb-5 visuals">
                            <div className='mb-3'>
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                                <FontAwesomeIcon icon={faStar} size='2x' color='gold' className='mx-1' />
                            </div>
                            <h1 className="text-uppercase display-4">Sweet Cake</h1>
                            <p className="lead">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>

                </div>


                <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>

                <a href="#mycarousel" className='carousel-control-next' data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>

            <Category />

           

            <div className='createresipes'>
                <button type="button" className='creatresipesbtn shadow' onClick={buttonClick} >Create <i class="fa-solid fa-plus"></i></button>
            </div>
            <section className="margintops">
                <div className="container">

                    <div className='col-md-10 mx-auto'>
                        <Title titleone="Recipes" titletwo="Create your recipes" />

                        {/* for recipies form  */}

                        <div className="row">
                            {/* <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" /> */}

                            {post.length > 0 && (
                                post.map((item) =>
                                    <div className="col-lg-4 col-md-6 mb-5" key={item.id}>
                                        <div className="card border-0 recipescards">
                                            <div className='recipeimgs'>
                                                <img src={item.image} alt="recipe1" />
                                            </div>
                                            <div className="card-body p-4 d-flex flex-column align-items-">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <div>
                                                        <span></span>
                                                    </div>
                                                    <div>
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <h4>{item.title}</h4>
                                                <p className='h6'>{item.description?.substring(0, 50) + "....."}</p>
                                                {/* <button onClick={()=>showClick(item)}/> */}
                                                <div className='card-footer bg-white'>
                                                    <Button name="Detail" clickname={item} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            )}

                        </div>

                        <div className='text-center'>
                            <button className='btn btn-warning' onClick={viewHandler}>View all</button>
                        </div>
                    </div>

                </div>
            </section>

          

            <Aboutrecipes />

            <Popular />

            <Subscribe />

        </>
    )
}

export default Bannerrecipe