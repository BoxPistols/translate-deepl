import { useState } from 'react'
import styles from '../styles/Home.module.css'

const API = `${process.env.NEXT_PUBLIC_API_KEY}`

export const Translate = () => {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const handleTranslate = async () => {
    const response = await fetch(
      `https://api-free.deepl.com/v2/translate?auth_key=${API}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `text=${encodeURIComponent(inputText)}&source=JA&target_lang=EN`,
      },
    )
    const data = await response.json()
    setTranslatedText(data.translations[0].text)
  }

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>
        {translatedText}:{inputText}
      </p>
    </div>
  )
}
