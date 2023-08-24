import OpenAI from 'openai'

const openai_client = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true,
})

export const completion = (content: string) => {
  return openai_client.chat.completions.create({
    messages: [{ role: 'user', content }],
    model: 'gpt-3.5-turbo',
  })
}
