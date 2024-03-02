"use client"

import { useState } from "react"
import { useGame } from "@/context/game-provider"
import { CardForca } from "@/components/card-forca"
import { CardOptions } from "@/components/card-options"
import { Window } from "@/components/window"

export default function Page() {

    const { background, palavra: { palavra } } = useGame()

    const [historico, setHistorico] = useState<string[]>([])
    const [isWin, setIsWin] = useState<boolean>(false)
    const [isLose, setIsLose] = useState<boolean>(false)
    const letras: string[] = palavra.toLowerCase().split('')

    console.log(background)

    return (

        <div
            style={{ background: `url(${background})` }}
            className="flex items-center justify-around min-h-screen"
        >

            <CardForca
                historico={historico}
                letras={letras}
            />

            <CardOptions
                historico={historico}
                letras={letras}
                setHistorico={setHistorico}
                setIsLose={setIsLose}
                setIsWin={setIsWin}
            />

            {
                isLose &&
                <Window
                    message="você perdeu"
                    isLose={isLose}
                    isWin={isWin}
                />

            }

            {
                isWin &&
                <Window
                    message="você venceu"
                    isLose={isLose}
                    isWin={isWin}
                />
            }
        </div>
    )
}