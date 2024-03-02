"use client"

import { Button } from "./ui/button"
import { CardFooter } from "./ui/card"
import { useRouter } from "next/navigation"

export const ButtonsLogin = () => {

    const { push } = useRouter()

    return (

        <CardFooter className="flex justify-around items-center">
            <Button
                variant={"outline"}
                onClick={() => push("/home")}
                className="text-2xl capitalize"
            >
                jogar
            </Button>
            <Button
                variant={"outline"}
                onClick={() => push("/options")}
                className="text-2xl capitalize"
            >
                opções
            </Button>
        </CardFooter>
    )
}
