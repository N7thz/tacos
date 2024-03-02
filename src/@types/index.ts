import { Dispatch, SetStateAction } from "react"

export interface CardForcaProps {
    letras: string[]
    historico: string[]
}

export interface CardOptionsProps {

    historico: string[]
    letras: string[]
    palavra: Palavra
    setHistorico: Dispatch<SetStateAction<string[]>>
    setIsWin: Dispatch<SetStateAction<boolean>>
    setIsLose: Dispatch<SetStateAction<boolean>>
}

export interface WindowProps {
    message: string
    isLose: boolean
    isWin: boolean
    palavra: Palavra
}

export interface GameProps {

    erros: number
    setErros: Dispatch<SetStateAction<number>>
    background: string
    setBackground: Dispatch<SetStateAction<string>>
}

export interface Palavra {
    id: number
    palavra: string
    dica: string
}