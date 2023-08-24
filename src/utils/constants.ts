export const paths = {
  home: '/',
  chat: (id: string) => `/chat/${id}`,
}

export const collections = {
  chats: {
    name: 'chats',
    fields: {
      uid: 'uid',
    },
    subCollections: {
      messages: {
        name: 'messages',
        fields: {
          id: 'id',
          content: 'content',
        },
      },
    },
  },
}

export enum urls {
  chats,
  chat,
}
