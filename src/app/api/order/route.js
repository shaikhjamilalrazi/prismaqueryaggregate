import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//INSERT data
export async function POST(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        let reqBody = await req.json();
        const result = await prisma.order.create({
            data: reqBody,
        });
        return NextResponse.json({ msg: "success", data: result });
    } catch (error) {
        return NextResponse.json({ msg: "fail", data: error.toString() });
    }
}

// try {
//     const prisma = new PrismaClient();
//     let reqBody = await req.json();
//     const result = await prisma.order.aggregate({
//         _avg: {
//             id: true,
//         },
//         _count: {
//             id: true,
//         },
//         _groupBy: {
//             title: true,
//         },
//         _max: {
//             grandTotal: true,
//         },
//         _sum: {
//             grandTotal: true,
//         },
//     });
//     return NextResponse.json({ msg: "success", data: result });
// } catch (error) {
//     return NextResponse.json({ msg: "fail", data: error.toString() });
// }

// VIEW data
export async function GET() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const result = await prisma.order.aggregate({
            _avg: {
                id: true,
            },
            _count: {
                id: true,
            },
            _groupBy: {
                title: true,
            },
            _max: {
                grandTotal: true,
            },
            _sum: {
                grandTotal: true,
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
        const result = await prisma.order.update({
            where: {
                id: 1,
            },
            data: {
                title: "It's new",
                firstName: "Sk.",
                middleName: "Jamil",
                lastName: "Razi",
                mobile: "00000000000",
                email: "shaikhjamil@gmail.com",
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
        const result = await prisma.order.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", data: result });
    } catch (error) {
        return NextResponse.json({ msg: "fail", data: error.toString() });
    }
}
