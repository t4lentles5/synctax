import { IBM_Plex_Mono, Fira_Code } from 'next/font/google';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['600'],
  style: ['italic'],
  variable: '--font-plex',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira',
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
    <html lang='en' className={`${ibmPlexMono.variable} ${firaCode.variable}`}>
      <body className='font-fira bg-background text-foreground'>
        {children}
      </body>
    </html>
  );
}
