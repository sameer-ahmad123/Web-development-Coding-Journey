import TaskCard from '@TaskCard.js'
const Page = () => {
  return (
    <div className="h-screen w-screen bg-slate-900 flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-extrabold text-white tracking-wider mb-2">
        75 HARD PROGRESS
      </h1>
      
      {/* Layout wrapper for our cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* We call the custom TaskCard tag and feed it custom props variables */}
        <TaskCard title="Water Intake" status="Completed" />
        <TaskCard title="Night Workout" status="Pending" />
        <TaskCard title="Reading 10 Pages" status="Completed" />
      </div>
    </div>
  )
}
export default Page