import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Push Notifications
 */
@Entity('mail_push')
export class MailPush {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * devices
   */
  @Column({
    type: 'int'
  })
  mail_push_device_id: number;

  // @ManyToOne(() => MailPushDevice)
  // @JoinColumn({ name: 'mail_push_device_id' })
  // mail_push_device: MailPushDevice;

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
   * Payload
   */
  @Column({
    type: 'varchar'
  })
  payload: string;

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