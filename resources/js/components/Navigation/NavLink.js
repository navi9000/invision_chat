import { Link } from "react-router-dom"

export default function NavLink(props) {
    return (
        <a className="font-karla-bold text-[70px] tracking-[-2px] mb-[60px] text-white hover:text-[#FFBDB8] mx-auto leading-[82px] duration-300 ease-in-out">
            <Link to={props.to}>{props.header}</Link>
        </a>
    )
}