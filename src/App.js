import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      {/*strategy to keep the navigation bar always rendered, independently of the route*/}
      <Route path="/" element={<Navigation />}>
        {/*index especifies that Home component will be the child element rendered by default in the parent*/}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
