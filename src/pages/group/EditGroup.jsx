import React, { useEffect, useState } from "react";
import {
    HeroUIProvider,
    Card,
    Form,
    Autocomplete,
    AutocompleteItem,
    Button,
    Chip,
    Image,
    useDisclosure,
    Input,
} from "@heroui/react";
import CNavbar from "../../components/CNavbar";
import UsersTable from "../../components/UsersTable";
import AddUserModal from "../../components/AddUserModal";
import {
    addMembersAPI,
    getGroupsByLeaderAPI,
    getMembersFromGroupAPI,
    updateGroupAPI,
    deleteMembersAPI
} from "../../services/GroupService";
import { toast } from "react-toastify";
import DeletedUsersTable from "../../components/DeletedUsersTable.jsx";
import {useUser} from "../../context/useUser.jsx";
import {COLUMNS_FOR_USERS_TABLE, PROGRAM_COLOR_MAP, PROGRAMS} from "../../config/constants.js";

function EditGroup() {
    const {getAllUsers} = useUser();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [usersForGroup, setUsersForGroup] = useState([]);
    const [deletedUsers, setDeletedUsers] = useState([]);
    const [modalUsers, setModalUsers] = React.useState([]);
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        getGroupsByLeaderAPI(localStorage.getItem("userId")).then((res) => {
            if (res) {
                setGroups(res.data)
            }}).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    }, []);

    useEffect(() => {
        if (!selectedGroup) return;
        getMembersFromGroupAPI(selectedGroup).then((res) => {
            if (res) {
                setUsersForGroup(res.data);
            }}).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    }, [selectedGroup]);


    const updateGroup = async (group) => {
        await updateGroupAPI(group.groupName, group.groupLeaderId, selectedGroup).then((res) => {
            if (res) {
                addMembersAPI(usersForGroup.map((user) => ({ groupId: selectedGroup, userId: user.id })));
                if (deletedUsers.length > 0) {
                    deleteMembersAPI(deletedUsers.map((user) => ({ groupId: selectedGroup, userId: user.id })), selectedGroup);
                }
            }}
        ).then(() => {
            toast.success("Grupo actualizado con exito");
            setUsersForGroup([]);
            setModalUsers([]);
            setSelectedGroup(null);
            setDeletedUsers([]);
            getAllUsers();
            getGroupsByLeaderAPI(localStorage.getItem("userId")).then((res) => {
                if (res) {
                    setGroups(res.data)
                }}).catch(e => toast.warning("Ha ocurrido un error en el servidor al recargar los grupos"));
        }
        ).catch(e => toast.warning("Ha ocurrido un error en el servidor")); 
    }

    return (
        <HeroUIProvider className="overflow-x-hidden overflow-y-auto h-screen ">
            <CNavbar></CNavbar>
            <main className="flex items-center p-16 pt-8 justify-center">
                <Card className="w-auto p-6 shadow-md rounded-lg flex flex-row">
                    <Form
                        className="w-auto flex flex-col gap-4 font-worksans"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const group = {
                                groupName: e.currentTarget.groupName.value,
                                groupLeaderId: localStorage.getItem("userId"),
                            }
                            updateGroup(group, usersForGroup);
                            e.currentTarget.reset();
                        }}
                    >
                        <Chip className="w-full font-manrope text-xl text-center" color="success">Edita un grupo</Chip>
                            <Autocomplete
                                className="w-full"
                                defaultItems={groups}
                                label="Elegir el grupo a editar"
                                placeholder="Elige un grupo"
                                name="selectedGroup"
                                selectedKey={selectedGroup}
                                onSelectionChange={setSelectedGroup}
                            >
                                {(group) => (
                                    <AutocompleteItem key={group.id}>
                                        {group.name}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
                        {selectedGroup && (
                            <>
                                <Input
                                    className="w-full"
                                    name="groupName"
                                    label="Nombre del grupo"
                                    placeholder="Escribe un nuevo nombre para el grupo"
                                    defaultValue={groups.find((group) => group.id == selectedGroup)?.name || ""}
                                    required
                                />
                                <div>
                                    <Chip color="primary" variant="faded" className="my-4">Seleccionar usuarios</Chip>
                                    <UsersTable
                                        setUsersForGroup={setUsersForGroup}
                                        setDeletedUsers={setDeletedUsers}
                                        setModalUsers={setModalUsers}
                                        usersForGroup={usersForGroup}
                                        addUser={
                                            <AddUserModal
                                                selectedGroup={selectedGroup}
                                                usersForGroup={usersForGroup}
                                                modalUsers={modalUsers}
                                                setModalUsers={setModalUsers}
                                                setUsersForGroup={setUsersForGroup}
                                                isOpen={isOpen}
                                                onOpen={onOpen}
                                                onOpenChange={onOpenChange}
                                            />
                                        }
                                    />
                                    {deletedUsers.length > 0 && (
                                        <DeletedUsersTable
                                            items={deletedUsers}
                                            setUsersForGroup={setUsersForGroup}
                                            setDeletedUsers={setDeletedUsers}
                                            columns={COLUMNS_FOR_USERS_TABLE}
                                            programs={PROGRAMS}
                                            programColorMap={PROGRAM_COLOR_MAP}
                                        />
                                    )}
                                </div>
                            </>
                        )}

                        <div className="flex gap-2 align-center justify-center w-full">
                            <Button color="success" type="submit">
                                Actualizar Grupo
                            </Button>
                            <Button color="danger" type="reset" variant="flat" onPress={() => {
                                setModalUsers((prevUsers) => {
                                    const newUsers = [...prevUsers, ...usersForGroup];
                                    return newUsers;
                                  });
                                setUsersForGroup([]);
                            }}>
                                Borrar todo
                            </Button>
                        </div>
                    </Form>
                
                    <div className="m-5 flex-col items-center justify-center self-center hidden md:flex">
                        <Image
                            isBlurred
                            alt="Babillito Writing"
                            className="m-5"
                            src="/src/assets/babillito/babillito_groups.png"
                            width={300}
                        />
                    </div>
                </Card>
            </main>
        </HeroUIProvider>
    );
}

export default EditGroup;
