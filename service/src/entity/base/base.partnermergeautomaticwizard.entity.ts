import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Merge Partner Wizard
 */
@Entity('base_partner_merge_automatic_wizard')
export class BasePartnerMergeAutomaticWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Group of Contacts
   */
  @Column({
    type: 'int'
  })
  number_group: number;

  /**
   * Current Line
   */
  @Column({
    type: 'int'
  })
  current_line_id: number;

  // @ManyToOne(() => CurrentLine)
  // @JoinColumn({ name: 'current_line_id' })
  // current_line: CurrentLine;

  /**
   * Destination Contact
   */
  @Column({
    type: 'int'
  })
  dst_partner_id: number;

  // @ManyToOne(() => DstPartner)
  // @JoinColumn({ name: 'dst_partner_id' })
  // dst_partner: DstPartner;

  /**
   * Maximum of Group of Contacts
   */
  @Column({
    type: 'int'
  })
  maximum_group: number;

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
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Email
   */
  @Column({
    type: 'boolean'
  })
  group_by_email: boolean;

  /**
   * Name
   */
  @Column({
    type: 'boolean'
  })
  group_by_name: boolean;

  /**
   * Is Company
   */
  @Column({
    type: 'boolean'
  })
  group_by_is_company: boolean;

  /**
   * VAT
   */
  @Column({
    type: 'boolean'
  })
  group_by_vat: boolean;

  /**
   * Parent Company
   */
  @Column({
    type: 'boolean'
  })
  group_by_parent_id: boolean;

  // @ManyToOne(() => GroupByParent)
  // @JoinColumn({ name: 'group_by_parent_id' })
  // group_by_parent: GroupByParent;

  /**
   * A user associated to the contact
   */
  @Column({
    type: 'boolean'
  })
  exclude_contact: boolean;

  /**
   * Journal Items associated to the contact
   */
  @Column({
    type: 'boolean'
  })
  exclude_journal_item: boolean;

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