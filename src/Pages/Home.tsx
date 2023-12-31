
import Banner from "../Components/Banner/Banner";

import Posts from "../Components/Posts/Posts";
import Footer from "../Components/Footer/Footer";
import { ReactElement } from "react";

function Home(): ReactElement {
  return (
    <div className="homeParentDiv">
      
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
