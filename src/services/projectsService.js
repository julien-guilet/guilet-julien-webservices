import Project  from "#src/models/Projects";
import {parseSortCriteria} from "#src/utils/parseQuery";



const exposeServices = {

    findAllProjects: async (query)=>{
        
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