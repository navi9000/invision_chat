import ChatTop from "./ChatTop"
import ChatTime from "./ChatTime"
import ChatDialog from "./ChatDialog"
import ChatTypeArea from "./ChatTypeArea"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function Chat() {
    const {id} = useParams()
    const currentChat = useSelector(state => state.currentChat)
    useEffect(() => {
        console.log(currentChat)
    }, [currentChat])

    return (
        <div class="relative">
            <ChatTop />
            <ChatTime />
            <ChatDialog />
            <ChatTypeArea />
        </div>
    )
}