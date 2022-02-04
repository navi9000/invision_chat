import HomeRecentChats from "./HomeRecentChats"
import CustomButton from "../helpers/CustomButton"

export default function HomeBottomContent() {
    return (
    <div className="w-full h-full bg-black mt-[100px] z-10 px-[50px]">
        <div className="flex justify-between mb-[30px]">
            <div className="flex gap-[10px] items-center">
                <div className="bg-down h-[50px] w-[50px]"/>
                <p className="uppercase text-white font-karla-bold text-[20px] leading-[23px] tracking-[2px]">Recent chats</p>
            </div>
            <CustomButton icon="new" />
        </div>
        <HomeRecentChats />
    </div>
    )
}