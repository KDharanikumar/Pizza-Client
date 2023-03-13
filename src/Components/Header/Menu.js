import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cart } from "../../Context/Context";

const Menu = () => {
	const { cart } = useContext(Cart);
	return (
		<section className="container-fluid menubar py-3">
			<div className="container">
				<div className="row ">
					<div className="col d-flex justify-content-between align-items-center ">
						<div className="col-4">
							<li>
								<Link to="/home">
									<div className="logo">PIZZA</div>
								</Link>
							</li>
						</div>
						<div className="col-8 d-flex justify-content-end">
							<ul className="menu-name d-flex justify-content-center align-items-center mb-0">
								<li>
									<Link to="/home">HOME</Link>
								</li>
								<li>
									<Link to="/cart" className="mx-2">
										<FaShoppingCart className="fs-5 mx-2 text-white" />
										Cart
									</Link>
									<span style={{ color: "#fff" }}>{cart.length}</span>
								</li>
								<li className="mx-0 d-flex align-items-center">
									<Link to="/">LOGOUT</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
