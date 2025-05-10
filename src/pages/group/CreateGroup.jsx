import React, { useEffect, useState } from "react";
import { HeroUIProvider, Card, Form, Input, Button, Autocomplete, AutocompleteItem, Textarea, Chip, Image, useDisclosure } from "@heroui/react";
import { ShowPassword, HiddenPassword } from "../../components/Icons";
import CNavbar from "../../components/CNavbar";
import UsersTable from "../../components/UsersTable";
import AddUserModal from "../../components/AddUserModal";

function CreateGroup() {
    const [isVisible, setIsVisible] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [usersForGroup, setUsersForGroup] = useState([]);
    const [modalUsers, setModalUsers] = React.useState([]);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <HeroUIProvider className="overflow-x-hidden overflow-y-auto h-screen ">
            <CNavbar></CNavbar>
            <main className="flex items-center p-16 pt-8 justify-center">
                <Card className="w-auto p-6 shadow-md rounded-lg flex flex-row">
                    <Form
                        className="w-auto flex flex-col gap-4 font-worksans"
                        onReset={() => setAction("reset")}
                        onSubmit={(e) => {
                            e.preventDefault();
                            let data = Object.fromEntries(new FormData(e.currentTarget));
                            setAction(`submit ${JSON.stringify(data)}`);
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
                    
                            <UsersTable setUsersForGroup={setUsersForGroup} setModalUsers={setModalUsers} usersForGroup={usersForGroup} addUser={<AddUserModal modalUsers={modalUsers} setModalUsers={setModalUsers} setUsersForGroup={setUsersForGroup} isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}/>}/> 
                            
                    
                        

                        <Autocomplete
                            className="w-full"
                            defaultItems={[]}
                            label="Cambiar el programa"
                            placeholder="Cambia tu programa"
                        >
                            {(program) => (
                                <AutocompleteItem key={program.id}>
                                    {program.name}
                                </AutocompleteItem>
                            )}
                        </Autocomplete>

                        <Input
                            className="w-full"
                            endContent={
                                <button
                                    aria-label="toggle password visibility"
                                    className="focus:outline-none"
                                    type="button"
                                    onClick={toggleVisibility}
                                >
                                    {isVisible ? (
                                        <ShowPassword className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <HiddenPassword className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            label="Contraseña"
                            placeholder="Ingrese su contraseña"
                            type={isVisible ? "text" : "password"}
                        />

                        <Textarea
                            isRequired
                            className="w-full"
                            label="Description"
                            labelPlacement="outside"
                            placeholder="Enter your description"
                        />

                        <div className="flex gap-2">
                            <Button color="success" type="submit">
                                Actualizar
                            </Button>
                            <Button type="reset" variant="flat">
                                Borrar todo
                            </Button>
                        </div>
                    </Form>
                
                    <div className=" flex-col items-center justify-center self-center hidden md:flex">
                        <Image
                            isBlurred
                            alt="Babillito Writing"
                            className="m-5"
                            src="./src/assets/babillito/babillito_writing.png"
                            width={240}
                        />
                    </div>
                </Card>
            </main>
        </HeroUIProvider>
    );
}

export default CreateGroup;
