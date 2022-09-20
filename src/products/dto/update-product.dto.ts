import { PartialType } from '@nestjs/mapped-types';
import { BeforeUpdate } from 'typeorm';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
