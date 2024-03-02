"use client"

import { ReactNode, createContext, useContext, useState} from "react"
import { GameProps, Palavra } from "@/@types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const GameContext = createContext({} as GameProps)

export function GameProvider({ children }: { children: ReactNode }) {

    const queryClient = new QueryClient()

    const backgroudStorage =
        localStorage.getItem("background") ?? "https://i.pinimg.com/originals/4e/15/a9/4e15a9e296c03c97c417335a2fbe8f93.gif"

    const [erros, setErros] = useState<number>(0)
    const [background, setBackground] = useState<string>(backgroudStorage)

    const value: GameProps = {
        erros, setErros,
        background, setBackground
    }

    return (

        <GameContext.Provider value={value}>
            <QueryClientProvider  client={queryClient}>
                {children}
            </QueryClientProvider>
        </GameContext.Provider>
    )
}

export const useGame = () => useContext(GameContext)