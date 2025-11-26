import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account Tag
 */
@Entity('account_account_tag')
export class AccountAccountTag {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

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
   * Applicability
   */
  @Column({
    type: 'varchar'
  })
  applicability: string;

  /**
   * Tag Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

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