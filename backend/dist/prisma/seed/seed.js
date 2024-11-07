"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const user1 = await prisma.user.create({
        data: {
            name: "Admin User",
            email: "admin@example.com",
            password: "securepassword",
            username: "admin_user",
            isActive: true,
        },
    });
    const user2 = await prisma.user.create({
        data: {
            name: "Regular User",
            email: "user@example.com",
            password: "securepassword",
            username: "regular_user",
            isActive: true,
        },
    });
    const company = await prisma.company.create({
        data: {
            name: "Example Company",
            cnpj: "00.000.000/0000-00",
            collaborators: {
                create: [
                    {
                        userId: user1.id,
                        isAdmin: true,
                    },
                    {
                        userId: user2.id,
                        isAdmin: false,
                    },
                ],
            },
        },
    });
    await prisma.post.create({
        data: {
            postId: "n2d12",
            companyId: company.id,
            network: "Instagram",
            postUrl: "https://instagram.com/example-post",
            content: "Hello World!",
            isActive: true,
        },
    });
    console.log({ user1, user2, company });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map