import project from "../models/projects.js"

export const getAllProjects = async(req,res) => {
    const data = await project.find();
    const newData = data.map(project => {
        return {
            id: project.id,
            title: project.title,
            description: project.description,
            category: project.category,
            status: project.status,
            statusImg: project.statusImg,
            built: project.built,
            picture: project.picture
        }
    })
    return res.json(newData);
}
