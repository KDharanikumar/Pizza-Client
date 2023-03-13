import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Menu from "../Components/Header/Menu";

const CheckOutPages = () => {
	const navigate = useNavigate();

	const [formdata, setFormData] = useState({
		name: "",
		email: "",
		mobileNumber: "",
		address: "",
		pin: "",
		error: {
			name: "",
			email: "",
			mobileNumber: "",
			address: "",
			pin: "",
		},
	});

	const handleChange = (e) => {
		let error = { ...formdata.error };
		if (e.target.value === "") {
			error[e.target.name] = `${e.target.name} is Required`;
		} else {
			error[e.target.name] = "";
		}
		setFormData({ ...formdata, [e.target.name]: e.target.value, error });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errKeys = Object.keys(formdata).filter((key) => {
			if (formdata[key] === "" && key !== "id" && key !== "error") {
				return key;
			}
		});
		if (errKeys.length >= 1) {
			alert("Please fill all Data");
		} else {
			Swal.fire({
				title: "THANK YOU",
				icon: "success",
				confirmButtonText: "okay",
			});
			navigate("/home");
		}
		setFormData({
			name: "",
			email: "",
			password: "",
			mobileNumber: "",
		});
	};

	return (
		<section>
			<Menu />
			<div className="container mx-auto my-5">
				<div className="row">
					<div className="col-md-6">
						<form
							onSubmit={(e) => {
								handleSubmit(e);
							}}
						>
							<h2 className="py-3">Address Details</h2>
							<label for="exampleFormControlInput1" class="form-label">
								Name
							</label>
							<input
								type="text"
								placeholder="Enter your Name"
								class="form-control mb-3"
								name="name"
								value={formdata.name}
								onChange={(e) => {
									handleChange(e);
								}}
								required
							/>
							<span style={{ color: "red" }}>{formdata.error.name}</span> <br />
							<br />
							<label for="exampleFormControlInput1" class="form-label">
								E-Mail
							</label>
							<input
								type="email"
								placeholder="Enter your Email"
								class="form-control mb-3"
								name="email"
								value={formdata.email}
								onChange={(e) => {
									handleChange(e);
								}}
								required
							/>
							<span style={{ color: "red" }}>{formdata.error.email}</span> <br />
							<br />
							<label for="exampleFormControlInput1" class="form-label">
								PhoneNo
							</label>
							<input
								type="number"
								placeholder="Enter your MobileNumber"
								class="form-control mb-3"
								name="mobileNumber"
								value={formdata.mobileNumber}
								onChange={(e) => {
									handleChange(e);
								}}
								required
							/>
							<span style={{ color: "red" }}>{formdata.error.mobileNumber}</span> <br />
							<br />
							<label for="exampleFormControlInput1" class="form-label">
								Address
							</label>
							<input
								type="text"
								placeholder="Enter your Address"
								class="form-control mb-3"
								name="address"
								value={formdata.address}
								onChange={(e) => {
									handleChange(e);
								}}
								required
							/>
							<span style={{ color: "red" }}>{formdata.error.address}</span> <br />
							<br />
							<label for="exampleFormControlInput1" class="form-label">
								Pin
							</label>
							<input
								type="number"
								placeholder="Enter your Pin"
								class="form-control mb-3"
								name="pin"
								value={formdata.pin}
								onChange={(e) => {
									handleChange(e);
								}}
								required
							/>
							<span style={{ color: "red" }}>{formdata.error.pin}</span> <br />
							<br />
							<div className="text-center">
								<button class="btn btn-danger my-3 w-100" type="submit">
									COMPLETE YOUR ORDER
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckOutPages;
