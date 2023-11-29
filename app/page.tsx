import ButtonPost from '@/components/ButtonPost'
import prisma from '@/lib/prisma'

async function getData() {
  const departament = await prisma.chapter.findMany()

  if(!departament) throw new Error('No hay departamento')

  return departament
}

export default async function Home() {
  
  const data = await getData()
  console.log("🚀 ~ file: page.tsx:16 ~ Home ~ data:", data)
  
  return (
    <main className="flex h-screen items-center justify-center flex-col gap-y-5">
      {data.map((data) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
          <span>{data.description}</span>
        </div>
      ))}
      <ButtonPost/>
    </main>
  )
}
