import './globals.css';
import { AnalyticsWrapper } from './components/analytics';
import Footer from './footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

        {children}
        <AnalyticsWrapper />

      <footer>
        <Footer />
      </footer>    
      </body>
    </html>
  )
}
