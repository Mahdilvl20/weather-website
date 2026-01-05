import {Label} from "@/components/ui/label.tsx";
import sun from '@/assets/sun.svg';
import cloudysunyrainny from '@/assets/cloudysunyrainny.svg';
import rain from '@/assets/rain.svg';
import Today from "@/components/template/rightsidebar-today";
import Chart from "@/components/template/rightsidebar-today/index2.tsx";
////////icon/////////
import cloudy from "@/assets/cloudy.svg";
import heavyrain from '@/assets/rain.svg';
import lightRainDay from '@/assets/cloudysunyrainny.svg';
// import lightRainNight from '@/assets/lightRainNight.svg';
import clearDay from '@/assets/sun.svg';
// import clearNight from '@/assets/clearNight.svg';
// import windyDay from '@/assets/windy-sunny.svg';
// import windyNight from '@/assets/windyNight.svg';
import thunderstorm from '@/assets/Thunderstorm.svg';
//////////////////////////////////////////////////////
interface rightsideProps {
    weatherData?:any;
}
export default function Rightsidebar({weatherData}: rightsideProps){
    const getDayName = (dateString:any) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };
    const getWeatherIcon=(code:number) => {
        switch(code) {
            case 0: return clearDay
            case 1:
            case 2:
            case 3:
                return cloudy;
            case 45:
            case 48:
                return cloudy;
            case 51:
            case 53:
            case 55:
                return lightRainDay;
            case 61:
            case 63:
            case 65:
            case 80:
            case 81:
            case 82:
                return heavyrain;
            case 71: case 73: case 75: case 77:
            case 85: case 86:
                return heavyrain;
            case 95:
            case 96:
            case 99:
                return thunderstorm;
            default:
                return cloudy;
        }
    }
 return (
     <div className={"flex flex-col pl-2"}>
        <div className={"flex items-start ml-5 p-2"}>
            <Label className={"text-white text-2xl underline decoration-white decoration-2 underline-offset-4 [text-decoration-style:wavy] tracking-widest pt-1"}>Week</Label>
        </div>
         <div className={"mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 place-items-center"}>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                    <Label className={"text-white text-xl"}>{weatherData?.daily?.time[1]?getDayName(weatherData?.daily?.time[1]):'none'}</Label>
                    <img src={getWeatherIcon(weatherData?.daily?.weather_code[1])} alt={"weather"} className="w-20 h-20 shrink-0 mt-2"/>
                 <div className={"flex gap-2"}>
                 <Label className={"text-red-500 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_max[1]?weatherData?.daily?.temperature_2m_max[1]:"0"}
                     <sup className="font-bold">°C</sup>
                 </Label>
                     <Label className={"text-blue-400 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_min[1]?weatherData?.daily?.temperature_2m_min[1]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                 </div>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>{weatherData?.daily?.time[2]?getDayName(weatherData?.daily?.time[2]):'none'}</Label>
                 <img src={getWeatherIcon(weatherData?.daily?.weather_code[2])} alt={"weather"} className="w-20 h-20 shrink-0 mt-2"/>
                 <div className={"flex gap-2"}>
                     <Label className={"text-red-500 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_max[2]?weatherData?.daily?.temperature_2m_max[2]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                     <Label className={"text-blue-400 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_min[2]?weatherData?.daily?.temperature_2m_min[2]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                 </div>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>{weatherData?.daily?.time[3]?getDayName(weatherData?.daily?.time[3]):'none'}</Label>
                 <img src={getWeatherIcon(weatherData?.daily?.weather_code[3])} alt={"weather"} className="w-20 h-20 shrink-0 mt-2"/>
                 <div className={"flex gap-2"}>
                     <Label className={"text-red-500 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_max[3]?weatherData?.daily?.temperature_2m_max[3]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                     <Label className={"text-blue-400 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_min[3]?weatherData?.daily?.temperature_2m_min[3]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                 </div>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>{weatherData?.daily?.time[4]?getDayName(weatherData?.daily?.time[4]):'none'}</Label>
                 <img src={getWeatherIcon(weatherData?.daily?.weather_code[4])} alt={"weather"} className="w-20 h-20 shrink-0 mt-2"/>
                 <div className={"flex gap-2"}>
                     <Label className={"text-red-500 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_max[4]?weatherData?.daily?.temperature_2m_max[4]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                     <Label className={"text-blue-400 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_min[4]?weatherData?.daily?.temperature_2m_min[4]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                 </div>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>{weatherData?.daily?.time[5]?getDayName(weatherData?.daily?.time[5]):'none'}</Label>
                 <img src={getWeatherIcon(weatherData?.daily?.weather_code[5])} alt={"weather"} className="w-20 h-20 shrink-0 mt-2"/>
                 <div className={"flex gap-2"}>
                     <Label className={"text-red-500 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_max[5]?weatherData?.daily?.temperature_2m_max[5]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                     <Label className={"text-blue-400 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_min[5]?weatherData?.daily?.temperature_2m_min[5]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                 </div>
             </div>
             <div className={"flex flex-col p-5 bg-[#252222] rounded-xl shadow-lg shadow-black/60 items-center justify-center gap-3 w-full max-w-[140px]"}>
                 <Label className={"text-white text-xl"}>{weatherData?.daily?.time[6]?getDayName(weatherData?.daily?.time[6]):'none'}</Label>
                 <img src={getWeatherIcon(weatherData?.daily?.weather_code[6])} alt={"weather"} className="w-20 h-20 shrink-0 mt-2"/>
                 <div className={"flex gap-2"}>
                     <Label className={"text-red-500 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_max[6]?weatherData?.daily?.temperature_2m_max[6]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                     <Label className={"text-blue-400 text-xl font-bold mt-2"}>{weatherData?.daily?.temperature_2m_min[6]?weatherData?.daily?.temperature_2m_min[6]:"0"}
                         <sup className="font-bold">°C</sup>
                     </Label>
                 </div>
             </div>
         </div>
         <div className={"flex items-start ml-5 p-2 mt-5"}>
             <Label className={"text-white text-2xl decoration-white"}>Today’s Overview</Label>
         </div>
         <div>
                <Today weatherData={weatherData}/>
                <Chart weatherData={weatherData}/>
         </div>
     </div>
 )
}