import project from "../models/projects.js"

export const getAllProjects = async(req,res) => {
    const data = await project.find();
    return res.json(data);
}
