"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {
  name?: "hello",
}

const TypewriteTitle = (props: Props) => {
  console.log(props)
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewrite) => {
        typewrite.typeString("Supercharged Productivity !")
          .pauseFor(1000).deleteAll()
          .typeString("AI-Powered Insights.")
          .start()
      }}
    />
  )
}

export default TypewriteTitle
