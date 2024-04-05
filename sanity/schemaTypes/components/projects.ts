import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tag',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'desc',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'role',
      type: 'array',
      title: 'Role',
      of: [defineField({name: 'name', type: 'string'})],
    }),
    defineField({
      name: 'software',
      type: 'array',
      title: 'Software',
      of: [defineField({name: 'name', type: 'string'})],
    }),
    defineField({
      name: 'tech',
      type: 'array',
      title: 'Tech',
      of: [defineField({name: 'skills', type: 'reference', to: {type: 'allskills'}})],
    }),
    defineField({
      name: 'github',
      type: 'url',
      title: 'Github',
    }),
    defineField({
      name: 'live',
      type: 'url',
      title: 'Live',
    }),
    defineField({
      name: 'img',
      type: 'array',
      title: 'Image',
      of: [
        defineField({
          name: 'img',
          type: 'object',
          fields: [
            defineField({name: 'src', type: 'image'}),
            defineField({name: 'alt', type: 'string'}),
          ],
        }),
      ],
    }),
  ],
})
