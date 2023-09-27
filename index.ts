import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ** View all users **
  //   const allUsers = await prisma.user.findMany();
  //   console.log(allUsers);

  
  //   ** Create a new user **
  // const user = await prisma.user.create({
  //   data: {
  //     firstName: "Sarthak",
  //     lastName: "Jadhav",
  //     password: "jadhavsarthak",
  //     email: "jadhavsarthak@gmail.com",
  //   },
  // });
  // console.log("user", user);

  
  // ** Create multiple users **
  //   const users = await prisma.user.createMany({
  //     data: [
  //       {
  //         firstName: "Vishal",
  //         lastName: "Shinde",
  //         password: "shinde",
  //         email: "shindevishal@gmail.com",
  //       },
  //       {
  //         firstName: "Anuj",
  //         lastName: "Daspute",
  //         password: "daspute",
  //         email: "dasputeanuj@gmail.com",
  //       },
  //     ],
  //   });
  //   console.log("users", users);

  
  //   ** Update a current user **
  //   const updateUser = await prisma.user.update({
  //     where: {
  //       email: "rautpratham@gmail.com",
  //     },
  //     data: {
  //       firstName: "Pratham",
  //     },
  //   });
  //   console.log("updateUser", updateUser);

  
  // ** Delete a existing user **
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       email: "jadhavsarthak@gmail.com",
  //     },
  //   });
  //   console.log('deleteUser', deleteUser)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
