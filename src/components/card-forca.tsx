import { FC } from "react"
import { StickMan } from "./stick-man"
import { Card } from "./ui/card"
import { twMerge } from "tailwind-merge"
import { CardForcaProps } from "@/@types"

export const CardForca: FC<CardForcaProps> = ({ letras, historico }) => {

    return (

        <Card
            className="flex flex-col items-center justify-between min-h-[600px] w-2/5 rounded-lg pt-16 border-2 border-primary dark:border-white"
        >

            <div
                className="w-[250px] h-[380px] border-l-4 border-t-4 border-primary rounded-lg flex flex-col relative"
            >
                <div
                    className="w-[246px] h-[50px] border-r-4 border-primary"
                />

                <StickMan />
            </div>

            <div
                className=" w-full h-full justify-center text-5xl p-1 flex gap-4 flex-wrap lowercase m-2"
            >
                {letras.map((letra, index) => {

                    const isVisible = historico.includes(letra)

                    return (

                        <span
                            key={index}
                            className={twMerge(
                                "border-b-4 border-primary p-1",
                                !isVisible && "text-zinc-50 dark:text-zinc-950"
                            )}
                        >
                            {letra}
                        </span>
                    )
                })}
            </div>
        </Card>
    )
}
