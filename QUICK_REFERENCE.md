# ⚡ Quick Reference Card

## 🎯 Essential Files to Edit

### Priority 1 - Must Update (Do First!)
```
components/Hero.tsx      → Your name, title, tagline
components/About.tsx     → Your bio, story
components/Contact.tsx   → Email, phone, location
components/Navbar.tsx    → Social media links
components/Footer.tsx    → Social media links
```

### Priority 2 - Content (Do Second!)
```
components/Projects.tsx  → Your projects (replace all 3)
components/Skills.tsx    → Your actual skills
app/layout.tsx          → Page title & description
```

### Priority 3 - Assets (Add These!)
```
public/resume.pdf        → Your resume
public/images/           → Project screenshots, your photo
```

---

## 🔍 Common Search & Replace

### Change Your Name
**Find:** `Your Name`  
**Replace with:** Your actual name  
**Files:** Hero.tsx, About.tsx, Footer.tsx, layout.tsx

### Change Email
**Find:** `your.email@example.com`  
**Replace with:** Your real email  
**Files:** Contact.tsx, Navbar.tsx, Footer.tsx

### Change Social Links
**Find:** `github.com/yourusername`  
**Replace with:** Your GitHub username  
**Files:** Navbar.tsx, Footer.tsx

**Find:** `linkedin.com/in/yourusername`  
**Replace with:** Your LinkedIn profile  
**Files:** Navbar.tsx, Footer.tsx

### Change Colors
**Find:** `blue-600`  
**Replace with:** `green-600`, `indigo-600`, etc.  
**Files:** All component files

**Find:** `purple-600`  
**Replace with:** Your preferred accent color  
**Files:** All component files

---

## 📝 What to Write - Content Guide

### Hero Section (Line 20-40)
```typescript
Name: "John Doe"
Title: "Full Stack Developer | Cloud Architect | Tech Lead"
Bio: "I build scalable web applications that serve millions 
      of users. Passionate about clean code and user experience."
```

### About Section (Line 42-60)
```typescript
Heading: "Hello! I'm a software engineer"
Bio paragraph 1: Your background, education, current role
Bio paragraph 2: Your philosophy, approach, or interests
Call-to-action: "Let's Connect" or "View My Work"
```

### Projects (Lines 6-30 in Projects.tsx)
For each project include:
- **Title:** Clear, descriptive name
- **Description:** What it does + technologies used (2-3 sentences)
- **Tags:** 3-5 key technologies
- **Image:** Screenshot or relevant graphic
- **Links:** Working GitHub repo and live demo

Example:
```typescript
{
  title: 'E-Commerce Dashboard',
  description: 'Analytics dashboard for online retailers with 
                real-time sales tracking and inventory management.',
  tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  image: '/images/ecommerce-dash.jpg',
  github: 'https://github.com/johndoe/ecommerce-dash',
  live: 'https://ecommerce-dash.demo.com'
}
```

### Skills (Lines 6-12 in Skills.tsx)
Categories you might use:
- **Languages:** JavaScript, TypeScript, Python, etc.
- **Frontend:** React, Next.js, Vue, Tailwind
- **Backend:** Node.js, Express, Django, FastAPI
- **Database:** PostgreSQL, MongoDB, Redis
- **Cloud:** AWS, GCP, Azure
- **Tools:** Git, Docker, Kubernetes, CI/CD

---

## 🎨 Image Requirements

### Profile Photo (About section)
- **Size:** 400x400px minimum
- **Format:** JPG, PNG, or WebP
- **Quality:** Professional headshot preferred
- **Location:** `public/images/profile.jpg`

### Project Screenshots
- **Size:** 600x400px (or similar 3:2 ratio)
- **Format:** WebP (best), PNG, or JPG
- **Content:** Clear screenshot of your application
- **Location:** `public/images/project-name.jpg`

### Optimization Tips
- Compress images before adding (use TinyPNG, Squoosh)
- Keep file sizes under 200KB if possible
- Use descriptive filenames

---

## 🚀 Commands You Need

### Development
```bash
npm run dev      # Start development server (localhost:3000)
```

### Building for Production
```bash
npm run build    # Create production build
npm start        # Run production server
```

### Code Quality
```bash
npm run lint     # Check for code issues
```

---

## 🐛 Common Issues & Quick Fixes

### Issue: "Module not found" error
**Fix:**
```bash
npm install framer-motion lucide-react next-themes
```

### Issue: Port 3000 already in use
**Fix:**
```bash
# Kill the process or use different port
npx next dev -p 3001
```

### Issue: Changes not showing
**Fix:**
- Save the file (Ctrl+S / Cmd+S)
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Restart dev server if needed

### Issue: Dark mode not working
**Check:**
- ThemeToggle component is rendered
- `ThemeProvider` is in layout.tsx
- `suppressHydrationWarning` on `<html>` tag

### Issue: Images not loading
**Check:**
- File exists in `public/images/`
- Path starts with `/` (e.g., `/images/photo.jpg`)
- File extension matches (.jpg vs .jpeg)

---

## ✅ Pre-Launch Checklist

Quick checklist before deploying:

**Content:**
- [ ] Name updated everywhere
- [ ] Bio sounds like you
- [ ] Real projects added
- [ ] Skills are accurate
- [ ] Contact info is correct
- [ ] Social links work

**Technical:**
- [ ] No console errors
- [ ] All images load
- [ ] Form validates
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] Build succeeds (`npm run build`)

**Assets:**
- [ ] Resume PDF added
- [ ] Profile photo added
- [ ] Project screenshots added
- [ ] Favicon added (optional)

---

## 📱 Testing Your Portfolio

### Desktop Testing
1. Open http://localhost:3000
2. Click all navigation links
3. Test dark mode toggle
4. Hover over all interactive elements
5. Submit contact form
6. Download resume
7. Click social links

### Mobile Testing
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device (iPhone, Android)
4. Test all sections scroll properly
5. Verify text is readable
6. Check buttons are tappable
7. Test contact form

### Cross-Browser Testing
Test in:
- Chrome (primary)
- Firefox
- Safari (if on Mac)
- Edge

---

## 🎯 Customization Shortcuts

### Want a green theme instead of blue?
**Find and replace in all files:**
```
blue-600 → green-600
purple-600 → emerald-600
```

### Want to add more projects?
**Copy this template in Projects.tsx:**
```typescript
{
  title: 'New Project',
  description: 'Description here',
  tags: ['Tech1', 'Tech2', 'Tech3'],
  image: '/images/new-project.jpg',
  github: 'https://github.com/you/project',
  live: 'https://project.com'
}
```

### Want to remove a section?
**In page.tsx, simply delete or comment out:**
```typescript
// <About />     ← Comment out to remove
// <Projects />  ← Comment out to remove
```

---

## 📞 Getting Help

**Documentation Files:**
- `GET_STARTED.md` - Overview and setup
- `CUSTOMIZATION_GUIDE.md` - Detailed instructions
- `CUSTOMIZATION_CHECKLIST.md` - Step-by-step tasks
- `VISUAL_GUIDE.md` - Visual breakdown
- `README_PORTFOLIO.md` - Technical docs

**External Resources:**
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/icons/

---

## 💡 Pro Tips

1. **Start small:** Update name and basic info first
2. **Test often:** Check changes after each edit
3. **Mobile first:** Many visitors will use phones
4. **Keep it simple:** Don't overcomplicate
5. **Be authentic:** Let your personality show
6. **Update regularly:** Add new projects and skills
7. **Get feedback:** Ask friends/colleagues to review
8. **Deploy early:** Get it live, then iterate

---

## 🎉 Remember

Your portfolio doesn't need to be perfect on day one. Launch with solid content, then improve it over time. The most important thing is to **start** and **ship it**!

Good luck! 🚀

---

**Current Status:**
✅ Development server running at http://localhost:3000
✅ All dependencies installed
✅ Preview browser ready
✅ Documentation complete

**Next Step:** Start customizing Priority 1 files!
