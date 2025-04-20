import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Divider,
  Chip,
} from "@heroui/react";
import { CNavDropdownMenu } from "./CNavDropdownMenu";
import { 
  CreateProject,
  CreateGroup,
  Edit,
  Add,
  EditProject,
  EditGroup,
  ProfileIcon,
  LogoutIcon,
} from "./Icons";
import { color } from "framer-motion";

export const PHLogo = () => {
  return (
    <img src="./src/assets/phlogo.svg" alt="logo"/>
  );
};


export const ChevronDown = ({fill, size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function CNavbar() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    create_project: <CreateProject fill="currentColor" size={30} />,
    create_group: <CreateGroup fill="currentColor" size={40} />,
    edit: <Edit fill="currentColor" size={20} />,
    add: <Add fill="currentColor" size={20} />,
    edit_project: <EditProject fill="currentColor" size={30} />,
    edit_group: <EditGroup fill="currentColor" size={30} />,
    profile: <ProfileIcon fill="currentColor" size={35} />,
    logout: <LogoutIcon fill="currentColor" size={35} />,
  };

  const dropdownItems = [
    {
      key: "create_project",
      description: "Crea un nuevo proyecto para compartir con la comunidad y trabajar juntos",
      startContent: icons.create_project,
      content: "Crear un nuevo proyecto",
    },
    {
      key: "create_group",
      description: "Crea un nuevo grupo de trabajo para uno de tus proyectos",
      startContent: icons.create_group,
      content: "Crear un nuevo grupo",
    }
  ];

  return (
    <Navbar maxWidth="full" className="font-manrope" isBordered={true} isBlurred={true} shouldHideOnScroll={true}>
      <NavbarBrand>
        <PHLogo />
        <p className="font-bold text-xl ml-4">Dashboard</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <CNavDropdownMenu
          tooltipContent="Crear un nuevo..."
          btnEndContent={icons.chevron}
          btnContent={icons.add}
          ariaLabel="Crear"
          dropdownItems={dropdownItems}
          btnSize="sm"
          placement="bottom-end"
        ></CNavDropdownMenu>
        <CNavDropdownMenu
          tooltipContent="Editar"
          btnEndContent={icons.chevron}
          btnContent={icons.edit}
          ariaLabel="Editar"
          btnSize="sm"
          placement="bottom-end"
          dropdownItems={[
            {
              key: "edit_project",
              description: "Edita un proyecto existente",
              startContent: icons.edit_project,
              content: "Editar un proyecto",
            },
            {
              key: "edit_group",
              description: "Edita un grupo de trabajo existente",
              startContent: icons.edit_group,
              content: "Editar un grupo",
            }
          ]}
        ></CNavDropdownMenu>
        <Divider orientation="vertical" className="h-7"></Divider>
        <CNavDropdownMenu
        btnClasses="text-green-600"
        tooltipContent="Perfil"
        btnEndContent=""
        btnContent={icons.profile}
        ariaLabel="Perfil"
        btnSize="sm"
        btnVariant="solid"
        placement="bottom-end"
        disabledKeys={["profile_info"]}
        dropdownItems={[
          {
            key: "profile_info",
            description: "yeadcato@gmail.com",
            startContent: " ",
            content: <Chip color="success" variant="dot">AdrianCCRS</Chip>,
            className: "opacity-100",
          },
          {
            key: "profile",
            description: "Edita tu perfil",
            startContent: icons.profile,
            content: "Editar perfil",
          },
          {
            key: "logout",
            description: "Cierra tu sesión",
            startContent: icons.logout,
            content: "Cerrar sesión",
            color:"danger",
          }
        ]}
        >

        </CNavDropdownMenu>
      </NavbarContent>
    </Navbar>
  );
}
