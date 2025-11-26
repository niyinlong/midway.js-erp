import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bank
 */
@Entity('res_bank')
export class ResBank {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Fed. State
   */
  @Column({
    type: 'int'
  })
  state: number;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country: number;

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
   * Street
   */
  @Column({
    type: 'varchar'
  })
  street: string;

  /**
   * Street2
   */
  @Column({
    type: 'varchar'
  })
  street2: string;

  /**
   * Zip
   */
  @Column({
    type: 'varchar'
  })
  zip: string;

  /**
   * City
   */
  @Column({
    type: 'varchar'
  })
  city: string;

  /**
   * Email
   */
  @Column({
    type: 'varchar'
  })
  email: string;

  /**
   * Phone
   */
  @Column({
    type: 'varchar'
  })
  phone: string;

  /**
   * Bank Identifier Code
   */
  @Column({
    type: 'varchar'
  })
  bic: string;

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