import { Configuration, OpenAIApi } from "openai-edge"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function generateImagePrompt(name: string) {
  try {
    const res = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a creative and helpful ai assistant capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled"
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my noteboook title ${name}`
        }
      ]
    })
    const data = await res.json()
    console.log("resopnse data", data)
    const image_description = data?.choices[0]?.message?.content
    console.log("image_description", image_description)
    return image_description as string
  } catch (e) {
    console.log(e)
    throw e
  }
}

export async function generateImage(image_description: string) {
  try {
    const res = await openai.createImage({
      prompt: image_description,
      n: 1,
      size: '256x256',
    })
    const data = await res.json()
    if (data?.choices && data.choices.length > 0) {
      const image_url = data?.data[0]?.url
      return image_url as string
    } else {
      console.error("No choices returned from API", data)
    }
  } catch (e) {
    console.error(e)
  }
}
