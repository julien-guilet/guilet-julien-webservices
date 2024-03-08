import Capacibilities  from "#src/models/Capacibilities";

const exposeServices = {


    findAllCapacibilities: async ()=>{
        try {
            return await Capacibilities.find()
        } catch (error) {
            throw error
        }
    },
    addCapacibilities: async (rawData)=>{
        try {
            const   toSave  = new Capacibilities(rawData)
            const   newCapacibilities = toSave.save()   
            return  newCapacibilities
        } catch (error) {
            throw error
        }
    },
    findCapacibilities: async (id)=>{
        try {
            const res = await Capacibilities.findById(id)
            console.log(res)
            return res
        } catch (error) {
           
            throw new Error("Capacibility not found")
        }
    },
    updateCapacibilities: async ({id,body})=>{
        try {
            const   updatedCapacibilities  = await Capacibilities.findOneAndUpdate(
                {_id:id},
                body,
                {new:true}
            ) 
            return  updatedCapacibilities
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteCapacibilities: async (id)=>{
        try {
            const   deletedCapacibilities  = await Capacibilities.findOneAndDelete(
                {_id:id}
            ) 
            return  deletedCapacibilities
        } catch (error) {
            throw new Error(error)
        }
    },
}



export default exposeServices