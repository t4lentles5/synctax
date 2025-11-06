import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['600'],
  style: ['italic'],
  variable: '--font-plex',
});

export const metadata = {
  title: 'Synctax',
  description:
    'Where developers connect. Share your code, find collaborators, and join a global community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${ibmPlexMono.variable}`}>
      <body className='bg-background text-foreground font-sans'>
        {children}
      </body>
    </html>
  );
}
