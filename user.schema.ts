import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  toObject(): { [x: string]: any; password: any; } {
      throw new Error('Method not implemented.');
  }
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ 
    required: true, 
    enum: ['student', 'instructor', 'admin'] 
  })
  role: string;

  @Prop({
    type: {
      firstName: String,
      lastName: String,
      profilePicture: String
    }
  })
  profile: {
    firstName: string;
    lastName: string;
    profilePicture?: string;
  };

  @Prop([String])
  courses: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);