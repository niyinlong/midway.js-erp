import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_partner AND calendar_event
 */
@Entity('calendar_event_res_partner_rel')
export class CalendarEventResPartnerRel {
  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

  @Column({
    type: 'int'
  })
  calendar_event_id: number;

  // @ManyToOne(() => CalendarEvent)
  // @JoinColumn({ name: 'calendar_event_id' })
  // calendar_event: CalendarEvent;

}