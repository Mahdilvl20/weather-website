import {Label} from "@/components/ui/label.tsx";
import DataChart from "@/components/template/rightsidebar-today/chart.tsx";
import sunrise from "@/assets/sunrise.svg";
import sundown from "@/assets/sundown.svg";
export default function Chart(){
    return (
        <div className="mt-10 ml-2 grid grid-cols-1 md:grid-cols-[1fr_2fr] md:ml-22 gap-2 items-stretch">
            <div className="p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 w-full max-w-[840px]  h-[220px]">
                <Label className={"text-white text-xl"}>Precipitation</Label>
                <DataChart/>
            </div>
            <div className="p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 md:ml-20 w-full max-w-[420px]  h-[220px]">
                <Label className={"text-white text-xl"}>Sunrise & Sunset</Label>
                <div className="flex mt-2">
                    <img src={sunrise} alt="Sunrise" className="w-15 h-15 shrink-0" />
                    <div className="flex flex-col items-start gap-2 ml-5">
                        <Label className={"text-[#6A6969] text-lg"}>Sunrise</Label>
                        <Label className={"text-white text-xl"}>7:06 AM</Label>
                    </div>
                </div>
                <div className="flex mt-5">
                <img src={sundown} alt="Sundown" className="w-15 h-15 shrink-0" />
                    <div className={"flex flex-col items-start gap-2 ml-5"}>
                        <Label className={"text-[#6A6969] text-lg"}>Sunset</Label>
                        <Label className={"text-white text-xl"}>7:03 PM</Label>
                    </div>
                </div>
            </div>

        </div>
    )
}