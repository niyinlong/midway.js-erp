import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Models
 */
@Entity('ir_model')
export class IrModel {
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
   * Model
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  @Column({
    type: 'varchar'
  })
  character: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Fold Field
   */
  @Column({
    type: 'varchar'
  })
  fold_name: string;

  /**
   * Model Description
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Information
   */
  @Column({
    type: 'varchar'
  })
  info: string;

  /**
   * Abstract Model
   */
  @Column({
    type: 'boolean'
  })
  abstract: boolean;

  /**
   * Transient Model
   */
  @Column({
    type: 'boolean'
  })
  transient: boolean;

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

  /**
   * Has Mail Thread
   */
  @Column({
    type: 'boolean'
  })
  is_mail_thread: boolean;

  /**
   * Has Mail Activity
   */
  @Column({
    type: 'boolean'
  })
  is_mail_activity: boolean;

  /**
   * Has Mail Blacklist
   */
  @Column({
    type: 'boolean'
  })
  is_mail_blacklist: boolean;

  /**
   * Field for custom form data
   */
  @Column({
    type: 'int'
  })
  website_form_default_field_id: number;

  // @ManyToOne(() => WebsiteFormDefaultField)
  // @JoinColumn({ name: 'website_form_default_field_id' })
  // website_form_default_field: WebsiteFormDefaultField;

  /**
   * Website Form Key
   */
  @Column({
    type: 'varchar'
  })
  website_form_key: string;

  /**
   * Label for form action
   */
  @Column({
    type: 'jsonb'
  })
  website_form_label: object;

  /**
   * Allowed to use in forms
   */
  @Column({
    type: 'boolean'
  })
  website_form_access: boolean;

}