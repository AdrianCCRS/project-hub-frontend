import { 
    HeroUIProvider,
    Card,
    Form,
    Input,
    Button,
    Autocomplete,
    AutocompleteItem,
    Textarea,
    Chip,
    Image,
    CardHeader,
    CardBody,
    DateInput,
    Link
} from "@heroui/react";
import React from "react";
import {parseDate} from "@internationalized/date";
import {ShowPassword, HiddenPassword} from "../components/Icons";
import {useUser} from "../context/useUser";
import CNavbar from "../components/CNavbar";

function EditProfile() {
    const [isVisible, setIsVisible] = React.useState(false);
    const {user, isReady, updateUserData} = useUser();
    const toggleVisibility = () => setIsVisible(!isVisible);

    const programs = [
        { id: 1, name: "Ingeniería de Sistemas" },
        { id: 2, name: "Ingeniería de Petróleos" },
        { id: 3, name: "Ingeniería Industrial" },
        { id: 4, name: "Ingeniería Química" },
        { id: 5, name: "Ingeniería Electrónica" },
        { id: 6, name: "Ingeniería Mecánica" },
        { id: 7, name: "Ingeniería Civil" },
        { id: 8, name: "Ingeniería Ambiental" },
        { id: 9, name: "Ingeniería Biomédica" },
        { id: 10, name: "Ingeniería Eléctrica" },
      ];
      

      return (
        <HeroUIProvider className="overflow-x-hidden overflow-y-auto h-screen ">
            <CNavbar />
            {isReady ? (
                <main className="flex items-center p-16 pt-8 justify-center">
                    <Card className="w-auto max-w-2xl p-6 shadow-md rounded-lg flex flex-row">
                        <Form
                            className="w-auto max-w-sm flex flex-col gap-4 font-worksans"
                            onReset={() => setAction("reset")}
                            onSubmit={(e) => {
                                e.preventDefault();
                                let data = Object.fromEntries(new FormData(e.currentTarget));
                                data.id = user.id;
                                 updateUserData(data)
                            }}
                        >
                            <Chip className="w-full font-manrope text-xl text-center" color="success">Editar perfil</Chip>
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                <Input
                                    isRequired
                                    errorMessage="Ingrese un nombre válido"
                                    label="Nombre"
                                    labelPlacement="outside"
                                    name="firstName"
                                    placeholder="Cambie su nombre"
                                    type="text"
                                    defaultValue={user?.firstName || ""}
                                />
                                <Input
                                    isRequired
                                    errorMessage="Ingrese un apellido válido"
                                    label="Apellido"
                                    labelPlacement="outside"
                                    name="lastName"
                                    placeholder="Cambie su apellido"
                                    type="text"
                                    defaultValue={user?.lastName || ""} 
                                />
                            </div>
    
                            <Input
                                isRequired
                                errorMessage="Por favor, ingrese un correo electrónico válido"
                                label="Email"
                                labelPlacement="outside"
                                name="email"
                                placeholder="Cambie su correo electrónico"
                                type="email"
                                defaultValue={user?.email || ""}
                            />
    
                            <Autocomplete
                                className="w-full"
                                defaultItems={programs}
                                label="Cambiar el programa"
                                placeholder="Cambia tu programa"
                                name="program"
                                defaultInputValue={user?.program || ""}
                            >
                                {(program) => (
                                    <AutocompleteItem key={program.id}>
                                        {program.name}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
    
                            <Input
                                className="w-full"
                                isRequired
                                errorMessage="Ingrese una contraseña válida"
                                labelPlacement="outside"
                                name="password"
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
                                name="description"
                                labelPlacement="outside"
                                placeholder="Enter your description"
                                defaultValue={user?.description || ""}
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
    
                        <div className="flex-col items-center justify-center self-center hidden md:flex">
                            <Image
                                isBlurred
                                alt="Babillito Writing"
                                className="m-5"
                                src="../src/assets/babillito/babillito_writing.png"
                                width={240}
                            />
                        </div>
                    </Card>
                    <div className="w-auto max-w-2xl pr-0 pl-16 shadow-md rounded-lg flex flex-col items-center gap-20">
                        <Card className="min-w-[400px] min-h-[250px] p-2 bg-gradient-to-tl from-[#0f0f0f] to-[#032b0c]">
                            <div className="relative w-full h-full">
                                <img 
                                    src="../src/assets/babillito/babillito_nobg.png" 
                                    alt="Babillo Background" 
                                    className="absolute left-24 opacity-35 w-50 h-auto pointer-events-none"
                                />
                            </div>
                            <CardHeader className="flex flex-col items-start gap-2">
                                <h1 className="font-manrope text-2xl">{user?.firstName + " " + user?.lastName}</h1>
                                <Chip 
                                    color="success"
                                    variant="faded"
                                    className="w-full font-manrope text-sm text-center"
                                >
                                    {user?.email}
                                </Chip>
                            </CardHeader>
                            <CardBody className="gap-3">
                                <Chip 
                                    color="success"
                                    variant="flat"
                                    className="w-full font-manrope text-sm text-center backdrop:blur-2xl"
                                >
                                    {user?.program}
                                </Chip>
                                <DateInput
                                    isReadOnly
                                    defaultValue={user?.createdAt ? parseDate(user.createdAt.split("T")[0]) : parseDate("1999-01-01")}
                                    label={"Usuario desde:"}
                                    className="w-1/2"
                                />
                            </CardBody>
                        </Card>
                        <Link color="foreground" href="https://uis.edu.co/es/" isExternal={true} className="gap-3 flex flex-col hover:scale-105 transition-transform duration-300">
                            <h1 className="font-manrope text-xl">Desarrollado por estudiantes de: </h1>
                            <img 
                                src="../src/assets/uisLogo.png" 
                                alt="UIS Logo" 
                                width={300}
                            />
                        </Link>
                    </div>
                </main>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <h1 className="font-manrope text-2xl">Cargando...</h1>
                </div>
            )}
        </HeroUIProvider>
    );    
  }
  
  export default EditProfile;