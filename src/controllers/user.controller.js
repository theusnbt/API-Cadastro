import service from '../service/user.service.js'

class UserController{
    
    async create(req, res){
        try{
            const user = await service.create(req.body);
            res.status(201).json({message: "Usuário criado"});
        }
        catch(error){
            res.status(500).json({message:"Internal Error"});
        }
    }
}


export default new UserController;