import ComposeTop from "./ComposeTop"
import ComposeUserIcons from "./ComposeUserIcons"
import ComposeUser from "./ComposeUser"
import { useSelector } from 'react-redux'

export default function Compose() {
    const users = useSelector(state => state.currentUser.userSubscriptions)

    return(
        <div>
            <ComposeTop />
            <ComposeUserIcons />
            <div class="absolute top-[523px] w-full h-[811px] bg-black z-10">
            </div>
            <div class="absolute top-[423px] left-[50px] w-[650px] h-[911px] bg-white z-20">
                {users
                .map(userId => (<ComposeUser id={userId} />))
                .map((e, i) => i < users.length - 1 ? [e, (<hr class="w-[550px] mx-auto h-[2px] bg-black opacity-[0.1]"/>)] : [e])
                .reduce((a, b) => a.concat(b))}
            </div>
            <button
                type="submit"
                class="bg-[#FFBDB8] w-[120px] h-[120px] z-20 rounded-full transform absolute top-[363px] left-[530px] shadow-2xl"
                >
                <div class="bg-next h-[50px] w-[50px] mx-[35px] flex-shrink-0" />
            </button>
        </div>
    )
}