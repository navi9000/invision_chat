import LoginForm from './LoginForm'
import { useNavigate, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function Login() {
    
    const myId = useSelector(state => state.currentUser.userId)
    const navigate = useNavigate()
    useEffect(() => {
        if (myId) navigate('../home')
    }, [])

    return (
        <div>
            <h1 className="font-karla-bold text-white text-[200px] leading-[234px] tracking-[-10px] drop-shadow-md absolute top-[120px] z-10">Chat</h1>
            <div className="bg-bubble w-[200px] h-[249px] mx-auto mt-[290px] drop-shadow-2xl"></div>
            <div className="absolute top-[754px] bg-black w-full h-[580px] z-10">
                <p className="mx-auto text-center bottom-[52px] font-karla text-white z-20 pt-[490px]">Not Registered? <Link to="../register" className="font-karla-bold hover:underline cursor-pointer">Create Account</Link></p>
            </div>
            <LoginForm />
        </div>
    )
}