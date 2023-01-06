import { registerSettingsSection } from 'core-frontend-lib'
import PostSettings from './PostSettings'

registerSettingsSection({
  name: 'Post settings',
  order: 200,
  component: PostSettings,
})
