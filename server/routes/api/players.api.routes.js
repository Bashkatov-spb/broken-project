const router = require('express').Router();
const { Player } = require('../../db/models');

router.get('/', async (req, res) => {
  const players = await Player.findAll();
  res.json(players);
});

router.delete('/:idPlayer', async (req, res) => {
  try {
    const result = await Player.destroy({ where: { id: req.params.idPlayer } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'falsefikaciya' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  const { name, email, avatar, password, age } = req.body;
  const player = await Player.create({ name, email, avatar, password, age });
  res.json(player);
});

module.exports = router;
