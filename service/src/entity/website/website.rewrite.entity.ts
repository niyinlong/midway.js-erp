import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website rewrite
 */
@Entity('website_rewrite')
export class WebsiteRewrite {
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
   * Route
   */
  @Column({
    type: 'int'
  })
  route_id: number;

  // @ManyToOne(() => Route)
  // @JoinColumn({ name: 'route_id' })
  // route: Route;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * URL from
   */
  @Column({
    type: 'varchar'
  })
  url_from: string;

  /**
   * URL to
   */
  @Column({
    type: 'varchar'
  })
  url_to: string;

  /**
   * Action
   */
  @Column({
    type: 'varchar'
  })
  redirect_type: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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