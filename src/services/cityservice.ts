export interface CityService {
    id:number;
    name: string;
    country: string;
    region?: string;
    lat: number;
    lon: number;
}

const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";


export const searchCity=async (query:string):Promise<CityService[]>=>{
    if (!query || query.length<2) {
        return [];
    }
    try {
        const url=`${BASE_URL}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(res.statusText);
        }
        const data=await res.json();
        if(!data.results){
            return [];
        }
        const cleanList:CityService[]=data.results.map((item:any)=>({
            id:item.id,
            name: item.name,
            country: item.country,
            region: item.admin1,
            lat: item.latitude,
            lon: item.longitude,
        }));
        return cleanList;
    }catch(err){
        console.error(err);
        return [];
    }
}