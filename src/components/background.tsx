"use client"

import { CSSProperties, ReactNode } from "react"
import { useGame } from "@/context/game-provider"

export const Background = ({ children }: { children: ReactNode }) => {

    const { background } = useGame()

    const style: CSSProperties  = { 
        background: `url(${background}) center center`,
        backgroundSize: "cover"
    }

    return (

        <div
            style={style}
            className="flex items-center justify-around min-h-screen"
        >
            {children}
        </div>
    )
}
