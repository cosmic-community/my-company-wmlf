# My Company

![App Preview](https://imgix.cosmicjs.com/ecf52c10-7b40-11f1-9ed1-e9ba15611567-autopilot-photo-1580489944761-15a19d654956-1783565420872.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive company website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase your services, meet the team, explore detailed case studies, and read glowing client testimonials — all managed effortlessly through your Cosmic bucket.

## Features

- 🏠 **Stunning Homepage** with hero section, featured services, team highlights, case studies, and testimonials
- 🛠️ **Services** — detailed pages for each service offering with icons, summaries, and rich descriptions
- 👤 **Team Members** — profiles including photos, job titles, bios, and contact emails
- 📁 **Case Studies** — in-depth project breakdowns with related services and team members
- 💬 **Testimonials** — client quotes with photos, roles, and company names
- 📱 **Fully Responsive** design that looks great on any device
- ⚡ **Server Components** for fast, SEO-friendly rendering
- 🎨 **Modern UI** with Tailwind CSS and the Inter font

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a4f0c1367f2f6a3f8054e36&clone_repository=6a4f0d2267f2f6a3f8054e80)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing your content

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set the following environment variables (these are set automatically when you deploy via Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single case study with related objects
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four object types in your Cosmic bucket:

- **services** — `service_name`, `icon`, `summary`, `description`, `featured_image`
- **team-members** — `name`, `job_title`, `photo`, `bio`, `email`
- **case-studies** — `title`, `client_name`, `featured_image`, `overview`, `details`, `related_service`, `team`
- **testimonials** — `quote`, `client_name`, `role`, `company`, `photo`

Connected objects (like `related_service` and `team` on case studies) are fetched using the `depth` parameter. Read more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push your code to a Git repository
2. Import the project into [Vercel](https://vercel.com)
3. Add the `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables
4. Deploy!

### Netlify

1. Push your code to a Git repository
2. Import the project into [Netlify](https://netlify.com)
3. Add the environment variables in Site Settings
4. Deploy!

<!-- README_END -->