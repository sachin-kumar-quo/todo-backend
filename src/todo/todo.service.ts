import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('Todo') private readonly todoModel: Model<TodoDocument>,
  ) {}
  async create(createTodoDto: CreateTodoDto) {
    return this.todoModel.create(createTodoDto);
  }

  async findAll() {
    return await this.todoModel.find();
  }

  async findOne(id: string) {
    return await this.todoModel.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.todoModel.findByIdAndUpdate(id, updateTodoDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.todoModel.findByIdAndDelete(id);
  }
}
