import { getChat } from '@/services/firebase'
import { urls } from '@/utils/constants'
import useSWR from 'swr'

function useChat(id: string) {
  const key = {
    url: urls.chat,
    id,
  }

  const { data, error, isLoading, isValidating, mutate } = useSWR(key, (key) => getChat(key.id), {
    revalidateOnFocus: false,
  })

  return {
    chat: data,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

export default useChat
