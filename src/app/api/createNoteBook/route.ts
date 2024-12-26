import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { generateImagePrompt, generateImage } from "@/lib/openai"
import { db } from "@/lib/db"
import { notes } from "@/lib/db/schema"

// /api/createNoteBook

export async function POST(req: Request) {
  //get user
  const { userId } = await auth()
  if (!userId) {
    return new NextResponse("Un-Authorized", { status: 401 })
  }
  const body = await req.json()
  const { name } = body

  //generate prompt with given name
  const image_description = await generateImagePrompt(name);
  if (!image_description) {
    return new NextResponse("Failed to generate image description", {
      status: 500,
    })
  }

  //use generated prompt to generate cover image
  const image_url = await generateImage(image_description)
  if (!image_url) {
    return new NextResponse("Failed to generate Image", {
      status: 500,
    })
  }

  //insert the note with image to DB
  const note_ids = await db
    .insert(notes)
    .values({
      name: name,
      userId,
      imageUrl: image_url,
    })
    .returning({
      insertedId: notes.id,
    })

  //return noteID
  return NextResponse.json({
    note_id: note_ids[0].insertedId
  })

}
