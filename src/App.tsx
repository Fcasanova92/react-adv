import { BrowserRouter } from "react-router-dom";
import { ShopPagesRouter } from "./patronesComponentes/routes/ShopPagesRouter";


function App() {
  return (
     <BrowserRouter>
       <ShopPagesRouter />
     </BrowserRouter>
  );
}

export default App;
