# RJ Chand's Project

![App Preview](https://imgix.cosmicjs.com/88fba460-423c-11f1-9666-e9e98c1e4619-autopilot-photo-1522071820081-009f0129c71c-1777296318875.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive website built with Next.js 16 and Cosmic CMS featuring dynamic pages and category-based content organization.

## Features

- 📄 Dynamic pages powered by Cosmic CMS
- 🏷️ Category-based content filtering
- 🖼️ Optimized images via imgix
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 16
- 🎨 Modern design with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69ef63a34e967524331a02f0&clone_repository=69ef64254e967524331a030f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Gtttt"

### Code Generation Prompt

> Build a Next.js application for a website called "rj chand's Project". The content is managed in Cosmic CMS with the following object types: pages, categories. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun (or Node.js 18+)
- A Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all pages
const { objects: pages } = await cosmic.objects
  .find({ type: 'pages' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch single page by slug
const { object: page } = await cosmic.objects
  .findOne({ type: 'pages', slug: 'about' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses the Cosmic SDK to fetch:
- **Pages**: Title, body content, hero image, and linked category
- **Categories**: Name and description for organizing pages

## Deployment Options

Deploy to Vercel or Netlify with environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->