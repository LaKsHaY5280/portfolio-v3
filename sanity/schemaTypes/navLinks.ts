import {defineArrayMember, defineField, defineType} from 'sanity'

export const navLinks = defineType({
  name: 'navlinks',
  type: 'document',
  title: 'navLinks',
  fields: [
    defineField({
      name: 'navlinks',
      type: 'array',
      title: 'Links for navigation',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'NavLink',
          fields: [
            defineField({type: 'string', name: 'name'}),
            defineField({type: 'string', name: 'link'}),
            defineField({type: 'string', name: 'id', initialValue: 'navLi1'}),
            defineField({type: 'number', name: 'animatedheight'}),
          ],
        }),
      ],
    }),
  ],
})
