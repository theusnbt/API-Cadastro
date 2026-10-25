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
}


export default new UserController;