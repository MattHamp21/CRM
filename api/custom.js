module.exports = (server) => {
  server.get('/collections/supportTeam/me', async (req, res) => {
    const { user } = req;

    if (!user) {
      res.status(401).send({ error: 'Unauthorized' });
      return;
    }

    res.send(user);
  });
};
