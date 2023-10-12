const errorHandler = (err, req, res, next) => {
  const { message, stack } = err;
  const statusCode = res.statusCode || 500;

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "development" ? stack : null,
  });
};

module.exports = {
  errorHandler,
};
