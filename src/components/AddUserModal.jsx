import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Table, Pagination, TableHeader, TableBody, TableColumn, TableRow, TableCell, Chip, Tooltip} from "@heroui/react";
import UsersTableTop from "./UsersTableTop";
import { PlusIcon, EditIcon } from "./Icons";
import { useEffect } from "react";
import SelectedUsersTableModal from "./SelectedUsersTableModal";
import { useUser } from "../context/useUser";
import { set } from "react-hook-form";
export const columns = [
    { name: "NOMBRE", uid: "firstName" },
    {name: "APELLIDO", uid: "lastName"},
    { name: "CORREO", uid: "email" },
    { name: "CARRERA", uid: "program" },
    { name: "ACCIONES", uid: "actions" },
  ];
  
  const programColorMap = {
    ing_bio: "success",
    ing_amb: "success",
    ing_qui: "success",
    ing_pet: "success",
    ing_sis: "warning",
    ing_mec: "warning",
    ing_civ: "warning",
    ing_ind: "warning",
    ing_ele: "warning",
  };
  
  const programs = [
    { uid: "ing_sis", name: "Ingeniería de Sistemas" },
    { uid: "ing_pet", name: "Ingeniería de Petróleos" },
    { uid: "ing_ind", name: "Ingeniería Industrial" },
    { uid: "ing_qui", name: "Ingeniería Química" },
    { uid: "ing_ele", name: "Ingeniería Electrónica" },
    { uid: "ing_mec", name: "Ingeniería Mecánica" },
    { uid: "ing_civ", name: "Ingeniería Civil" },
    { uid: "ing_amb", name: "Ingeniería Ambiental" },
    { uid: "ing_bio", name: "Ingeniería Biomédica" },
    { uid: "ing_ene", name: "Ingeniería Eléctrica" },
  ];
  

function AddUserModal({ isOpen, onOpenChange, onOpen, modalUsers, setModalUsers, setUsersForGroup }) {
  const { getAllUsers, allUsers } = useUser();

  useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        if (allUsers && allUsers.length > 0) {
            setModalUsers(allUsers); 
        }
    }, [allUsers]);

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedUsers, setSelectedUsers] = React.useState([]);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [programFilter, setprogramFilter] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...modalUsers];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.lastName.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (programFilter !== "all" && Array.from(programFilter).length !== programs.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(programFilter).includes(user.program),
      );
    }

    return filteredUsers;
  }, [modalUsers, filterValue, programFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);
 
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "firstName" || "lastName":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;
      case "email":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm">{cellValue}</p>
          </div>
        );
      case "program":
        return (
          <Chip
            className="capitalize"
            color={programColorMap[programs.find((program) => program.name === user.program)?.uid]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Tooltip content="Visitar perfil">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <EditIcon size={20} color="currentColor" />
              </span>
            </Tooltip>
            <Tooltip color="success" content="Añadir al grupo">
              <span
          className="text-lg text-primary cursor-pointer active:opacity-50"
          onClick={() => handleUserAdd(user)}
              >
          <PlusIcon size={24} color="currentColor" />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const handleUserAdd = React.useCallback((user) => {
    setModalUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));   
    setSelectedUsers((prevSelectedUsers) => [
      ...prevSelectedUsers,
      user
    ]);
  }, []);

  const topContent =<UsersTableTop
        filterValue={filterValue}
        onClear={onClear}
        onSearchChange={onSearchChange}
        programFilter={programFilter}
        setProgramFilter={setprogramFilter}
        usersLength={modalUsers.length}
        onRowsPerPageChange={onRowsPerPageChange}
        programs={programs}
      />;
    
  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <>
        <Button color="primary" onPress={onOpen} startContent={<PlusIcon fill="currentColor" size={16} />}>
            Añadir Usuario
        </Button>
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} size="5xl" backdrop="blur" scrollBehavior="inside"> 
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><Chip color="primary" variant="faded" size="lg">Añadir un nuevo usuario</Chip></ModalHeader>
                <ModalBody>
                <Table
                    isHeaderSticky
                    aria-label="Usuarios que pertenecen al grupo"
                    bottomContent={bottomContent}
                    bottomContentPlacement="outside"
                    classNames={{
                        wrapper: "max-h-[382px]",
                    }}
                    selectionMode="single"
                    topContent={topContent}
                    topContentPlacement="outside"
                    >
                    <TableHeader columns={columns}>
                        {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                        >
                            {column.name}
                        </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody emptyContent={"No se encontraron usuarios"} items={items}>
                        {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
                <Chip color="primary" variant="faded" size="lg">Usuarios Seleccionados</Chip>
                <SelectedUsersTableModal 
                    items={selectedUsers}
                    setUsers={setModalUsers}
                    setSelectedUsers={setSelectedUsers}
                    columns={columns}
                    onNextPage={onNextPage}
                    onPreviousPage={onPreviousPage}
                    programColorMap={programColorMap}
                    programs={programs}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="flat" onPress={() => {
                        onClose();
                        setModalUsers((prevUsers) => {
                            const newUsers = [...prevUsers, ...selectedUsers];
                            return newUsers;
                        });
                        setSelectedUsers([]);
                    }}>
                    Cancelar
                    </Button>
                    <Button color="primary" onPress={() => {
                        onClose();
                        setUsersForGroup((prevSelectedUsers) => {
                            const newUsers = [...prevSelectedUsers, ...selectedUsers];
                            return newUsers;
                        });
                        setSelectedUsers([]);
                    }}>
                    Añadir
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
      </>
  );
}

export default AddUserModal;