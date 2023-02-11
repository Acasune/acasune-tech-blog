import Footer from '@/src/components/organisms/Footer'
import Header from '@/src/components/organisms/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <hr />
      <Footer />
    </>
  )
}

export default Layout
