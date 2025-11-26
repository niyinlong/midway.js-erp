import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Create new or use existing Customer on new Quotation
 */
@Entity('crm_quotation_partner')
export class CrmQuotationPartner {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Associated Lead
   */
  @Column({
    type: 'int'
  })
  lead_id: number;

  // @ManyToOne(() => Lead)
  // @JoinColumn({ name: 'lead_id' })
  // lead: Lead;

  /**
   * Customer
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
   * Quotation Customer
   */
  @Column({
    type: 'varchar'
  })
  action: string;

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