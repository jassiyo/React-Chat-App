import jwt from 'jsonwebtoken';

const genrateTokenAndSetCookie = (userId, res) => {

    const token = jwt.sign(
        { userId: userId }, // Include userId in the payload
        process.env.jwt_secret,
        { expiresIn: "1d" }
    );


    res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
    });
};

export default genrateTokenAndSetCookie;
