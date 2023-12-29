import {ReactElement} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";

function App(): ReactElement {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/product-detail/:id" element={<ProductDetail />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
