import Header from "../components/shared/Header/Header"
import Footer from "../components/shared/Footer/Footer"
import {Outlet} from "react-router-dom"

const MainLayout = () => {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>        
        </>
    )
}



export default MainLayout