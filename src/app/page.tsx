import Link from "next/link"


const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Meeting Scheduler</h1>
      <Link 
      href={"/schedule"}
      className="mt-5 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >Scheduler Meeting</Link>
    </div>
  )
}

export default Home