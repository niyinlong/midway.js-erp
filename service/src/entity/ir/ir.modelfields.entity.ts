import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Fields
 */
@Entity('ir_model_fields')
export class IrModelFields {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Relation field
   */
  @Column({
    type: 'int'
  })
  relation_field_id: number;

  // @ManyToOne(() => RelationField)
  // @JoinColumn({ name: 'relation_field_id' })
  // relation_field: RelationField;

  /**
   * Model
   */
  @Column({
    type: 'int'
  })
  model_id: number;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

  /**
   * Related Field
   */
  @Column({
    type: 'int'
  })
  related_field_id: number;

  // @ManyToOne(() => RelatedField)
  // @JoinColumn({ name: 'related_field_id' })
  // related_field: RelatedField;

  /**
   * Size
   */
  @Column({
    type: 'int'
  })
  size: number;

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
   * Field Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Model Name
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Related Model
   */
  @Column({
    type: 'varchar'
  })
  relation: string;

  /**
   * Relation Field
   */
  @Column({
    type: 'varchar'
  })
  relation_field: string;

  /**
   * Field Type
   */
  @Column({
    type: 'varchar'
  })
  ttype: string;

  /**
   * Related Field Definition
   */
  @Column({
    type: 'varchar'
  })
  related: string;

  /**
   * Translatable
   */
  @Column({
    type: 'varchar'
  })
  translate: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * On Delete
   */
  @Column({
    type: 'varchar'
  })
  on_delete: string;

  /**
   * Domain
   */
  @Column({
    type: 'varchar'
  })
  domain: string;

  /**
   * Relation Table
   */
  @Column({
    type: 'varchar'
  })
  relation_table: string;

  /**
   * Column 1
   */
  @Column({
    type: 'varchar'
  })
  column1: string;

  /**
   * Column 2
   */
  @Column({
    type: 'varchar'
  })
  column2: string;

  /**
   * Dependencies
   */
  @Column({
    type: 'varchar'
  })
  depends: string;

  /**
   * Currency field
   */
  @Column({
    type: 'varchar'
  })
  currency_field: string;

  /**
   * Field Label
   */
  @Column({
    type: 'jsonb'
  })
  field_description: object;

  /**
   * Field Help
   */
  @Column({
    type: 'jsonb'
  })
  help: object;

  /**
   * Compute
   */
  @Column({
    type: 'varchar'
  })
  compute: string;

  /**
   * Copied
   */
  @Column({
    type: 'boolean'
  })
  copied: boolean;

  /**
   * Required
   */
  @Column({
    type: 'boolean'
  })
  required: boolean;

  /**
   * Readonly
   */
  @Column({
    type: 'boolean'
  })
  readonly: boolean;

  /**
   * Indexed
   */
  @Column({
    type: 'boolean'
  })
  index: boolean;

  /**
   * Company Dependent
   */
  @Column({
    type: 'boolean'
  })
  company_dependent: boolean;

  /**
   * Expand Groups
   */
  @Column({
    type: 'boolean'
  })
  group_expand: boolean;

  /**
   * Selectable
   */
  @Column({
    type: 'boolean'
  })
  selectable: boolean;

  /**
   * Stored
   */
  @Column({
    type: 'boolean'
  })
  store: boolean;

  /**
   * Sanitize HTML
   */
  @Column({
    type: 'boolean'
  })
  sanitize: boolean;

  /**
   * Sanitize HTML overridable
   */
  @Column({
    type: 'boolean'
  })
  sanitize_overridable: boolean;

  /**
   * Sanitize HTML Tags
   */
  @Column({
    type: 'boolean'
  })
  sanitize_tags: boolean;

  /**
   * Sanitize HTML Attributes
   */
  @Column({
    type: 'boolean'
  })
  sanitize_attributes: boolean;

  /**
   * Sanitize HTML Style
   */
  @Column({
    type: 'boolean'
  })
  sanitize_style: boolean;

  /**
   * Sanitize HTML Form
   */
  @Column({
    type: 'boolean'
  })
  sanitize_form: boolean;

  /**
   * Strip Style Attribute
   */
  @Column({
    type: 'boolean'
  })
  strip_style: boolean;

  /**
   * Strip Class Attribute
   */
  @Column({
    type: 'boolean'
  })
  strip_classes: boolean;

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
   * Enable Ordered Tracking
   */
  @Column({
    type: 'int'
  })
  tracking: number;

  /**
   * Blacklisted in web forms
   */
  @Column({
    type: 'boolean'
  })
  website_form_blacklisted: boolean;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}