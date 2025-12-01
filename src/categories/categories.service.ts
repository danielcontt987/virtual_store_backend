import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
  ) { }
  create(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name
    category.created_at = new Date();
    category.updated_at = new Date();
    return this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOneBy({ id: id })
    if (!category) {
      throw new NotFoundException('La Categoría no existe')
    } 
    return category
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id)
    category.name = updateCategoryDto.name
    return await this.categoryRepository.save(category)
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    await this.categoryRepository.softDelete(category.id)
    return {
      "message": "Eliminda"
    }
  }
  findAllWithDeleted(){
    return this.categoryRepository.find({
      withDeleted: true,
      where: {
         deleted_at: Not(IsNull())
      }
    });
  }
}
