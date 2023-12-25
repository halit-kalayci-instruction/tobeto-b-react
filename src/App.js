import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"


// JSX => HTML + JS
// HTML'de keywordün ismini değiştirmek
// class => className
export default function App() {
  return <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  </>

}