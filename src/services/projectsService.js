import Project  from "#src/models/Projects";
import {parseSortCriteria} from "#src/utils/parseQuery";



const exposeServices = {

    findAllProjects: async (query)=>{
        
        // Console log afin de vérifier sur le service est appelé ou si c'est le cache qui à répondu à la requête
        console.log("Pas de cache, appel du service")
        try {
            var limitRequest = query.limit
            delete query.limit
            const   allProjects = await Project .find()
                                                .sort(parseSortCriteria(query)) 
                                                .limit(limitRequest);
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