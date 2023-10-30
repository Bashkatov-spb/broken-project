const router = require('express').Router();

const gamesApiRouter = require('./api/games.api.routes');
const favoritesApiRouter = require('./api/favorites.api.routes');
const authApiRouter = require('./api/auth.api.routes');
const playersApiRouter = require('./api/players.api.routes');

router.use('/api/games', gamesApiRouter);
router.use('/api/favorites', favoritesApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/players', playersApiRouter);

module.exports = router;
