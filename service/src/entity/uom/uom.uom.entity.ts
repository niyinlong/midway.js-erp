import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Unit of Measure
 */
@Entity('uom_uom')
export class UomUom {
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
   * Reference Unit
   */
  @Column({
    type: 'int'
  })
  relative_uom_id: number;

  // @ManyToOne(() => RelativeUom)
  // @JoinColumn({ name: 'relative_uom_id' })
  // relative_uom: RelativeUom;

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
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Unit Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Contains
   */
  @Column({
    type: 'int'
  })
  relative_factor: number;

  /**
   * Absolute Quantity
   */
  @Column({
    type: 'int'
  })
  factor: number;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}