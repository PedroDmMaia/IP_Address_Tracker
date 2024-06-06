import { useQuery } from '@tanstack/react-query'

import { getGeoData } from '../../lib/api'

interface geoDataProps {
  ipAddress: string
}

export function GeoDataComponents({ ipAddress }: geoDataProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['geoData', ipAddress],
    queryFn: () => getGeoData(ipAddress),
  })

  isLoading && <div>Loading...</div>
  error && <div>Error: {(error as Error).message}</div>

  return (
    <div>
      <h3>GeoData for {ipAddress}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
