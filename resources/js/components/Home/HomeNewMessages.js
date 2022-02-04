import HomeNewMessage from "./HomeNewMessage"

export default function HomeNewMessages() {
    const newMessages = [(<HomeNewMessage />)]
    return (
        <div className="flex flex-col items-center flex-shrink-0 flex-grow-0">
            {newMessages}
        </div>
    )
}