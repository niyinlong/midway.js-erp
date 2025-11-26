import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website Snippet Filter
 */
@Entity('website_snippet_filter')
export class WebsiteSnippetFilter {
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
   * Server Action
   */
  @Column({
    type: 'int'
  })
  action_server_id: number;

  // @ManyToOne(() => ActionServer)
  // @JoinColumn({ name: 'action_server_id' })
  // action_server: ActionServer;

  /**
   * Filter
   */
  @Column({
    type: 'int'
  })
  filter_id: number;

  // @ManyToOne(() => Filter)
  // @JoinColumn({ name: 'filter_id' })
  // filter: Filter;

  @Column({
    type: 'varchar'
  })
  integer: string;

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
   * Field Names
   */
  @Column({
    type: 'varchar'
  })
  field_names: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  help: object;

  /**
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

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