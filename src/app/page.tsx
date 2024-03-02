import {
  Card, CardHeader, CardTitle, CardFooter, CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ButtonsLogin } from "@/components/buttons-login"

export default function Home() {

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
    </div>
  )
}
