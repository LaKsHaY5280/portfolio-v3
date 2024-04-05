import {defineField, defineType} from 'sanity'

export const socials = defineType({
  name: 'socials',
  type: 'document',
  title: 'Socials',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'link', type: 'string'}),
    defineField({
      name: 'icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
