import * as React from "react";
import CNavbar from "../components/CNavbar";
import CardContainer from "../components/CardContainer";
import YourProjects from "../components/YourProjects";
import {HeroUIProvider} from "@heroui/react";
import { useProjects } from "../context/useProjects";
import { UserContextProvider } from "../context/useUser";

function Index() {

  const {projects, userProjects, isReady} = useProjects();

  return (
    <HeroUIProvider className="overflow-x-hidden">
      <UserContextProvider>
        <CNavbar></CNavbar>
          <main className="flex  flex-row items-center justify-center w-auto h-screen-with-navbar">
            <YourProjects yourProjects={userProjects}></YourProjects>
            <CardContainer className="gap-5 justify-center pt-0 p-10" projects={projects}></CardContainer>
          </main>
       </UserContextProvider>
    </HeroUIProvider>
  );
}

export default Index
