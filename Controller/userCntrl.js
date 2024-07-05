const prisma = require("../src/connection");

module.exports.createUser = async function (req, res) {
  const { email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(200).json({ message: "You are already registered", user: existingUser });
    }

    // Create a new user if the email does not exist
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
