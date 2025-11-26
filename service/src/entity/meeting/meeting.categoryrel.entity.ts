import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN calendar_event AND calendar_event_type
 */
@Entity('meeting_category_rel')
export class MeetingCategoryRel {
  @Column({
    type: 'int'
  })
  event_id: number;

  // @ManyToOne(() => Event)
  // @JoinColumn({ name: 'event_id' })
  // event: Event;

  @Column({
    type: 'int'
  })
  type_id: number;

  // @ManyToOne(() => Type)
  // @JoinColumn({ name: 'type_id' })
  // type: Type;

}