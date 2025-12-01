import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty({message: "El nombre no puede ser vacio"})
    @IsString({message: "Valor no valido"})
    name: string

    @IsNotEmpty({message: "El precio no puede estar vacio"})
    @IsNumber({maxDecimalPlaces: 2 }, {message: 'Solo dos decimales'})
    price: number

    @IsNotEmpty({message: "El inventario no puede estar vacio"})
    @IsNumber({maxDecimalPlaces: 0 }, {message: 'Cantidad no valida'})
    inventory: number

    @IsNotEmpty({message: "La categoría no puede estar vacia"})
    @IsInt({message: "La categoría no es valida"})
    category_id: number
}
