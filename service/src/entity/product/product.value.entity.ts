import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Value
 */
@Entity('product_value')
export class ProductValue {
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
   * Lot
   */
  @Column({
    type: 'int'
  })
  lot_id: number;

  // @ManyToOne(() => Lot)
  // @JoinColumn({ name: 'lot_id' })
  // lot: Lot;

  /**
   * Move
   */
  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

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
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Value
   */
  @Column({
    type: 'int'
  })
  value: number;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

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