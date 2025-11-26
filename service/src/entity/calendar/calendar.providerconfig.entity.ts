import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Calendar Provider Configuration Wizard
 */
@Entity('calendar_provider_config')
export class CalendarProviderConfig {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Choose an external calendar to configure
   */
  @Column({
    type: 'varchar'
  })
  external_calendar_provider: string;

  /**
   * Google Client_id
   */
  @Column({
    type: 'varchar'
  })
  cal_client_id: string;

  // @ManyToOne(() => CalClient)
  // @JoinColumn({ name: 'cal_client_id' })
  // cal_client: CalClient;

  /**
   * Google Client_key
   */
  @Column({
    type: 'varchar'
  })
  cal_client_secret: string;

  /**
   * Outlook Client Id
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_client_identifier: string;

  // @ManyToOne(() => MicrosoftOutlookCliententifier)
  // @JoinColumn({ name: 'microsoft_outlook_client_identifier' })
  // microsoft_outlook_cliententifier: MicrosoftOutlookCliententifier;

  /**
   * Outlook Client Secret
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_client_secret: string;

  /**
   * Google Synchronization Paused
   */
  @Column({
    type: 'boolean'
  })
  cal_sync_paused: boolean;

  /**
   * Outlook Synchronization Paused
   */
  @Column({
    type: 'boolean'
  })
  microsoft_outlook_sync_paused: boolean;

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