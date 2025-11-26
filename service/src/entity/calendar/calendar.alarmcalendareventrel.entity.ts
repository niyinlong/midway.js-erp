import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN calendar_event AND calendar_alarm
 */
@Entity('calendar_alarm_calendar_event_rel')
export class CalendarAlarmCalendarEventRel {
  @Column({
    type: 'int'
  })
  calendar_event_id: number;

  // @ManyToOne(() => CalendarEvent)
  // @JoinColumn({ name: 'calendar_event_id' })
  // calendar_event: CalendarEvent;

  @Column({
    type: 'int'
  })
  calendar_alarm_id: number;

  // @ManyToOne(() => CalendarAlarm)
  // @JoinColumn({ name: 'calendar_alarm_id' })
  // calendar_alarm: CalendarAlarm;

}