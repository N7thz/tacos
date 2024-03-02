import { FC, FormEvent, useState } from "react"
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Lightbulb } from "lucide-react"
import { useGame } from "@/context/game-provider"
import { CardOptionsProps } from "@/@types"

export const CardOptions: FC<CardOptionsProps> = ({
    historico,
    setHistorico,
    letras,
    setIsLose,
    setIsWin,
    palavra: { palavra, dica }
}) => {

    const { erros, setErros } = useGame()

    const [newLetra, setNewLetra] = useState<string>('')
    const [isDica, setIsDica] = useState<boolean>(false)
    const [letrasCertas, setLetrasCertas] = useState<string[]>([])
    const letrasUnicas = Array.from(new Set(palavra.toLowerCase().split('')))

    const verificarLetra = (e: FormEvent) => {

        e.preventDefault()

        if (!historico.includes(newLetra)) {

            if (letrasUnicas.includes(newLetra)) {

                setLetrasCertas(oldValue => [...oldValue, newLetra])

                if (letrasUnicas.length - 1 === letrasCertas.length) {

                    setIsWin(true)
                }
            }

            if (!letras.includes(newLetra)) {

                if (erros <= 5) {

                    setErros(erros + 1)
                } else {

                    setIsLose(true)
                }
            }

            setHistorico(oldValue => [...oldValue, newLetra])
        } else {
            alert('Você ja digitou essa letra')
        }

        setNewLetra('')
    }

    return (

        <Card
            className="flex flex-col items-center justify-around min-h-[600px] w-1/3 rounded-lg relative border-2 border-black dark:border-white"
        >
            {
                erros > 4 &&
                <Button
                    className="absolute top-2 right-2 p-1 cursor-pointer"
                    size="icon"
                >
                    <Lightbulb
                        onClick={() => setIsDica(true)}
                        width={28}
                        height={28}
                    />
                </Button>
            }

            <CardHeader
                className="w-full text-left"
            >
                <CardTitle
                    className="text-3xl w-full text-left ml-8 mt-4"
                >
                    Erros: {erros}
                </CardTitle>
            </CardHeader>

            <Card className="w-11/12 p-1 rounded-lg">
                <CardTitle className="text-2xl text-left p-2">
                    Dica:
                </CardTitle>
                <CardDescription
                    className="text-xl w-full"
                >
                    {isDica ? dica : "sem dicas ainda"}
                </CardDescription>
            </Card>

            <Card className="w-11/12 p-1 rounded-lg">
                <CardTitle className="text-2xl text-left p-2">
                    Letras Digitadas:
                </CardTitle>
                <CardContent className="flex p-2">
                    {
                        historico.length === 0
                            ? <CardDescription
                                className="text-xl w-full"
                            >
                                sem letras digitadas
                            </CardDescription>
                            : historico.map(letra =>

                                <h1
                                    key={letra}
                                    className="text-2xl after:content-['-']"
                                >
                                    {letra}
                                </h1>
                            )
                    }
                </CardContent>

            </Card>

            <form
                onSubmit={verificarLetra}
                className="w-10/12 flex gap-2 m-4"
            >
                <Input
                    required
                    value={newLetra}
                    maxLength={1}
                    onChange={e => setNewLetra(e.target.value.toLowerCase())}
                    placeholder="Digite uma letra..."
                />
                <Button
                    type="submit"
                    size={"icon"}
                >
                    <Check />
                </Button>
            </form>
        </Card>
    )
}
