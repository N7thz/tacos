import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
    Card, CardHeader, CardTitle, CardFooter, CardContent
} from "@/components/ui/card"
import { ButtonChangeBackground } from "@/components/menu-options"

import { ButtonOptions } from "@/components/button-options"

export default function Page() {
    
    return (

        <div
            className="min-h-screen flex items-center justify-center relative"
            style={{ background: "url(https://i.pinimg.com/originals/9c/d7/e7/9cd7e7e85fb52f60428a942675174f12.jpg)" }}
        >
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
        </div>
    )
}
