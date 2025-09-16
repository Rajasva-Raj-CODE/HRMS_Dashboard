import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import AppShell from '@/components/AppShell';
import { ThemeProvider } from '@/components/ThemeProvider';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: ' HRMS - Human Resource Management System',
  description: 'Complete HRMS solution for modern workplaces'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sora.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="hrms-ui-theme"
        >
          <AppShell>
            {children}
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}