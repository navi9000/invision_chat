export default function CustomButton(props) {
    return (
    <button
        type="submit"
        className={`bg-[#FFBDB8] w-[120px] h-[120px] z-20 rounded-full transform translate-y-[-60px] shadow-2xl ${props.customClass}`}
        onClick={props.clickHandler}
        >
        <div className={`bg-${props.icon} h-[50px] w-[50px] mx-[35px] flex-shrink-0`} />
    </button>
    )
}