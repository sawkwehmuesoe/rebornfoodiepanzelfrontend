import {
    faArrowLeft,
    faBellConcierge,
    faCircleUser,
    faCoins,
    faCrown,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleterecipe } from "../api/getrecipes";
import { createbuyuser, getuser } from "../api/getuser";
import { getcomment, postcomment } from "../api/comments";

const ShowRecipes = () => {
    const location = useLocation();
    const item = location.state;
    console.log(item);
    const [user, setUser] = useState("");
    const [comment, setComment] = useState([]);
    const [inputData, setInputData] = useState({ recipe_id: item.recipe_id, comment: '' })
    // const [buyuser,setBuyuser] = useState({user_id : user.id,recipe_id : item.recipe_id });
    const buyuser = {user_id : user.id,recipe_id : item.recipe_id};

    // console.log(item.id);

    const navigate = useNavigate();

    const backHandler = () => {
        navigate("/recipes");
        // navigate(-1);
        // window.location.reload();
    };

    const editHandler = (item) => {
        navigate("/edit", { state: item });
    };

    const deleteHandler = async () => {
        try {
            // Assuming you have a recipeId for the recipe you want to delete
            const recipeIdToDelete = item.id;
            // console.log();

            const response = await deleterecipe(recipeIdToDelete);

            if (response.status === 200) {
                navigate("/recipes");
                window.location.reload();
            }
        } catch (e) {
            console.error("Error deleting recipe:", e);
        }
    };

    useEffect(() => {
        getuser()
            .then((response) => {
                if (response.status === 200) {

                    // console.log(response);
                    setUser(response.data.data);
                    // console.log("this is user",user);
                }
            })
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        getcomment(item.recipe_id)
            .then((response) => {
                if (response.status === 200) {
                    setComment(response.data.data);

                    // console.log(comment);
                }
            })
            .catch((e) => console.log(e));
    }, []);

    const commentHandler = async (e) => {
        e.preventDefault();

        const response = await postcomment(inputData);

        if (response.status === 200) {
            // alert("success");

            window.location.reload();
        }
    }

    const buyHandler =async(e)=>{
        e.preventDefault();

        const response = await createbuyuser(buyuser);

        if(response.state === 200){

            alert("success");

        }

    } 

    return (
        <>
            <section className="margintops">
                <div className="col-md-10 mx-auto">
                    <div className="showrecipes bg-white rounded p-5 mb-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <div className="d-flex justify-content-start mb-3">
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={backHandler}
                                        >
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                        </button>
                                    </div>
                                    <h2 className="text-uppercase fw-bold mb-3">{item.title}</h2>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <FontAwesomeIcon
                                                icon={faCircleUser}
                                                size="2x"
                                                className="me-3"
                                            />
                                            <p className="my-auto text-capitalize fw-bold">
                                                By : {item.user_name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faCoins} size="2x" className="me-3" />
                                             <p className="my-auto text-capitalize fw-bold">
                                                 : {item.amount}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="d-flex align-items-center">
                                        <FontAwesomeIcon
                                            icon={faBellConcierge}
                                            size="2x"
                                            className="me-3"
                                        />{" "}
                                        Category : {item.category_name}
                                    </p>

                                    {item.type === "premium" ? (
                                        <div className="mb-3">
                                            <span className="text-white bg-warning rounded p-1 px-2">
                                                Premium{" "}
                                                <FontAwesomeIcon
                                                    icon={faCrown}
                                                    style={{ color: "#ffffff" }}
                                                />
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="mb-3">
                                            <span className="text-white bg-primary rounded p-1 px-2">
                                                Free
                                            </span>
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <img src={item.image} alt="meal" className="w-100 rounded" />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <p className="h5 fw-bold">{item.description}</p>

                            <p>{item.instruction}</p>

                            {item.user_id === user.id ? (
                                <div className="d-flex justify-content-end gap-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => editHandler(item)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ) : (
                                <div className="d-flex justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buymodel"
                                    >
                                        Buy
                                    </button>
                                </div>
                            )}
                        </div>

                        <hr />

                        <div>
                            <h4 className="mb-3">Comments</h4>

                            <div className="comment-box row">
                                <div className="col-7">

                                    {
                                        comment.length > 0 && (
                                            comment.map((com) =>
                                                <div className="row mb-4" key={com.comment_id}>
                                                    <div className="col-2 d-flex justify-content-end">
                                                        <div className="icon-boxs d-flex justify-content-center align-items-center">
                                                            <i className="fa-solid fa-user"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="comment-card">
                                                            <h5 className="fw-bold">{com.user_name}</h5>
                                                            <p>{com.comment}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }

                                    <div>
                                        <form onSubmit={commentHandler} className="commentform">
                                            <input type="text" className="form-control commentbars pe-5" value={inputData.comment} onChange={e =>
                                                setInputData({ ...inputData, comment: e.target.value })
                                            } />
                                            <button type="submit" className="sentimgs">
                                                <img src="/paper-plane.png" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="text-secondary modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                Delete Recipe
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-secondary">
                            Are you sure to delete{" "}
                            <span className="fw-bold h6 text-danger text-capitalize">
                                {item.title}
                            </span>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={deleteHandler}
                                data-bs-dismiss="modal"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ......................... */}

            <div
                className="modal fade"
                id="buymodel"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="text-dark modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                Buy this recipe
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-secondary">
                            <h5 className="text-dark fw-bold text-center mb-3">{item.title}</h5>
                            <div className="row">
                                <div className="col-6">
                                    <img src={item.image} alt="meal" className="w-100 rounded" />
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center text-dark mb-3">
                                        <FontAwesomeIcon
                                            icon={faCircleUser}
                                            size="2x"
                                            className="me-3"
                                        />
                                        <p className="my-auto text-capitalize fw-bold">
                                            By : {item.user_name}
                                        </p>
                                    </div>

                                    <div className="d-flex align-items-center text-dark mb-3">
                                        <FontAwesomeIcon icon={faCoins} size="2x" className="me-3" />
                                        <p className="my-auto text-capitalize fw-bold">
                                            : {item.amount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <form action="" onSubmit={buyHandler}>
                            <button
                                type="submit"
                                className="btn btn-primary"

                                data-bs-dismiss="modal"

                               
                            >
                                Buy
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowRecipes;
