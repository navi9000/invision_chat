import { Suspense, lazy, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import Navigation from "./Navigation"

export default function Container(props) {

    const myId = useSelector(state => state.currentUser.userId)
    const [showNav, toggleNav] = useState(false)
    const currentLocation = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (props.component !== 'Login' && props.component !== 'Register' && !myId) {
            navigate('../login')
        }
        toggleNav(false)
    }, [currentLocation])

    const CurrentComponent = lazy(() => import('./' + props.component))
    
    const handleNav = () => {
        toggleNav(state => !state)
    }

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-[750px] h-[1334px] bg-background z-0 relative">
                <Suspense className="w-full h-full absolute top-0" fallback={<>...</>}>
                    <CurrentComponent nav={handleNav} />
                </Suspense>
                <div className={`w-full h-full bg-background z-50 absolute duration-500 ease-in-out ${showNav ? "top-0" : "top-[-100%]"}`}>
                    <Navigation close={handleNav} />
                </div>
            </div>
        </div>
    )
}