import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_actions')
export class IrActions {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Binding Model
   */
  @Column({
    type: 'int'
  })
  binding_model_id: number;

  // @ManyToOne(() => BindingModel)
  // @JoinColumn({ name: 'binding_model_id' })
  // binding_model: BindingModel;

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
   * Action Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Path to show in the URL
   */
  @Column({
    type: 'varchar'
  })
  path: string;

  /**
   * Binding Type
   */
  @Column({
    type: 'varchar'
  })
  binding_type: string;

  /**
   * Binding View Types
   */
  @Column({
    type: 'varchar'
  })
  binding_view_types: string;

  /**
   * Action Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Action Description
   */
  @Column({
    type: 'jsonb'
  })
  help: object;

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