const loginController = (req, res) => {
  const { body: { email, password }, headers } = req;
  console.log(req.body);
  const db = {
    email: "email@gmail.com",
    password: "12345"
  }

  if (email === db.email && password === db.password) {
    res.status(200).json({ token: headers.authorization })
  } else {
    res.status(400).json({ message: "Bad Request" })
  }
}

module.exports = loginController;