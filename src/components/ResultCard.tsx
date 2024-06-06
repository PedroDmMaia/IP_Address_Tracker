interface CardProps {
  ip: string
  location: string
  timezone: string
  isp: string
}

export const Card = ({ ip, location, timezone, isp }: CardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto top-14 z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <h2 className="uppercase text-gray-400 text-xs font-bold tracking-wider">
            IP Address
          </h2>
          <p className="text-xl font-medium text-gray-800 mt-2">{ip}</p>
        </div>
        <div>
          <h2 className="uppercase text-gray-400 text-xs font-bold tracking-wider">
            Location
          </h2>
          <p className="text-xl font-medium text-gray-800 mt-2">{location}</p>
        </div>
        <div>
          <h2 className="uppercase text-gray-400 text-xs font-bold tracking-wider">
            Timezone
          </h2>
          <p className="text-xl font-medium text-gray-800 mt-2">{timezone}</p>
        </div>
        <div>
          <h2 className="uppercase text-gray-400 text-xs font-bold tracking-wider">
            ISP
          </h2>
          <p className="text-xl font-medium text-gray-800 mt-2">{isp}</p>
        </div>
      </div>
    </div>
  )
}
