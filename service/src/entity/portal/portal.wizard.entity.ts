import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Grant Portal Access
 */
@Entity('portal_wizard')
export class PortalWizard {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Invitation Message
   */
  @Column({
    type: 'varchar'
  })
  welcome_message: string;

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