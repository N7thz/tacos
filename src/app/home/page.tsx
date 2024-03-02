"use client"

import { useState } from "react"
import { CardForca } from "@/components/card-forca"
import { CardOptions } from "@/components/card-options"
import { Window } from "@/components/window"
import { Button } from "@/components/ui/button"
import { Background } from "@/components/background"
import { useQuery } from "@tanstack/react-query"
import { Palavra } from "@/@types"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"

export default function Page() {

    const { push } = useRouter()
    const randonId = Math.round(Math.random() * (50 - 1))

    const { data: palavraObject } = useQuery({
        queryKey: ["get-only-product"],
        queryFn: async () => {

            const response = await
                fetch(`http://localhost:3333/words?id=${randonId}`)

            const data: Palavra[] = await response.json()

            return data[0]
        }
    })

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