import {Search} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import cloudysunyrainny from '@/assets/cloudysunyrainny.svg';
import cloudrainsmall from '@/assets/Cloud Rain.svg';
import mintemp from '@/assets/min-temp.svg';
import maxtemp from '@/assets/max-temp.svg';
import water from '@/assets/water.svg';
import stroke from '@/assets/Stroke.svg';
import {Label} from "@/components/ui/label.tsx";
import {Separator} from "@/components/ui/separator.tsx";

export default function Leftsidebar(){
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="relative w-90">
            <InputGroup className={"w-90 rounded-full bg-[#C2D4D3] p-7"}>
                <InputGroupInput placeholder={"enter city name....."} className={"ml-5"} />
                <InputGroupAddon>
                    <Search/>
                </InputGroupAddon>
            </InputGroup>
            </div>
            <div className={"flex justify-center"}>
                <img src={cloudysunyrainny} alt={"cloudysunyrainny"} className={"w-70 mt-10"}/>
            </div>
            <div className={"flex justify-center"}>
                <Label className={"text-white text-7xl font-bold mt-5"}>30
                    <sup className="text-5xl font-bold">°C</sup>
                </Label>
            </div>
            <div className={"flex justify-center pt-15 gap-30"}>
                <Label className={"text-white text-2xl "}>isfahan</Label>
                <Label className={"text-white text-2xl "}>Monday</Label>
            </div>
            <Separator className={'m-5 mx-auto'} style={{width:'80%'}} />
            <div className={"flex flex-col gap-2 items-start w-[80%] mt-10"}>
                <div className={"flex gap-2 w-full"}>
                    <img src={cloudrainsmall} alt={"cloudrainsmall"}  className="w-4 h-4 shrink-0"/>
                    <Label className={"text-white"}>Cloudy Rainny</Label>
                </div>
                <div className={"flex gap-2"}>
                    <img src={mintemp} alt={"mintemp"} className="w-4 h-4 shrink-0"/>
                    <Label className={"text-white"}>Min temperature</Label>
                </div>
                <div className={"flex gap-2"}>
                    <img src={maxtemp} alt={"maxtemp"} className="w-4 h-4 shrink-0"/>
                    <Label className={"text-white"}>Max temperature</Label>
                </div>
            </div>
            <div className={"w-fit flex bg-[#252222] rounded-md mt-15 shadow-lg shadow-black/60"}>
                <div className={"flex justify-center m-2"}>
                    <img src={water} alt={"water"} className="w-10 h-10 shrink-0"/>
                    <div className={"flex flex-col pl-2"}>
                        <Label className={"text-white pt-1"}>83%</Label>
                        <Label className={"text-white pt-1"}>Humidity</Label>
                    </div>
                    <img src={stroke} alt={"stroke"} className={"w-10 h-10 shrink-0 ml-2"}/>
                    <div className={"flex flex-col pl-2"}>
                        <Label className={"text-white pt-1"}>6km/h</Label>
                        <Label className={"text-white pt-1"}>Wind Speed</Label>
                    </div>
                </div>
            </div>
        </div>
    )
}