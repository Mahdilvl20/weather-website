
import './App.css'
import {Card} from "@/components/ui/card.tsx";
import Leftsidebar from "./components/template/leftsidebar.tsx";
import Rightsidebar from "@/components/template/rightsidebar.tsx";
import {useState} from "react";
function App() {
    const [whatherData, setWhatherData] = useState<any>(null);
    const handleCitySelectFromSidebar=async (cityInfo:{name:string,lat:number,lon:number})=> {
        try {
            const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityInfo.lat}&longitude=${cityInfo.lon}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,pressure_msl,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=temperature_2m,precipitation_probability&timezone=auto`)
            const data=await res.json()
            const airRes= await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${cityInfo.lat}&longitude=${cityInfo.lon}&current=us_aqi`)
            const airData= await airRes.json()
            const finalData={...data,air_quality:airData.current.us_aqi};
            setWhatherData(finalData);
        }catch(err){
            console.log("error to receive: ",err);
        }
    }

  return (
      <div className="flex flex-col md:flex-row gap-3 p-1">

      <Card className="bg-[#303236] border-[#303236] md:w-170 w-full flex items-center justify-center">
          <Leftsidebar onCitySelected={handleCitySelectFromSidebar} weatherData={whatherData} />
      </Card>
          <Card className="bg-[#303236] border-[#303236] md:w-full w-full ">
                <Rightsidebar weatherData={whatherData} />
          </Card>
      </div>
       )
}

export default App
