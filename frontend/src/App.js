


import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import Home from "./Pages/Homepage/Home";

import Singledetails from "./Pages/Singledetails";



import { Navbar } from "./Components/Navbar"
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>

      {/* <AllRoutes /> */}
      <Navbar />
      <Home/>
       
      <Footer />


      <Navbar/>
      <AllRoutes />

    </div>
  );
}

export default App;
