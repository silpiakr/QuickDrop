import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { MdNotificationAdd } from "react-icons/md";
import logo from '../../../assets/images/logo.png'

export function Navbar() {
    return (
        <Menubar>
            <div className="flex items-center content-between">
                <div className="flex items-center content-start">
                    <img src={logo}
                        className="w-12"
                        alt="" />
                    <h3 className="text-2xl font-bold text-slate-600 ml-3 cursor-pointer">Parcel</h3>
                </div>
                <div className="flex content-end sm:ml-10 md:ml-96 lg:ml-[968px]">
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">Home</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <MdNotificationAdd className="text-2xl text-orange-400 cursor-pointer" />
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer">Profiles</MenubarTrigger>
                        <MenubarContent>
                            <MenubarRadioGroup value="user">
                                <MenubarRadioItem value="userNamr">User Name</MenubarRadioItem>
                                <MenubarRadioItem value="benoit">Dashboard</MenubarRadioItem>
                                <MenubarRadioItem value="Luis">Log Out</MenubarRadioItem>
                            </MenubarRadioGroup>
                            <MenubarSeparator />
                            <MenubarItem inset>Update Profile</MenubarItem>
                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>
                </div>
            </div>
        </Menubar>
    )
}
