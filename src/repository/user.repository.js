import mongoose from 'mongoose';
import userModel from '../models/user.model.js';

class UserRepository{
    async findByEmail(email){
        return userModel.findOne({ email });
    }
    async create(data){
        return userModel.create(data);
    }
}

export default new UserRepository();
