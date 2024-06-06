import icon from '../public/icon-arrow.svg'
import { Card } from './components/ResultCard'

export function App() {
  const ip = '192.212.174.101'
  const location = 'Brooklyn, NY 10001'
  const timezone = 'UTC -05:00'
  const isp = 'SpaceX Starlink'

  return (
    <div className="flex flex-col items-center  bg-[url('/bg-desk.png')] bg-no-repeat bg-cover relative">
      <header className="flex flex-col items-center gap-5 pt-8">
        <h1 className="uppercase text-white font-bold font-rubik text-3xl">
          ip adress tracker
        </h1>

        <form className="flex w-full justify-center">
          <input
            className="border-none rounded-md rounded-e-none p-4 outline-none w-[30rem]"
            type="text"
            placeholder="Search for any IP address or domain"
            required
          />
          <button
            type="submit"
            className="bg-black rounded-md rounded-s-none p-4"
          >
            <img className="" src={icon} alt="" />
          </button>
        </form>
      </header>

      <main>
        <Card ip={ip} isp={isp} location={location} timezone={timezone} />
      </main>
    </div>
  )
}
