import { useState, useCallback, useEffect } from 'react'

const useFetch = (query, page) => {
  const [isLoading, setIsLoading] = useStat(true)
  const [error, setError] = useStat(false)
  const [list, setList] = useStat([])
  const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'

  const sendQuery = useCallback(async () => {
    await setIsLoading(true)
    await setError(false)

    try {
      const response = await fetch(`${_url}games`)
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status us ${response.status}`)
      }
      // const res = await response.json()
      await setList((prev) => [...prev, ...response.data])
      console.log(data)
      setIsLoading(false)
    } catch (err) {
      setError(err)
    }
  }, [query, page])

  useEffect(() => {
    sendQuery(query)
  }, [query, sendQuery, page])

  return { isLoading, error, list }
}

export default useFetch