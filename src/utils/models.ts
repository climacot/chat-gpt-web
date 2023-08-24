export interface IFirebaseMessage {
  user: string
  model: string
}

export interface IMessage {
  id: string
  user: string
  model: string
}

export interface IFirebaseChat {
  name: string
  uid: string
}

export interface IChat extends IFirebaseChat {
  messages: IMessage[]
  id: string
}
