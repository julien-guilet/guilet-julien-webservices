import Project  from "#src/models/Projects";


const exposeServices = {
    findAllProjects: async ()=>{
        
        try {
            const   allProjects = await Project.find()
            return  allProjects
        } catch (error) {
            throw error
        }
    },
    createProject: async (rawData)=>{
        try {
            const toSave  = new Project(rawData)
            const   newProject = toSave.save()   
            return  newProject
        } catch (error) {
            throw error
        }
    },
    updateProject: async ({id,body})=>{
        try {
            const   updatedProject  = await Project.findOneAndUpdate(
                {_id:id},
                body,
                {new:true}
            ) 
            return  updatedProject
        } catch (error) {
            throw new Error(error)
        }
    },

    deleteProject: async (id)=>{
        try {
            const   deletedProject  = await Project.findOneAndDelete(
                {_id:id}
            ) 
            return  deletedProject
        } catch (error) {
            throw new Error(error)
        }
    },

}



export default exposeServices