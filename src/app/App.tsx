import { Layout } from "@/components/layout";
import { About } from "@/features/about";
import { Contact } from "@/features/contact";
import { Hero } from "@/features/home";
import { Projects } from "@/features/projects";
import { TechStack } from "@/features/stack";
import { ThemeProvider } from "@/features/theme";
import { Timeline } from "@/features/timeline";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Timeline />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
