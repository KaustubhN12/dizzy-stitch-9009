import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

import Home from "./Pages/Homepage/Home";

import Singledetails from "./Pages/Singledetails";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>

      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
