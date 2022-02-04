import TopTemplate from "../helpers/TopTemplate"
import HomeAlert from "./HomeAlert"
import HomeNewMessages from "./HomeNewMessages"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { setSubscriptions } from "../../features/currentUser"
import HomeBottomContent from "./HomeBottomContent"

export default function Home(props) {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const myId = useSelector(state => state.currentUser.userId)
    const myName = useSelector(state => state.currentUser.userName)
    useEffect(() => {
        axios.get(`api/users/${myId}/subscriptions`)
        .then(response => {
            if (response.data) {
                dispatch(setSubscriptions(response.data.map(entry => entry.followeeId)))
            } else {
                dispatch(setSubscriptions([]))
            }
        })
        .catch(error => {console.log(error)})
    }, [])

    return(
        <div className="absolute top-0 flex flex-col h-full w-full z-0">
            <TopTemplate
                leftBG="bg-menu"
                leftHandler={props.nav}
                text={`Hi, ${myName}`}
                rightBG="bg-search"
                rightHandler={() => navigate('../search')}
            />
            <HomeAlert />
            <HomeNewMessages />
            <HomeBottomContent />
        </div>
    )
}