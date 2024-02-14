import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { MemberDto } from "../dto/MemberDto";

const prisma = new PrismaClient()

export default {

    async create(req: Request, res: Response) {
        const { name, birthday, numberphone, street, district, city, state } = req.body

        const date = new Date(birthday)

        await prisma.member.create({
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

        return res.status(201).json()
    },

    async findById(req: Request, res: Response) {
        const id = parseInt(req.params.id)

        const member = await prisma.member.findUnique({
            where: {
                id
            }
        })

        if (member == null) {
            return res.status(404).json({ message: `Not found id: ${id}` })
        } else {
            return res.json(new MemberDto(member))
        }

    },

    async findAll(req: Request, res: Response) {
        const members = await prisma.member.findMany()

        const membersDto = members.map(member => new MemberDto(member))

        return res.json(membersDto)

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

        const membersDto = members.map(member => new MemberDto(member))

        return res.json(membersDto)
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
            return res.status(404).json({ message: `Not found id: ${id}` })
        }
    }
}