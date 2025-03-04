import Container from "@/components/container";
import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
      <main >
        <Container>
          <section className="min-h-screen">
            <Header/>
            {/* <About/> */}
            <Projects/>
            <Contact/>
          </section>
        </Container>
      </main>
      
  );
}
