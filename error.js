module.exports = {
  UnauthorizedError: () => 'You must be logged in to perform this action',
  UserDoesNotExistError: (name) => `User ${name} does not exist`,
  UserTakenError: (name) => `User ${name} is already taken.`,
  PasswordTooShortError: () => `Password Too Short!`,
};

// REVISION AND ADD-ONS REQUIRED

// clear
