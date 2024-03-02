"use client"

import { Button } from "@/components/ui/button"
import {
    CardFooter
} from "@/components/ui/card"
import { useGame } from "@/context/game-provider"
import { useRouter } from "next/navigation"

export const ButtonsWindow = () => {

    const { setErros } = useGame()
    const { push } = useRouter()

    function resetValues() {

        setErros(0)
        push("/")
    }

    return (

        <CardFooter className="flex justify-around gap-3">
            <Button
                onClick={resetValues}
                className="w-1/2 p-1 capitalize"
            >
                sair
            </Button>
            <Button
                onClick={() => window.location.reload()}
                className="w-1/2  p-1 capitalize"
            >
                jogar novamente
            </Button>
        </CardFooter>
    )
}
