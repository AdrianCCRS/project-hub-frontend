import {Link} from "@heroui/react";
export default function YourProjects({yourProjects = []}) {
    return (
        <div  className="flex flex-wrap flex-col justify-start bg-stone-950 gap-4 w-2/3 h-full max-w-md border-r border-divider p-6 overflow-y-auto">
        <h2 className="font-manrope text-xl text-green-600">Tus proyectos</h2>
            {yourProjects.map((project) => (
                <Link className="hover:text-green-500 text-sm" color="foreground" href={project.href} underline="hover">
                    {project.group + " / " + project.name}
                </Link>
            ))}
        </div>
    );
};