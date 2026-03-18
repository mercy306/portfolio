# Portfolio Customization Guide

This guide will help you personalize your portfolio website.

## Quick Start Checklist

### 1. Update Personal Information

#### Hero Section (`components/Hero.tsx`)
```typescript
// Line 20: Update your name
Hi, I'm{' '}
<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Your Name  // ← Change this
</span>

// Line 28: Update your title/tagline
Full Stack Developer | UI/UX Enthusiast | Problem Solver  // ← Change this

// Line 37: Update your bio
I build exceptional digital experiences...  // ← Change this
```

#### About Section (`components/About.tsx`)
```typescript
// Line 42: Update your introduction
Hello! I'm a passionate developer  // ← Change heading

// Lines 46-59: Update your bio
With a background in computer science...  // ← Change your story
```

### 2. Update Contact Information

#### Contact Section (`components/Contact.tsx`)
```typescript
// Line 75: Email
href="mailto:your.email@example.com"
your.email@example.com  // ← Change both instances

// Line 85: Phone
href="tel:+1234567890"
+1 (234) 567-890  // ← Change both instances

// Line 95: Location
Your City, Country  // ← Change this
```

### 3. Update Social Media Links

Update in BOTH `components/Navbar.tsx` and `components/Footer.tsx`:

```typescript
// GitHub
https://github.com/yourusername  // ← Change to your profile

// LinkedIn
https://linkedin.com/in/yourusername  // ← Change to your profile

// Email
mailto:your.email@example.com  // ← Change to your email
```

### 4. Add Your Projects

Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Name',  // ← Change this
    description: 'Project description...',  // ← Change this
    tags: ['React', 'Node.js'],  // ← Change technologies
    image: '/images/project1.jpg',  // ← Add your images to public/images/
    github: 'https://github.com/you/project',  // ← Your project link
    live: 'https://your-project.com',  // ← Your live demo link
  },
  // Add more projects...
];
```

### 5. Update Skills

Edit `components/Skills.tsx`:

```typescript
const skills = [
  { 
    name: 'Your Skill Category',  // ← Change category name
    icon: Code,  // Choose from lucide-react icons
    items: ['Skill 1', 'Skill 2']  // ← Your specific skills
  },
  // Add more skill categories...
];
```

Available Icons: Code, Globe, Database, Layout, Smartphone, Cloud, 
Server, Terminal, Layers, Cpu, etc.

### 6. Add Your Resume

1. Save your resume as `resume.pdf` in the `public/` folder
2. Update the download link in `components/Navbar.tsx` line 51:
   ```typescript
   href="/resume.pdf"  // Make sure file exists
   ```

## Color Scheme

The portfolio uses Tailwind's default color palette. To customize:

### Primary Colors (Blue/Purple gradient)
In all components, find and replace:
- `from-blue-600 to-purple-600` → Your preferred gradient
- `bg-blue-600` → Your primary color
- `text-blue-600` → Your accent color

### Example - Green Theme
Replace all occurrences of:
- `blue-600` with `green-600`
- `purple-600` with `emerald-600`

## Images

Add your images to the `public/` directory:

```
public/
├── images/
│   ├── project1.jpg
│   ├── project2.jpg
│   └── profile.jpg
└── resume.pdf
```

Then reference them in components:
```typescript
image: '/images/project1.jpg'
```

## Typography

Fonts are configured in `app/layout.tsx`. The default uses Geist fonts.
To change fonts, modify the import and font variables.

## SEO Optimization

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",  // Your name + title
  description: "Portfolio showcasing my projects and skills",  // Your description
};
```

## Testing Changes

1. Run development server: `npm run dev`
2. Open http://localhost:3000
3. Navigate through all sections
4. Test on different screen sizes (responsive)
5. Toggle dark mode
6. Test contact form

## Deployment Checklist

Before deploying:

- [ ] All placeholder text replaced
- [ ] Real project images added
- [ ] Social media links updated
- [ ] Contact information accurate
- [ ] Resume PDF added
- [ ] Tested on mobile devices
- [ ] All links working
- [ ] Dark mode tested
- [ ] Form submission works

## Common Issues

### Components show errors
Make sure dependencies are installed:
```bash
npm install framer-motion lucide-react next-themes
```

### Images not loading
- Check file paths are correct
- Files must be in `public/` directory
- Use absolute paths starting with `/`

### Dark mode not working
- Theme provider is set up in `app/layout.tsx`
- `suppressHydrationWarning` is needed on `<html>` tag

## Advanced Customizations

### Add New Sections
1. Create component in `components/` folder
2. Import in `app/page.tsx`
3. Add to the page layout

### Change Animation Speed
In any component with framer-motion:
```typescript
transition={{ duration: 0.5 }}  // Change 0.5 to desired speed
```

### Add More Social Links
Import icons from lucide-react:
```typescript
import { Twitter, Instagram } from 'lucide-react';
```

Then add to Navbar/Footer components.

---

Need help? Check the main README_PORTFOLIO.md for setup instructions.
