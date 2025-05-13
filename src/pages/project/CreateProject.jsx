import React, {useEffect, useState} from "react";
import {
    HeroUIProvider,
    Card,
    Form,
    Input,
    Button,
    Chip,
    Image,
    useDisclosure,
    Textarea,
    Autocomplete, AutocompleteItem, Select, SelectItem
} from "@heroui/react";
import CNavbar from "../../components/CNavbar";
import UsersTable from "../../components/UsersTable";
import AddUserModal from "../../components/AddUserModal";
import { toast } from "react-toastify";
import {getGroupsByLeaderAPI} from "../../services/GroupService.jsx";
import {PROJECT_STATES} from "../../config/constants.js";
import {createProjectAPI} from "../../services/ProjectsService.jsx";

function CreateProject() {
    const [groups, setGroups] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);
    useEffect(() => {
        getGroupsByLeaderAPI(localStorage.getItem("userId")).then((res) => {setGroups(res.data)});
    }, []);


    const sendProject = async (project) => {
        await createProjectAPI(project).then((res) => {
            if (res) {
                toast.success("Proyecto creado con exito");
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor al crear el proyecto"));
    }
    return (
        <HeroUIProvider className="overflow-x-hidden overflow-y-auto h-screen ">
            <CNavbar/>
            <main className="flex items-center p-16 pt-8 justify-center">
                <Card className="w-8/12 p-6 shadow-md rounded-lg flex flex-row">
                    <Form
                        className="w-1/2 flex flex-col gap-4 font-worksans"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const project = {
                                title: e.currentTarget.projectTitle.value,
                                description: e.currentTarget.description.value,
                                repoLink: e.currentTarget.repoLink.value,
                                groupId: selectedGroup,
                                status: e.currentTarget.projectState.value,
                            }
                            sendProject(project);
                            e.currentTarget.reset();
                        }}
                    >
                        <Chip className="w-full font-manrope text-xl text-center" color="success">Crear un nuevo proyecto</Chip>
                        <Input
                            isRequired
                            errorMessage="Algo ha sucedido"
                            label="Título del proyecto"
                            labelPlacement="outside"
                            name="projectTitle"
                            placeholder="Escriba un título para el proyecto"
                            type="text"
                        />
                        <Textarea
                            isRequired
                            className="w-full"
                            label="Descripción del proyecto"
                            name="description"
                            labelPlacement="outside"
                            placeholder="De una descripción del proyecto"
                        />
                        <Input
                            isRequired
                            label="Repositorio del proyecto"
                            name="repoLink"
                            labelPlacement="outside"
                            placeholder="github.com"
                            defaultValue={"https://"}
                            type="url"
                        />

                        <Autocomplete
                            isRequired
                            className="w-full"
                            defaultItems={groups}
                            label="Elegir el grupo que se asignará al proyecto"
                            placeholder="Elige un grupo"
                            name="selectedGroupForProject"
                            selectedKey={selectedGroup}
                            onSelectionChange={setSelectedGroup}
                        >
                            {(group) => (
                                <AutocompleteItem key={group.id}>
                                    {group.name}
                                </AutocompleteItem>
                            )}
                        </Autocomplete>

                        <Select
                            isRequired
                            className="w-full"
                            defaultItems={PROJECT_STATES}
                            label="Elegir el estado del proyecto"
                            placeholder="Elige un estado"
                            name="projectState"
                            selectedKey={selectedState}
                            onSelectionChange={setSelectedState}
                        >
                            {Object.entries(PROJECT_STATES).map(([state, color]) => (
                                <SelectItem key={state} endContent={<div style={{ backgroundColor: color }} className="w-4 h-4 rounded-full" />}>
                                    {state}
                                </SelectItem>
                            ))}
                        </Select>

                        <div className="flex gap-2 align-center justify-center w-full">
                            <Button color="success" type="submit">
                                Crear Proyecto
                            </Button>
                            <Button color="danger" type="reset" variant="flat">
                                Borrar todo
                            </Button>
                        </div>
                    </Form>

                    <div className="m-5 flex-col items-center justify-center self-center hidden md:flex">
                        <Image
                            isBlurred
                            alt="Babillito computing"
                            className="m-5"
                            src="/src/assets/babillito/babillito_computing.png"
                            width={300}
                        />
                    </div>
                </Card>
            </main>
        </HeroUIProvider>
    );
}

export default CreateProject;
