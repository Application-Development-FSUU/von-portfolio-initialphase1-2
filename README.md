# Future-Proof Portfolio Project

A modern, complete, and responsive portfolio built with React.js showcasing an IT student's journey and growth in web development.

## ✨ Features

- **Hero Section**: Professional introduction with profile picture and call-to-action buttons
- **Skills Section**: Animated skill bars showing technical expertise across Frontend, Backend, and Tools
- **The Big Three Projects**: Showcasing current knowledge, learning growth, and aspirational goals
- **Currently Learning Section**: Demonstrating growth mindset and ongoing skill development
- **Contact Section**: Contact information cards and a functional contact form
- **Footer**: Complete with social links, quick navigation, and credits
- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Modern Animations**: Smooth transitions, hover effects, and floating animations

## 🛠️ Tech Stack

- **React.js** - Frontend library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **Vercel** - Deployment platform (recommended)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🌐 Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

## 📝 Customization

To customize this portfolio for your needs:

1. **Update Personal Information**:
   - `src/components/Hero.jsx` - Your name, title, and introduction
   - `src/components/Contact.jsx` - Your contact details (email, phone, location)
   - `src/components/Footer.jsx` - Your name and social media links

2. **Add Your Profile Picture**:
   - See [PROFILE-PICTURE-GUIDE.md](./PROFILE-PICTURE-GUIDE.md) for detailed instructions

3. **Update Projects**:
   - `src/components/Projects.jsx` - Your project details, descriptions, and technologies

4. **Customize Skills**:
   - `src/components/Skills.jsx` - Add/remove skills and adjust proficiency levels

5. **Modify Learning Content**:
   - `src/components/Learning.jsx` - Your current learning journey

6. **Change Colors** by updating CSS variables in `src/index.css`:
   - Primary color (currently red): `--primary-color`
   - Accent color (currently yellow): `--accent-yellow`
   - Background colors and more
x] Hero section with profile picture
- [x] Skills section with progress bars
- [x] Projects showcase
- [x] Contact form and information
- [x] Footer with social links
- [ ] Add real profile picture (see PROFILE-PICTURE-GUIDE.md)
- [ ] Connect contact form to email service (EmailJS, Formspree, etc.)
- [ ] Add project screenshots/images
- [ ] Integrate Google Analytics
- [ ] Add blog section (optional)
- [ ] Implement dark mode toggle (optional)
- Mobile (< 768px)

## 🎯 Next Steps

- [ ] Add project images/screenshots
- [ ] Integrate a contact form
- [ ] Add smooth scroll animations
- [ ] Connect to a CMS for easier content updates
- [ ] Add dark mode toggle
- [ ] Create a blog section

## 📄 License

This project is open source and available for educational purposes.

---

Built with ❤️ by an IT Student following the Pro Path with React.js
