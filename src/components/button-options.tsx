"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export const ButtonOptions = () => {

    const { push } = useRouter()

    return (
        
        <Button
            variant={"outline"}
            onClick={() => push("/")}
            className="w-full text-2xl capitalize"
        >
            sair
        </Button>
    )
}
