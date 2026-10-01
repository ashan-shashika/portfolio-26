import { Layout } from '@/components/layout'
import { About } from '@/features/about'
import { Hero } from '@/features/home'
import { ThemeProvider } from '@/features/theme'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </ThemeProvider>
  )
}

export default App
