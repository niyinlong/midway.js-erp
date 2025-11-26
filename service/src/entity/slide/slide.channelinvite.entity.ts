import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Channel Invitation Wizard
 */
@Entity('slide_channel_invite')
export class SlideChannelInvite {
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
   * Course
   */
  @Column({
    type: 'int'
  })
  channel_id: number;

  // @ManyToOne(() => Channel)
  // @JoinColumn({ name: 'channel_id' })
  // channel: Channel;

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
   * Contents
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Send Email
   */
  @Column({
    type: 'boolean'
  })
  send_email: boolean;

  /**
   * Enroll partners
   */
  @Column({
    type: 'boolean'
  })
  enroll_mode: boolean;

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