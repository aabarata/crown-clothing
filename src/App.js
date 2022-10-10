import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      //By default redux awaits for serialized data
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
    //The dispatch don't need to be added as a depedency because will never update but a warning will be displayed
    //Could be remove and let the warning in place
  }, [dispatch]);

  return (
    <Routes>
      {/*strategy to keep the navigation bar always rendered, independently of the route*/}
      <Route path="/" element={<Navigation />}>
        {/*index especifies that Home component will be the child element rendered by default in the parent*/}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
