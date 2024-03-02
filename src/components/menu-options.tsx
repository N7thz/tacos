"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useGame } from "@/context/game-provider"
import { backgrounds } from "@/lib/utils"
import Image from "next/image"

export function ButtonChangeBackground() {

    const getBackgrounds = backgrounds()
    const { setBackground } = useGame()

    function changeBackground(background: string) {

        localStorage.setItem("background", background)
        setBackground(background)
    }

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={"outline"}
                    className="w-full text-2xl capitalize"
                >
                    trocar background
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[825px]">
                <DialogHeader>
                    <DialogTitle>imagens de fundo:</DialogTitle>
                    <DialogDescription>
                        escolha a imagem de fundo
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4">
                    {getBackgrounds.map((background, index) =>
                        <Image
                            key={index}
                            src={background}
                            width={400}
                            height={400}
                            alt="imagem ilustrativa"
                            onClick={() => changeBackground(background)}
                            className="w-full h-auto rounded-lg border border-zinc-50 cursor-pointer duration-200 hover:scale-105"
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}