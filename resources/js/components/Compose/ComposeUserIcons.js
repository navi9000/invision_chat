export default function ComposeUserIcons() {
    return (
        <div class="flex gap-[30px] px-[50px] pt-[45px] pb-[145px] min-h-[395px]">
            {[1,2].map(id => (<div class="h-[100px] w-[100px] bg-gray-500 drop-shadow-2xl">{id}</div>))}
        </div>
    )
}