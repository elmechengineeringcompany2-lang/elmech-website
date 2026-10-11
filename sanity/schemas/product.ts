// sanity/schemas/product.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Gearbox Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Helical Gearbox', value: 'helical' },
          { title: 'Worm Gearbox', value: 'worm' },
          { title: 'Crane Duty Gearbox', value: 'crane-duty' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'shortOverview',
      title: 'Short Overview',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'technicalSpecs',
      title: 'Technical Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'key', title: 'Property (e.g., Gear Ratio)', type: 'string' },
            { name: 'value', title: 'Value (e.g., 5:1 to 100:1)', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'datasheet',
      title: 'PDF Datasheet',
      type: 'file',
      options: { accept: '.pdf' },
    }),
  ],
});
