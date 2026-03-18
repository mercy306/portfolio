# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✅ Modern Landing Page Design
- ✅ Responsive Layout (Mobile, Tablet, Desktop)
- ✅ Smooth Animations & Effects
- ✅ Dark Mode Toggle
- ✅ Contact Form
- ✅ Project Showcase
- ✅ Skills Section
- ✅ About Section
- ✅ Social Media Integration

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**

   Due to network issues, you may need to configure your network settings or try multiple times:

   ```bash
   npm install
   ```

   If you encounter network errors, try:
   - Using a different network connection
   - Configuring npm proxy settings
   - Using a mirror registry

2. **Required Dependencies**

   Make sure these packages are installed:

   ```bash
   npm install framer-motion lucide-react next-themes
   ```

3. **Development Server**

   Run the development server:

   ```bash
   npm run dev
   ```

4. **Open in Browser**
3000
   Open [http://localhost:](http://localhost:3000) in your browser.

## Customization

### Update Your Information

1. **Personal Details:**
   - Edit `components/Hero.tsx` - Update your name and title
   - Edit `components/About.tsx` - Update your bio
   - Edit `components/Contact.tsx` - Update contact information

2. **Social Media Links:**
   - Update links in `components/Navbar.tsx` and `components/Footer.tsx`
   - Replace `yourusername` with your actual usernames

3. **Projects:**
   - Edit `components/Projects.tsx` to showcase your real projects
   - Update project images, descriptions, and links

4. **Skills:**
   - Modify `components/Skills.tsx` with your actual skills

5. **Resume:**
   - Add your resume PDF to the `public/` folder
   - Update the download link in `components/Navbar.tsx`

### Theme Configuration

The theme toggle is already set up in `components/ThemeToggle.tsx`. The app supports:
- Light mode
- Dark mode
- System preference detection

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main page component
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── ThemeToggle.tsx  # Dark mode toggle
├── public/              # Static assets
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Other Platforms

Build for production:

```bash
npm run build
npm start
```

Then deploy the `.next` folder to your hosting provider.

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues:

1. Make sure all dependencies are installed
2. Check that Node.js version is 18 or higher
3. Clear node_modules and reinstall if needed
4. Check the Next.js documentation for more help

---

**Built with ❤️ using Next.js**
