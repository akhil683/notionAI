import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { generateImagePrompt } from "@/lib/openai"

// /api/createNoteBook
export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return new NextResponse("Un-Authorized", { status: 401 })
  }
  const body = await req.json()
  const { name } = body
  const image_description = await generateImagePrompt(name);
  console.log(image_description)
  return new NextResponse("ok")
}
