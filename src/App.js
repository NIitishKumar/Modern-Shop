import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.compont";
import SignIm from "./routes/sign-in/signIn.component";
import SignUpForm from "../src/components/sign-up-form/sign-up-form.component";
import Shop from "./routes/shop/shop.componenet";
import Checkout from "./components/checkout/checkout.component";
import CategoryPreview from "./components/category-preview/category-preview";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SignIm />}></Route>
        <Route path="auth" element={<SignUpForm/>} />
        <Route path="checkout" element={<Checkout />} />
        {/* <Route path="shop/:category" element={<CategoryPreview />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
