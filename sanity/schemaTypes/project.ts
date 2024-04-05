import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [defineField({name: 'Projects', type: 'reference', to: {type: 'project'}})],
    }),
  ],
})
