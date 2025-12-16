
import './App.css'
import {Card} from "@/components/ui/card.tsx";
import Leftsidebar from "./components/template/leftsidebar.tsx";
function App() {

  return (
      <div className="flex flex-col md:flex-row gap-3">
      <Card className="bg-[#303236] border-[#303236] md:w-170 w-full flex items-center justify-center">
          <Leftsidebar />
      </Card>
          <Card className="bg-[#303236] border-[#303236] md:w-full w-full ">

          </Card>
      </div>
       )
}

export default App
