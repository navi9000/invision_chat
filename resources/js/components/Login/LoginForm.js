import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { setUserId, setUserName, setSubscriptions } from "../../features/currentUser"

export default function LoginForm() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleForm = e => {
        e.preventDefault()

        axios.delete('api/users/1/unsubscribe', {followeeId: 3})
        .then(response => {console.log(response.data)}).catch(error => {console.log('Somethind went wrong')})




        axios.post('api/auth/login', {
            username: e.target.username.value,
            password: e.target.password.value,
        })
        .then(response => {
            if (response.status == 200) {
                dispatch(setUserId(response.data.id))
                dispatch(setUserName(response.data.username))
                console.log(response.data.subscriptions)
                dispatch(setSubscriptions(response.data.subscriptions.map(sub => sub.followeeId)))
                navigate('../home')
            }
        })
        .catch(error => {
            alert(error.response.data.errorMessage)
            console.log(error.response.data.request)
        })
    }

    return (
        <form
            className="absolute top-[654px] left-[50px] w-[650px] h-[540px] z-30 bg-white"
            onSubmit={handleForm}
            autoComplete='off'
        >
            <div className="flex flex-col p-[80px]">
                <div className="flex flex-col mb-[60px]">
                    <label htmlFor="username" className="font-karla-bold text-[#AD807D] uppercase tracking-[2px]">Username</label>
                    <input type="text" id="username" name="username" className="h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="font-karla-bold text-[#AD807D] uppercase tracking-[2px]">Password</label>
                    <input type="password" id="password" name="password" className="h-[80px] border-b-[2px] border-gray-200 pt-[22px] pb-[25px] outline-none"/>
                </div>
            </div>
            <button type="submit" className="w-full h-[120px] bg-[#00A0FF] flex justify-between">
                <div className="bg-go h-[50px] w-[50px] mt-[35px] ml-[62px]" />
                <p className="text-white font-karla-bold mt-[42.5px] mr-[79.5px]">Get Started</p>
            </button>
        </form>
    )
}