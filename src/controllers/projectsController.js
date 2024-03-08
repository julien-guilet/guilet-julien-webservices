import ProjectsService from '#src/services/projectsService'
import {redisClient,get, del, scanAndDelete} from '#src/services/redisClient';

const exposeController = {

    allProjects:async (req,res)=>{
        const {query} = req

        // Mise en cache si la même requête est déjà passée
        const cachedProjects = await get('projects'+JSON.stringify(query))
        if(cachedProjects){
            return res.json(JSON.parse(cachedProjects))
        }
        const allProjects = await ProjectsService.findAllProjects(query)
        await redisClient.set('projects'+JSON.stringify(query),JSON.stringify(allProjects))
        return res.json(allProjects)
    },
    createProject:async (req,res)=>{
        const {body}  = req

        // Ici je voulais supprimer toutes les clés redis commençant par projects seulement je n'ai pas terminé :(
        //await del()

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