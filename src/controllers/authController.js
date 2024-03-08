import authService  from '#src/services/authService'
import usersService from '#src/services/usersService'
import {signJwt,verifyJwt}    from '#src/utils/jwtoken'

const exposeController = {

    login:async (req,res)=>{
        const {body} = req
        const user = await usersService.findOneUserByEmail(body)
        
        if(!user) return res.sendStatus(401)
        const comparePwd = await authService.comparePassword({password:body.password,storedPassword:user.password})
        const tokenPayload = {
            id:user._id,
            lastName:user.lastName,
            firstName:user.firstName,
            email:user.email
        }
        if(comparePwd){ 
            const token         = signJwt({payload:tokenPayload,expiresIn:'1d'}) 
            const refreshToken  = signJwt({payload:tokenPayload,expiresIn:'7d'}) 
            const accessToken   = {access_token:token,token_type:'Bearer'}
            return res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' }).json(accessToken) 
        }
        return res.sendStatus(401)
    },

}

export default exposeController