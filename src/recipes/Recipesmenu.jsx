import React, { useEffect, useState } from 'react'
import Recipesitem from './Recipesitem'
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '../api/UserRequest';
import Title from '../components/titles/Title';
import Popular from '../popular/Popular';
import { api } from '../api/api';
import CreateRecipes from './CreateRecipes';
import EditRecipes from './EditRecipes';
import { useNavigate } from 'react-router-dom';
import ShowRecipes from './ShowRecipes';
import axios from 'axios';
import { getrecipes, searchrecipe } from '../api/getrecipes';
import Button from '../components/buttons/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Recipesmenu = () => {

  // const { data } = useQuery({ queryKey: ['getuser'], queryFn: () => api.userApi.get() });
  // console.log(data);

  const [post, setPost] = useState([]);
  const [find, setFind] = useState("");

  // const token = localStorage.getItem('token');

  // console.log(token);

  const navigate = useNavigate();

  const buttonClick = () => {

    navigate("/create");

  }

  const handleChange = (e) => {
    const searchText = e.target.value;

    setFind(searchText);

    handleSearch(searchText)

  }

  const handleSearch = (searchText)=>{
    searchrecipe(searchText).then((response)=>{
      if(response.status === 200){
        setPost(response.data.data)
      }
    })
  }

  useEffect(() => {
    getrecipes().then((response) => {
      if (response.status === 200) {

        setPost(response.data.data)
        // console.log(response);
      }
    }).catch(e => console.log(e))

  }, []);
  // function showClick(item){
  //   navigate("/show",{state: item})
  // }

  // console.log(post.data[0].title);
  // console.log(post.data[0].category.category);

  console.log();

  return (
    <>

      <div className='createresipes'>
        <button type="button" className='creatresipesbtn shadow' onClick={buttonClick} >Create <i class="fa-solid fa-plus"></i></button>
      </div>
      <section className="margintops">
        <div className="container">

          <div className='col-md-10 mx-auto'>
            <Title titleone="Recipes" titletwo="Create your recipes" />

            <div className='d-flex justify-content-center mb-5'>
              <input type="text" name="title" className="form-control-sm navsearchs py-3" value={find} onChange={handleChange} />
            </div>
            


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
          </div>

        </div>
      </section>
    </>
  )
}

export default Recipesmenu