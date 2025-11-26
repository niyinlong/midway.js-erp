import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Visited Pages
 */
@Entity('website_track')
export class WebsiteTrack {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Visitor
   */
  @Column({
    type: 'int'
  })
  visitor_id: number;

  // @ManyToOne(() => Visitor)
  // @JoinColumn({ name: 'visitor_id' })
  // visitor: Visitor;

  /**
   * Page
   */
  @Column({
    type: 'int'
  })
  page_id: number;

  // @ManyToOne(() => Page)
  // @JoinColumn({ name: 'page_id' })
  // page: Page;

  /**
   * Url
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Visit Date
   */
  @Column({
    type: 'datetime'
  })
  visit_datetime: Date;

}