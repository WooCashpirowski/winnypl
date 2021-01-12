import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "cashpirowski@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Kos Mateusz",
    email: "kos@mateusz.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tyka Roman",
    email: "tyka@roman.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
