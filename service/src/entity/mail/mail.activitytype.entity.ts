import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Activity Type
 */
@Entity('mail_activity_type')
export class MailActivityType {
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
   * Create Uid
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Schedule
   */
  @Column({
    type: 'int'
  })
  delay_count: number;

  /**
   * Trigger
   */
  @Column({
    type: 'int'
  })
  triggered_next_type_id: number;

  // @ManyToOne(() => TriggeredNextType)
  // @JoinColumn({ name: 'triggered_next_type_id' })
  // triggered_next_type: TriggeredNextType;

  /**
   * Default User
   */
  @Column({
    type: 'int'
  })
  default_user_id: number;

  // @ManyToOne(() => DefaultUser)
  // @JoinColumn({ name: 'default_user_id' })
  // default_user: DefaultUser;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Delay units
   */
  @Column({
    type: 'varchar'
  })
  delay_unit: string;

  /**
   * Delay Type
   */
  @Column({
    type: 'varchar'
  })
  delay_from: string;

  /**
   * Icon
   */
  @Column({
    type: 'varchar'
  })
  icon: string;

  /**
   * Decoration Type
   */
  @Column({
    type: 'varchar'
  })
  decoration_type: string;

  /**
   * Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Chaining Type
   */
  @Column({
    type: 'varchar'
  })
  chaining_type: string;

  /**
   * Action
   */
  @Column({
    type: 'varchar'
  })
  category: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Default Summary
   */
  @Column({
    type: 'jsonb'
  })
  summary: object;

  /**
   * Default Note
   */
  @Column({
    type: 'jsonb'
  })
  default_note: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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