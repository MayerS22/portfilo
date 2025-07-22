# 🚀 Full-Stack Developer Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Perfect for showcasing your skills, projects, and professional experience as a full-stack developer.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Perfect on all devices - desktop, tablet, and mobile
- **Dark Mode**: Built-in dark/light theme toggle
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with live demos
- **Skills Visualization**: Progress bars and skill categories
- **Experience Timeline**: Professional experience and education display

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Header.tsx**: Update navigation links and social media URLs
2. **Hero.tsx**: Change name, title, and personal description
3. **About.tsx**: Update your personal story and skills
4. **Skills.tsx**: Modify skill levels and categories
5. **Projects.tsx**: Add your own projects with descriptions and links
6. **Experience.tsx**: Update work experience and education
7. **Contact.tsx**: Update contact information and social links
8. **Footer.tsx**: Update branding and contact details

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update fonts in `globals.css`
- **Animations**: Customize animations in individual components

### Content Structure

```
components/
├── Header.tsx          # Navigation and theme toggle
├── Hero.tsx           # Landing section with CTA
├── About.tsx          # Personal information
├── Skills.tsx         # Technical skills with progress bars
├── Projects.tsx       # Project showcase
├── Experience.tsx     # Work history and education
├── Contact.tsx        # Contact form and information
└── Footer.tsx         # Footer with links
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Dark Mode**: Custom dark theme with proper contrast
- **Accents**: Purple and blue gradients throughout

### Typography
- **Headings**: Inter font family
- **Code**: JetBrains Mono for technical content
- **Body**: Inter for readability

### Animations
- **Page Transitions**: Smooth scroll animations
- **Hover Effects**: Interactive elements with micro-animations
- **Loading States**: Skeleton screens and loading spinners
- **Scroll Animations**: Elements animate as they enter viewport

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-width layouts with proper spacing
- **Navigation**: Collapsible mobile menu

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - Your site will be live at `https://your-portfolio.vercel.app`

### Other Platforms

- **Netlify**: Use the Next.js build command
- **GitHub Pages**: Configure for static export
- **AWS Amplify**: Connect your repository

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### SEO Optimization

Update `app/layout.tsx` with your meta information:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full-Stack Developer',
  description: 'Professional portfolio showcasing full-stack development skills',
  // ... other meta tags
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster loads

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons
- **Vercel**: For seamless deployment

## 📞 Support

If you have any questions or need help customizing your portfolio:

- **Issues**: Create an issue on GitHub
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile]

---

**Made with ❤️ by [Your Name]**

*Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion*