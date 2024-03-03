"use client"

import { useEffect, useState } from "react"
import { CardForca } from "@/components/card-forca"
import { CardOptions } from "@/components/card-options"
import { Window } from "@/components/window"
import { Button } from "@/components/ui/button"
import { Background } from "@/components/background"
import { useQuery } from "@tanstack/react-query"
import { Palavra } from "@/@types"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import axios from "axios"

export default function Page() {

    const { push } = useRouter()

    useEffect(() => {

        getWord()
    }, [])

    async function getWord() {

        const response = await fetch("api/words")

        const data: Palavra = await response.json()

        setPalavraObject(data)
    }

    const [palavraObject, setPalavraObject] = useState<Palavra | null>(null)
    const [historico, setHistorico] = useState<string[]>([])
    const [isWin, setIsWin] = useState<boolean>(false)
    const [isLose, setIsLose] = useState<boolean>(false)
    const letras: string[] | undefined =
        palavraObject?.palavra.toLowerCase().split('')

    if (!palavraObject || !letras) return 

    return (

        <Background>

            <Button
                className="absolute top-8 right-8 bg-transparent hover:bg-transparent hover:scale-105 duration-200"
                onClick={() => push("/options")}
            >
                <Menu size={40} />
            </Button>

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
                palavra={palavraObject}
            />

            {
                isLose &&
                <Window
                    message="você perdeu"
                    isLose={isLose}
                    isWin={isWin}
                    palavra={palavraObject}
                />
            }

            {
                isWin &&
                <Window
                    message="você venceu"
                    isLose={isLose}
                    isWin={isWin}
                    palavra={palavraObject}
                />
            }
        </Background>
    )
}