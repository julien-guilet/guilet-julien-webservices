import ProjectsService from '#src/services/projectsService'
import capacibilitiesService  from "#src/services/capacibilitiesService";

const exposeController = {

    allProjects:async (req,res)=>{

        const allProjects = await ProjectsService.findAllProjects()
        return res.json(allProjects)
    },
    createProject:async (req,res)=>{
        const {body}  = req
        
        try {
            const registeredProject = await ProjectsService.createProject(body)     
            return res.json(registeredProject)
        } catch (error) {
            return res.sendStatus(400)

        }        
    },
    updateProject:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toUpdate = await ProjectsService.updateProject({id,body})     
                
                return res.json(toUpdate)
            } catch (error) {
               return res.sendStatus(400)

        }
        
    },

    deleteProject:async (req,res)=>{
        const {id}    = req.params
        try {
               
                const toDelete = await ProjectsService.deleteProject(id)     
                
                return res.json(toDelete)
            } catch (error) {
               return res.sendStatus(400)

        }
        
    }

}

export default exposeController