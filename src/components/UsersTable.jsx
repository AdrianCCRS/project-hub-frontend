import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Button,
  Chip,
  Tooltip,
} from "@heroui/react";

import { EditIcon, DeleteIcon } from "./Icons";
import UsersTableTop from "./UsersTableTop";

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


export default function UsersTable({ usersAPI, addUser }) {
  
  const [filterValue, setFilterValue] = React.useState("");
  const [users, setUsers] = React.useState(usersAPI);
  useEffect(() => {
    setUsers(users);
  }, [users]);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [programFilter, setprogramFilter] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

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
  }, [users, filterValue, programFilter]);
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
          <div className="relative flex items-center gap-2">
            <Tooltip content="Visitar perfil">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <EditIcon size={20} color="currentColor" />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar del grupo">
              <span
          className="text-lg text-danger cursor-pointer active:opacity-50"
          onClick={() => setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id))}
              >
          <DeleteIcon size={20} color="currentColor" />
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

  const topContent =<UsersTableTop
        filterValue={filterValue}
        onClear={onClear}
        onSearchChange={onSearchChange}
        programFilter={programFilter}
        setProgramFilter={setprogramFilter}
        usersLength={users.length}
        onRowsPerPageChange={onRowsPerPageChange}
        addUser={addUser}
        programs={programs}
      />;
    
  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
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
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);


  return (
    <Table
      isHeaderSticky
      aria-label="Usuarios que pertenecen al grupo"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
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
      <TableBody emptyContent={"No users found"} items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
