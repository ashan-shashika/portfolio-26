import { Layout } from '@/components/layout'
import { Hero } from '@/features/home'
import { ThemeProvider } from '@/features/theme'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
      </Layout>
    </ThemeProvider>
  )
}

export default App
