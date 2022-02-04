import { Link } from "react-router-dom"

export default function HomeRecentChat() {
    const id = 1
    return (
        <Link to={`../chats/${id}`} >
            <div className="flex justify-between p-[50px]">
                <div className="flex justify-start gap-[40px]">
                    <div className="w-[80px] h-[80px] bg-gray-500"></div>
                    <div>
                        <p className="font-karla-bold text-[24px] leading-[28px] mb-[22px]">Ana Jackobson</p>
                        <p className="font-karla text-[26px] text-[#050706] leading-[30px]">I am on my way</p>
                    </div>
                </div>
                <div>
                    <p className="font-karla-bold text-[20px] text-[#AD807D] leading-[23px]">5 minutes ago</p>
                </div>
            </div>
        </Link>
    )
}