import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@heroui/react";
import { Button, Chip, Tooltip,  } from "@heroui/react";
import { CancelIcon, EditIcon} from "./Icons";
import { set } from "react-hook-form";

function SelectedUsersTableModal({items, setSelectedUsers, setUsers,columns, onNextPage, onPreviousPage, programs, programColorMap}){
    const [page, setPage] = React.useState(1);
    const pages = Math.ceil(items.length / 10) || 1;


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
      }, [ items.length, page, pages]);

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
            <Tooltip color="warning" content="Cancelar selección">
                <span
            className="text-lg text-warning cursor-pointer active:opacity-50"
            onClick={() => handleUserDiscard(user)}
                >
            <CancelIcon size={20} color="currentColor" />
                </span>
            </Tooltip>
            </div>
        );
        default:
        return cellValue;
    }
    }, []);

    const handleUserDiscard = React.useCallback((user) => {
        setSelectedUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
        setUsers((users) => [...users, user]);
    }, []);

    return(
        <Table
            isHeaderSticky
            aria-label="Usuarios seleccionados para añadir a un grupo"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
                wrapper: "max-h-[382px]",
            }}
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

export default SelectedUsersTableModal;