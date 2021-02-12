import Header, { siteTitle } from './header'
import Footer from './footer'

// add types of layouts (home, article, profile, etc.)
// in Layout arguments and use if statements to identify

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}