import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ButtonsLogin } from "@/components/buttons-login"
import { Background } from "@/components/background"
import Image from "next/image"

export default function Home() {

  return (

    <Background>
      <Card
        className="min-w-[300px] flex flex-col gap-4 capitalize border-2 border-primary relative dark:border-zinc-50"
      >
        <CardHeader>
          <CardTitle className="text-3xl">
            forca
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Image
            src={"/icon.png"}
            width={200}
            height={200}
            alt="stick-man image"
          />
        </CardContent>
        <ButtonsLogin />
      </Card>
    </Background>
  )
}
