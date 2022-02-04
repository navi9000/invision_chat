import HomeRecentChat from "./HomeRecentChat"

export default function HomeRecentChats() {
    const chats = [(<HomeRecentChat />), (<HomeRecentChat />)]

    return (
        <div className="bg-white z-20">
            {[...chats]
            .map((e, i) => i < chats.length - 1 ? [e, (<hr className="w-[550px] mx-auto h-[2px] bg-black opacity-[0.1]"/>)] : [e])
            .reduce((a, b) => a.concat(b))}
        </div>
    )
}