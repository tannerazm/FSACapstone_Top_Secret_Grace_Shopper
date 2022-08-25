function requireUser(req, res, next) {
  const user = localStorage.getItem('username')
  if (!user) {
    res.status(401);
    next({
      error: 'MissingUserError',
      name: 'MissingUserError',
      message: 'You must be logged in to perform this action',
    });
  }
  next();
}

function requireAdmin(req, res, next) {
  const admin = localStorage.getItem('admin')
  if(!admin) {
    res.status(401);
    next ({
      error: "MissingAdminError",
      name: 'MissingAdminError',
      message: "You must be an admin to perform this action",
    })
  }
  next();
}

module.exports = {
  requireUser,
  requireAdmin
};

