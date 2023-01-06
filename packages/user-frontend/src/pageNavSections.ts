import { registerPageNavSection } from 'core-frontend-lib'

registerPageNavSection({
  id: 'user',
  order: 100,
  links: [
    {
      url: '/users',
      text: 'Users',
    },
  ],
})
