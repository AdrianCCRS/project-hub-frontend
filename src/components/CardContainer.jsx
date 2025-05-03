import CCard from "./CCard";

export default function CardContainer({ className, projects = []}) {
  return (
    <div
      className={`flex flex-wrap overflow-y-auto h-screen-with-navbar ml-4 w-auto ${className}`}
    >
        <h1 className="w-full font-bold text-3xl flex items-center font-manrope py-7">Explora los proyectos de la comunidad</h1>
      {projects.map((project) => ( 
        <CCard
          key={project.id}
          pName={project.title}
          pDescription={project.description}
          pLink={project.repoLink}
          pGroup={project.groupId}
          pState={project.status}
        />
      ))}
    </div>
  );
}