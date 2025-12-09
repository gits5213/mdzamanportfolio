# CSS Architecture Documentation

This document describes the CSS architecture and organization for the portfolio project.

## Structure

```
styles/
├── pages/              # Page-specific CSS modules
│   ├── landing.module.css
│   ├── resume.module.css
│   ├── projects.module.css
│   └── contact.module.css
├── components/         # Component-specific CSS modules
│   ├── navigation.module.css
│   ├── projectCard.module.css
│   └── common.module.css
└── README.md          # This file

app/
└── globals.css        # Global styles and Tailwind configuration
```

## Global Styles (`app/globals.css`)

Contains:
- Tailwind CSS directives (`@tailwind base/components/utilities`)
- Base styles for HTML elements
- Reusable component classes (gradients, cards, buttons, etc.)
- Utility classes

### Key Global Classes

- `.gradient-header` - Navigation header gradient
- `.gradient-landing` - Landing page gradient
- `.social-link` - Social media link styling
- `.card` - Standard card component
- `.card-dark` - Dark variant card
- `.btn-primary`, `.btn-secondary`, `.btn-outline` - Button variants
- `.section`, `.section-container`, `.section-title` - Section utilities
- `.divider`, `.divider-purple` - Divider styles
- `.text-highlight`, `.text-muted`, `.text-mono` - Text utilities

## Page-Specific Styles

Each page has its own CSS module for page-specific styling:

### Landing Page (`pages/landing.module.css`)
- Container and layout styles
- Avatar/image styles
- Content card styles
- Highlights section
- Social links container

### Resume Page (`pages/resume.module.css`)
- Two-column grid layout
- Left/right column styles
- Section titles and dividers
- Contact information styles
- Dark theme for right column

### Projects Page (`pages/projects.module.css`)
- Page container
- Tab navigation styles
- Active/inactive tab states
- Content section

### Contact Page (`pages/contact.module.css`)
- Two-column grid
- Bio text styling
- Contact information items
- Social links container

## Component Styles

### Navigation (`components/navigation.module.css`)
- Nav bar styles
- Desktop and mobile navigation
- Logo and link styles
- Mobile menu button

### Project Card (`components/projectCard.module.css`)
- Card container and body
- Image overlay
- Action buttons (GitHub, BitBucket, Demo)
- Button color variants

### Common Components (`components/common.module.css`)
- Education/Experience item layouts
- Skills progress bar
- Shared component styles

## Usage

### Importing CSS Modules

```javascript
import styles from '@/styles/pages/landing.module.css'

// Use in JSX
<div className={styles.landingContainer}>
  <h1 className={styles.title}>Title</h1>
</div>
```

### Combining Classes

```javascript
// Combine CSS module classes with Tailwind utilities
<div className={`${styles.card} hover:shadow-xl`}>

// Combine multiple CSS module classes
<div className={`${styles.button} ${styles.buttonPrimary}`}>
```

### Global Classes

Global classes can be used directly without importing:

```javascript
<div className="gradient-header card">
  <a href="#" className="social-link">Link</a>
</div>
```

## Best Practices

1. **Use CSS Modules for component-specific styles** - Prevents style conflicts
2. **Use global classes for reusable patterns** - Gradients, buttons, cards
3. **Combine Tailwind utilities with CSS modules** - Best of both worlds
4. **Keep page styles in page modules** - Maintains organization
5. **Use common.module.css for shared component styles** - Education, Experience, Skills

## Adding New Styles

### Adding a New Page Style

1. Create `styles/pages/[pageName].module.css`
2. Import in your page component: `import styles from '@/styles/pages/[pageName].module.css'`
3. Use classes: `className={styles.className}`

### Adding a New Component Style

1. Create `styles/components/[componentName].module.css`
2. Import in your component: `import styles from '@/styles/components/[componentName].module.css'`
3. Use classes: `className={styles.className}`

### Adding Global Styles

1. Add to `app/globals.css` in the `@layer components` section
2. Use Tailwind `@apply` directive for consistency
3. Use directly in components without importing

## Tailwind Integration

All CSS modules use Tailwind's `@apply` directive for consistency. This allows:
- Using Tailwind utilities in CSS modules
- Maintaining design system consistency
- Easy theme customization through `tailwind.config.js`

## Responsive Design

All styles are mobile-first and responsive:
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- CSS modules include responsive variants where needed
- Global classes are responsive by default

