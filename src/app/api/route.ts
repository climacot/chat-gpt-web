import { Configuration, type ChatCompletionRequestMessage, OpenAIApi } from 'openai-edge'
import { NextRequest } from 'next/server'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

export async function POST(request: NextRequest) {
  const { messages }: { messages: ChatCompletionRequestMessage[] } = await request.json()

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
