import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default {

    async create(req: Request, res: Response) {
        const { name, birthday, numberphone, street, district, city, state } = req.body

        const member = await prisma.member.create({
            data: {
                name,
                birthday,
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

        return res.json(member)
    },

    async findAll(req: Request, res: Response) {
        const listMember = await prisma.member.findMany()

        return res.json(listMember)
    },

    

    async findAllPerName(req: Request, res: Response) {
        const name = req.params.name

        const listMember = await prisma.member.findMany({
            where: {
                name
            }
        })
    }
}