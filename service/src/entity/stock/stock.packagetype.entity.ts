import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Stock package type
 */
@Entity('stock_package_type')
export class StockPackageType {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Reference Sequence
   */
  @Column({
    type: 'int'
  })
  sequence_id: number;

  // @ManyToOne(() => Sequence)
  // @JoinColumn({ name: 'sequence_id' })
  // sequence: Sequence;

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
   * Package Type
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Barcode
   */
  @Column({
    type: 'varchar'
  })
  barcode: string;

  /**
   * Package Use
   */
  @Column({
    type: 'varchar'
  })
  package_use: string;

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
   * Height
   */
  @Column({
    type: 'varchar'
  })
  height: string;

  /**
   * Width
   */
  @Column({
    type: 'varchar'
  })
  width: string;

  /**
   * Length
   */
  @Column({
    type: 'varchar'
  })
  packaging_length: string;

  /**
   * Weight
   */
  @Column({
    type: 'varchar'
  })
  base_weight: string;

  /**
   * Max Weight
   */
  @Column({
    type: 'varchar'
  })
  max_weight: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}