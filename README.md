# Video Page App

This is a web app that displays a page with videos fetched from an API.

## Features

- Displays a grid of video titles, thumbnails and details.

- Fetches video data from API endpoint provided by Algotive.

- Pagination to load more videos (future feature).

- Responsive design for mobile and tablet.

- Loading and error handling.

## API

`bash GET /api/videos`

Fetches data from an internal API created to bypass CORS restrictions. It returns a JSON array of video objects.

## Built With

- Next.js
- React Framework
- Tailwind CSS

## Next.js Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load a custom Google Font.
