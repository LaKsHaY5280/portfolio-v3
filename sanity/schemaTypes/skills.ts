import {defineField, defineType} from 'sanity'

export const skillset = defineType({
  name: 'skillset',
  type: 'object',
  fields: [
    defineField({
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [defineField({name: 'sets', type: 'reference', to: {type: 'skillset'}})],
    }),
  ],
})

export const skills = defineType({
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField(skillset),
  ],
})
