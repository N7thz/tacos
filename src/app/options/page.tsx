import { ModeToggle } from "@/components/mode-toggle"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ButtonChangeBackground } from "@/components/menu-options"
import { ButtonOptions } from "@/components/button-options"
import { Background } from "@/components/background"

export default function Page() {

    return (

        <Background>
            <Card
                className="min-w-[300px] flex flex-col gap-4 capitalize border-2 border-zinc-900 relative dark:border-zinc-50"
            >
                <CardHeader>
                    <CardTitle className="text-3xl">
                        Opções
                    </CardTitle>
                </CardHeader>
                <CardFooter
                    className="flex flex-col gap-4 justify-around items-center"
                >
                    <ModeToggle />
                    <div
                        className="w-full flex flex-col gap-4 items-center"
                    >
                        <ButtonChangeBackground />
                        <ButtonOptions />
                    </div>
                </CardFooter>
            </Card>
        </Background>
    )
}
