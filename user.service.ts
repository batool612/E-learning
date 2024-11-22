import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async createUser(userData: Partial<User>): Promise<User> {
    // Hash password before saving
    if (userData.password) {
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(userData.password, salt);
      }
  
      const createdUser = new this.userModel(userData);
      return createdUser.save();
    }
  
    async findByEmail(email: string): Promise<User | null> {
      return this.userModel.findOne({ email }).exec();
    }
  }