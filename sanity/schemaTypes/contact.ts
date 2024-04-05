import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
      title: 'Sub Heading',
    }),
    defineField({
      name: 'left',
      type: 'string',
      title: 'Left',
    }),
    defineField({
      name: 'or',
      type: 'string',
      title: 'Or',
    }),
    defineField({
      name: 'right',
      type: 'string',
      title: 'Right',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      title: 'Socials',
      of: [defineField({name: 'socials', type: 'reference', to: {type: 'socials'}})],
    }),
  ],
})
