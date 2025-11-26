import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Server Action History
 */
@Entity('ir_actions_server_history')
export class IrActionsServerHistory {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Action
   */
  @Column({
    type: 'int'
  })
  action_id: number;

  // @ManyToOne(() => Action)
  // @JoinColumn({ name: 'action_id' })
  // action: Action;

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
   * Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

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