export interface SettingsSection {
  name: string
  order: number
  component: () => JSX.Element
}

const settingsSections: { [k: string]: SettingsSection } = {}

export function registerSettingsSection(section: SettingsSection) {
  settingsSections[section.name] = section
}

export function getSettingSections() {
  return [...Object.values(settingsSections)].sort((a, b) => a.order - b.order)
}
