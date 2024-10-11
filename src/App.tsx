import { useState } from 'react'

import { Button } from '@/components/ui/button'

import './App.css'

function App() {
  const [clicked, setClicked] = useState(false)

  return <Button onClick={() => setClicked(true)}>{clicked ? 'World' : 'Hello'}</Button>
}

export default App
