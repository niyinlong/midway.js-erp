import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_activity_type AND mail_activity_type
 */
@Entity('mail_activity_rel')
export class MailActivityRel {
  @Column({
    type: 'int'
  })
  activity_id: number;

  // @ManyToOne(() => Activity)
  // @JoinColumn({ name: 'activity_id' })
  // activity: Activity;

  @Column({
    type: 'int'
  })
  recommended_id: number;

  // @ManyToOne(() => Recommended)
  // @JoinColumn({ name: 'recommended_id' })
  // recommended: Recommended;

}