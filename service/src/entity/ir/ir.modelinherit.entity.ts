import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Model Inheritance Tree
 */
@Entity('ir_model_inherit')
export class IrModelInherit {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Model
   */
  @Column({
    type: 'int'
  })
  model_id: number;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

  /**
   * Parent
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Parent Field
   */
  @Column({
    type: 'int'
  })
  parent_field_id: number;

  // @ManyToOne(() => ParentField)
  // @JoinColumn({ name: 'parent_field_id' })
  // parent_field: ParentField;

}