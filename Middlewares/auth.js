const jwt = require("jsonwebtoken")

const isAuthenticatedUser = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "please login"
            })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next()
    } catch (error) {
        console.log(error);
    }

}

module.exports = isAuthenticatedUser