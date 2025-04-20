import {
Tooltip,
Button,
Dropdown,
NavbarItem,
DropdownTrigger,
DropdownMenu,
DropdownItem,
} from "@heroui/react";

export function CNavDropdownMenu({icon,dropdownItems, btnVariant="ghost", ...props}) {
    let classes = "p-0 bg-transparent data-[hover=true]:bg-transparent box-content px-2 w-fit" + " " + props.btnClasses;
  return (
    <>
    <Dropdown showArrow={true} offset={15} placement={props.placement || ""}>
        <NavbarItem>
        <DropdownTrigger>
                    <Button
                      disableRipple
                      className={classes}
                      variant={btnVariant}
                      size={props.btnSize}
                      isIconOnly={true}
                      >
                    <Tooltip content={props.tooltipContent} showArrow={true} placement="bottom">
                            <p className="text-2xl w-full flex justify-around items-center gap-1"> {props.btnContent} {props.btnEndContent} </p>
                    </Tooltip>
                    </Button>
        </DropdownTrigger>
        </NavbarItem>
      <DropdownMenu
            aria-label={props.ariaLabel}
            itemClasses={{
                base: "gap-4",
            }}
            variant="faded"
            disabledKeys={props.disabledKeys || []}
            className="w-fit"
            >
            {dropdownItems.map((item) => (
                <DropdownItem
                key={item.key}
                description={item.description}
                startContent={item.startContent}
                color={item.color || ""}
                className={item.className || ""}
                >
                    {item.content}
                </DropdownItem>
            ))}
      </DropdownMenu>
    </Dropdown>
    </>
  );
}