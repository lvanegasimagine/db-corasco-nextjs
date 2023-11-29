import ButtonPost from '@/components/ButtonPost'
import { db } from '@/lib/prisma'

async function getData() {
  const res = await fetch('/api/chapter')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const data = await db.chapter.findMany({})
  
  return (
    <main className="flex h-screen items-center justify-center flex-col gap-y-5">
      {data.map((data: any) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
          <span>{data.description}</span>
        </div>
      ))}
      <ButtonPost />
    </main>
  )
}
