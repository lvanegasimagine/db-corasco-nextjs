import { db } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const chapter = db.chapter.findMany()

        if (!chapter) return NextResponse.json({ error: 'Chapter not found' }, { status: 404 })

        return NextResponse.json(chapter, { status: 200 })
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            throw new Error('Prisma Client Initialization Error')
        }
        return NextResponse.json(error, { status: 500 })
    }
}

export async function POST(request: Request) {
    const body = await request.json()

    try {
        const chapter = await db.chapter.create({
            data: body
        })

        return NextResponse.json(chapter, { status: 200 })
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            throw new Error('Prisma Client Initialization Error')
        }
        return NextResponse.json(error, { status: 500 })
    }
}