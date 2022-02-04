export default function HomeAlert() {
    return(
        <div className="flex gap-[21px] items-center justify-center mt-[48px] mb-[48px] flex-shrink-0 flex-grow-0">
            <div className="w-[50px] h-[50px] bg-alert" />
            <p className="font-karla-bold text-white uppercase font-[22px] tracking-[2px]">1 new message</p>
        </div>
    )
}