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
}

export default new UserService;