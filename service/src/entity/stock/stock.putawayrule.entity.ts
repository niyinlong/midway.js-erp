import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Putaway Rule
 */
@Entity('stock_putaway_rule')
export class StockPutawayRule {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Product Category
   */
  @Column({
    type: 'int'
  })
  category_id: number;

  // @ManyToOne(() => Category)
  // @JoinColumn({ name: 'category_id' })
  // category: Category;

  /**
   * When product arrives in
   */
  @Column({
    type: 'int'
  })
  location_in_id: number;

  // @ManyToOne(() => LocationIn)
  // @JoinColumn({ name: 'location_in_id' })
  // location_in: LocationIn;

  /**
   * Store to sublocation
   */
  @Column({
    type: 'int'
  })
  location_out_id: number;

  // @ManyToOne(() => LocationOut)
  // @JoinColumn({ name: 'location_out_id' })
  // location_out: LocationOut;

  /**
   * Priority
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

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
   * Sublocation
   */
  @Column({
    type: 'varchar'
  })
  sublocation: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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

}