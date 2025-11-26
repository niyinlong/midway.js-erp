import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Email Domain
 */
@Entity('mail_alias_domain')
export class MailAliasDomain {
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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Bounce Alias
   */
  @Column({
    type: 'varchar'
  })
  bounce_alias: string;

  /**
   * Catchall Alias
   */
  @Column({
    type: 'varchar'
  })
  catchall_alias: string;

  /**
   * Default From Alias
   */
  @Column({
    type: 'varchar'
  })
  default_from: string;

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