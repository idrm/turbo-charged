import { useCallback, useState } from 'react'
import { TextInput } from 'ui'

export default function UserSettings() {
  const [text, setText] = useState(
    () => localStorage.getItem('user-text') ?? 'yada yada',
  )

  const handleTextChange = useCallback((text: string) => {
    localStorage.setItem('user-text', text)
    setText(text)
  }, [])

  return (
    <div tw="flex flex-col gap-2 w-[200px]">
      <TextInput value={text} onChange={handleTextChange} tw="mt-2" />
    </div>
  )
}
