import { useSelector, useDispatch } from "react-redux"
import { editMessage, addMessage } from "../../features/currentChat"
import moment from 'moment'
import CustomButton from "../helpers/CustomButton"

export default function ChatTypeArea() {
    const dispatch = useDispatch()
    const message = useSelector(store => store.currentChat.currentMessage)

    const handleEditMessage = e => {
        if (e.target.value !== '\n') {
            dispatch(editMessage(e.target.value))
        }
    }

    const handleAddMessage = () => {
        if (message !== '') {
            const now = moment().valueOf()
            dispatch(addMessage({uid: 1, sent: now, message: message.trim()}))
            dispatch(editMessage(''))
        }
    }

    return (
        <div class="bg-black absolute top-[1224px] h-[110px] w-full flex px-[40px] justify-between items-center gap-[50px]">
            <div class="bg-photo z-20 w-[50px] h-[50px] flex-shrink-0" />
            <textarea
                name="message"
                class="w-full outline-none bg-transparent text-white font-karla resize-none self-center overflow-hidden"
                placeholder="Type in your message..."
                value={message}
                onChange={handleEditMessage}
                onKeyDown={({ key }) => { if (key === 'Enter') handleAddMessage() }}
                 />
            <CustomButton icon="send" clickHandler={handleAddMessage} />
        </div>
    )
}