import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Sequence
 */
@Entity('ir_sequence')
export class IrSequence {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Next Number
   */
  @Column({
    type: 'int'
  })
  number_next: number;

  /**
   * Step
   */
  @Column({
    type: 'int'
  })
  number_increment: number;

  /**
   * Sequence Size
   */
  @Column({
    type: 'int'
  })
  padding: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

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
   * Sequence Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Implementation
   */
  @Column({
    type: 'varchar'
  })
  implementation: string;

  /**
   * Prefix
   */
  @Column({
    type: 'varchar'
  })
  prefix: string;

  /**
   * Suffix
   */
  @Column({
    type: 'varchar'
  })
  suffix: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Use subsequences per date_range
   */
  @Column({
    type: 'boolean'
  })
  use_date_range: boolean;

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