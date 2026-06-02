import { NextResponse } from "next/server";
export async function POST(request) {
    let data = await request.json()
   
  if(data.Liters < 4 || data.Diet == "Cheat"){
    return NextResponse.json({Failure : "Failure ,Restart from day one"},{status : 400})

  }
  else {
    return NextResponse.json({Rezult :  "Day survived ,Great job" },{status :200})
  }
    
}