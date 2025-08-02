# Portfolio Deployment Guide

## 🚀 Deploy Your Portfolio Online

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Custom Domain Setup**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `mayersoliman.dev`)
   - Follow DNS configuration instructions

### Option 2: Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `out` folder
   - Or connect your GitHub repository

### Option 3: GitHub Pages

1. **Update package.json**
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "npm run export && touch out/.nojekyll"
     }
   }
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Domain Configuration

### For mayersoliman.dev:

1. **Purchase Domain** (if not already owned)
   - Go to domain registrar (Namecheap, GoDaddy, etc.)
   - Purchase `mayersoliman.dev`

2. **DNS Settings**
   - Add A record: `@` → `76.76.19.19` (Vercel)
   - Add CNAME: `www` → `your-project.vercel.app`

3. **SSL Certificate**
   - Automatically handled by Vercel/Netlify

## 📱 SEO Optimization

Your portfolio is already optimized with:
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Responsive design
- ✅ Fast loading

## 🎯 Next Steps

1. **Deploy your site**
2. **Set up custom domain**
3. **Test on mobile devices**
4. **Share your portfolio!**

## 📞 Support

If you need help with deployment, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment) 