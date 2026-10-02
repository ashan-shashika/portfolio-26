import { Layout } from "@/components/layout";
import { About } from "@/features/about";
import { Hero } from "@/features/home";
import { Projects } from "@/features/projects";
import { ThemeProvider } from "@/features/theme";
import { Timeline } from "@/features/timeline";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Timeline />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
