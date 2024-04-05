import {defineField, defineType} from 'sanity'

export const currentJob = defineType({
  name: 'currentJob',
  type: 'object',
  fields: [defineField({name: 'cjob', type: 'reference', to: {type: 'job'}})],
})

export const header = defineType({
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    defineField({name: 'logo', type: 'string', initialValue: 'L'}),
    defineField({name: 'name', type: 'string', initialValue: 'Lakshay Goyal'}),
    defineField({name: 'designation', type: 'string', initialValue: 'Web / App Developer'}),
    defineField({name: 'hightlight1', type: 'string', initialValue: 'problem solving'}),
    defineField({name: 'hightlight2', type: 'string', initialValue: 'collaborative spaces'}),
    defineField(currentJob),
  ],
})
