// import { useState } from 'react'
import './App.css'
import TelegramTheme from './TelegramTheme'
import HomePage from './pages/HomePage'

// import WebApp from '@twa-dev/sdk'
// import { MainButton } from '@twa-dev/sdk/react'

function App() {
  return (
    <div className="app">
      <HomePage />
      <TelegramTheme />
    </div>
  )
}

export default App
