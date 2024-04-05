import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    defineField({name: 'headingp1', type: 'string', initialValue: 'Welcome to my'}),
    defineField({name: 'headingp2', type: 'string', initialValue: '꙳ little ꙳'}),
    defineField({name: 'headingp3', type: 'string', initialValue: 'corner of the internet.'}),
    defineField({name: 'para1p1', type: 'string', initialValue: "I'm a"}),
    defineField({name: 'para1h1', type: 'string', initialValue: 'full-stack'}),
    defineField({
      name: 'para1p2',
      type: 'string',
      initialValue:
        'developer with a passion for creating beautiful and functional websites. I have made many projects where some of them are',
    }),
    defineField({name: 'para1h2', type: 'string', initialValue: 'personal projects'}),
    defineField({
      name: 'para1p3',
      type: 'string',
      initialValue: 'while some are industry grade well polished',
    }),
    defineField({name: 'para1h3', type: 'string', initialValue: 'SaaS'}),
    defineField({
      name: 'para1p4',
      type: 'string',
      initialValue: 'and I am always looking for new challenges.',
    }),
    defineField({name: 'parap2p1', type: 'string', initialValue: 'At the end of'}),
    defineField({name: 'parap2p2', type: 'string', initialValue: '10'}),
    defineField({
      name: 'para2p3',
      type: 'string',
      initialValue:
        'th grade I started learning web development and I have been hooked ever since. While I had no idea at the time, I now know that being a developer means thinking outside the frame.',
    }),
    defineField({
      name: 'para3',
      type: 'string',
      initialValue:
        "Ready for a digital adventure? Reach out with your questions or requirements, and let's bring your vision to life.",
    }),
  ],
})
