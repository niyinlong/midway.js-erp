import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Canned Response
 */
@Entity('mail_canned_response')
export class MailCannedResponse {
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
   * Shortcut
   */
  @Column({
    type: 'varchar'
  })
  source: string;

  /**
   * Substitution
   */
  @Column({
    type: 'varchar'
  })
  substitution: string;

  /**
   * Determines if the canned_response is currently shared with other users
   */
  @Column({
    type: 'boolean'
  })
  is_shared: boolean;

  /**
   * Last Used
   */
  @Column({
    type: 'datetime'
  })
  last_used: Date;

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