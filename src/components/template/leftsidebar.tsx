import {Check, ChevronsUpDown} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command.tsx";
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover.tsx";
import cloudysunyrainny from '@/assets/cloudysunyrainny.svg';
import cloudrainsmall from '@/assets/Cloud Rain.svg';
import mintemp from '@/assets/min-temp.svg';
import maxtemp from '@/assets/max-temp.svg';
import water from '@/assets/water.svg';
import stroke from '@/assets/Stroke.svg';
import {Label} from "@/components/ui/label.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useState} from "react";
import {cn} from "@/lib/utils.ts";

export default function Leftsidebar(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const frameworks = [
        {
            value: "iran/isfahan",
            label: "isfahan",
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="relative w-90">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild className={'bg-black text-white'}>
                        <Button variant="outline" role={"combobox"} aria-expanded={open} className={"w-[200px] justify-between"}>
                            {value ? frameworks.find((frameworks)=>frameworks.value==value)?.label:"select city..."}
                            <ChevronsUpDown className={"opacity-50"}/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className={"w-[220px] p-0"}>
                        <Command>
                            <CommandInput placeholder={"Search city..."} className={"h-9"}/>
                            <CommandList>
                            <CommandEmpty>City not found.</CommandEmpty>
                            <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        {framework.label}
                                        <Check className={cn("ml-auto",value===framework.value?"opacity-100" : "opacity-0")}/>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
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