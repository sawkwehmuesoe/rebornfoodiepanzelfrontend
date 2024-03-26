import React, { useEffect, useState } from 'react'
import Navitem from './Navitem'
import { useNavigate } from 'react-router-dom';
import { getuser } from '../api/getuser';

const Navigation = () => {

	const [user, setUser] = useState("");

	const token = localStorage.getItem("token");

	const navigate = useNavigate();

	const logoutHandler = () => {

		localStorage.removeItem('token');

		navigate('/login');
		window.location.reload();

	}

	const profileHandler = ()=>{

		navigate('/profile');

	}

	useEffect(() => {
		getuser().then((response) => {
			if (response.status === 200) {
				setUser(response.data.data)
			}
		}).catch(e => console.log(e))

	}, []);

	return (
		<>
			<header>

				{/* Start nav bar  */}
				<div className="container">
					<nav className="navbar navbar-expand-lg fixed-top shadow">

						<a href="index.html" className="navbar-brand">
							<span className="text-uppercase fw-bold h4 mx-2"><img src='./logo.png' width="45" /> Foodie  <span className="h5">Panzel</span></span>
						</a>


						<button type="button" className="navbar-toggler navbuttons " data-bs-toggle="collapse" data-bs-target="#nav">
							<div className="bg-light lines1"></div>
							<div className="bg-light lines2"></div>
							<div className="bg-light lines3"></div>
						</button>

						<div id="nav" className="navbar-collapse collapse justify-content-end text-uppercase gap-3 spa fw-bold pe-5">
							<ul className="navbar-nav">
								<Navitem navname="Home" navlink="home" />
								<Navitem navname="Recipes" navlink="recipes" />
								<Navitem navname="About Us" navlink="about" />
								<Navitem navname="Contact" navlink="contact" />
							</ul>

							<div>
								{/* <form action="" class="me-md-3">
									<input type="text" className="form-control-sm navsearchs" />
								</form> */}

								{/* <div className="dropdown">
									<button className="btn btn-secondary p-0 rounded-circle" type="button" data-bs-toggle="dropdown" onClick={logoutHandler}>
										<span className='text-lowercase fw-light'> {user.email}</span>
									</button>

									<ul className="dropdown-menu dropbtns">
										<li><a className="dropdown-item text-capitalize" href="#">Profile</a></li>
										<li><hr className="dropdown-divider" /></li>
										<li><a className="dropdown-item text-capitalize" href="#" onClick={logoutHandler}>Logout</a></li>
									</ul>
								</div> */}

								<button type="button" className='btn btn-sm btn-primary text-white me-4' onClick={profileHandler}>Profile</button>

								<button type="button" className='btn btn-sm btn-danger' onClick={logoutHandler}>Logout</button>


							</div>


						</div>




					</nav>
				</div>
				{/* End nav bar  */}



			</header>
		</>
	)
}

export default Navigation

