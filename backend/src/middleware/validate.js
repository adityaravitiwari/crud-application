const validateTodo = (req, res, next) => {
  const { title, poetry, poet } = req.body;

  if (!title || !poetry || !poet) {
    return res.status(400).json({
      success: false,
      message: "All three fields are required"
    });
  }

  next();
};

module.exports = validateTodo;
