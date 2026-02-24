import { Sidebar } from "lucide-react";
import { Header } from "./header/header";
import { Dashbord } from "./dashbord/dashbord";

export function Dash() {
    return (
        <>
        <Header />
        <Sidebar />
        <Dashbord />
        </>
    )
}