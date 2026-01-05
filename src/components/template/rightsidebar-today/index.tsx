import {Label} from "@/components/ui/label.tsx";
import airquality from '@/assets/air-pollution.svg';
import uv from '@/assets/uv.svg';
import barometer from '@/assets/barometer.svg';
interface index1Props {
    weatherData?:any;
}
export default function Today({weatherData}: index1Props) {
    const getAQIDescription = (aqi: number) => {
        if (aqi <= 50) return { text: "Good", color: "text-green-500" };
        if (aqi <= 100) return { text: "Moderate", color: "text-yellow-500" };
        if (aqi <= 150) return { text: "Unhealthy (Sensitive)", color: "text-orange-500" };
        if (aqi <= 200) return { text: "Unhealthy", color: "text-red-500" };
        if (aqi <= 300) return { text: "Very Unhealthy", color: "text-purple-500" };
        return { text: "Hazardous", color: "text-red-900" };
    };
    const getUVDescription = (uv: number) => {
        if (uv <= 2) return { text: "Low", color: "text-green-500" };
        if (uv <= 5) return { text: "Moderate", color: "text-yellow-500" };
        if (uv <= 7) return { text: "High", color: "text-orange-500" };
        if (uv <= 10) return { text: "Very High", color: "text-red-500" };
        return { text: "Extreme", color: "text-violet-500" };
    };
    const getPressureDescription = (pressure: number) => {
        if (pressure < 1000) return { text: "Low", color: "text-blue-400" };
        if (pressure >= 1000 && pressure <= 1015) return { text: "Normal", color: "text-green-400" };
        return { text: "High", color: "text-orange-400" };
    };
    const aqiInfo = getAQIDescription(weatherData?.air_quality || 0);
    const uvInfo = getUVDescription(weatherData?.current?.uv_index || 0);
    const pressureInfo = getPressureDescription(weatherData?.current?.pressure_msl);
    return(
       <div className={"mt-5 grid grid-cols-2 sm:grid-cols-2 gap-7 md:grid-cols-3 place-items-center"}>
           <div className={"flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 gap-3 w-full max-w-[420px]"}>
               <Label className={"text-white text-xl"}>Air Quality Index</Label>
               <Label className={"text-white text-5xl mt-5"}>{weatherData?.air_quality ? weatherData.air_quality : "0"}</Label>
               <div className={"flex mt-5 justify-between"}>
                   <Label className={`${aqiInfo.color} text-2xl `}>{aqiInfo?.text?aqiInfo.text:"none"}</Label>
                   <img src={airquality} alt="Air Quality Index" className={"w-20 h-20 shrink-0"}/>
               </div>
           </div>
           <div className={"flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 gap-3 w-full max-w-[420px]"}>
               <Label className={"text-white text-xl"}>UV index</Label>
               <Label className={"text-white text-5xl mt-5"}>{weatherData?.daily?.uv_index_max[0] ? weatherData.daily.uv_index_max[0] : "0"}</Label>
               <div className={"flex mt-5 justify-between"}>
                   <Label className={`${uvInfo.color} text-2xl `}>{uvInfo?.text}</Label>
                   <img src={uv} alt="uv" className={"w-20 h-20 shrink-0"}/>
               </div>
           </div>
           <div className={"flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 gap-3 w-full max-w-[420px]"}>
               <Label className={"text-white text-xl"}>Pressure (hpa)</Label>
               <Label className={"text-white text-5xl mt-5"}>{weatherData?.current?.pressure_msl ? weatherData.current.pressure_msl : "0"}</Label>
               <div className={"flex mt-5 justify-between"}>
                   <Label className={`${pressureInfo.color} text-2xl `}>{pressureInfo?.text}</Label>
                   <img src={barometer} alt="barometer" className={"w-20 h-20 shrink-0"}/>
               </div>
           </div>
       </div>
    )
}