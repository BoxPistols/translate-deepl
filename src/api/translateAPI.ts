const API = `${process.env.NEXT_PUBLIC_API_KEY}`

export const translateText = async (inputText: string) => {
  const response = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${API}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `text=${encodeURIComponent(inputText.replace(/\s+/g, ' '))}&source=JA&target_lang=EN`,
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()
  return data.translations[0].text
}
