const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotRouter = require('./spots.js');
const reviewRouter = require('./reviews.js');
const bookingRouter = require('./bookings.js');
const spotimageRouter = require('./spot-images.js');
const reviewImageRouter = require('./review-images.js');



//You can use requireAuth as middleware for routes that require sign in
//You can use setTokenCookie as a func to set cookie for user

router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spot-images',spotimageRouter);
router.use('/review-images',reviewImageRouter);
router.use('/reviews',reviewRouter);
router.use('/bookings',bookingRouter);
router.use('/spots',spotRouter);


// Restore user
router.get('/restore-user', (req, res) => {
    return res.json(req.user);
});

module.exports = router;
