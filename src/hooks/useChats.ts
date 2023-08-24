import { getChats } from '@/services/firebase'
import { urls } from '@/utils/constants'
import useSWR from 'swr'

function useChats(uid: string) {
  const key = {
    url: urls.chats,
    uid,
  }

  const { data, error, isLoading, isValidating, mutate } = useSWR(key, (key) => getChats(key.uid), {
    revalidateOnFocus: false,
  })

  return {
    chats: data,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

export default useChats
