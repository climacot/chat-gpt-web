'use client'

import { addMessage } from '@/services/firebase'
import { IMessage } from '@/utils/models'
import { useChat } from 'ai/react'
import { useRef, useEffect } from 'react'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Avatar from '@/components/avatar'
import clsx from 'clsx'
import Gpt from '@/components/gpt'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Message } from 'ai/react'

const convert = (mss: IMessage[]) => {
  let mee: Message[] = []
  mss.forEach((m, i) => {
    mee.push({ content: m.user, role: 'user', id: m.id + 1 })
    mee.push({ content: m.model, role: 'assistant', id: m.id + 2 })
  })
  return mee
}

function AiChat({ id, messages: mss }: { id: string; messages: IMessage[] }) {
  const ref = useRef<HTMLUListElement>(null)

  const { messages, input, isLoading, handleInputChange, handleSubmit } = useChat({
    api: '/api',
    initialMessages: convert(mss),
    onFinish(message) {
      console.log(mss)
      addMessage({
        id,
        message: {
          model: message.content,
          user: input,
        },
      })
    },
  })

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current?.scrollHeight,
      behavior: 'instant',
    })
  }, [messages])

  return (
    <>
      <ul ref={ref} className="overflow-y-scroll">
        {messages.map((m) => (
          <li key={m.id}>
            <div className={clsx('flex gap-4 border-b-[1px] p-4', m.role === 'user' ? 'bg-white' : 'bg-gray-50')}>
              <div>{m.role === 'assistant' ? <Gpt /> : <Avatar />}</div>
              <div>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          {...props}
                          // eslint-disable-next-line react/no-children-prop
                          children={String(children).replace(/\n$/, '')}
                          style={dark}
                          language={match[1]}
                          PreTag="div"
                        />
                      ) : (
                        <code {...props} className={className}>
                          {children}
                        </code>
                      )
                    },
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <form autoComplete="off" className="flex gap-4 p-4" onSubmit={handleSubmit}>
        <input
          className="flex-1 border-[1px] p-2"
          disabled={isLoading}
          onChange={handleInputChange}
          placeholder="Escribe un mensaje..."
          value={input}
        />
      </form>
    </>
  )
}

export default AiChat
