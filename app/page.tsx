import { About, Blogs, Contact, Directory, Hero, Hiring } from "../components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Hiring />
      <Blogs />
      <Directory />
      <Contact />
    </main>
  );
}
