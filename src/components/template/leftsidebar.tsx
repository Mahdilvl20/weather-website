import {ChevronsUpDown} from "lucide-react";
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
import {searchCity} from "@/services/cityservice.ts";

interface LeftsideProps {
    onCitySelected: (cityData:{name:string,lat:number,lon:number}) => void;
    weatherData?:any;
}

export default function Leftsidebar({onCitySelected,weatherData}: LeftsideProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [cityDitailList, setCityDetailList] = useState<any[]>([]);


    const handleSearch=async (text: string) => {
        if(text.length<2) return;
        const cities=await searchCity(text);
        const cityDetail=Array.isArray(cities)?cities:Object.values(cities|| {});
        setCityDetailList(cityDetail);
    }
    const getDayName = (dateString:any) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };
    const getWeatherDescription = (code: number): string => {
        switch (code) {
            case 0: return "Clear Sky";
            case 1: return "Mainly Clear";
            case 2: return "Partly Cloudy";
            case 3: return "Overcast";
            case 45: case 48: return "Foggy";
            case 51: case 53: case 55: return "Drizzle";
            case 61: case 63: case 65: return "Rainy";
            case 71: case 73: case 75: return "Snowy";
            case 95: case 96: case 99: return "Thunderstorm";
            default: return "Unknown";
        }
    };
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="relative w-90">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild className={'bg-black text-white'}>
                        <Button variant="outline" role={"combobox"} aria-expanded={open} className={"w-[200px] justify-between"}>
                            {value || "select city...."}
                            <ChevronsUpDown className={"opacity-50"}/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className={"w-[220px] p-0"}>
                        <Command>
                            <CommandInput placeholder={"Search city..."} className={"h-9"} onValueChange={handleSearch}/>
                            <CommandList>
                            <CommandEmpty>City not found.</CommandEmpty>
                            <CommandGroup>
                                {cityDitailList?.map((city,index)=>(
                                    <CommandItem
                                        key={index}
                                        onSelect={()=>{
                                            setValue(city.name)
                                            setOpen(false)
                                            onCitySelected({
                                                name:city.name,
                                                lat:city.lat,
                                                lon:city.lon
                                            })
                                        }}
                                        >
                                        {city.name}
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
                <Label className={"text-white text-7xl font-bold mt-5"}>{weatherData?.current?.temperature_2m || ""}
                    <sup className="text-5xl font-bold">°C</sup>
                </Label>
            </div>
            <div className={"flex justify-center pt-15 gap-30"}>
                <Label className={"text-white text-2xl "}>{value}</Label>
                <Label className={"text-white text-2xl "}>{weatherData?.current?.time?getDayName(weatherData.current.time):'empty'}</Label>
            </div>
            <Separator className={'m-5 mx-auto'} style={{width:'80%'}} />
            <div className={"flex flex-col gap-2 items-start w-[80%] mt-10"}>
                <div className={"flex gap-2 w-full"}>
                    <img src={cloudrainsmall} alt={"cloudrainsmall"}  className="w-4 h-4 shrink-0"/>
                    <Label className={"text-white"}>{weatherData?.current?.weather_code?getWeatherDescription(weatherData.current.weather_code):"loading..."}</Label>
                </div>
                <div className={"flex gap-2"}>
                    <img src={mintemp} alt={"mintemp"} className="w-4 h-4 shrink-0"/>
                    <Label className={"text-white"}>Min temperature</Label>
                    <Label className={"text-white"}>{weatherData?.daily?.temperature_2m_min[0]}</Label>
                </div>
                <div className={"flex gap-2"}>
                    <img src={maxtemp} alt={"maxtemp"} className="w-4 h-4 shrink-0"/>
                    <Label className={"text-white"}>Max temperature</Label>
                    <Label className={"text-white"}>{weatherData?.daily?.temperature_2m_max[0]}</Label>
                </div>
            </div>
            <div className={"w-fit flex bg-[#252222] rounded-md mt-15 shadow-lg shadow-black/60"}>
                <div className={"flex justify-center m-2"}>
                    <img src={water} alt={"water"} className="w-10 h-10 shrink-0"/>
                    <div className={"flex flex-col pl-2"}>
                        <Label className={"text-white pt-1"}>{weatherData?.current?.relative_humidity_2m}%</Label>
                        <Label className={"text-white pt-1"}>Humidity</Label>
                    </div>
                    <img src={stroke} alt={"stroke"} className={"w-10 h-10 shrink-0 ml-2"}/>
                    <div className={"flex flex-col pl-2"}>
                        <Label className={"text-white pt-1"}>{weatherData?.current?.wind_speed_10m}km/h</Label>
                        <Label className={"text-white pt-1"}>Wind Speed</Label>
                    </div>
                </div>
            </div>
        </div>
    )
}