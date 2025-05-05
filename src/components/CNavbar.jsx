import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Divider,
  Chip,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu
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
  ChevronDown
} from "./Icons";
import React from "react";
export const PHLogo = () => {
  return (
    <img src="../src/assets/phlogo.svg" alt="logo"/>
  );
};

export default function CNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const icons = {
    create_project: <CreateProject fill="currentColor" size={30} />,
    edit_project: <EditProject fill="currentColor" size={30} />,
    create_group: <CreateGroup fill="currentColor" size={40} />,
    edit_group: <EditGroup fill="currentColor" size={30} />,
    profile: <ProfileIcon fill="currentColor" size={35} />,
    logout: <LogoutIcon fill="currentColor" size={35} />,
    chevron: <ChevronDown fill="currentColor" size={16} />,
    edit: <Edit fill="currentColor" size={20} />,
    add: <Add fill="currentColor" size={20} />,
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

  const menuItems = [
    "Crear un nuevo proyecto",
    "Editar un proyecto",
    "Crear un nuevo grupo",
    "Editar un grupo",
    "Editar perfil",
    "Cerrar sesión"
  ];

  return (
    <Navbar maxWidth="full" className="font-manrope" isBordered={true} isBlurred={true} shouldHideOnScroll={true}>
      <NavbarBrand>
        <PHLogo />
        <Link color="foreground" href="#"  className="font-bold text-xl ml-4">Dashboard</Link>
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

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full gap-2"
              color={
                index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
              >
              {Object.values(icons)[index] || null}
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
    </Navbar>
  );
}
