import { FC } from "react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useGame } from "@/context/game-provider"
import { twMerge } from "tailwind-merge"
import { ButtonsWindow } from "./buttons-window"

export interface WindowProps {
    message: string
    isLose: boolean
    isWin: boolean
}

export const Window: FC<WindowProps> = ({ message, isLose, isWin }) => {

    const { palavra: { palavra } } = useGame()

    return (

        <div
            className="fixed inset-0 z-50 bg-black/80"
        >
            <Card
                className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-black dark:border-white p-6 shadow-lg duration-200 sm:rounded-lg"
            >
                <CardHeader>
                    <CardTitle className={
                        twMerge(
                            "text-4xl text-center capitalize",
                            isLose && "text-red-500",
                            isWin && "text-green-500",
                        )
                    }>
                        {message}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    {
                        isLose &&
                        <p className="text-xl">
                            A palavra secreta era:
                            <span className="italic">
                                {palavra.toUpperCase()}
                            </span>
                        </p>
                    }
                </CardContent>
                <ButtonsWindow />
            </Card>
        </div>
    )
}
