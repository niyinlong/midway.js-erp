import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_module_category')
export class IrModuleCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int'
  })
  create_uid: number;

  @Column({
    type: 'datetime'
  })
  create_date: Date;

  @Column({
    type: 'datetime'
  })
  write_date: Date;

  @Column({
    type: 'int'
  })
  write_uid: number;

  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Visible
   */
  @Column({
    type: 'boolean'
  })
  visible: boolean;

  /**
   * Exclusive
   */
  @Column({
    type: 'boolean'
  })
  exclusive: boolean;

}