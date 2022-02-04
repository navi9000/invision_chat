export default function TopTemplate(props) {
    return (
        <div className="h-[128px] w-full z-10 bg-black flex justify-between items-center px-[20px] pt-[58px] pb-[20px]">
            <div
            className={`h-[50px] w-[50px] cursor-pointer opacity-20 hover:opacity-100 duration-300 ease-in-out ${props.leftBG}`}
            onClick={props.leftHandler}
            />
            <p className="text-white font-karla text-[34px]">{props.text}</p>
            <div
            className={`${props.rightBG} h-[50px] w-[50px] opacity-20 hover:opacity-100 duration-300 ease-in-out ${props.rightBG ? "cursor-pointer" : ""} `}
            onClick={props.rightHandler}
            />
        </div>
    )
}