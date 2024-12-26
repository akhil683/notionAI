'use client'
import React, { useState } from 'react'
import { EditorContent, useEditor } from "@tiptap/react"
import { StarterKit } from "@tiptap/starter-kit"

const Editor = () => {
  const [editorState, setEditorState] = useState("")

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML())
    }
  })

  return (
    <div>
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Editor
