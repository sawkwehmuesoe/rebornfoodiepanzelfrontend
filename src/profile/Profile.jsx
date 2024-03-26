import React, { useEffect, useState } from 'react'
import { getbuyuser, getuser } from '../api/getuser';
import Button from '../components/buttons/Button';
import Title from '../components/titles/Title';

const Profile = () => {

    const [post,setPost] = useState([]);
    // const [user,setUser] = useState();

    // useEffect(() => {
    //     getuser()
    //         .then((response) => {
    //             if (response.status === 200) {

    //                  console.log("kk",response.data.data.id);
    //                 setUser(response.data.data);
    //                 // console.log("this is user",user);
    //             }
    //         })
    //         .catch((e) => console.log(e));
    // }, []);

    useEffect(() => {
        getbuyuser(1).then((response) => {
            if (response.status === 200) {
                // console.log(response);
                setPost(response.data.data)
                // console.log(category);
            }
        }).catch(e => console.log(e))

    }, []);
    console.log(post);

  return (
    <>
        <section className="margintops">
                <div className="container">

                    <div className='col-md-10 mx-auto'>
                        <Title titleone="Recipes" titletwo="Your recipes" />

                        {/* for recipies form  */}

                        <div className="row">
                            {/* <Recipesitem name="By Anna" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" /> */}

                            {post.length > 0 && (
                                post.map((item) =>
                                    <div className="col-lg-4 col-md-6 mb-5" key={item.recipe.id}>
                                        <div className="card border-0 recipescards">
                                            <div className='recipeimgs'>
                                                <img src={item.recipe.image} alt="recipe1" />
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
                                                <h4>{item.recipe.title}</h4>
                                                <p className='h6'>{item.recipe.description?.substring(0, 50) + "....."}</p>
                                                {/* <button onClick={()=>showClick(item)}/> */}
                                                <div className='card-footer bg-white'>
                                                    <Button name="Detail" clickname={item.recipe} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            )}

                        </div>
                    </div>

                </div>
            </section>
    </>
  )
}

export default Profile