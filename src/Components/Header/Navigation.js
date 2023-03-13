import { Route, Routes } from "react-router-dom";
import CartPage from "../../Pages/CartPage";
import Home from "../../Pages/Home";
// import Payments from "../../Pages/payment";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";

const Navigation = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/" element={<SignIn />} />
			<Route path="signup" element={<SignUp />} />
			<Route path="cart" element={<CartPage />} />
			{/* <Route path="payments" element={<Payments />} /> */}
		</Routes>
	);
};

export default Navigation;
