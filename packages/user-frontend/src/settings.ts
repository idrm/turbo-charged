import { registerSettingsSection } from 'core-frontend-lib'
import UserSettings from './UserSettings'

registerSettingsSection({
  name: 'User settings',
  order: 100,
  component: UserSettings,
})
