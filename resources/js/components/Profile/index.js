import TopTemplate from "../helpers/TopTemplate"
import ProfileContent from "./ProfileContent"
import {useParams, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux"

export default function Profile(props) {
    const {id} = useParams()
    const myId = useSelector(state => state.currentUser.userId)
    const navigate = useNavigate()

    return (
        <div className="h-full flex flex-col gap-[350px]">
            <TopTemplate
                leftBG={myId === Number(id) ? 'bg-menu' : 'bg-back'}
                leftHandler={myId === Number(id) ? props.nav : () => navigate(-1)}
                text="Profile"
                rightBG={myId === Number(id) ? 'bg-settings_copy' : 'bg-more'}
                rightHandler={() => navigate('../search')}
            />
            <div className="bg-black z-10 w-full h-full" />
            <ProfileContent />
        </div>
    )
}