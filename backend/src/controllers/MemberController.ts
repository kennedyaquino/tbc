import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default {

    async create(req: Request, res: Response) {
        const { name, birthday, numberphone, street, district, city, state } = req.body

        const date = new Date(birthday)

        const member = await prisma.member.create({
            data: {
                name,
                birthday: date,
                numberphone,
                street,
                district,
                city,
                state   
            }
        })

        return res.status(201).json(member)
    },

    async findById(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        
        const member = await prisma.member.findUnique({
            where: {
                id
            }
        })

        if(member == null) {
            return res.status(404).json({ error: `Not found id: ${id}`})
        } else {
            return res.json(member)
        }
        
    },

    async findAll(req: Request, res: Response) {
        const members = await prisma.member.findMany()

        return res.json(members)
    },

    

    async findAllByName(req: Request, res: Response) {
        const name = req.params.name

        const members = await prisma.member.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })

        return res.json(members)
    },

    async deleteById(req: Request, res: Response) {
        const id = parseInt(req.params.id)

        try {
            await prisma.member.delete({
                where: {
                    id
                }
            })

            return res.status(200).json()
        } catch (err) {
            return res.status(404).json({ error: `Not found id: ${id}`})
        }
    }
}