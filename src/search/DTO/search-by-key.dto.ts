import { IsNotEmpty, IsString } from 'class-validator';

export class SearchByKeyDto {
  @IsNotEmpty()
  @IsString()
  key: string;
}
