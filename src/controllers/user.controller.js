import service from '../service/user.service.js'

class UserController{
    
    async create(req, res){
        try{
            const user = await service.create(req.body);
            res.status(201).json({message: "Usuário criado"});
        }
        catch(error){
            console.log(error);
            res.status(400).json({ message:error.message });
        }
    }
    async findById(req, res){
        try{
            const { id } = req.params;
            const user = await service.findById(id);
            return res.status(200).json(user);
        }
        catch(error){
            console.log(error);
            return res.status(404).json({ message: error.message });
        }
    }
    async readAll(req, res){
        try{
            const users = await service.findAll();
            return res.status(200).json(users);
        }   
        catch(error){
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }
}


export default new UserController;