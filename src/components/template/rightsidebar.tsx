import {Label} from "@/components/ui/label.tsx";
import windySunny from '@/assets/windy-sunny.svg';
import sun from '@/assets/sun.svg';
import cloudy from '@/assets/cloudy.svg';
import cloudysunyrainny from '@/assets/cloudysunyrainny.svg';
import rain from '@/assets/rain.svg';
import Snowfall from 'react-snowfall';


export default function Rightsidebar(){
 return (
     <div className={"flex flex-col pl-2"}>
         <Snowfall color="#dee4fd" wind={[2,1]} />
        <div className={"flex items-start ml-5 p-2"}>
            <Label className={"text-white text-2xl underline decoration-white decoration-2 underline-offset-4 [text-decoration-style:wavy] tracking-widest pt-1"}>Week</Label>
        </div>
         <div className={"mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-7 place-items-center"}>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                    <Label className={"text-white text-xl"}>Sun</Label>
                    <img src={windySunny} alt={"windy-sunny"} className="w-20 h-20 shrink-0 mt-2"/>
                 <Label className={"text-white text-4xl font-bold mt-2"}>30
                     <sup className="text-xl font-bold">°C</sup>
                 </Label>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>Mon</Label>
                 <img src={sun} alt={"sun"} className="w-20 h-20 shrink-0 mt-2"/>
                 <Label className={"text-white text-4xl font-bold mt-2"}>30
                     <sup className="text-xl font-bold">°C</sup>
                 </Label>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>Tue</Label>
                 <img src={cloudy} alt={"cloudy"} className="w-20 h-20 shrink-0 mt-2"/>
                 <Label className={"text-white text-4xl font-bold mt-2"}>30
                     <sup className="text-xl font-bold">°C</sup>
                 </Label>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>Wed</Label>
                 <img src={cloudysunyrainny} alt={"cloudysunyrainny"} className="w-20 h-20 shrink-0 mt-2"/>
                 <Label className={"text-white text-4xl font-bold mt-2"}>30
                     <sup className="text-xl font-bold">°C</sup>
                 </Label>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>Thu</Label>
                 <img src={rain} alt={"rain"} className="w-20 h-20 shrink-0 mt-2"/>
                 <Label className={"text-white text-4xl font-bold mt-2"}>30
                     <sup className="text-xl font-bold">°C</sup>
                 </Label>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>Fri</Label>
                 <img src={rain} alt={"rain"} className="w-20 h-20 shrink-0 mt-2"/>
                 <Label className={"text-white text-4xl font-bold mt-2"}>30
                     <sup className="text-xl font-bold">°C</sup>
                 </Label>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>Sat</Label>
                 <img src={cloudysunyrainny} alt={"cloudysunyrainny"} className="w-20 h-20 shrink-0 mt-2"/>
                 <Label className={"text-white text-4xl font-bold mt-2"}>30
                     <sup className="text-xl font-bold">°C</sup>
                 </Label>
             </div>

         </div>
     </div>
 )
}