import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Country state
 */
@Entity('res_country_state')
export class ResCountryState {
  @PrimaryGeneratedColumn()
  id: number;

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
   * State Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * State Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

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