import tw from 'twin.macro'
import { withStyles } from './comps'

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
