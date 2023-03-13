import "./App.css";

import Navigation from "./Components/Header/Navigation";
import Context from "./Context/Context";

const App = () => {
	return (
		<section>
			<Context>
				<Navigation />
			</Context>
		</section>
	);
};

export default App;
