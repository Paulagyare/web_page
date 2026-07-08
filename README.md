# Paul Agyare - Cybersecurity Professional Portfolio

A stunning, cybersecurity-themed professional portfolio website featuring advanced animations, interactive effects, and a modern design.

## 🚀 Features

### Visual Effects
- **Matrix Rain Animation** - Iconic code rain effect in the hero section
- **Particle Network** - Interconnected particles in the about section
- **Binary Rain** - Falling binary code in the experience section
- **Hexagon Animation** - Rotating hexagons in the projects section
- **Radar Scan** - Scanning radar effect in the contact section
- **Network Nodes** - Animated network nodes in the skills section

### Interactive Elements
- **Glitch Effects** - Cyberpunk-style text glitching
- **3D Card Tilt** - Cards that respond to mouse movement
- **Hover Animations** - Smooth transitions on all interactive elements
- **Typing Animation** - Auto-typing text in the hero section
- **Scan Lines** - Retro scan line effects on hover
- **Custom Cursor** - Cybersecurity-themed cursor glow
- **Skill Bar Animation** - Animated skill progress bars
- **Counter Animation** - Numbers count up when scrolled into view

### Sections
1. **Hero Section** - Eye-catching introduction with statistics
2. **About Section** - Terminal-style biography and education
3. **Skills Section** - Interactive skill categories with progress bars
4. **Experience Section** - Timeline layout with detailed work history
5. **Projects Section** - Project cards with hover effects
6. **Leadership Section** - Community impact highlights
7. **Contact Section** - Contact form and social links

## 📋 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code, Sublime, etc.)

### Installation
1. Download all three files:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Place them in the same folder

3. Open `index.html` in your web browser

## 🎨 Customization Guide

### Changing Personal Information

**Contact Information** (Edit in `index.html`):
```html
<!-- Search for and update these lines -->
<a href="tel:2087606233" class="contact-item">
<a href="mailto:agy21003@byui.edu" class="contact-item">
```

### Updating Your Photo

Replace the placeholder image URL in the About section:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Paul Agyare">
```

**Recommended image specs:**
- Aspect ratio: 4:5 (e.g., 400x500px)
- Format: JPG or PNG
- Background: Professional or with cybersecurity theme

### Modifying Colors

Edit the color scheme in `styles.css`:
```css
:root {
    --primary-color: #00ff88;     /* Main accent color */
    --secondary-color: #00d4ff;   /* Secondary accent */
    --accent-color: #ff00ff;      /* Tertiary accent */
    --bg-dark: #0a192f;           /* Background color */
    --bg-darker: #020c1b;         /* Darker background */
}
```

### Adding Social Media Links

Update the social links in the Contact section:
```html
<a href="YOUR_LINKEDIN_URL" class="social-link" data-tooltip="LinkedIn">
<a href="YOUR_GITHUB_URL" class="social-link" data-tooltip="GitHub">
<a href="YOUR_TWITTER_URL" class="social-link" data-tooltip="Twitter">
```

### Updating Statistics

Change the hero statistics (in `index.html`):
```html
<span class="stat-number" data-target="6000">0</span>+
<!-- Change data-target value to your number -->
```

### Modifying Skill Levels

Update skill progress percentages:
```html
<div class="skill-progress" data-progress="90"></div>
<!-- Change data-progress (0-100) -->
```

### Adding New Projects

Copy and paste a project card block in the Projects section:
```html
<div class="project-card" data-aos="flip-left">
    <div class="project-image">
        <img src="YOUR_PROJECT_IMAGE" alt="Project Name">
        <div class="project-overlay">
            <i class="fas fa-YOUR-ICON"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-badge">Tech1</span>
            <span class="tech-badge">Tech2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Details</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> GitHub</a>
        </div>
    </div>
</div>
```

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Interactions and canvas animations
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Orbitron, Rajdhani, Share Tech Mono)

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance
- Optimized canvas animations
- Smooth 60fps animations
- Lazy loading for images (recommended to add)
- Minimal dependencies

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Best Practices

### For Best Results:
1. **Use high-quality images** - Professional photos work best
2. **Keep content concise** - Brief but impactful descriptions
3. **Update regularly** - Keep your experience and projects current
4. **Test thoroughly** - Check on multiple devices and browsers
5. **Optimize images** - Compress images to reduce load times

### SEO Optimization:
1. Update the `<title>` tag in `index.html`
2. Add meta descriptions
3. Use descriptive alt text for images
4. Add structured data markup

## 🚢 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Your site will be live at `username.github.io/repository-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Site goes live instantly
3. Free SSL certificate included

### Custom Domain
- Purchase a domain from providers like Namecheap, GoDaddy
- Point DNS to your hosting provider
- Update nameservers

## 🎨 Icons Reference

Using Font Awesome icons. To change icons, visit:
- https://fontawesome.com/icons

Replace icon class names like:
```html
<i class="fas fa-shield-alt"></i>
```

## 📧 Form Setup

The contact form currently shows an alert. To make it functional:

### Option 1: Formspree
1. Sign up at https://formspree.io
2. Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at https://www.emailjs.com
2. Add EmailJS script and initialize
3. Update the form submission function

### Option 3: Backend API
Create your own backend to handle form submissions

## 🔒 Security Notes

- Never commit sensitive data (API keys, passwords)
- Use environment variables for production
- Sanitize all form inputs if using a backend
- Keep dependencies updated

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support

For questions or issues:
- Email: agy21003@byui.edu
- Phone: 208-760-6233

## 🎉 Credits

Created for Paul Agyare - Cybersecurity Professional
Designed with passion for security and innovation

---

**Remember:** This portfolio represents you. Keep it updated, professional, and authentic to your skills and personality!

