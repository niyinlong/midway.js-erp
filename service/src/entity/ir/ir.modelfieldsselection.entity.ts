import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Fields Selection
 */
@Entity('ir_model_fields_selection')
export class IrModelFieldsSelection {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Field
   */
  @Column({
    type: 'int'
  })
  field_id: number;

  // @ManyToOne(() => Field)
  // @JoinColumn({ name: 'field_id' })
  // field: Field;

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
   * Value
   */
  @Column({
    type: 'varchar'
  })
  value: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

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