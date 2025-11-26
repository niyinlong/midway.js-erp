import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Slides
 */
@Entity('slide_slide')
export class SlideSlide {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Uploaded by
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Course
   */
  @Column({
    type: 'int'
  })
  channel_id: number;

  // @ManyToOne(() => Channel)
  // @JoinColumn({ name: 'channel_id' })
  // channel: Channel;

  /**
   * Section
   */
  @Column({
    type: 'int'
  })
  category_id: number;

  // @ManyToOne(() => Category)
  // @JoinColumn({ name: 'category_id' })
  // category: Category;

  /**
   * Reward: first attempt
   */
  @Column({
    type: 'int'
  })
  quiz_first_attempt_reward: number;

  /**
   * Reward: second attempt
   */
  @Column({
    type: 'int'
  })
  quiz_second_attempt_reward: number;

  /**
   * Reward: third attempt
   */
  @Column({
    type: 'int'
  })
  quiz_third_attempt_reward: number;

  /**
   * Reward: every attempt after the third try
   */
  @Column({
    type: 'int'
  })
  quiz_fourth_attempt_reward: number;

  /**
   * Likes
   */
  @Column({
    type: 'int'
  })
  likes: number;

  /**
   * Dislikes
   */
  @Column({
    type: 'int'
  })
  dislikes: number;

  /**
   * # of Website Views
   */
  @Column({
    type: 'int'
  })
  slide_views: number;

  /**
   * # of Public Views
   */
  @Column({
    type: 'int'
  })
  public_views: number;

  /**
   * # Total Views
   */
  @Column({
    type: 'int'
  })
  total_views: number;

  /**
   * Number of Documents
   */
  @Column({
    type: 'int'
  })
  nbr_document: number;

  /**
   * Number of Videos
   */
  @Column({
    type: 'int'
  })
  nbr_video: number;

  /**
   * Number of Images
   */
  @Column({
    type: 'int'
  })
  nbr_infographic: number;

  /**
   * Number of Articles
   */
  @Column({
    type: 'int'
  })
  nbr_article: number;

  /**
   * Number of Quizs
   */
  @Column({
    type: 'int'
  })
  nbr_quiz: number;

  /**
   * Total Slides
   */
  @Column({
    type: 'int'
  })
  total_slides: number;

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
   * Website opengraph image
   */
  @Column({
    type: 'varchar'
  })
  website_meta_og_img: string;

  /**
   * Category
   */
  @Column({
    type: 'varchar'
  })
  slide_category: string;

  /**
   * Source Type
   */
  @Column({
    type: 'varchar'
  })
  source_type: string;

  /**
   * External URL
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Slide Type
   */
  @Column({
    type: 'varchar'
  })
  slide_type: string;

  /**
   * Website meta title
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_title: object;

  /**
   * Website meta description
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_description: object;

  /**
   * Website meta keywords
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_keywords: object;

  /**
   * Seo name
   */
  @Column({
    type: 'jsonb'
  })
  seo_name: object;

  /**
   * Title
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
  description: object;

  /**
   * HTML Content
   */
  @Column({
    type: 'jsonb'
  })
  html_content: object;

  /**
   * Duration
   */
  @Column({
    type: 'int'
  })
  completion_time: number;

  /**
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

  /**
   * SEO optimized
   */
  @Column({
    type: 'boolean'
  })
  is_seo_optimized: boolean;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Allow Preview
   */
  @Column({
    type: 'boolean'
  })
  is_preview: boolean;

  /**
   * Is a category
   */
  @Column({
    type: 'boolean'
  })
  is_category: boolean;

  /**
   * Allow Download
   */
  @Column({
    type: 'boolean'
  })
  slide_resource_downloadable: boolean;

  /**
   * Publish Date
   */
  @Column({
    type: 'datetime'
  })
  date_published: Date;

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