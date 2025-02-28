'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <button type="button" onClick={() => router.push('/drops')}>
        Check drops
      </button>
    </div>
  )
}