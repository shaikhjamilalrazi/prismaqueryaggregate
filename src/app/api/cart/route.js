import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//insert data
export async function POST(req, res) {
    // function is for inserting bigint data without error otherwise it will throw error
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        let reqBody = await req.json();
        const result = await prisma.cart.create({
            data: reqBody,
        });
        return NextResponse.json({ msg: "success", data: result });
    } catch (error) {
        return NextResponse.json({ msg: "fail", data: error.toString() });
    }
}

// GET ALL data desc order
export async function GET() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const result = await prisma.cart.findMany({
            orderBy: {
                id: "desc",
            },
        });
        return NextResponse.json({ msg: "success", data: result });
    } catch (error) {
        return NextResponse.json({ msg: "fail", data: error.toString() });
    }
}

//UPDATE data
export async function PATCH() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const result = await prisma.cart.update({
            where: {
                id: 5,
            },
            data: {
                title: "New title",
                email: "shaikhjamilrazi@gmail.com",
            },
        });
        return NextResponse.json({ msg: "success", data: result });
    } catch (error) {
        return NextResponse.json({ msg: "fail", data: error.toString() });
    }
}

// DELETE data
export async function DELETE() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const result = await prisma.cart.delete({
            where: {
                id: 1,
            },
        });
        return NextResponse.json({ msg: "success", data: result });
    } catch (error) {
        return NextResponse.json({ msg: "fail", data: error.toString() });
    }
}
