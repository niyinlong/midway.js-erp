import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Work Location
 */
@Entity('hr_work_location')
export class HrWorkLocation {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Work Address
   */
  @Column({
    type: 'int'
  })
  address_id: number;

  // @ManyToOne(() => Address)
  // @JoinColumn({ name: 'address_id' })
  // address: Address;

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
   * Work Location
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Cover Image
   */
  @Column({
    type: 'varchar'
  })
  location_type: string;

  /**
   * Location Number
   */
  @Column({
    type: 'varchar'
  })
  location_number: string;

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