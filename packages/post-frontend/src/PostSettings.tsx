import { useCallback, useState } from 'react'
import { Slider } from 'ui'

function defaultVal(val: string | null, defaultVal: number) {
  return parseFloat(val ?? `${defaultVal}`)
}

export default function UserSettings() {
  const [value1, setValue1] = useState(() =>
    defaultVal(localStorage.getItem('post-value1'), 10),
  )
  const [value2, setValue2] = useState(() =>
    defaultVal(localStorage.getItem('post-value2'), 70),
  )

  const handleValue1Change = useCallback((value: number) => {
    localStorage.setItem('post-value1', `${Math.round(value)}`)
    setValue1(value)
  }, [])

  const handleValue2Change = useCallback((value: number) => {
    localStorage.setItem('post-value2', `${Math.round(value)}`)
    setValue2(value)
  }, [])

  return (
    <div tw="flex flex-col gap-2 w-[200px]">
      <Slider value={value1} onValueChange={handleValue1Change} tw="mt-2" />
      <Slider value={value2} onValueChange={handleValue2Change} tw="mt-2" />
    </div>
  )
}
