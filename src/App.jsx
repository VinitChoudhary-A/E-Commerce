import HomePage from "./Components/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import BrowsePage from "./Components/BrowsePage";
import Content from "./Components/Content";
import SelectedItemPage from "./Components/SelectedItemPage"; 
import Cart from "./Components/Cart";
function App() {
  return (
    <>
   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/selecteditem" element={<SelectedItemPage />} />
          <Route path="/Carousal" element={<SelectedItemPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    
    </>
  );
}

export default App;
