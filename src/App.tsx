import {  useState } from 'react'
import './App.css'
import { Button, Button2 } from './components'
import { useFetch } from './hooks'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const url2 = 'https://jsonplaceholder.typicode.com/user'

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const { data, error, loading } = useFetch<Data>(url)
  const { data: data2, error: error2, loading: loading2 } = useFetch<{name:string}>(url2)

  const countMore = () => {
    setCount((count) => count + 1)
  }   
  const countMore1 = () => {
    setCount1((count1) => count1 + 1)
  } 

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  if (loading2) return <div>Loading user...</div>
  if (error2) return <div>Error: {error2.message}</div>

  
  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <Button2 label={`Count is ${count1}`} parentMethod={countMore1} />
      <div>{ JSON.stringify(data) }</div>
      <div>{ JSON.stringify(data2) }</div>
    </>
  )
}

export default App
