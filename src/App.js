import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//component klasöründeki index.js dosyasının içinden geliyor .
import { Navbar, Footer, Sidebar } from "./components";

// pages klasöründe ki index.js içerisinden geliyor.. oraya bak.
import {
  Home,
  SingleProduct,
  Card,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/card" element={<Card />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
