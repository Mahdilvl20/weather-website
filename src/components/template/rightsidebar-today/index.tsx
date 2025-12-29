import {Label} from "@/components/ui/label.tsx";
import airquality from '@/assets/air-pollution.svg';
import uv from '@/assets/uv.svg';
import barometer from '@/assets/barometer.svg';

export default function Today() {
    return(
       <div className={"mt-10 grid grid-cols-2 sm:grid-cols-2 gap-7 md:grid-cols-3 place-items-center"}>
           <div className={"flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 gap-3 w-full max-w-[420px]"}>
               <Label className={"text-white text-xl"}>Air Quality Index</Label>
               <Label className={"text-white text-5xl mt-10"}>53</Label>
               <div className={"flex mt-5 justify-between"}>
                   <Label className={"text-green-500 text-2xl "}>Good</Label>
                   <img src={airquality} alt="Air Quality Index" className={"w-20 h-20 shrink-0"}/>
               </div>
           </div>
           <div className={"flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 gap-3 w-full max-w-[420px]"}>
               <Label className={"text-white text-xl"}>UV index</Label>
               <Label className={"text-white text-5xl mt-10"}>3</Label>
               <div className={"flex mt-5 justify-between"}>
                   <Label className={"text-yellow-400 text-2xl "}>Moderate</Label>
                   <img src={uv} alt="uv" className={"w-20 h-20 shrink-0"}/>
               </div>
           </div>
           <div className={"flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 gap-3 w-full max-w-[420px]"}>
               <Label className={"text-white text-xl"}>Pressure (hpa)</Label>
               <Label className={"text-white text-5xl mt-10"}>1006</Label>
               <div className={"flex mt-5 justify-between"}>
                   <Label className={"text-white text-2xl "}>Normal</Label>
                   <img src={barometer} alt="barometer" className={"w-20 h-20 shrink-0"}/>
               </div>
           </div>
       </div>
    )
}