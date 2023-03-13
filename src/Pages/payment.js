// import { Link } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";

// function Payment() {
// 	const onToken = (token) => {
// 		console.log(token);
// 	};

// 	return (
// 		<div>
// 			<div style={{ margin: "100px", marginLeft: "500px" }}>
// 				<div className="col-md-6">
// 					<div class="card w-100 px-4 mx-auto">
// 						<div class="card-body">
// 							<h5 class="card-title text-center py-2 mb-3">PAYMENT GATEWAY</h5>

// 							<input type="number" placeholder="Enter your payment" class="form-control mb-3" />
// 						</div>
// 						<div className="text-center">
// 							<button class="btn btn-danger my-3 w-100">
// 								<StripeCheckout
// 									token={onToken}
// 									name="PAYMENT GATEWAY"
// 									currency="INR"
// 									stripeKey="pk_test_51MbGIeSDkbtMIT5KRHIf5NwmxrfcHiZ3TA2tK54UdRUpxqJPo5hGqHJqD0PQZJ20ARBehZUjQsHM71YoQAvtaDH500wlFnGpfa"
// 								/>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="text-center">
// 				<div style={{ marginBottom: "00px" }}>
// 					<button class="btn btn-danger my-1 w-50">
// 						<Link to="/payment">CONFRIM TO ADDRESS</Link>
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Payment;

// import { useContext, useEffect, useState } from "react";

// import StripeCheckout from "react-stripe-checkout";
// import Menu from "../Components/Header/Menu";
// import { Cart } from "../Context/Context";

// const Payments = () => {
// 	// const navigate = useNavigate();
// 	const onToken = (token) => {
// 		console.log(token);
// 	};
// 	const { cart, setCart } = useContext(Cart);
// 	const [count, setCount] = useState(1);
// 	const [total, setTotal] = useState();

// 	useEffect(() => {
// 		setTotal(cart.reduce((acc, cuu) => acc + cuu.price, 0));
// 	}, [cart]);
// 	// const handleDec = () => {
// 	// 	if (count - 1 >= 1) {
// 	// 		setCount(count - 1);
// 	// 	}
// 	// };

// 	return (
// 		<section>
// 			<Menu />
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-4">
// 						<div className="card w-75 px-4 mx-auto">
// 							<div className="card-body">
// 								<h5 className="card-title text-center py-2 mb-3">Cart Totals</h5>
// 								<div className="d-flex justify-content-between">
// 									<h6 className="card-text">SubTotal</h6>
// 									<h6 className="card-text">{total * count}</h6>
// 								</div>
// 								<hr></hr>
// 								<div className="d-flex justify-content-between">
// 									<h6 className="card-text">Total</h6>
// 									<h6 className="card-text">{total * count}</h6>
// 								</div>
// 							</div>
// 							<div className="text-center">
// 								<StripeCheckout
// 									token={onToken}
// 									name="PAYMENT GATEWAY"
// 									currency="INR"
// 									amount={total * count + "00"}
// 									stripeKey="pk_test_51MbGIeSDkbtMIT5KRHIf5NwmxrfcHiZ3TA2tK54UdRUpxqJPo5hGqHJqD0PQZJ20ARBehZUjQsHM71YoQAvtaDH500wlFnGpfa"
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Payments;
