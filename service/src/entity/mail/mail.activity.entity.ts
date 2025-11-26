import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Activity
 */
@Entity('mail_activity')
export class MailActivity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Document Model
   */
  @Column({
    type: 'int'
  })
  res_model_id: number;

  // @ManyToOne(() => ResModel)
  // @JoinColumn({ name: 'res_model_id' })
  // res_model: ResModel;

  /**
   * Related Document ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Activity Type
   */
  @Column({
    type: 'int'
  })
  activity_type_id: number;

  // @ManyToOne(() => ActivityType)
  // @JoinColumn({ name: 'activity_type_id' })
  // activity_type: ActivityType;

  /**
   * Assigned to
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Recommended Activity Type
   */
  @Column({
    type: 'int'
  })
  recommended_activity_type_id: number;

  // @ManyToOne(() => RecommendedActivityType)
  // @JoinColumn({ name: 'recommended_activity_type_id' })
  // recommended_activity_type: RecommendedActivityType;

  /**
   * Previous Activity Type
   */
  @Column({
    type: 'int'
  })
  previous_activity_type_id: number;

  // @ManyToOne(() => PreviousActivityType)
  // @JoinColumn({ name: 'previous_activity_type_id' })
  // previous_activity_type: PreviousActivityType;

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
   * Related Document Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Document Name
   */
  @Column({
    type: 'varchar'
  })
  res_name: string;

  /**
   * Summary
   */
  @Column({
    type: 'varchar'
  })
  summary: string;

  /**
   * Timezone
   */
  @Column({
    type: 'varchar'
  })
  user_tz: string;

  /**
   * Due Date
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

  /**
   * Done Date
   */
  @Column({
    type: 'datetime'
  })
  date_done: Date;

  /**
   * Note
   */
  @Column({
    type: 'varchar'
  })
  note: string;

  /**
   * Feedback
   */
  @Column({
    type: 'varchar'
  })
  feedback: string;

  /**
   * Automated activity
   */
  @Column({
    type: 'boolean'
  })
  automated: boolean;

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

  /**
   * Calendar Meeting
   */
  @Column({
    type: 'int'
  })
  calendar_event_id: number;

  // @ManyToOne(() => CalendarEvent)
  // @JoinColumn({ name: 'calendar_event_id' })
  // calendar_event: CalendarEvent;

  /**
   * Requesting Partner
   */
  @Column({
    type: 'int'
  })
  request_partner_id: number;

  // @ManyToOne(() => RequestPartner)
  // @JoinColumn({ name: 'request_partner_id' })
  // request_partner: RequestPartner;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}