const UserRepository = require('../repository/userRepository')

module.exports = class HomeController {

    static get = async (req, res) => {
        const userRepo = new UserRepository()
        const ss = req.session

        let user = await userRepo.findByLogin(ss.authUser)
        await res.render('profile', user)

        // await res.render('profile', {
        //     errorMsg: req.session.errorMsg
        // })
    }

    static redirect = async (req, res, next) => {
        if (req.session.authUser) {
            res.redirect('/')
        } else {
            await next()
        }
    }
}