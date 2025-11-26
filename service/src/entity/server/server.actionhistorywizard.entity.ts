import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Server Action History Wizard
 */
@Entity('server_action_history_wizard')
export class ServerActionHistoryWizard {
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
   * Revision
   */
  @Column({
    type: 'int'
  })
  revision: number;

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