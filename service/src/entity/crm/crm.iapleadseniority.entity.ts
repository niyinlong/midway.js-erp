import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * People Seniority
 */
@Entity('crm_iap_lead_seniority')
export class CrmIapLeadSeniority {
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
   * Reveal
   */
  @Column({
    type: 'varchar'
  })
  reveal_id: string;

  // @ManyToOne(() => Reveal)
  // @JoinColumn({ name: 'reveal_id' })
  // reveal: Reveal;

  /**
   * Name
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