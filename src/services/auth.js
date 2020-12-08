module.exports = {
  auth: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          id: 1,
        };

        resolve(user);
      }, 300);
    });
  },
};
