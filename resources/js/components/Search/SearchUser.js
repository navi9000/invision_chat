import { Link } from "react-router-dom"

export default function SearchUser(props) {
    return (
    <div className="p-[50px]" >
        <Link to={`../users/${props.id}`}>
        <div className="flex justify-start gap-[40px]">
            <div className="w-[80px] h-[80px] bg-gray-500"></div>
            <div>
                <p className="font-karla-bold text-[24px] leading-[28px] mb-[22px]">{props.username}</p>
                <p className="font-karla-bold text-[20px] text-[#AD807D] leading-[23px]">5 minutes ago</p>
            </div>
        </div>
        </Link>
    </div>
    )
}