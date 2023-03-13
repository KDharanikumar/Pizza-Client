import React, { useContext } from "react";
import { Cart } from "../Context/Context";

const Productcard = ({ product }) => {
	const { cart, setCart } = useContext(Cart);

	return (
		<section>
			<div className="container p-0 productCard">
				<div className="row ">
					<div className="col">
						<div className="card">
							<div className="card-body">
								<img src={product.image} alt="Farmhouse" />

								<p className="prod-name">{product.name}</p>
								<p className="prod-category">Category : {product.category}</p>
								<p className="prod-price">
									Price : <span className=""> ₹ {product.price} </span>
								</p>
								{/* <p className="card-text">{product.desc}</p> */}
								<div className="d-flex justify-content-center align-items-center">
									{cart.includes(product) ? (
										<button
											onClick={() => {
												setCart(cart.filter((e) => e.name !== product.name));
											}}
										>
											Remove From Cart
										</button>
									) : (
										<button
											onClick={() => {
												setCart([product, ...cart]);
											}}
										>
											Add To Cart
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Productcard;
