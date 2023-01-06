export interface PageNavLink {
  text: string
  url: string
}

export interface PageNavSection {
  id: string
  order: number
  links: PageNavLink[]
}

const pageNavSections: { [k: string]: PageNavSection } = {}

export function registerPageNavSection(pageNavSection: PageNavSection) {
  pageNavSections[pageNavSection.id] = pageNavSection
}

export function getPageNavSections() {
  return [...Object.values(pageNavSections)].sort((a, b) => a.order - b.order)
}
