import User  from "#src/models/Users";
import {parseSortCriteria} from "#src/utils/parseQuery";
import bcrypt from "bcryptjs"

const exposeServices = {


    findAllUsers: async (query)=>{
        try {
            var limitRequest = query.limit
            delete query.limit
            const   allUsers = await User   .find()
                                            .sort(parseSortCriteria(query)) 
                                            .limit(limitRequest)
                                            .populate('capacibilities')
            return  allUsers
        } catch (error) {
            throw error
        }
    },
    
    createUser: async (rawData)=>{

        const {password} = rawData
        const salt = bcrypt.genSaltSync(4);
        const hash = bcrypt.hashSync(password, salt);
        
        const newUserData = {
            ...rawData,
            password:hash
        }
        
        try {
            const toSave  = new User(newUserData)
            
            const   newUser = toSave.save()   
            return  newUser
        } catch (error) {
            throw error
        }
    },
    updateUser: async ({id,body})=>{
        try {
            const   updatedUser  = await User.findOneAndUpdate(
                {_id:id},
                body,
                {new:true}
            ) 
            return  updatedUser
        } catch (error) {
            throw new Error(error)
        }
    },

    deleteUser: async (id)=>{
        try {
            const   deletedUser  = await User.findOneAndDelete(
                {_id:id}
            ) 
            return  deletedUser
        } catch (error) {
            throw new Error(error)
        }
    },

}



export default exposeServices