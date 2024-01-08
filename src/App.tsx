import {ReactElement} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/AddProduct/AddProduct";
import Login from "./pages/Login/Login";

function App(): ReactElement {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/product-detail/:id" element={<ProductDetail />}></Route>
				<Route path="/add-product" element={<AddProduct />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</>
	);
}

export default App;
