import './globals.css';
import { ThemeProvider } from '../component/store/ThemeProvider.jsx';
import { ReduxProvider } from '../component/store/ReduxProvider.jsx';

export const metadata = {
  title: 'Anni Software | Modern Software Engineering, Apps & AI Solutions',
  description: 'Enterprise custom software development, mobile apps, SaaS, and AI automation for high-growth companies. Clean architecture, agile delivery, 99.9% uptime SLA.',
  keywords: ['software development', 'mobile app', 'Next.js', 'React Native', 'custom software', 'SaaS', 'AI development'],
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-[#1D4FFF] selection:text-white">
        <ReduxProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
