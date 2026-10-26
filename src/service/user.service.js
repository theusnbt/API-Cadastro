import repository from '../repository/user.repository.js'
import bcrypt from 'bcrypt';

class UserService{
    async create(data){
        const exists = await repository.findByEmail(data.email);
        if(exists)
            throw new Error('Usuário existente')
        
        const hash = await bcrypt.hash(data.password, 10);

        const user = await repository.create({ ...data, password:hash });
        return user;
    }
    async findById(id){
        const user = await repository.findById(id);
        if(!user){
            throw new Error('Usuário não encontrado.');
        }

        return user;
    }
    async findAll(){
        return repository.findAll();
    }
}

export default new UserService;