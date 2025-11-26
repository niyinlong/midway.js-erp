import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Storage Category Capacity
 */
@Entity('stock_storage_category_capacity')
export class StockStorageCategoryCapacity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Storage Category
   */
  @Column({
    type: 'int'
  })
  storage_category_id: number;

  // @ManyToOne(() => StorageCategory)
  // @JoinColumn({ name: 'storage_category_id' })
  // storage_category: StorageCategory;

  /**
   * Product
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

  /**
   * Package Type
   */
  @Column({
    type: 'int'
  })
  package_type_id: number;

  // @ManyToOne(() => PackageType)
  // @JoinColumn({ name: 'package_type_id' })
  // package_type: PackageType;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Quantity
   */
  @Column({
    type: 'varchar'
  })
  quantity: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}