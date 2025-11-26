import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website Visitor
 */
@Entity('website_visitor')
export class WebsiteVisitor {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Website
   */
  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

  /**
   * Contact
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  /**
   * Language
   */
  @Column({
    type: 'int'
  })
  lang_id: number;

  // @ManyToOne(() => Lang)
  // @JoinColumn({ name: 'lang_id' })
  // lang: Lang;

  /**
   * # Visits
   */
  @Column({
    type: 'int'
  })
  visit_count: number;

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
   * Access Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Timezone
   */
  @Column({
    type: 'varchar'
  })
  timezone: string;

  /**
   * First Connection
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Connection
   */
  @Column({
    type: 'datetime'
  })
  last_connection_datetime: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

}