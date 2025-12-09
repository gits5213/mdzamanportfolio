# MD Zaman Portfolio

Modern portfolio website built with Next.js 14, React 18, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 App Router
- ⚡ Modern React functional components with hooks
- 🎨 Beautiful UI with Tailwind CSS
- 📱 Fully responsive design
- 🔄 Smooth navigation and transitions
- 📄 Resume page with downloadable PDF
- 💼 Projects showcase with tabs
- 📧 Contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
mdzamanportfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── resume/            # Resume page
│   ├── projects/          # Projects page
│   └── contact/           # Contact page
├── components/             # React components
│   ├── Navigation.js      # Navigation bar
│   ├── LandingPage.js     # Landing page component
│   ├── Resume.js          # Resume component
│   ├── Projects.js        # Projects component
│   ├── Contact.js         # Contact component
│   └── projects/          # Individual project components
├── data/                   # JSON data files
├── public/                 # Static assets
│   ├── images/           # Images
│   └── resume/            # Resume PDFs
└── styles/                # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Deployment

### GitHub Pages (Automated)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Enable GitHub Pages**:
   - Go to your repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Configure Base Path** (if needed):
   - If your repository is NOT `username.github.io`, update `basePath` in `next.config.js`
   - Uncomment and set: `basePath: '/mdzamanportfolio'`

3. **Deploy**:
   - Push to `master` or `main` branch
   - GitHub Actions will automatically build and deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Other Platforms

You can also deploy to:
- **Vercel**: [Deploy to Vercel](https://vercel.com/new)
- **Netlify**: Connect your GitHub repository
- **Any static hosting**: Use `npm run build` and upload the `out/` directory

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
