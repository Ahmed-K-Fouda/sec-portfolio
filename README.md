# Modern Portfolio Website

A sleek, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and professional information with a modern design and smooth user experience.

![Portfolio Preview](https://portfolio-a-fouda.netlify.app/)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Project Showcase**: Display your projects with images, descriptions, and tags
- **Admin Dashboard**: Manage your portfolio content with an intuitive admin interface
- **Analytics**: Track visitor engagement with your portfolio
- **Modern UI**: Clean, modern interface with smooth animations and transitions
- **SEO Optimized**: Built with SEO best practices in mind

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS with custom components
- **State Management**: React Context API
- **Routing**: React Router
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── admin/       # Admin dashboard components
│   │   ├── ui/          # UI components
│   │   └── ...          # Other components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and services
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Admin Dashboard

The admin dashboard provides a secure interface to manage your portfolio content:

- **Project Management**: Add, edit, and delete projects
- **Analytics**: View visitor statistics and engagement metrics
- **Settings**: Configure portfolio settings and preferences

To access the admin dashboard, navigate to `/admin` and enter your password.

## Customization

### Projects

Edit the `src/lib/projectService.ts` file to modify the default projects or add new ones.

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file.

### Content

Update the content in the respective components to reflect your personal information, skills, and projects.

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, which you can deploy to any static hosting service like Netlify, Vercel, or GitHub Pages.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)
