import { useEffect, useState } from 'react'

export default function BackgroundFX() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.6)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Gradient mesh blobs */}
      <div className="absolute -top-40 -left-40 size-[480px] rounded-full blur-3xl bg-[radial-gradient(circle_at_30%_30%,#60a5fa,transparent_60%),radial-gradient(circle_at_70%_60%,#a78bfa,transparent_60%),radial-gradient(circle_at_40%_80%,#22d3ee,transparent_60%)] animate-blob" />
      <div className="absolute top-1/3 -right-32 size-[420px] rounded-full blur-3xl bg-[radial-gradient(circle_at_30%_30%,#34d399,transparent_60%),radial-gradient(circle_at_70%_60%,#60a5fa,transparent_60%),radial-gradient(circle_at_40%_80%,#f472b6,transparent_60%)] animate-blob animation-delay-2000" />

      {/* Aurora ribbons */}
      <div className="absolute inset-x-0 top-20 h-64 overflow-hidden">
        <div className="absolute -inset-x-10 -top-24 h-[400px] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee_0deg,#a78bfa_120deg,#60a5fa_240deg,#22d3ee_360deg)] opacity-30 blur-3xl animate-aurora" />
      </div>

      {/* Noise overlay for texture */}
      {mounted && (
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSduJyB4PScwJyB5PScwJz48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9JzAnIG51bU9jdGF2ZXM9JzcgJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PScwLjknPjwvcmVjdD48L3N2Zz4=')" }} />
      )}
    </div>
  )
}
