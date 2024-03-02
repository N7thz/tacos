"use client"

import { 
    Dispatch, ReactNode, SetStateAction, createContext, useContext, useState 
} from "react"

interface GameProps {

    erros: number
    setErros: Dispatch<SetStateAction<number>>
    background: string
    setBackground: Dispatch<SetStateAction<string>>
    palavra: Palavra
    setPalavra: Dispatch<SetStateAction<Palavra>>
}

interface Palavra {
    id: number
    palavra: string
    dica: string
}

const GameContext = createContext({} as GameProps)

export function GameProvider({ children }: { children: ReactNode }) {

    const [erros, setErros] = useState<number>(0)
    const [background, setBackground] = useState<string>("https://i.pinimg.com/originals/4e/15/a9/4e15a9e296c03c97c417335a2fbe8f93.gif")
    const [palavra, setPalavra] = useState<Palavra>({
        id: 51,
        palavra: "iogurte",
        dica: "comida feita a partir de leite"
    })

    const value: GameProps = {
        erros, setErros,
        background, setBackground,
        palavra, setPalavra
    }

    return (

        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => useContext(GameContext)