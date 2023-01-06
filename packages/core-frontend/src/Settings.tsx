import { getSettingSections } from 'core-frontend-lib'
import React from 'react'

export default function Settings() {
  const settingSections = getSettingSections()

  return (
    <React.Fragment>
      <div tw="text-2xl text-subdued font-semibold">Settings</div>

      <div tw="flex flex-col gap-8 mt-8">
        {settingSections.map(s => (
          <div key={s.name}>
            {s.name}
            <div>{s.component()}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}
