import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account merge wizard line
 */
@Entity('account_merge_wizard_line')
export class AccountMergeWizardLine {
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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Account
   */
  @Column({
    type: 'int'
  })
  account_id: number;

  // @ManyToOne(() => Account)
  // @JoinColumn({ name: 'account_id' })
  // account: Account;

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
   * Grouping Key
   */
  @Column({
    type: 'varchar'
  })
  grouping_key: string;

  /**
   * Display Type
   */
  @Column({
    type: 'varchar'
  })
  display_type: string;

  /**
   * Is Selected
   */
  @Column({
    type: 'boolean'
  })
  is_selected: boolean;

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