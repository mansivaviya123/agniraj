import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Agniraj | Fire Protection, Safety & Security',
  icons: { icon: '/images/agniraj-favicon.png' },
 description: 'Complete fire protection and safety solutions for commercial, industrial and residential spaces. Audit, design, supply, installation, maintenance and training in Mumbai.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }

