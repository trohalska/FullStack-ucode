module.exports = class LogoutController {

    static post = async (req, res) => {
        req.session.authUser = null;
        res.redirect('/login');
    }

}