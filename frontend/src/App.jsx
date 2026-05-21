import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('loading')

  useEffect(() => {
    fetch('https://click.ecc.ac.jp/ecc/kyamagata/memo-api/backend/')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
      })
      .catch(() => {
        setMessage('error')
      })
  }, [])

  return (
    <div>
      <h1>Memo API Lab</h1>
      <p>{message}</p>
    </div>
  )
}


export default App
