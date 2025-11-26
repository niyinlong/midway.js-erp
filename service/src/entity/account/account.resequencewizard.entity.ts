import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Remake the sequence of Journal Entries.
 */
@Entity('account_resequence_wizard')
export class AccountResequenceWizard {
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
   * First New Sequence
   */
  @Column({
    type: 'varchar'
  })
  first_name: string;

  /**
   * Ordering
   */
  @Column({
    type: 'varchar'
  })
  ordering: string;

  /**
   * First Date
   */
  @Column({
    type: 'datetime'
  })
  first_date: Date;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  end_date: Date;

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