import usersService from '#src/services/usersService'
import capacibilitiesService  from "#src/services/capacibilitiesService";

const exposeController = {

    allUsers:async (req,res)=>{
        const {query} = req
        const allUsers = await usersService.findAllUsers(query)
        return res.json(allUsers)
    },
    createUser:async (req,res)=>{
        const {body}  = req
        console.log(req.body)
        
        // Si dessous je suis cencé vérifier que toutes les capacibilités existent mais cela n'est pas fonctionnel
        var allCapacibilitiesExists = true;

    
        body.capacibilities.forEach( capacibility => {            
            if (capacibilitiesService.findCapacibilities(capacibility) == null) allCapacibilitiesExists = false

        });
        console.log(allCapacibilitiesExists)
        if (allCapacibilitiesExists == true) {
            try {
                const registeredUser = await usersService.createUser(body)     
                return res.json(registeredUser)
            } catch (error) {
               return res.sendStatus(400)

            }
        } else {
            return res.sendStatus(404)
        }
        
        
    },
    updateUser:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toUpdate = await usersService.updateUser({id,body})     
                
                return res.json(toUpdate)
            } catch (error) {
               return res.sendStatus(400)

        }
        
    },

    deleteUser:async (req,res)=>{
        const {id}    = req.params
        try {
               
                const toDelete = await usersService.deleteUser(id)     
                
                return res.json(toDelete)
            } catch (error) {
               return res.sendStatus(400)

        }
        
    }

}

export default exposeController