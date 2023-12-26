"use client"
import { GiHook, GiTimeSynchronization } from "react-icons/gi"
import { BiSearch } from "react-icons/bi"
import { Navbar, NavbarContent, NavbarItem, Link, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io"

const NavbarComponent = ({ children }) => {
    return (
        <Navbar maxWidth="full" className="bg-base-300 flex-1 sticky p-3 gap-3 shadow-xl">
            <div className="h-full w-max flex  items-center gap-2" >
                <GiHook className="text-red-400" size={25} />
                <Link href="/" className="font-bold text-inherit text-white">Manga Hook</Link>
            </div>
            <NavbarContent className="w-full " justify="end">
                {children}
                <NavbarItem className="items-start">
                    <SearchBox />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

const SearchBox = () => {
    const [value, setValue] = useState("")
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button isIconOnly onPress={() => setOpen(true)} className="bg-red-400 text-white">
                <BiSearch size={20} />
            </Button>
            <Modal hideCloseButton={true} isOpen={open} isDismissable={false}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalBody className="bg-base-300 p-4">
                                <div className="flex items-center mb-4 justify-between">
                                    <h1 className="font-semibold text-xl text-red-400">Search</h1>
                                    <Button size="sm" className=" bg-base-100 border border-white rounded-full text-white opacity-80 felx items-center justify-center" isIconOnly onPress={() => setOpen(false)}>
                                        <IoMdClose />
                                    </Button>
                                </div>
                                <div className="flex gap-2 items-center justify-center p-1 w-full">
                                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="tap something ..." className="input flex-1" />
                                    <button onClick={() => {
                                        router.push("/search/" + value)
                                        setOpen(false)
                                    }} disabled={!value} className="btn btn-ghost !text-white !bg-red-400">
                                        <BiSearch />
                                    </button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}



export default NavbarComponent