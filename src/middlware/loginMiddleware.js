function authenticateToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token || token !== "12345") return response.status(401).json({ message: "error de autorização" });

  next();
}

module.exports = authenticateToken;
