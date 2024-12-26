import Editor from '@/components/Editor'
import { Button } from '@/components/ui/button'
// import { db } from '@/lib/db'
// import { notes } from '@/lib/db/schema'
import { auth, currentUser } from '@clerk/nextjs/server'
// import { and, eq } from 'drizzle-orm'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    noteId: string
  }
}

const NotebookPae = async ({ params }: Props) => {
  console.log(params.noteId)
  const { userId } = await auth()
  if (!userId) {
    return redirect("/dashboard")
  }
  // const { noteId } = params
  // const userNotes = await db
  //   .select()
  //   .from(notes)
  //   .where(
  //     and(
  //       eq(notes.id, parseInt(noteId)),
  //       eq(notes.userId, userId),
  //     )
  //   )
  // if (userNotes.length !== 1) {
  //   return redirect("/dashboard")
  // }
  // const note = userNotes[0]
  // console.log(note)
  const user = await currentUser()

  return (
    <div className='min-h-screen grainy p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='border shadow-xl border-stone-200 rounded-lg p-4 flex items-center'>
          <Link href={"/dashboard"}>
            <Button className='bg-green-600 ' size="sm">
              Back
            </Button>
          </Link>
          <div className='w-3'></div>
          <span className='font-semibold'>
            {user?.firstName} {user?.lastName}
          </span>
          <span className='inline-block mx-1'>/</span>
          <span className='text-stone-500 font-semibold'>
            {/* {note.name} */}
            hello akhil
          </span>

          <div className='ml-auto'>
            DELETE BUTTON
          </div>
        </div>

        <div className='h-4'></div>
        <div className='border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full'>
          {/* Editor */}
          <Editor />
        </div>

      </div>
    </div>
  )
}

export default NotebookPae
