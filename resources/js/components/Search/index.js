import TopTemplate from "../helpers/TopTemplate"
import SearchUser from "./SearchUser"
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import CustomButton from "../helpers/CustomButton"

export default function Search() {

    const navigate = useNavigate()
    const [searchQuery, changeSearchQuery] = useState('')
    const [users, setUsers] = useState([])
    const [firstOutput, setFirstOutput] = useState(0)
    const [searchOutput, setSearchOutput] = useState((<div></div>))
    const ref = useRef()
    useEffect(() => {
        const lastSearchQuery = window.localStorage.getItem('lastSearchQuery')
        ref.current.focus()
        if (lastSearchQuery !== null) {
            changeSearchQuery(lastSearchQuery)
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('lastSearchQuery', searchQuery)
        if (searchQuery) {
            axios.post('api/users', {searchQuery})
            .then(response => {
                if (response.data) {
                    setUsers(response.data)
                } else {
                    setUsers([])
                }
            })
            .catch(error => console.log(error))
        } else {
            setUsers([])
        }
    }, [searchQuery])

    useEffect(() => {
        setFirstOutput(0)
    }, [users])

    useEffect(() => {
        if (users.length > 0) {
            let myOutput = users.slice(firstOutput, firstOutput + 5)
            if (users.length > 5 && myOutput.length < 5) {
                myOutput = myOutput.concat(users.slice(0, 5 - myOutput.length))
            }
            setSearchOutput(
                [...myOutput.map(entry => (<SearchUser id={entry.id} username={entry.username} key={entry.id} />))]
                .map((e, i) => i < users.length - 1 ? [e, (<hr className="w-[550px] mx-auto h-[2px] bg-black opacity-[0.1]"/>)] : [e])
                .reduce((a, b) => a.concat(b))
                )
        } else {
            if (searchQuery) {
                setSearchOutput(<div className="font-karla-bold m-[50px] text-[24px]">Not Found</div>)
            } else setSearchOutput(<div></div>)
        }
    }, [firstOutput, users])

    const clickHandler = () => {
        const arrLength = users.length
        if (arrLength > 5) {
            if (arrLength - firstOutput > 5) {
                setFirstOutput(state => state + 5)
            } else setFirstOutput(state => state + 5 - arrLength)
        }
    }

    const closeHandler = () => {
        window.localStorage.removeItem('lastSearchQuery')
        navigate('../home')
    }

    window.addEventListener('beforeunload', () => window.localStorage.removeItem('lastSearchQuery'))

    return (
        <div>
            <TopTemplate
                leftBG="bg-close"
                leftHandler={closeHandler}
                text={<input
                    type="text"
                    ref={ref}
                    value={searchQuery}
                    onChange={e => {changeSearchQuery(e.target.value)}}
                    className="bg-transparent placeholder-white text-center"
                    placeholder="Search for..."
                    />}
                rightBG="bg-more"
            />
            <div className="absolute top-[523px] w-full h-[811px] bg-black z-10">
            </div>
            <div className="absolute top-[423px] left-[50px] w-[650px] h-[911px] bg-white z-20">
                <CustomButton icon="next" clickHandler={clickHandler} customClass={`ml-[480px] absolute ${users.length < 6 ? 'hidden' : ''}`} />
                {searchOutput}
            </div>
        </div>
    )
}