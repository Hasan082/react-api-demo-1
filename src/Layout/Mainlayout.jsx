import { Outlet } from "react-router-dom";
import '../App.css'
import Spinner from "../Components/Spinner";
import Header from "../Components/Header/Header";
import { MyContext } from "../Provider/MyProvider";
import { useContext, useEffect } from "react";
import Footer from "../Components/Footer/Footer";


const Mainlayout = () => {

    const { loader, setLoader } = useContext(MyContext);

    function removeHiddenClass() {
        const element = document.querySelector('.hidden');
        if (element) {
          element.classList.remove('hidden');
          console.log("I am hidden");
        }
      }
      

    return (
        <div className="common">
            <div className="hidden">
                <Header />
                <Outlet />
                <Footer />
            </div>
            {loader == false ? removeHiddenClass() : <Spinner />}
        </div>
    );
};

export default Mainlayout;