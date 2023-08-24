import { IMessage } from './models'
import { mutate } from 'swr'
import { urls } from './constants'

export const mutateChats = ({ uid, chat }: { uid: string; chat: string }) => {
  mutate({ url: urls.chats, uid }, (data) => [...data, chat], {
    revalidate: false,
  })
}

export const mutateChat = ({ id, message }: { id: string; message: IMessage }) => {
  mutate({ url: urls.chat, id }, (data) => ({ ...data, messages: [...data.messages, message] }), {
    revalidate: false,
  })
}
