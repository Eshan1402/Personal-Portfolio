import { Geist, Space_Grotesk } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'Eshan Saxena — Full Stack Developer & CS Engineer',
  description:
    'Final year Computer Science student and Full Stack Developer specializing in web applications, computer vision, and data science. Based in Agra, India.',
  keywords: [
    'Eshan Saxena',
    'portfolio',
    'full stack developer',
    'computer vision',
    'data science',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Eshan Saxena' }],
  creator: 'Eshan Saxena',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Eshan Saxena — Full Stack Developer & CS Engineer',
    description:
      'Final year Computer Science student and Full Stack Developer specializing in web applications, computer vision, and data science.',
    siteName: 'Eshan Saxena Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eshan Saxena — Full Stack Developer',
    description: 'Full Stack Developer | CS Engineer | Problem Solver',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geist.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
