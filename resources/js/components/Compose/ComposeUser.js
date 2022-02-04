import { useState, useEffect } from "react"
import axios from 'axios'

export default function ComposeUser(props) {
    const [isSelected, toggleSelection] = useState(false)
    const [userName, setUserName] = useState(null)
    useEffect(() => {
        axios.get(`/api/users/${props.id}`)
        .then(response => {
            setUserName(response.data.username)
        })
        .catch(error => {console.log(error)})
    }, [])

    const handleClick = () => {toggleSelection(isSelected => !isSelected)}

    return (
        <div class="flex justify-between p-[50px]" onClick={handleClick}>
            <div class="flex justify-start gap-[40px]">
                <div class="w-[80px] h-[80px] bg-gray-500"></div>
                <div>
                    <p class="font-karla-bold text-[24px] leading-[28px] mb-[22px]">{userName}</p>
                </div>
            </div>
            <div className={isSelected ? '' : 'hidden'}>
                <div class="bg-tick w-[50px] h-[50px]" />
            </div>
        </div>
    )
}