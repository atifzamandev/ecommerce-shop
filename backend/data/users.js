import bcrypt from 'bcrypt'

const user = [
  {
    name: 'Admin Atif',
    email: 'adminatif@example.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: true,
  },
  {
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
  {
    name: 'Sara Lee',
    email: 'saralee@example.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
  {
    name: 'Mike Jones',
    email: 'mikejones@example.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
]

export default user
