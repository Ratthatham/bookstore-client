import { Outlet } from "react-router"
import CartIcon from "../components/CartIcon/CartIcon"
import { useNavigate } from "react-router"

const NavBar = () => {
    const navigate = useNavigate();
    const goToHomePage:()=> void = () => navigate('/')
    const goToLogIn:()=> void = () => navigate('/login')
    const goToCheckOut:()=> void = () => navigate('/checkout')
    return (
    <div>
        <div className=" h-[60px] w-[100%] flex justify-between items-center text-white">
            <h1 className=" m-8 cursor-pointer" onClick={goToHomePage}>Logo</h1>
            <div className=" w-[200px] flex justify-between items-center m-8">
                <p className=" cursor-pointer" onClick={goToHomePage} >Home</p>
                <p className=" cursor-pointer" onClick={goToLogIn} >Log In</p>
                <div onClick={goToCheckOut}>
                    <CartIcon />
                </div>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default NavBar