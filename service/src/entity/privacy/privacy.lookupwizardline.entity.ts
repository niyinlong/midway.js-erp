import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Privacy Lookup Wizard Line
 */
@Entity('privacy_lookup_wizard_line')
export class PrivacyLookupWizardLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Wizard
   */
  @Column({
    type: 'int'
  })
  wizard_id: number;

  // @ManyToOne(() => Wizard)
  // @JoinColumn({ name: 'wizard_id' })
  // wizard: Wizard;

  /**
   * Resource ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Related Document Model
   */
  @Column({
    type: 'int'
  })
  res_model_id: number;

  // @ManyToOne(() => ResModel)
  // @JoinColumn({ name: 'res_model_id' })
  // res_model: ResModel;

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
   * Resource name
   */
  @Column({
    type: 'varchar'
  })
  res_name: string;

  /**
   * Document Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Execution Details
   */
  @Column({
    type: 'varchar'
  })
  execution_details: string;

  /**
   * Has Active
   */
  @Column({
    type: 'boolean'
  })
  has_active: boolean;

  /**
   * Is Active
   */
  @Column({
    type: 'boolean'
  })
  is_active: boolean;

  /**
   * Is Unlinked
   */
  @Column({
    type: 'boolean'
  })
  is_unlinked: boolean;

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