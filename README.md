# Turborepo + Vite + emotion + TailwindCSS + twin.macro + trpc + Prisma starter

An experimental starter that integrates Turborepo, Vite, emotion, TailwindCSS, twin.macro, trpc,
and Prisma to split a combined frontend + backend monorepo into
loosely-coupled modules.

All app services (frontend, api, databases, pub-sub) are Node-based and self-contained.

## Startup

Run the following commands to get the development servers running.

```bash
npm install
npx turbo db:generate
npm run dev
```

Wait 10-15 seconds before the initial builds and the startup sequence complete, and then open `http://localhost:3000` in a web browser.

## Component styling

Components are defined using the `withStyles` helper function from the `ui` package.

This allows custom restyling of the individual parts of a component.

Here's an example component with custom styling:

```tsx
import tw from 'twin.macro'
import { withStyles } from 'ui'

const styles = {
  root: ({ foo }: { foo?: boolean }) => [
    tw`border-2 border-green-600 cursor-pointer`,
    foo && tw`text-4xl`,
    { label: 'FlimFlamRoot' },
  ],
  flim: [tw`text-blue-600`, { label: 'FlimFlamFlim' }],
  flam: [tw`text-red-600`, { label: 'FlimFlamFlam' }],
}

export default withStyles(
  styles,
  'FlimFlam',
)<{ foo?: boolean; onClick?: () => void }>(
  ({ styles, className, foo, onClick }) => (
    <div css={styles.root({ foo })} className={className} onClick={onClick}>
      <div css={styles.flim}>Flim</div>
      <div css={styles.flam}>Flam</div>
    </div>
  ),
)
```

And here are a few styling scenarios:

```tsx
<FlimFlam tw="text-lg" />
```

```tsx
<FlimFlam
  styles={{
    root: ({ foo }) => [foo && tw`border-4`],
    flam: tw`text-lg`,
  }}
  foo
/>
```

```tsx
<FlimFlam styles={{ flim: tw`text-sm` }} />
```
