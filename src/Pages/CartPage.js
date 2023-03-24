import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Menu from "../Components/Header/Menu";
import { Cart } from "../Context/Context";

const CartPage = () => {
	// function refreshPage() {
	// 	window.location.reload(false);
	// }
	// const navigate = useNavigate();
	const onToken = (token) => {
		console.log(token);
	};
	const { cart, setCart } = useContext(Cart);
	const [count, setCount] = useState(1);
	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(cart.reduce((acc, cuu) => acc + cuu.price, 0));
	}, [cart]);
	// const handleDec = () => {
	// 	if (count - 1 >= 1) {
	// 		setCount(count - 1);
	// 	}
	// };

	return (
		<section>
			<Menu />
			<div className="container p-0 product-card">
				<div className="row">
					<h1 className="text-center my-5">Place the Order</h1>
					<div className="col-md-8">
						<table className="table-responsive">
							<thead>
								<tr className="d-flex mb-5">
									<th>PRODUCT</th>
									<th>NAME</th>
									<th>CATEGORY</th>
									{/* <th>QUANTITY</th> */}
									<th>PRICE</th>
									<th>ACTION</th>
								</tr>
							</thead>
							{cart.map((product) => {
								return (
									<div key={product._id}>
										<tr className="d-flex mb-3 align-items-center">
											<td>
												<img src={product.image} alt="Farmhouse" className="cart-image" />
											</td>
											<td>{product.name}</td>
											<td>{product.category}</td>
											{/* <td>
													<span onClick={() => handleDec(product.id)} className="px-1 fs-4">
														<AiFillMinusSquare />
													</span>
													<span className="px-1" style={{ fontWeight: "800" }}>
														{count}
													</span>
													<span onClick={() => setCount(count + 1)} className="px-1 fs-4">
														<AiFillPlusSquare />
													</span>
												</td> */}
											<td className="mx-3">{product.price * count}</td>

											<td
												className="del-icon mx-5"
												onClick={() => {
													setCart(cart.filter((e) => e.name !== product.name));
												}}
											>
												<AiFillDelete />
											</td>
										</tr>
									</div>
								);
							})}
						</table>
					</div>
					<div className="col-md-4 p-0 d-flex justify-content-center align-items-center mb-4">
						<div className="card w-75 mb-4">
							<div className="card-body mb-3">
								<h5 className="card-title text-center py-2 mb-5 fs-4">Cart Totals</h5>
								<div className="d-flex justify-content-between">
									<h6 className="card-text">SubTotal</h6>
									<h6 className="card-text">{total * count}</h6>
								</div>
								<hr></hr>
								<div className="d-flex justify-content-between">
									<h6 className="card-text">Total</h6>
									<h6 className="card-text">{total * count}</h6>
								</div>
							</div>

							<div className="text-center mb-3">
								<StripeCheckout
									token={onToken}
									name="PAYMENT GATEWAY"
									currency="INR"
									amount={total * count + "00"}
									stripeKey="pk_test_51MbGIeSDkbtMIT5KRHIf5NwmxrfcHiZ3TA2tK54UdRUpxqJPo5hGqHJqD0PQZJ20ARBehZUjQsHM71YoQAvtaDH500wlFnGpfa"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartPage;
