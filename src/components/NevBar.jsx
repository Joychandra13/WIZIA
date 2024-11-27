import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


function NevBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "",
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" className="bg-[#002228] p-4 border-b-1 border-[#183A40]">
        <NavbarContent className="justify-between md:justify-start">
            <NavbarBrand >
                <img className="hover:scale-105 hover:-hue-rotate-180 transition-all duration-5000" src="/Logo.svg"  alt="" />
            </NavbarBrand>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-white "
            />
        </NavbarContent>

        <NavbarContent className="hidden md:flex space-x-4 " justify="center">
            {menuItems.map((item, index) => (
                <NavbarItem key={`${item}-${index}`}>
                    <Link
                    color={"secondary"}
                    className="w-full hover:scale-105 hover:-hue-rotate-180 transition-all duration-2000"
                    href="#"
                    size="lg"
                    >
                        {item}
                    </Link>
                </NavbarItem>
            ))}

        </NavbarContent>
        <NavbarContent justify="end" className="hidden md:flex">
            <NavbarItem className="space-x-3 ">
                <Button as={Link} color="primary" href="#" radius="full" className="text-[#002228] font-medium font-WorkSans hover:scale-105 transition-all duration-5000">
                    Book a Demo
                </Button>
                <Button as={Link} color="secondary" href="#" radius="full" variant="bordered" className="text-secondary font-WorkSans hover:scale-105 transition-all duration-5000">
                    Contact Us
                </Button>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-[#002228] ">
            {menuItems.map((items, indexs) => (
                <NavbarMenuItem key={`${items}-${indexs}`}>
                    <Link
                    color={"secondary"}
                    className="w-full"
                    href="#"
                    size="lg"
                    >
                        {items}
                    </Link>
                </NavbarMenuItem>
            ))}
            <Button as={Link} color="secondary" href="#" radius="full" variant="bordered" className="text-secondary font-WorkSans w-[107px] mt-10 hover:scale-105 transition-all duration-5000">
                Contact Us
            </Button>
            <Button as={Link} color="primary" href="#" radius="full" className="text-[#002228] font-medium font-WorkSans w-[122px] hover:scale-105 transition-all duration-5000">
                Book a Demo
            </Button>

        </NavbarMenu>
    </Navbar>
  );
}


export default NevBar

