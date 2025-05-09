import {Link} from "@heroui/react";
export default function YourProjects({yourProjects = []}) {
    return (
        <div  className="flex flex-wrap flex-col justify-start bg-stone-950 gap-4 w-3/12 h-full max-w-md border-r border-divider p-6 overflow-y-auto">
        <h2 className="font-manrope text-xl text-green-600">Tus proyectos</h2>
            {yourProjects.map((project) => (
                <Link className="hover:text-green-500 text-sm" color="foreground" href={project.repoLink} underline="hover">
                    {project.groupId + " / " + project.title}
                </Link>
            ))}
        </div>
    );
};