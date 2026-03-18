# Portfolio Testing Checklist ✅

## 🖥️ Development Server Status
- **Status:** Running ✓
- **URL:** http://localhost:3000
- **Build:** Successful ✓

---

## 📋 Manual Testing Guide

### 1. **Homepage & Hero Section** (2 minutes)

Click the preview button above to open your portfolio, then check:

- [ ] Page loads without errors
- [ ] Hero section displays your name: "Mihiret Tsegaye Legesse"
- [ ] Gradient text effect is visible
- [ ] Tagline shows: "Full Stack Developer | UI/UX Enthusiast | Problem Solver"
- [ ] "View My Work" button scrolls to Projects section
- [ ] "Contact Me" button scrolls to Contact section
- [ ] Animated arrow points down smoothly
- [ ] No console errors (Press F12 → Console tab)

**Expected Result:** Smooth animations, professional appearance

---

### 2. **Navigation Bar** (2 minutes)

#### Desktop Test (Wide Screen):
- [ ] Navbar is fixed at top
- [ ] Logo "Portfolio" is visible on left
- [ ] Navigation links visible: About, Projects, Skills, Contact
- [ ] Social icons visible: Resume, GitHub, LinkedIn, Email
- [ ] Hover effects work on all items
- [ ] Theme toggle button works (top right corner)

#### Mobile Test (Narrow Screen - Resize Browser):
- [ ] Hamburger menu appears (☰ icon)
- [ ] Click hamburger → menu drops down smoothly
- [ ] All navigation links visible in mobile menu
- [ ] Social icons visible in mobile menu
- [ ] Click any link → navigates and closes menu
- [ ] Close button (X) works

**Test Each Link:**
- [ ] About → Scrolls to About section
- [ ] Projects → Scrolls to Projects section
- [ ] Skills → Scrolls to Skills section
- [ ] Contact → Scrolls to Contact section

---

### 3. **About Section** (1 minute)

Scroll to About section and verify:

- [ ] Section title "About Me" with blue underline
- [ ] Your name: "Hello! I'm Mihiret Tsegaye Legesse"
- [ ] Three paragraphs of content about you
- [ ] Mentions Haramaya University
- [ ] Mentions ERA internship
- [ ] Two buttons: "Let's Talk" and "View Projects"
- [ ] Profile placeholder (blue gradient box with user icon)
- [ ] Animations trigger when scrolling into view

**Note:** Profile photo area currently shows placeholder - this is expected until you add your photo

---

### 4. **Projects Section** (2 minutes)

Scroll to Projects section:

**Project Cards Display:**
- [ ] First card: "Online Counselling Platform"
  - Description mentions React, Next.js, Tailwind CSS, MongoDB
  - Tags: React, Next.js, Tailwind CSS, MongoDB
  - GitHub icon visible
  
- [ ] Second card: "School Management System"
  - Description mentions PHP, HTML, CSS, MySQL
  - Tags: PHP, HTML, CSS, MySQL
  - GitHub icon visible
  
- [ ] Third card: "Harar Cultural Guide"
  - Description mentions React Native, cultural heritage
  - Tags: React Native, JavaScript, Mobile
  - GitHub icon visible

**Hover Effects:**
- [ ] Hover over project card → shadow increases
- [ ] Hover over project image → overlay appears with GitHub icon
- [ ] Click GitHub icon → opens GitHub repo in new tab

---

### 5. **Skills Section** (1 minute)

Scroll to Skills section:

**Verify All Skill Categories:**
- [ ] Frontend Development (6 items)
- [ ] Backend Development (3 items)
- [ ] Databases (3 items)
- [ ] Mobile Development (1 item)
- [ ] UI/UX Design (3 items)
- [ ] Cloud & DevOps (4 items)
- [ ] Office Tools (3 items)

**Check:**
- [ ] Icons are visible for each category
- [ ] All skills listed correctly
- [ ] Cards have consistent styling
- [ ] Hover effects work

---

### 6. **Contact Form** (3 minutes) ⭐ IMPORTANT

Scroll to Contact section:

#### Visual Check:
- [ ] Left side: Contact information
  - Email: mihirettsegaye307@gmail.com
  - Phone: "Available on request"
  - Location: "Open to remote"
- [ ] Right side: Contact form

#### Form Validation Test:

**Test Empty Submission:**
1. Leave all fields empty
2. Click "Send Message"
3. Expected: Error messages appear under each field

**Test Invalid Email:**
1. Enter name: "Test"
2. Enter email: "invalid-email" (no @ or domain)
3. Enter message: "This is a test message"
4. Click "Send Message"
5. Expected: Red error under email field

**Test Short Message:**
1. Enter valid name and email
2. Enter message: "Hi" (less than 10 characters)
3. Click "Send Message"
4. Expected: Error about minimum 10 characters

**Test Valid Submission:**
1. Enter name: "John Doe"
2. Enter email: "john@example.com"
3. Enter message: "Hello, I'm interested in your services!"
4. Click "Send Message"
5. Expected: 
   - Button shows "Sending..." with spinner
   - After 1 second: Green success message appears
   - Form clears
   - Success message disappears after 5 seconds

**Real-time Error Clearing:**
1. Submit with invalid email
2. Start typing in the field
3. Expected: Error message disappears as you type

---

### 7. **Theme Toggle** (1 minute)

Located at top-right corner (sun/moon icon):

**Test Dark Mode:**
- [ ] Click theme toggle
- [ ] Background changes to dark color
- [ ] Text changes to white/light gray
- [ ] All sections adapt to dark theme
- [ ] Icons remain visible

**Test Light Mode:**
- [ ] Click theme toggle again
- [ ] Background returns to white/light gray
- [ ] Text returns to dark color
- [ ] Everything looks correct

**Test System Preference:**
- [ ] Refresh page
- [ ] Theme should match your system preference (or last used)

---

### 8. **Footer** (30 seconds)

Scroll to bottom:

- [ ] Social icons visible: GitHub, LinkedIn, Email
- [ ] Copyright text: "© 2026 Mihiret Tsegaye Legesse"
- [ ] "Made with ❤️ using Next.js" visible
- [ ] Links work when clicked

---

### 9. **Responsive Design** (2 minutes)

#### Mobile View (Resize browser to ~375px width):
- [ ] All sections stack vertically
- [ ] Text remains readable
- [ ] Images/cards scale appropriately
- [ ] No horizontal scrolling
- [ ] Hamburger menu works
- [ ] Touch targets are large enough

#### Tablet View (~768px width):
- [ ] Grid layouts adjust (2 columns for projects/skills)
- [ ] Navigation still shows hamburger menu
- [ ] Content is well-spaced

#### Desktop View (>1024px width):
- [ ] Full navigation visible
- [ ] 3-column grid for projects
- [ ] 3-column grid for skills
- [ ] Optimal spacing

---

### 10. **Performance & Console** (1 minute)

Open Browser DevTools (F12):

**Console Tab:**
- [ ] No red errors
- [ ] No critical warnings
- [ ] Only expected logs (like "Form submitted")

**Network Tab:**
- [ ] All resources load successfully
- [ ] No 404 errors
- [ ] Images load properly

**Performance (Optional):**
- [ ] Page loads quickly (< 3 seconds)
- [ ] Animations are smooth (60fps)
- [ ] Scrolling is smooth

---

## 🐛 Common Issues & Fixes

### Issue: Resume Download Doesn't Work
**Reason:** resume.pdf doesn't exist yet
**Fix:** Add PDF to `portfolio/public/resume.pdf`

### Issue: Profile Photo Not Showing
**Reason:** Using placeholder icon
**Fix:** Add your photo and update About.tsx (see NEXT_STEPS.md)

### Issue: Contact Form Doesn't Send Emails
**Reason:** Needs EmailJS/Formspree integration
**Fix:** Follow setup guide in NEXT_STEPS.md

### Issue: Images Look Blurry
**Reason:** Using GitHub OG images
**Fix:** Add custom screenshots to `public/images/`

---

## ✅ Testing Summary

### Critical Tests (Must Pass):
- [x] Page loads without errors
- [ ] All navigation works
- [ ] Mobile menu functions
- [ ] Form validation works
- [ ] Theme toggle works
- [ ] Responsive design works

### Nice to Have (After Setup):
- [ ] Resume downloads
- [ ] Profile photo displays
- [ ] Contact form sends emails
- [ ] Live project demos linked

---

## 📸 Screenshot Checklist

Take screenshots of:
1. Homepage (Hero section)
2. Mobile menu open
3. Contact form with validation errors
4. Dark mode
5. Projects section
6. Footer

Use these for:
- Social media sharing
- Portfolio documentation
- Progress tracking

---

## 🎯 Ready for Deployment?

If all tests pass ✅, you're ready to deploy!

**Next Steps:**
1. Commit code to Git
2. Push to GitHub
3. Deploy to Vercel
4. Test live site

See "Deployment to Vercel" section below ↓

---

## 🚀 Quick Deployment Checklist

Before deploying to Vercel:

- [ ] All tests above pass
- [ ] Code committed to Git
- [ ] GitHub repository created
- [ ] No sensitive data in code (API keys, passwords)
- [ ] .gitignore includes `.env` files
- [ ] Build passes locally: `npm run build`

---

**Testing Time Estimate:** 10-15 minutes
**All features working?** → Proceed to Vercel deployment! 🎉
