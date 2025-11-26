import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Push Notification Device
 */
@Entity('mail_push_device')
export class MailPushDevice {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Partner
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
   * Browser endpoint
   */
  @Column({
    type: 'varchar'
  })
  endpoint: string;

  /**
   * Browser keys
   */
  @Column({
    type: 'varchar'
  })
  keys: string;

  /**
   * Expiration Token Date
   */
  @Column({
    type: 'datetime'
  })
  expiration_time: Date;

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