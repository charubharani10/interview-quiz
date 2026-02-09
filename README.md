# Interview Quiz - Free Interview Preparation Platform

A comprehensive Next.js-based web application providing free interview preparation quizzes across multiple domains including aptitude, reasoning, programming, data structures, and soft skills.

## 🌐 Live Demo

Visit: [https://www.quizinterview.com/](https://www.quizinterview.com/)

## 📋 Overview

Interview Quiz is a free online platform designed to help job seekers prepare for technical and non-technical interviews. The platform offers a wide range of quizzes covering various topics essential for interview success.

## ✨ Features

### Quiz Categories

#### 1. **Aptitude Tests**
- Simplification
- Number Series
- Algebra
- Percentage
- Ratio & Proportion
- Average
- Interest
- Profit & Loss
- Speed, Time & Distance
- Mixture & Allegation
- Time and Work
- Permutation, Combination & Probability
- Mensuration
- Data Sufficiency
- Data Interpretation
- Comparison of Quantities

#### 2. **Reasoning Tests**
- Numerical Reasoning
- Verbal Reasoning
- Abstract Reasoning
- Logical Reasoning
- Mechanical Reasoning

#### 3. **Programming Languages**
- HTML
- CSS
- JavaScript
- React JS
- Node JS
- Python
- Java
- C++

#### 4. **Data Structures**
- Arrays
- Linked Lists
- Stacks
- Queues
- Trees
- Graphs
- Hashing
- Heaps
- Advanced Data Structures

#### 5. **Soft Skills**
- Leadership and Teamwork
- Communication Skills
- Adaptability and Flexibility
- Emotional Intelligence
- Conflict Resolution
- Time Management
- Situational Judgement
- Problem-Solving Scenarios
- Decision Making
- Handling Workplace Pressure
- Crisis Management
- Ethical Dilemmas

### Additional Features
- 📱 Responsive design for all devices
- 🎯 Multiple difficulty levels
- 📊 Results tracking and analysis
- 🎮 Interactive quiz interface
- 📧 Contact form with SendGrid integration
- 🔍 SEO optimized with sitemap generation
- 📈 Analytics integration with Vercel Analytics

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14.2.7
- **UI Library**: [Material-UI (MUI)](https://mui.com/) 5.16.7
- **Styling**: 
  - Emotion (CSS-in-JS)
  - Custom CSS Modules
- **Icons**: [Font Awesome](https://fontawesome.com/) 6.7.2
- **Animations**: 
  - React Scroll Parallax
  - Swiper
- **Email**: SendGrid
- **Analytics**: Vercel Analytics
- **SEO**: next-sitemap
- **Language**: JavaScript (React 18.2.0)

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/pixelxpr/interview-quiz.git
   cd interview-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   SENDGRID_FROM_EMAIL=your_verified_sender_email
   SENDGRID_TO_EMAIL=recipient_email
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
interview-quiz/
├── components/          # Reusable React components
│   ├── Meta.js         # SEO meta tags component
│   ├── Nav.js          # Navigation component
│   ├── Footer.js       # Footer component
│   ├── Hero.js         # Hero section
│   ├── Results.js      # Quiz results component
│   └── ...
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── test/           # Quiz pages
│   ├── about-us.js     # About page
│   ├── contact.js      # Contact page
│   ├── faq.js          # FAQ page
│   ├── blog.js         # Blog page
│   └── api/            # API routes
├── styles/             # CSS modules and global styles
├── utils/              # Utility functions
│   ├── titles.js       # SEO titles and descriptions
│   ├── links.js        # Navigation links
│   └── ...
├── public/             # Static assets
├── config/             # Configuration files
├── next.config.js      # Next.js configuration
├── next-sitemap.config.js  # Sitemap configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Adding New Quiz Categories

1. Update the categories array in `pages/index.js`
2. Create corresponding quiz pages in `pages/test/[skill].js`
3. Add SEO metadata in `utils/titles.js`

### Styling

- Global styles: `styles/globals.css`
- Component-specific styles: `styles/[ComponentName].module.css`
- Theme configuration: `components/theme.js`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
# Build the application
npm run build

# Start the production server
npm start
```

The build command also generates the sitemap automatically.

## 📧 Contact Form Setup

The contact form uses SendGrid for email delivery. To set it up:

1. Create a [SendGrid account](https://sendgrid.com/)
2. Generate an API key
3. Verify your sender email
4. Add credentials to `.env.local`

## 🔍 SEO Features

- Dynamic meta tags for all pages
- Automatic sitemap generation
- Structured data markup
- Canonical URLs
- Open Graph tags
- Twitter Card support

## 📊 Analytics

The application includes Vercel Analytics integration for tracking user interactions and page views.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🐛 Known Issues

- None currently reported

## 📞 Support

For support, email your contact email or visit the [Contact Page](https://www.quizinterview.com/contact).

## 🙏 Acknowledgments

- Material-UI for the component library
- Font Awesome for icons
- Next.js team for the amazing framework
- All contributors and users of the platform

---

**Made with ❤️ for interview preparation**
