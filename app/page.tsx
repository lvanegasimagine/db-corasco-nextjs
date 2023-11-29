'use client'
import ButtonPost from '@/components/ButtonPost'
import { db } from '@/lib/prisma'
import { useEffect, useState } from 'react';

export default function Home() {

  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    loadNotes()
  }, [])
  
  async function loadNotes() {
    const res = await fetch("/api/chapter");
    const data = await res.json();
    setNotes(data);
  }

  console.log(notes)
  
  return (
    <main className="flex h-screen items-center justify-center flex-col gap-y-5">
      {notes.map((data: any) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
          <span>{data.description}</span>
        </div>
      ))}
      <ButtonPost />
    </main>
  )
}
