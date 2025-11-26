import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Calendar Attendee Information
 */
@Entity('calendar_attendee')
export class CalendarAttendee {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Meeting linked
   */
  @Column({
    type: 'int'
  })
  event_id: number;

  // @ManyToOne(() => Event)
  // @JoinColumn({ name: 'event_id' })
  // event: Event;

  /**
   * Attendee
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

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
   * Common name
   */
  @Column({
    type: 'varchar'
  })
  common_name: string;

  /**
   * Invitation Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Available/Busy
   */
  @Column({
    type: 'varchar'
  })
  availability: string;

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