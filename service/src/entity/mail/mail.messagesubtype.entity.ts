import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Message subtypes
 */
@Entity('mail_message_subtype')
export class MailMessageSubtype {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Relation field
   */
  @Column({
    type: 'varchar'
  })
  relation_field: string;

  /**
   * Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Message Type
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Internal Only
   */
  @Column({
    type: 'boolean'
  })
  internal: boolean;

  /**
   * Hidden
   */
  @Column({
    type: 'boolean'
  })
  hidden: boolean;

  /**
   * Track Recipients
   */
  @Column({
    type: 'boolean'
  })
  track_recipients: boolean;

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