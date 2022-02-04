import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUserId, setUserName } from "../../features/currentUser"

export default function RegisterForm() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleForm = e => {
        e.preventDefault()
        axios.post('api/auth/register', {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            phone: e.target.phone.value
        })
        .then(response => {
            if (response.status == 201) {
                console.log(response.data)
                dispatch(setUserId(response.data.id))
                dispatch(setUserName(response.data.username))
                alert('User Created')
                navigate('../home')
            }
        })
        .catch(error => {
            alert(error.response.data.errorMessage)
            console.log(error.response.data.request)
        })
    }
    
    return (
        <form className="absolute bg-white top-[402px] left-[50px] w-[650px] h-[922px] z-20" autoComplete="off" onSubmit={handleForm}>
            <div className="flex flex-col p-[80px]">
                <div className="flex flex-col mb-[60px]">
                    <label htmlFor="username" className="font-karla-bold text-[#AD807D] uppercase tracking-[2px]">Name</label>
                    <input type="text" id="username" name="username" className="h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"/>
                </div>
                <div className="flex flex-col mb-[60px]">
                    <label htmlFor="email" className="font-karla-bold text-[#AD807D] uppercase tracking-[2px]">Email</label>
                    <input type="email" id="email" name="email" className="h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"/>
                </div>
                <div className="flex flex-col mb-[60px]">
                    <label htmlFor="password" className="font-karla-bold text-[#AD807D] uppercase tracking-[2px]">Password</label>
                    <input type="password" id="password" name="password" className="h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone" className="font-karla-bold text-[#AD807D] uppercase tracking-[2px]">Phone</label>
                    <input type="text" id="phone" name="phone" className="h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"/>
                </div>
            </div>
            <button type="submit" className="w-full h-[168px] bg-[#00A0FF] px-[80px] pt-[30px] flex flex-col justify-between">
                <div className="flex justify-between items-center w-full">
                    <p className="text-white font-karla-bold text-[26px] leading-[30px]">Next Step</p>
                    <div className="flex gap-[10px]">
                        <div className="w-[16px] h-[16px] rounded-full bg-[#FFBDB8]"/>
                        <div className="w-[16px] h-[16px] rounded-full bg-white opacity-[0.2]"/>
                        <div className="w-[16px] h-[16px] rounded-full bg-white opacity-[0.2]"/>
                    </div>
                </div>
                <p className="font-karla-bold text-[75px] tracking-[-4px] text-white opacity-[0.2]">1 of 3</p>
            </button>
        </form>
    )
}