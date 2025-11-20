import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { getGroupsByLeaderAPI } from "../../services/GroupService.jsx";
import { PROJECT_STATES } from "../../config/constants.js";
import { createProjectAPI, getProjectsByGroupAPI, updateProjectAPI } from "../../services/ProjectsService.jsx";

function EditProject() {
    const [groups, setGroups] = useState([]);
    const [projects, setProjects] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [enabledInput, setEnabledInput] = useState(true);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [originalGroup, setOriginalGroup] = useState(null);
    const [project, setProject] = useState(null);
    useEffect(() => {
        getGroupsByLeaderAPI(localStorage.getItem("userId")).then((res) => { setGroups(res.data) });
    }, []);
    useEffect(() => {
        if (originalGroup) {
            setEnabledInput(false);
            getProjectsByGroupAPI(originalGroup).then((res) => {
                setProjects(res.data);
            });
        }
    }, [originalGroup]);
    useEffect(() => {
        if (selectedProjectId) {
            const projectToSet = projects.find((project) => project.id == selectedProjectId);
            setProject(projectToSet);
            setSelectedState(projectToSet.status)
        }
    }, [selectedProjectId]);

    const editInputs = (project) => {
        return (
            <>
                <Input
                    isRequired
                    errorMessage="El campo es obligatorio"
                    label="Título del proyecto"
                    labelPlacement="outside"
                    name="projectTitle"
                    placeholder="Escriba un título para el proyecto"
                    type="text"
                    defaultValue={project.title}
                />
                <Textarea
                    isRequired
                    errorMessage="El campo es obligatorio"
                    className="w-full"
                    label="Descripción del proyecto"
                    name="description"
                    labelPlacement="outside"
                    placeholder="De una descripción del proyecto"
                    defaultValue={project.description}
                />
                <Input
                    isRequired
                    errorMessage="El campo es obligatorio"
                    label="Repositorio del proyecto"
                    name="repoLink"
                    labelPlacement="outside"
                    placeholder="github.com"
                    defaultValue={project.repoLink}
                    type="url"

                />

                <Autocomplete
                    isRequired
                    errorMessage="El campo es obligatorio"
                    isDisabled={enabledInput}
                    className="w-full"
                    defaultItems={groups}
                    label="Cambiar el grupo que dirige el proyecto"
                    placeholder="Elige un nuevo grupo"
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
                    errorMessage="El campo es obligatorio"
                    className="w-full"
                    defaultItems={PROJECT_STATES}
                    label="Elegir el estado del proyecto"
                    placeholder="Elige un estado"
                    name="projectState"
                    defaultSelectedKeys={[selectedState]}
                    onSelectionChange={setSelectedState}

                >
                    {Object.entries(PROJECT_STATES).map(([state, color]) => (
                        <SelectItem key={state} endContent={<div style={{ backgroundColor: color }} className="w-4 h-4 rounded-full" />}>
                            {state}
                        </SelectItem>
                    ))}
                </Select>
            </>
        );
    }

    const updateProject = async (project) => {
        await updateProjectAPI(project).then((res) => {
            if (res) {
                toast.success("Proyecto actualizado con exito");
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor al crear el proyecto"));
    }
    return (
        <HeroUIProvider className="overflow-x-hidden overflow-y-auto h-screen ">
            <CNavbar />
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
                                id: selectedProjectId,
                            }
                            updateProject(project);
                            setProject(null);
                            setOriginalGroup(null);
                            setSelectedProjectId(null);
                        }}
                    >
                        <Chip className="w-full font-manrope text-xl text-center" color="success">Editar un proyecto existente</Chip>
                        <Autocomplete
                            className="w-full"
                            defaultItems={groups}
                            label="Elegir el grupo que tiene el proyecto"
                            placeholder="Elige un grupo"
                            name="groupOfProject"
                            selectedKey={originalGroup}
                            onSelectionChange={setOriginalGroup}
                        >
                            {(group) => (
                                <AutocompleteItem key={group.id}>
                                    {group.name}
                                </AutocompleteItem>
                            )}
                        </Autocomplete>

                        <Autocomplete
                            className="w-full"
                            defaultItems={projects}
                            label="Elegir el proyecto a editar"
                            placeholder="Elige un proyecto"
                            name="selectedProject"
                            selectedKey={selectedProjectId}
                            onSelectionChange={setSelectedProjectId}
                        >
                            {projects && projects.length > 0 ? (
                                projects.map((project) => (
                                    <AutocompleteItem key={project.id}>
                                        {project.title}
                                    </AutocompleteItem>
                                ))
                            ) : (
                                <AutocompleteItem key={0}>
                                    No hay proyectos
                                </AutocompleteItem>
                            )}
                        </Autocomplete>

                        {project ? editInputs(project) : ""}

                        <div className="flex gap-2 align-center justify-center w-full">
                            <Button color="success" type="submit">
                                Actualizar Proyecto
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
                            src="/babillito/babillito_computing.png"
                            width={300}
                        />
                    </div>
                </Card>
            </main>
        </HeroUIProvider>
    );
}

export default EditProject;
