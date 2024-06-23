import axios from 'axios'

const API_KEY = '' 

const api = axios.create({
  baseURL: 'https://geo.ipify.org/api/v1',
  params: {
    apiKey: API_KEY,
  },
})

interface GeoData {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
    geonameId: number
  }
  domains: string[]
  as: {
    asn: number
    name: string
    route: string
    domain: string
    type: string
  }
  isp: string
}

export async function getGeoData(ipAddress: string): Promise<GeoData> {
  try {
    const response = await api.get('/', {
      params: { ipAddress },
    })
    return response.data as GeoData
  } catch (error) {
    console.error('Erro ao obter dados de geolocalização:', error)
    throw error
  }
}
