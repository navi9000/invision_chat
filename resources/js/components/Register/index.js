import TopTemplate from "../helpers/TopTemplate"
import RegisterForm from "./RegisterForm"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function Register() {
    const myId = useSelector(state => state.currentUser.userId)
    const navigate = useNavigate()
    useEffect(() => {
        if (myId) navigate('../home')
    }, [])

    return (
        <div>
            <TopTemplate
                leftBG="bg-back"
                leftHandler={() => navigate('../login')}
                text="New Account"
            />
            <div className="bg-sign_up w-full h-[700px] absolute bg-no-repeat">
                <p className="mt-[90px] ml-[50px] font-karla-bold text-[70px] text-white leading-[82px] tracking-[-2px] ">Sign Up</p>
            </div>
            <div className="absolute bg-black top-[550px] w-full h-[784px]"/>
            <RegisterForm />
        </div>
    )
}