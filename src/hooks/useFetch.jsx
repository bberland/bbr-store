import { useState, useEffect } from 'react'

export const useFetch = (url, arr) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(true))
  }, arr)

  return { data, isLoading }
}
