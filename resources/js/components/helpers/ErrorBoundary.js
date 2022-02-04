import { Component } from "react"

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }
  
    static getDerivedStateFromError(error) {
        return { hasError: true }
      }
  
    render() {
      if (this.state.hasError) {
        return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-[750px] h-[1334px] bg-background z-0 relative px-[20px] py-[20px]">
                <h1 className="font-karla-bold text-4xl text-white">Something went wrong...</h1>
            </div>
        </div>
        )
      }
  
      return this.props.children
    }
  }