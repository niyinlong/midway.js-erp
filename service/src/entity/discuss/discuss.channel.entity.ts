import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Discussion Channel
 */
@Entity('discuss_channel')
export class DiscussChannel {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Channel
   */
  @Column({
    type: 'int'
  })
  parent_channel_id: number;

  // @ManyToOne(() => ParentChannel)
  // @JoinColumn({ name: 'parent_channel_id' })
  // parent_channel: ParentChannel;

  /**
   * From Message
   */
  @Column({
    type: 'int'
  })
  from_message_id: number;

  // @ManyToOne(() => FromMessage)
  // @JoinColumn({ name: 'from_message_id' })
  // from_message: FromMessage;

  /**
   * Authorized Group
   */
  @Column({
    type: 'int'
  })
  group_public_id: number;

  // @ManyToOne(() => GroupPublic)
  // @JoinColumn({ name: 'group_public_id' })
  // group_public: GroupPublic;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Channel Type
   */
  @Column({
    type: 'varchar'
  })
  channel_type: string;

  /**
   * Default Display Mode
   */
  @Column({
    type: 'varchar'
  })
  default_display_mode: string;

  /**
   * Sfu Channel Uuid
   */
  @Column({
    type: 'varchar'
  })
  sfu_channel_uuid: string;

  /**
   * Sfu Server Url
   */
  @Column({
    type: 'varchar'
  })
  sfu_server_url: string;

  /**
   * UUID
   */
  @Column({
    type: 'varchar'
  })
  uuid: string;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Last Interest
   */
  @Column({
    type: 'datetime'
  })
  last_interest_dt: Date;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}