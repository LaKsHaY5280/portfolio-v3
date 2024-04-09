import {defineField, defineType} from 'sanity'

export const job = defineType({
  name: 'job',
  type: 'document',
  fields: [
    defineField({type: 'string', name: 'projectName'}),
    defineField({type: 'string', name: 'years'}),
    defineField({type: 'string', name: 'companyName'}),
    defineField({type: 'string', name: 'role'}),
    defineField({type: 'url', name: 'link'}),
  ],
})
