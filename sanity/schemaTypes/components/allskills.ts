import {defineField, defineType} from 'sanity'

export const allskills = defineType({
  name: 'allskills',
  type: 'document',
  title: 'Allskills',
  fields: [
    defineField({
      name: 'skill',
      type: 'object',
      title: 'Skill',
      fields: [
        defineField({type: 'string', name: 'name'}),
        defineField({type: 'string', name: 'level'}),
        defineField({
          name: 'img',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
})
