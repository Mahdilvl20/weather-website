
import './App.css'
import {Card} from "@/components/ui/card.tsx";
import Leftsidebar from "./components/template/leftsidebar.tsx";
import Rightsidebar from "@/components/template/rightsidebar.tsx";
import {useState} from "react";
function App() {
    const [whatherData, setWhatherData] = useState<any>(null);
    const handleCitySelectFromSidebar=async (cityInfo:{name:string,lat:number,lon:number})=> {
        console.log("city: ",cityInfo);
        try {
            const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityInfo.lat}&longitude=${cityInfo.lon}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,pressure_msl,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto`)
            const data=await res.json()

            setWhatherData(data);
            console.log("data:",data);
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
                <Rightsidebar/>
          </Card>
      </div>
       )
}

export default App
