import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div  >
            
            <Header></Header>
            </div>
            

            <div className=" max-w-6xl mx-auto min-h-screen">
            <Outlet></Outlet>
            </div>
            
            <div >
            <Footer></Footer> 
            </div>
            
        </div>
    );
};

export default Root;