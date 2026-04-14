import Image from "next/image";

export default function Projects() {
  const fullStack = [
    {
      name: "Edukate",
      about:"Teaching platform allowing educators to create and sell courses online",
      url: "https://edukate.in",
      image: "/edukate.png",
    },
    {
      name: "MovieGeek",
      about: "Moviegeek is a movie exploration app for cinephiles",
      url: "https://moviegeek.ojasgoyal.in",
      image: "/moviegeek.png",
    },
    {
      name: "Quizy",
      about: "Quizy is an AI enhanced quiz creation and playing platform",
      url: "https://quizy.ojasgoyal.in",
      image: "/quizy.png",
    },
    {
      name: "Canly",
      about: "Canly is a Kanban style todo app with draggable tasks",
      url: "https://canly.ojasgoyal.in",
      image: "/canly.png",
    },
    
  ];

  const uiProjects = [
    { name: "Cursor", url: "https://cursor.ojasgoyal.in" , image:"/cursor.png" },
    { name: "Mintlify", url: "https://mintlify.ojasgoyal.in" , image:"/mintlify.png" },
  ];

  return (
      <div className="grid md:grid-cols-2 gap-10 md:gap-5">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="">Full Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fullStack.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="w-full rounded-sm border border-neutral-200 hover:shadow-md transition"
                key={project.name}
              >
                <Image
                  src={project.image}
                  width={300}
                  height={180}
                  alt={project.name}
                  className="w-full"
                />
                <div className="p-3">
                  <h2 className="font-medium">{project.name}</h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    {project.about}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h2>UI Mockups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {uiProjects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="w-full rounded-sm border border-neutral-200 hover:shadow-md transition"
                key={project.name}
              >
                <Image
                  src={project.image}
                  width={300}
                  height={180}
                  alt={project.name}
                  className="w-full"
                />
                <div className="p-3">
                  <h2 className="font-medium">{project.name}</h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    {project.about}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* <div>
        <h2>Others</h2>
      </div> */}
    </div>
  );
}
