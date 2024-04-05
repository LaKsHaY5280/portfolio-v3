import {defineField, defineType} from 'sanity'

export const skillset = defineType({
  name: 'skillset',
  type: 'document',
  title: 'Skillset',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [defineField({name: 'skill', type: 'reference', to: {type: 'allskills'}})],
    }),
  ],
})
