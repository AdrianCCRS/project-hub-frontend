import React from "react";
import {
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@heroui/react";

import {  ChevronDown, SearchIcon} from "./Icons";

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

function UsersTableTop({
  filterValue,
  onClear,
  onSearchChange,
  programFilter,
  setProgramFilter,
  usersLength,
  onRowsPerPageChange,
  programs,
  addUser
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Buscar por nombre..."
          startContent={<SearchIcon />}
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button endContent={<ChevronDown fill="currentColor" size={16} />} variant="flat">
                Programa del usuario
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={programFilter}
              selectionMode="multiple"
              onSelectionChange={setProgramFilter}
            >
              {/* Assuming programs is available in the parent component */}
              {programs.map((program) => (
                <DropdownItem key={program.name} className="capitalize">
                  {capitalize(program.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {addUser}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">Total: {usersLength} usuarios</span>
        <label className="flex items-center text-default-400 text-small">
          Columnas por página:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={onRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default UsersTableTop;
