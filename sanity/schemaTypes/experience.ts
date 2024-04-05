import {defineField, defineType} from 'sanity'

export const card = defineType({
  name: 'card',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
    defineField({
      name: 'tableTitles',
      type: 'array',
      title: 'Table Titles',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'workDetails',
      type: 'array',
      title: 'Work Details',
      of: [defineField({name: 'cjob', type: 'reference', to: {type: 'job'}})],
    }),
  ],
})

export const exp = defineType({
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField(card),
  ],
})
