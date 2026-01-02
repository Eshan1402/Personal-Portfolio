# Eshan Saxena Portfolio - Node.js Version

A modern, responsive portfolio website built with Node.js, Express, and EJS, featuring stunning 3D effects and animations.

## 🚀 Features

### ✨ Enhanced Visual Effects
- **3D Transform Effects**: Cards and elements with realistic 3D transformations
- **Parallax Scrolling**: Smooth parallax effects on images and shapes
- **Floating Animations**: Elements that gently float and rotate
- **Glowing Effects**: Subtle glow animations on interactive elements
- **Morphing Shapes**: Dynamic shape transformations
- **Custom Cursor**: Interactive custom cursor with gradient colors

### 🎨 Advanced Animations
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Staggered Animations**: Sequential animation of multiple elements
- **Typing Effect**: Dynamic text typing animation
- **Particle System**: Floating particles in the background
- **Magnetic Buttons**: Buttons that respond to mouse movement
- **Smooth Transitions**: Fluid transitions between states

### 🛠 Technical Features
- **Node.js Backend**: Express.js server with EJS templating
- **Responsive Design**: Mobile-first approach with Bootstrap
- **Performance Optimized**: Compressed assets and optimized loading
- **SEO Friendly**: Meta tags and structured content
- **Security**: Helmet.js for security headers
- **Modern CSS**: Advanced CSS3 features and animations

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eshan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
eshan-portfolio/
├── app.js                 # Main Express application
├── package.json           # Dependencies and scripts
├── README.md             # Project documentation
├── public/               # Static assets
│   ├── assets/
│   │   ├── css/
│   │   │   ├── style.css           # Original styles
│   │   │   ├── 3d-effects.css      # Enhanced 3D effects
│   │   │   └── plugins/            # Third-party CSS
│   │   ├── js/
│   │   │   ├── main.js             # Original JavaScript
│   │   │   ├── enhanced-animations.js # Enhanced animations
│   │   │   └── plugins/            # Third-party JS
│   │   ├── img/                    # Images and graphics
│   │   └── fonts/                  # Font files
└── views/                # EJS templates
    ├── layout.ejs        # Main layout template
    ├── home.ejs          # Home page
    ├── about.ejs         # About page
    ├── contact.ejs       # Contact page
    ├── faq.ejs           # FAQ page
    ├── 404.ejs           # 404 error page
    └── error.ejs         # Error page
```

## 🎯 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

## 🌟 Key Features Explained

### 3D Effects
The portfolio uses CSS3 transforms and perspective properties to create realistic 3D effects:
- Cards tilt and rotate on hover
- Elements have depth with translateZ
- Smooth transitions with cubic-bezier easing

### Animation System
A comprehensive animation system built with vanilla JavaScript:
- Intersection Observer for scroll-triggered animations
- RequestAnimationFrame for smooth performance
- Staggered animations for sequential effects

### Responsive Design
Built with Bootstrap 5 and custom responsive utilities:
- Mobile-first approach
- Flexible grid system
- Optimized for all screen sizes

## 🎨 Customization

### Colors
The color scheme can be customized in `public/assets/css/3d-effects.css`:
```css
:root {
  --primary-color: #ff6d5a;
  --accent-color: #342ead;
  --text-color: #12103e;
}
```

### Animations
Animation timing and effects can be adjusted in the CSS files:
- Change animation durations
- Modify easing functions
- Adjust 3D transform values

### Content
Update content in the EJS template files:
- Personal information in `views/home.ejs`
- About content in `views/about.ejs`
- Contact details in `views/contact.ejs`

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific settings:
```env
PORT=3000
NODE_ENV=development
```

### Security
The application uses Helmet.js for security headers:
- Content Security Policy
- XSS Protection
- Frame Options

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Heroku
1. Create a Heroku app
2. Connect your repository
3. Deploy automatically

### Vercel
1. Connect your GitHub repository
2. Configure build settings
3. Deploy with one click

### DigitalOcean
1. Create a droplet
2. Install Node.js
3. Clone and run the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Eshan Saxena**
- GitHub: [@Eshan1402](https://github.com/Eshan1402)
- LinkedIn: [Eshan Saxena](https://www.linkedin.com/in/eshan-saxena-3a6170276/)

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- GSAP for advanced animations
- Font Awesome for icons
- Google Fonts for typography

---

**Note**: This is a Node.js conversion of the original HTML/CSS portfolio with enhanced 3D effects and animations while preserving the original design and functionality. 