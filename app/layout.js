import './globals.css'
import { Nunito } from 'next/font/google'

const inter = Nunito({
  subsets: ['latin']
})

export const metadata = {
  title: 'GPT',
  description: 'Generated by create next app'
}

function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <nav />
        </header>
        <main>
          <aside>
            <nav />
          </aside>
          {children}
        </main>
        <footer>
          <nav />
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
