import DottedMap from 'dotted-map'
import { writeFileSync, mkdirSync } from 'node:fs'
const map = new DottedMap({ height: 100, grid: 'diagonal' })
mkdirSync('public/images', { recursive: true })
writeFileSync('public/images/world-map.svg', map.getSVG({ radius: 0.2, color: '#c7d7e6', shape: 'circle', backgroundColor: 'transparent' }))
const locations = [
  { label: 'India', lat: 26.14, lng: 91.74 },
  { label: 'North America', lat: 40.71, lng: -74 },
  { label: 'Europe', lat: 51.5, lng: -0.12 },
  { label: 'Africa', lat: -1.29, lng: 36.82 },
  { label: 'East Asia', lat: 35.68, lng: 139.69 },
  { label: 'South America', lat: -23.55, lng: -46.63 },
  { label: 'Australia', lat: -33.87, lng: 151.21 },
].map(location => ({ label: location.label, ...map.getPin(location) }))
writeFileSync('lib/world-map.json', JSON.stringify({ width: map.image.width, height: map.image.height, locations }, null, 2))
