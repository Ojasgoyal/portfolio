import Info from "@/components/Info";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 pb-5">
      <header className="pt-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Info />
          <div className="md:ml-auto">
            <Socials />
          </div>
        </div>
      </header>

      <section className="w-full my-8">
        <h2 className="mx-auto text-center text-2xl font-light mb-3">
          Tech Stack
        </h2>
        <TechStack />
      </section>

      <section>
        <h2 className="text-2xl text-center font-light my-3">Projects</h2>
        <Projects />
      </section>

      {/* <section className="mt-8">
        <h2 className="text-lg font-medium mb-3">Blogs</h2>
        <BlogsPreview />
      </section> */}
    </main>
  );
}
