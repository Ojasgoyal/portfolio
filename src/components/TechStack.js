import * as simpleIcons from "simple-icons";

export default function TechStack() {
  const tech = [
    simpleIcons.siMongodb,
    simpleIcons.siExpress,
    simpleIcons.siReact,
    simpleIcons.siNodedotjs,
    simpleIcons.siNextdotjs,
    simpleIcons.siTailwindcss,

    simpleIcons.siJavascript,
    simpleIcons.siTypescript,
    simpleIcons.siPython,
    simpleIcons.siCplusplus,

    simpleIcons.siGithub,
    simpleIcons.siGit,
    simpleIcons.siPostman,
    simpleIcons.siVercel,
    simpleIcons.siClerk,

    simpleIcons.siShadcnui,
    simpleIcons.siDaisyui,
    simpleIcons.siSupabase,
    simpleIcons.siSqlite,
    simpleIcons.siMysql,
  ];

  return (
    <div className="p-4 grid grid-cols-5 md:grid-cols-10 w-fit mx-auto gap-4">
      {tech.map((t) => (
        <div
          key={t.slug}
          className="relative flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            width="34"
            height="34"
            className="transition-all duration-200 opacity-90
                       hover:scale-110 
                       hover:opacity-100"
          >
            <path d={t.path} fill={`#${t.hex}`} />
            <title>{t.title}</title>
          </svg>
        </div>
      ))}
    </div>
  );
}
