'use client'
import { useRouter } from 'next/navigation'
import React from 'react'



const ButtonPost = () => {

    const router = useRouter()
    async function crearData() {
        const data = {
            title: 'Hello World',
            description: 'This is my first post',
        }
        const response = await fetch('/api/chapter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        router.refresh()
    }

    return (
        <button type='button' onClick={crearData} className='border-2 rounded-lg shadow-md px-8 py-4'>Guardar</button>
    )
}

export default ButtonPost