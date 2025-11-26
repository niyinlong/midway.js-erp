import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * User/Guest Presence
 */
@Entity('mail_presence')
export class MailPresence {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Users
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Guest
   */
  @Column({
    type: 'int'
  })
  guest_id: number;

  // @ManyToOne(() => Guest)
  // @JoinColumn({ name: 'guest_id' })
  // guest: Guest;

  /**
   * IM Status
   */
  @Column({
    type: 'varchar'
  })
  status: string;

  /**
   * Last Poll
   */
  @Column({
    type: 'datetime'
  })
  last_poll: Date;

  /**
   * Last Presence
   */
  @Column({
    type: 'datetime'
  })
  last_presence: Date;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}