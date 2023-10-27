import express from "express";
import { getUsers, Register, Login, Logout} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { createReservation } from "../controllers/reservasiControllers.js";
import { deleteReservation } from "../controllers/reservasiControllers.js";
import { adminRegister } from "../controllers/adminCotroller.js";

const router = express.Router();

router.get('/users',verifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.post('/reservation', createReservation);
router.delete('/reservation/:id', deleteReservation);
router.post('/adminRegister', adminRegister);

export default router;
