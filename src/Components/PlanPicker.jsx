import { useState } from "react";
import Summary from "./Summary";
import PlanCard from "./PlanCard";
import Controls from "./Controls";
function PlanPicker(){
    const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }
    return (
        <div>
       <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
        
        <Summary seats={seats} months={months}customer ="Lawrence Isaac R. Lapig"/>
        <Controls handleAddSeat={handleAddSeat} handleAddMonth={handleAddMonth} handleReset={handleReset}/>
        </div>
        <main className="grid grid-cols-3 gap-8 px-20 pt-10">
        <PlanCard name="Starter" price= {199} storage= {10} support="Email support" seats={seats} months={months}/>
        <PlanCard name="Team" price= {499} storage= {100} support="Chat support" seats={seats} months={months}/>
        <PlanCard name="Business" price= {999} storage= {1000} support="Phone support" seats={seats} months={months}/>
        
      </main>
      </div>
    )
}

export default PlanPicker;