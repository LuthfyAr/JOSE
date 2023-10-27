import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const adminRegister = async (req, res) => {
    const { name, email, password, confPassword } = req.body;

    // Add validation logic for admin registration if needed

    if (password !== confPassword) {
        return res.status(400).json({ msg: "Password tidak cocok" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const admin = await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            role: 'admin' // Assign 'admin' role to the admin
        });
        res.json({ msg: "Admin registered successfully", admin });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "An error occurred while registering admin" });
    }
};
