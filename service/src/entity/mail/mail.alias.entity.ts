import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Email Aliases
 */
@Entity('mail_alias')
export class MailAlias {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Alias Domain
   */
  @Column({
    type: 'int'
  })
  alias_domain_id: number;

  // @ManyToOne(() => AliasDomain)
  // @JoinColumn({ name: 'alias_domain_id' })
  // alias_domain: AliasDomain;

  /**
   * Aliased Model
   */
  @Column({
    type: 'int'
  })
  alias_model_id: number;

  // @ManyToOne(() => AliasModel)
  // @JoinColumn({ name: 'alias_model_id' })
  // alias_model: AliasModel;

  /**
   * Record Thread ID
   */
  @Column({
    type: 'int'
  })
  alias_force_thread_id: number;

  // @ManyToOne(() => AliasForceThread)
  // @JoinColumn({ name: 'alias_force_thread_id' })
  // alias_force_thread: AliasForceThread;

  /**
   * Parent Model
   */
  @Column({
    type: 'int'
  })
  alias_parent_model_id: number;

  // @ManyToOne(() => AliasParentModel)
  // @JoinColumn({ name: 'alias_parent_model_id' })
  // alias_parent_model: AliasParentModel;

  /**
   * Parent Record Thread ID
   */
  @Column({
    type: 'int'
  })
  alias_parent_thread_id: number;

  // @ManyToOne(() => AliasParentThread)
  // @JoinColumn({ name: 'alias_parent_thread_id' })
  // alias_parent_thread: AliasParentThread;

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
   * Alias Name
   */
  @Column({
    type: 'varchar'
  })
  alias_name: string;

  /**
   * Alias Email
   */
  @Column({
    type: 'varchar'
  })
  alias_full_name: string;

  /**
   * Alias Contact Security
   */
  @Column({
    type: 'varchar'
  })
  alias_contact: string;

  /**
   * Alias Status
   */
  @Column({
    type: 'varchar'
  })
  alias_status: string;

  /**
   * Custom Bounced Message
   */
  @Column({
    type: 'jsonb'
  })
  alias_bounced_content: object;

  /**
   * Default Values
   */
  @Column({
    type: 'varchar'
  })
  alias_defaults: string;

  /**
   * Local-part based incoming detection
   */
  @Column({
    type: 'boolean'
  })
  alias_incoming_local: boolean;

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