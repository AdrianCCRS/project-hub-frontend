import * as React from "react";
import CNavbar from "./components/CNavbar";
import {HeroUIProvider} from "@heroui/react";

function App() {
  return (
    <HeroUIProvider>
      <CNavbar></CNavbar>
    </HeroUIProvider>
  );
}

export default App
