import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Barcode Rule
 */
@Entity('barcode_rule')
export class BarcodeRule {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Barcode Nomenclature
   */
  @Column({
    type: 'int'
  })
  barcode_nomenclature_id: number;

  // @ManyToOne(() => BarcodeNomenclature)
  // @JoinColumn({ name: 'barcode_nomenclature_id' })
  // barcode_nomenclature: BarcodeNomenclature;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Rule Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Encoding
   */
  @Column({
    type: 'varchar'
  })
  encoding: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Barcode Pattern
   */
  @Column({
    type: 'varchar'
  })
  pattern: string;

  /**
   * Alias
   */
  @Column({
    type: 'varchar'
  })
  alias: string;

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
   * Associated Uom
   */
  @Column({
    type: 'int'
  })
  associated_uom_id: number;

  // @ManyToOne(() => AssociatedUom)
  // @JoinColumn({ name: 'associated_uom_id' })
  // associated_uom: AssociatedUom;

  /**
   * GS1 Content Type
   */
  @Column({
    type: 'varchar'
  })
  gs1_content_type: string;

  /**
   * Decimal
   */
  @Column({
    type: 'boolean'
  })
  gs1_decimal_usage: boolean;

}