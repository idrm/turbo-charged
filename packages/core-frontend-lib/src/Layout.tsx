import { Link, Outlet } from '@tanstack/react-router'
import React from 'react'
import tw from 'twin.macro'
import { ScrollArea } from 'ui'
import AppButton from './AppButton'
import { getPageNavSections } from './pageNav'
import SettingsButton from './SettingsButton'
import ThemeToggle from './ThemeToggle'

function PageLink({
  children,
  to,
  disabledActiveState,
  subdued,
}: {
  children?: React.ReactNode
  to: string
  disabledActiveState?: boolean
  subdued?: boolean
}) {
  return (
    <React.Fragment>
      <Link
        to={to as any}
        css={[
          tw`p-2 rounded hover:(bg-action text-pale)`,
          subdued && tw`text-subdued`,
          !disabledActiveState &&
            tw`data-[status=active]:(bg-action-muted text hover:(bg-action-muted text))`,
        ]}
      >
        {children}
      </Link>
    </React.Fragment>
  )
}

export default function Layout() {
  return (
    <React.Fragment>
      <ScrollArea styles={{ thumb: tw`z-30` }}>
        <div tw="fixed top-0 left-0 h-20 w-full backdrop-blur z-20">
          <div tw="h-full mx-auto max-w-5xl flex gap-4 px-8 items-center ">
            <PageLink to="/" disabledActiveState>
              <AppButton />
            </PageLink>
            {getPageNavSections().map(s => (
              <React.Fragment key={s.id}>
                {s.links.map(l => (
                  <PageLink to={l.url} key={l.url}>
                    {l.text}
                  </PageLink>
                ))}
              </React.Fragment>
            ))}
            <div tw="flex flex-auto gap-4 items-center justify-end">
              <PageLink to="/settings" subdued>
                <SettingsButton />
              </PageLink>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div tw="px-8 pb-8 max-w-5xl mx-auto mt-20">
          <Outlet />
        </div>
      </ScrollArea>
    </React.Fragment>
  )
}
