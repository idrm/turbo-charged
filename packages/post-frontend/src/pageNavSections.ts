import { registerPageNavSection } from 'core-frontend-lib'

registerPageNavSection({
  id: 'post',
  order: 200,
  links: [
    {
      url: '/posts',
      text: 'Posts',
    },
  ],
})
