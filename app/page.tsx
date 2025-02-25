import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section id="about" className="mb-12">
          <AboutMe />
        </section>
        <section id="skills" className="mb-12">
          <Skills />
        </section>
        <section id="projects" className="mb-12">
          <Projects />
        </section>
      </div>
    </main>
  )
}
