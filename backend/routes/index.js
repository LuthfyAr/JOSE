import express from "express";
import { getUsers, Register, Login, Logout} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { createReservation, getReservasi} from "../controllers/reservasiControllers.js";
import { deleteReservation } from "../controllers/reservasiControllers.js";
import { adminRegister } from "../controllers/adminCotroller.js";

const router = express.Router();

router.get('/users',verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/reservation/', getReservasi);
router.post('/reservation',createReservation);
router.delete('/reservation/:id', deleteReservation);
router.post('/adminRegister', adminRegister);

export default router;
