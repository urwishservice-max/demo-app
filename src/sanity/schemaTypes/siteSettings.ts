import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Placeholders',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Primary Enquiry Email',
      type: 'string',
      description: 'Used across contact pages, footer, and inquiry buttons (replaces [EMAIL]).',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'enquiryMailbox',
      title: 'Destination Enquiry Mailbox',
      type: 'string',
      description: 'Where form submissions and consultation requests are delivered (replaces [ENQUIRY MAILBOX]).',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Business Telephone Number',
      type: 'string',
      description: 'International format, UAE default +971 (replaces [PHONE]).',
    }),
    defineField({
      name: 'officeAddress',
      title: 'Dubai Office & Registered Address',
      type: 'text',
      description: 'Full address in Dubai, United Arab Emirates (replaces [OFFICE ADDRESS] / [REGISTERED ADDRESS]).',
    }),
    defineField({
      name: 'tradeLicenceNumber',
      title: 'Commercial Trade Licence Number',
      type: 'string',
      description: 'Government of Dubai / DET trade licence number (replaces [TRADE LICENCE NUMBER]).',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'Company LinkedIn Page URL',
      type: 'url',
      description: 'Official Asheron LinkedIn company profile (replaces [LINKEDIN URL]).',
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Meeting Booking Link (Optional)',
      type: 'url',
      description: 'Cal.com or Calendly scheduling link for 30-minute consultations (replaces [BOOKING URL]).',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings & Company Information',
        subtitle: 'Manage client placeholders & contact details',
      }
    },
  },
})
