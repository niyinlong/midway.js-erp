import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Get Lost Reason
 */
@Entity('crm_lead_lost')
export class CrmLeadLost {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Lost Reason
   */
  @Column({
    type: 'int'
  })
  lost_reason_id: number;

  // @ManyToOne(() => LostReason)
  // @JoinColumn({ name: 'lost_reason_id' })
  // lost_reason: LostReason;

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
   * Closing Note
   */
  @Column({
    type: 'varchar'
  })
  lost_feedback: string;

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