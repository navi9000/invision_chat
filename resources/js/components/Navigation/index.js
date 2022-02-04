import NavLink from "./NavLink"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { clearUserData } from "../../features/currentUser"

export default function Navigation(props) {
    const myId = useSelector(state => state.currentUser.userId)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const clickHandler = () => {
        const shouldLogOut = confirm('Are you sure you want to log out?')
        if (shouldLogOut) {
            axios.post('api/auth/logout')
            .then(response => {
                console.log(response.data)
                dispatch(clearUserData())
                navigate('../login')
            })
            .catch(error => {console.log(error)})
        }
    }

    return (
        <div>
            <div className="flex justify-between mt-[57px] mb-[93px] mx-[24px]">
                <div className="h-[50px] w-[50px] bg-close cursor-pointer opacity-20 hover:opacity-100 duration-300 ease-in-out" onClick={props.close}/>
                <div className="h-[50px] w-[50px] bg-settings_copy cursor-pointer opacity-20 hover:opacity-100 duration-300 ease-in-out"/>
            </div>
            <div className="flex flex-col">
                <NavLink header="Home" to="../home" />
                <NavLink header="Profile" to={`../users/${myId}`} />
                <NavLink header="Stats" to="../home" />
            </div>
            <button className="absolute top-[1174px] bg-black z-10 w-full h-[160px] flex justify-between" onClick={clickHandler}>
                <div className="pt-[29.5px] px-[70px] flex flex-col items-start gap-[12px]">
                    <p className="font-karla-bold tracking-[-2px] text-white text-[50px] leading-[58px]">Logout</p>
                    <p className="ml-[0.5px] uppercase font-karla-bold text-[20px] tracking-[2px] text-[#FFBDB8] leading-[23px]">Andrea Jameson</p>
                </div>
                <div className="w-[160px] h-[160px] bg-gray-500"></div>
            </button>
        </div>
    )
}