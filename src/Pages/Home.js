import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Components/Header/Menu";
import Productcard from "../Components/Productcard";
import BannerImage from "../Images/Bannerpizza.png";

const Home = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getproduct = async () => {
			const res = await axios.get("https://pizza-server-39ry.onrender.com/products/getproduct");
			setProducts(res.data);
		};
		getproduct();
	}, []);

	return (
		<section>
			<Menu />
			<div className="container-fluid bg-danger py-5">
				<div className="container p-0">
					<div className="row text-start d-flex align-items-center">
						<div className="col-md-6 px-3 d-flex justify-content-center align-items-center">
							<div className="banner-text">
								<h3>Tasty Pizza</h3>
								<h1>HOT SPICY</h1>
								<p>
									Pizza has three main elements: crust, sauce, and toppings. All of them have a variety of preparation
									methods. Crust: Traditional pizza crust is similar to bread dough. It's a combination of flour, water,
									yeast, sugar, salt, and oil.
								</p>
							</div>
						</div>
						<div className="col-md-6 px-5 d-flex justify-content-center align-items-center">
							<img src={BannerImage} alt="PizzaImg" className="BannerImage"></img>
						</div>
					</div>
				</div>
			</div>

			<div className="container py-5">
				<div className="row text-center">
					<h1 className="pb-5">SPECIAL FOR YOU</h1>
					{/* <div className="cat-filter d-flex flex-wrap justify-content-center align-items-center pb-5">
						<button>ALL</button>
						<button>VEG</button>
						<button>NON-VEG</button>
					</div> */}
					<div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
						{products.map((prod) => (
							<Productcard key={prod._id} product={prod} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
