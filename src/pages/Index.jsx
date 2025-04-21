import * as React from "react";
import CNavbar from "../components/CNavbar";
import CardContainer from "../components/CardContainer";
import YourProjects from "../components/YourProjects";
import {HeroUIProvider} from "@heroui/react";

const projects = [
  {
    name: "Proyecto 1",
    description: "Descripción del proyecto 1",
    link: "https://example.com/proyecto1",
    group: "Grupo 1",
    state: "En progreso"
  },
  {
    name: "Proyecto 2",
    description: "Descripción del proyecto 2",
    link: "https://example.com/proyecto2",
    group: "Grupo 2",
    state: "Finalizado"
  },
  {
    name: "Proyecto 3",
    description: "Descripción del proyecto 3",
    link: "https://example.com/proyecto3",
    group: "Grupo 3",
    state: "En progreso"
  },
  {
    name: "Proyecto 4",
    description: "Descripción del proyecto 4",
    link: "https://example.com/proyecto4",
    group: "Grupo 4",
    state: "Finalizado"
  },
  {
    name: "Proyecto 5",
    description: "Descripción del proyecto 5",
    link: "https://example.com/proyecto5",
    group: "Grupo 5",
    state: "En progreso"
  },
  {
    name: "Proyecto 6",
    description: "Descripción del proyecto 6",
    link: "https://example.com/proyecto6",
    group: "Grupo 6",
    state: "Finalizado"
  },
  {
    name: "Proyecto 7",
    description: "Descripción del proyecto 7",
    link: "https://example.com/proyecto7",
    group: "Grupo 7",
    state: "En progreso"
  },
  {
    name: "Proyecto 8",
    description: "Descripción del proyecto 8",
    link: "https://example.com/proyecto8",
    group: "Grupo 8",
    state: "Finalizado"
  },
  {
    name: "Proyecto 9",
    description: "Descripción del proyecto 9",
    link: "https://example.com/proyecto9",
    group: "Grupo 9",
    state: "En progreso"
  },
  {
    name: "Proyecto 10",
    description: "Descripción del proyecto 10",
    link: "https://example.com/proyecto10",
    group: "Grupo 10",
    state: "Finalizado"
  }
]

const yourProjects = [
  {
    name: "Proyecto 1",
    href: "https://example.com/proyecto1",
    group: "Grupo 1"
  },
  {
    name: "Proyecto 2",
    href: "https://example.com/proyecto2",
    group: "Grupo 2"
  },
  {
    name: "Proyecto 3",
    href: "https://example.com/proyecto3",
    group: "Grupo 3"
  },
]
function Index() {
  return (
    <HeroUIProvider className="overflow-x-hidden">
      <CNavbar></CNavbar>
      <main className="flex flex-row items-center justify-center w-auto h-screen">
      <YourProjects yourProjects={yourProjects}></YourProjects>
      <CardContainer className="gap-5 justify-center px-10" projects={projects}></CardContainer>
      </main>
    </HeroUIProvider>
  );
}

export default Index
