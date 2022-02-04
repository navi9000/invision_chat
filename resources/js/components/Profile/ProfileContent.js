import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { deleteSubscription, addSubscription } from '../../features/currentUser'
import axios from 'axios'
import CustomButton from '../helpers/CustomButton'

export default function ProfileContent() {
    const {id} = useParams()
    const myId = useSelector(state => state.currentUser.userId)
    const mySubscriptions = useSelector(state => state.currentUser.userSubscriptions)
    const [isMine, setIsMine] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(mySubscriptions.some(u_id => u_id === Number(id)))
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        setIsMine(Number(id) === myId)
        axios.get(`/api/users/${id}`)
        .then(response => {
            setUserName(response.data.username)
        })
        .catch(error => {console.log(error)})
    }, [id])

    const handleSubscribeButton = () => {
        if (isSubscribed) {
            axios.delete(`/api/users/${myId}/unsubscribe`, {followeeId: id})
            .then(response => {
                console.log(response.data.responseMessage)
                dispatch(deleteSubscription(id))
                setIsSubscribed(false)
            })
            .catch(error => {console.log(error)})
        } else {
            axios.post(`/api/users/${myId}/subscribe`, {followeeId: id})
            .then(response => {
                console.log(response.data.responseMessage)
                dispatch(addSubscription(id))
                setIsSubscribed(true)
            })
            .catch(error => {console.log(error)})
        }
    }

    return (
        <div className="absolute z-20 top-[178px] left-[50px] w-[650px] h-[1106px] bg-[#00A0FF]">
            <div className="bg-gray-500 h-[570px] w-full flex flex-col py-[50px] px-[50px] justify-end">
                {[userName].map(text =>
                    (<p className="text-white text-[70px] font-karla-bold leading-[70px] tracking-[-2px] drop-shadow-2xl">{text}</p>))}  
            </div>
            <div className="flex justify-between w-full px-[50px] h-[186.2px]">
                <div className="flex flex-col gap-[10px] pt-[50px]">
                    <p className="font-karla text-white text-[28px] leading-[32px]">Event Manager</p>
                    <p className="font-karla text-white text-[28px] leading-[32px]">San Francisco</p>
                </div>
                {!isMine && (<CustomButton icon={isSubscribed ? 'close' : 'add'} clickHandler={handleSubscribeButton} />)}
            </div>
            <hr className="bg-white opacity-[0.2] w-[550px] h-[3px] mx-[50px]"/>
            <div className="flex px-[50px] justify-between">
                <div className="flex flex-col gap-[21px] pt-[60.8px] basis-1/3">
                    <p className="font-karla-bold text-white text-[50px] leading-[58px] text-center">145k</p>
                    <p className="font-karla-bold text-white text-[20px] leading-[23px] tracking-[2px] text-center uppercase">followers</p>
                </div>
                <div className="flex flex-col gap-[21px] pt-[60.8px] basis-1/3">
                    <p className="font-karla-bold text-white text-[50px] leading-[58px] text-center">56k</p>
                    <p className="font-karla-bold text-white text-[20px] leading-[23px] tracking-[2px] text-center uppercase">following</p>
                </div>
                <div className="flex flex-col gap-[21px] pt-[60.8px] basis-1/3">
                    <p className="font-karla-bold text-white text-[50px] leading-[58px] text-center">1,690</p>
                    <p className="font-karla-bold text-white text-[20px] leading-[23px] tracking-[2px] text-center uppercase">likes</p>
                </div>
            </div>
            <div className="mt-[64px] w-full h-[120px] bg-white flex justify-between items-center px-[80px]">
                <div className="bg-chat w-[50px] h-[50px]"/>
                <div className="bg-call w-[50px] h-[50px]"/>
            </div>
        </div>
    )
}