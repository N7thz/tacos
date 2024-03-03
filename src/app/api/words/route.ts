import data from "@/words.json"
import { NextResponse } from "next/server"

export async function GET() {

    const randonId = (Math.round(Math.random() * (50 - 1)) - 1)

    return NextResponse.json(data[randonId])
}