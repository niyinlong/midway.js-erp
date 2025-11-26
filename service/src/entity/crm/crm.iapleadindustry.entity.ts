import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM IAP Lead Industry
 */
@Entity('crm_iap_lead_industry')
export class CrmIapLeadIndustry {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Reveal
   */
  @Column({
    type: 'varchar'
  })
  reveal_ids: string;

  // @ManyToOne(() => Reveals)
  // @JoinColumn({ name: 'reveal_ids' })
  // reveals: Reveals;

  /**
   * Industry
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

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