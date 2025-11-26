import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Calendar Popover Delete Wizard
 */
@Entity('calendar_popover_delete_wizard')
export class CalendarPopoverDeleteWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Mail Template
   */
  @Column({
    type: 'int'
  })
  template_id: number;

  // @ManyToOne(() => Template)
  // @JoinColumn({ name: 'template_id' })
  // template: Template;

  /**
   * Calendar Event
   */
  @Column({
    type: 'int'
  })
  calendar_event_id: number;

  // @ManyToOne(() => CalendarEvent)
  // @JoinColumn({ name: 'calendar_event_id' })
  // calendar_event: CalendarEvent;

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
   * Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * Subject
   */
  @Column({
    type: 'varchar'
  })
  subject: string;

  /**
   * Delete
   */
  @Column({
    type: 'varchar'
  })
  delete: string;

  /**
   * Contents
   */
  @Column({
    type: 'varchar'
  })
  body: string;

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