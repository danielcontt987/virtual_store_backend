import { Category } from "../../categories/entities/categories.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "products" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 60 })
    name: string

    @Column({ type: 'varchar', length: 120, nullable: true, default: 'defaulr.svg' })
    image: string

    @Column({ type: 'decimal' })
    price: number

    @Column({ type: 'int' })
    inventory: number

    @ManyToOne(() => Category) // {eager: true} genera la relación automatica
    @JoinColumn({name: 'category_id'}) // renombra la columna
    category: Category

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deleted_at: Date | null;

}
