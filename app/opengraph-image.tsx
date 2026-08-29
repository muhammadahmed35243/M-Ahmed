import { ImageResponse } from 'next/og'
import { profile } from '@/lib/data'

export const alt = `${profile.name} — ${profile.title}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#111111',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#fafafa',
            }}
          />
          <div style={{ fontSize: 28, color: '#a1a1a1' }}>
            {profile.location}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, marginTop: 28 }}>
          {profile.name}
        </div>

        <div style={{ display: 'flex', fontSize: 42, fontWeight: 700, marginTop: 16 }}>
          {profile.title}
        </div>

        <div style={{ display: 'flex', fontSize: 30, color: '#a1a1a1', marginTop: 24 }}>
          {profile.specialties.join('  •  ')}
        </div>
      </div>
    ),
    { ...size },
  )
}
