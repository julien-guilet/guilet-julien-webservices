import capacibilitiesService from '#src/services/capacibilitiesService'


const exposeController = {

    allCapacibilities:async (req,res)=>{
        const allCapacibilities = await capacibilitiesService.findAllCapacibilities()
        return res.json(allCapacibilities)
    },
    addCapacibilities:async (req,res)=>{
        const {body}  = req
        try {
                const registeredCapacibilities = await capacibilitiesService.addCapacibilities(body)     
                return res.json(registeredCapacibilities)
            } catch (error) {
               return res.sendStatus(400)
        }
        
    },
    updateCapacibilities:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               const toUpdate = await capacibilitiesService.updateCapacibilities({id,body})     
               return res.json(toUpdate)
            } catch (error) {
               return res.sendStatus(400)
        }
        
    },
    deleteCapacibilities:async (req,res)=>{
        const {id}    = req.params
        try {
               const toDelete = await capacibilitiesService.deleteCapacibilities(id)     
               return res.json(toDelete)
            } catch (error) {
               return res.sendStatus(400)
        }
        
    },

}

export default exposeController