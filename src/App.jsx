import HomePage from "./Components/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import BrowsePage from "./Components/BrowsePage";
import Content from "./Components/Content";
import SelectedItemPage from "./Components/SelectedItemPage"; 
function App() {
  return (
    <>
   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/selecteditem" element={<SelectedItemPage />} />
        </Routes>
    
    </>
  );
}

export default App;
