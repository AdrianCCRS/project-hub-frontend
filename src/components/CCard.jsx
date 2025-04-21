import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Link,
    Chip,
}
from "@heroui/react"
export default function CCard ({ pName, pDescription, pLink, pGroup, pState}) {
    return (
        <Card className="max-w-[400px] px-5 min-h-[400px] hover:scale-105 transition-all duration-300 ease-in-out ">
        <CardHeader className="flex gap-x-32">
          <div className="flex flex-col">
            <p className="text-md text-xl">{pName}</p>
            <p className="text-small text-default-500">{pGroup}</p>
          </div>
          <div>
            <Chip color="warning" variant="flat">{pState}</Chip>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{pDescription}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href={pLink} color="success">
            Visite el repositorio del proyecto.
          </Link>
        </CardFooter>
      </Card>
    );
};

