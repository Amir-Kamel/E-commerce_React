import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense , useState , useEffect } from "react";
import LanguageContext from "./context/language"; 
const Register = lazy(() => import("./register"));
const ProductList = lazy(() => import("./productslist"));
const ProductDetails = lazy(() => import("./productdetails"));
const Navbar = lazy(() => import("./nav"));
const Login = lazy(() => import("./login"));
const Cart = lazy(() => import("./cart"));
const Loading = lazy(() => import("./loading"));


function App() {

const [language, setLanguage] = useState("en");

useEffect(() => {
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}, [language]); 

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
    <Router>
      <Suspense fallback={<Loading />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Suspense>
    </Router>
    </LanguageContext.Provider>
  );
}

export default App;
