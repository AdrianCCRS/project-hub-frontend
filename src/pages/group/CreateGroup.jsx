import React, { useState } from "react";
import { HeroUIProvider, Card, Form, Input, Button, Chip, Image, useDisclosure } from "@heroui/react";
import CNavbar from "../../components/CNavbar";
import UsersTable from "../../components/UsersTable";
import AddUserModal from "../../components/AddUserModal";
import { createGroupAPI, addMembersAPI } from "../../services/GroupService";
import { toast } from "react-toastify";

function CreateGroup() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [usersForGroup, setUsersForGroup] = useState([]);
    const [modalUsers, setModalUsers] = React.useState([]);


    const sendGroup = async (group) => {
        await createGroupAPI(group.groupName, group.groupLeaderId).then((res) => {
            if (res) {
                addMembersAPI(usersForGroup.map((user) => ({ groupId: res.data.id, userId: user.id })));
            }
        }).then(() => {
            toast.success("Grupo creado con exito");
            setUsersForGroup([]);
            setModalUsers([]);
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
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
                            sendGroup(group);
                            e.currentTarget.reset();
                        }}
                    >
                        <Chip className="w-full font-manrope text-xl text-center" color="success">Crear un nuevo grupo</Chip>
                        <Input
                            isRequired
                            errorMessage="Algo ha sucedido"
                            label="Nombre del grupo"
                            labelPlacement="outside"
                            name="groupName"
                            placeholder="Escriba un nombre para el grupo"
                            type="text"
                        />

                        <UsersTable
                            setUsersForGroup={setUsersForGroup}
                            setModalUsers={setModalUsers}
                            usersForGroup={usersForGroup}
                            addUser={
                                <AddUserModal
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
                        <div className="flex gap-2 align-center justify-center w-full">
                            <Button color="success" type="submit">
                                Crear Grupo
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
                            src="/babillito/babillito_groups.png"
                            width={300}
                        />
                    </div>
                </Card>
            </main>
        </HeroUIProvider>
    );
}

export default CreateGroup;
