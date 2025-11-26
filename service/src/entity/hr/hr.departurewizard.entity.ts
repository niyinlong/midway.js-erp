import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Departure Wizard
 */
@Entity('hr_departure_wizard')
export class HrDepartureWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Departure Reason
   */
  @Column({
    type: 'int'
  })
  departure_reason_id: number;

  // @ManyToOne(() => DepartureReason)
  // @JoinColumn({ name: 'departure_reason_id' })
  // departure_reason: DepartureReason;

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
   * Contract End Date
   */
  @Column({
    type: 'datetime'
  })
  departure_date: Date;

  /**
   * Additional Information
   */
  @Column({
    type: 'varchar'
  })
  departure_description: string;

  /**
   * Related User
   */
  @Column({
    type: 'boolean'
  })
  remove_related_user: boolean;

  /**
   * Set Contract End Date
   */
  @Column({
    type: 'boolean'
  })
  set_date_end: boolean;

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