# Stripe Landing Page Clone

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white" alt="WebGL" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

## ✨ Features

- **🌀 Stunning WebGL Shaders**: Real-time animated gradient background powered by GLSL shaders
- **🎨 Modular Shader System**: Separate vertex, noise, blend, and fragment shaders for ultimate customization
- **⚛️ React Component**: Easy-to-use `AnimatedGradient` component with customizable colors
- **📱 Responsive Design**: Perfectly adapted for all screen sizes
- **🎯 Pixel-Perfect Clone**: Faithful recreation of Stripe's iconic landing page design
- **🚀 Performance Optimized**: WebGL acceleration for smooth 60fps animations
- **🔧 TypeScript Support**: Full type safety and excellent developer experience

## 🚀 Demo

Experience the magic at [stripe-home.vercel.app](https://stripe-home.vercel.app)

## 📦 Installation

Get started in seconds:

```bash
# Clone the repository
git clone https://github.com/ez0000001000000/Stripe-Clone.git

# Navigate to the project
cd stripe-landing-clone

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and witness the beauty!

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://next.js.org/) - The React framework for production
- **Styling**: [Sass/SCSS](https://sass-lang.com/) - Powerful CSS preprocessing
- **Shaders**: [WebGL/GLSL](https://get.webgl.org/) - Hardware-accelerated graphics
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Beautiful icon library
- **TypeScript**: Full type safety and enhanced DX

## 🎮 Usage

### Basic Usage

```tsx
import { AnimatedGradient } from '@/components/ui/animated-gradient'

export default function MyComponent() {
  return (
    <div className="relative">
      <AnimatedGradient />
      <h1 className="relative z-10">Hello World!</h1>
    </div>
  )
}
```

### Custom Colors

```tsx
<AnimatedGradient
  color1="#ff6b6b"
  color2="#4ecdc4"
  color3="#45b7d1"
  color4="#96ceb4"
/>
```

## 🏗️ Architecture

```
src/
├── components/
│   ├── ui/
│   │   ├── animated-gradient.tsx    # React component wrapper
│   │   ├── stripe-shader.js         # Core WebGL shader logic
│   │   └── shaders/                 # Modular shader files
│   │       ├── vertex.js
│   │       ├── noise.js
│   │       ├── blend.js
│   │       └── fragment.js
└── pages/
    └── components/
        └── Header.jsx               # Main landing page component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original design by [Stripe](https://stripe.com)
- Shader inspiration from [Stripe's WebGL implementation](https://stripe.com)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Support

If you find this project helpful, please give it a ⭐️ star!

---

<div align="center">
  <p>Made with ❤️ using Next.js and WebGL</p>
</div>
