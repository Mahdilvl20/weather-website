import {Search} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";


export default function Leftsidebar(){
    return (
        <div className={"relative w-full max-w-sm items-center justify-center flex"}>
            <InputGroup className={"w-80 rounded-full bg-[#C2D4D3]"}>
                <InputGroupInput placeholder={"enter city name....."} className={"ml-5"} />
                <InputGroupAddon>
                    <Search/>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}