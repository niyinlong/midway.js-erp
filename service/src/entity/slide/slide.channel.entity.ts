import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Course
 */
@Entity('slide_channel')
export class SlideChannel {
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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Responsible
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Promoted Slide
   */
  @Column({
    type: 'int'
  })
  promoted_slide_id: number;

  // @ManyToOne(() => PromotedSlide)
  // @JoinColumn({ name: 'promoted_slide_id' })
  // promoted_slide: PromotedSlide;

  /**
   * Documents
   */
  @Column({
    type: 'int'
  })
  nbr_document: number;

  /**
   * Videos
   */
  @Column({
    type: 'int'
  })
  nbr_video: number;

  /**
   * Infographics
   */
  @Column({
    type: 'int'
  })
  nbr_infographic: number;

  /**
   * Articles
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
   * Number of Contents
   */
  @Column({
    type: 'int'
  })
  total_slides: number;

  /**
   * Visits
   */
  @Column({
    type: 'int'
  })
  total_views: number;

  /**
   * Votes
   */
  @Column({
    type: 'int'
  })
  total_votes: number;

  /**
   * New Content Notification
   */
  @Column({
    type: 'int'
  })
  publish_template_id: number;

  // @ManyToOne(() => PublishTemplate)
  // @JoinColumn({ name: 'publish_template_id' })
  // publish_template: PublishTemplate;

  /**
   * Channel Share Template
   */
  @Column({
    type: 'int'
  })
  share_channel_template_id: number;

  // @ManyToOne(() => ShareChannelTemplate)
  // @JoinColumn({ name: 'share_channel_template_id' })
  // share_channel_template: ShareChannelTemplate;

  /**
   * Share Template
   */
  @Column({
    type: 'int'
  })
  share_slide_template_id: number;

  // @ManyToOne(() => ShareSlideTemplate)
  // @JoinColumn({ name: 'share_slide_template_id' })
  // share_slide_template: ShareSlideTemplate;

  /**
   * Completion Notification
   */
  @Column({
    type: 'int'
  })
  completed_template_id: number;

  // @ManyToOne(() => CompletedTemplate)
  // @JoinColumn({ name: 'completed_template_id' })
  // completed_template: CompletedTemplate;

  /**
   * Course ranked
   */
  @Column({
    type: 'int'
  })
  karma_gen_channel_rank: number;

  /**
   * Course finished
   */
  @Column({
    type: 'int'
  })
  karma_gen_channel_finish: number;

  /**
   * Add Review
   */
  @Column({
    type: 'int'
  })
  karma_review: number;

  /**
   * Add Comment
   */
  @Column({
    type: 'int'
  })
  karma_slide_comment: number;

  /**
   * Vote
   */
  @Column({
    type: 'int'
  })
  karma_slide_vote: number;

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
   * Course type
   */
  @Column({
    type: 'varchar'
  })
  channel_type: string;

  /**
   * Featured Content
   */
  @Column({
    type: 'varchar'
  })
  promote_strategy: string;

  /**
   * Security Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Enroll Policy
   */
  @Column({
    type: 'varchar'
  })
  enroll: string;

  /**
   * Show Course To
   */
  @Column({
    type: 'varchar'
  })
  visibility: string;

  /**
   * Last Update
   */
  @Column({
    type: 'datetime'
  })
  slide_last_update: Date;

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
  description: object;

  /**
   * Short Description
   */
  @Column({
    type: 'jsonb'
  })
  description_short: object;

  /**
   * Detailed Description
   */
  @Column({
    type: 'jsonb'
  })
  description_html: object;

  /**
   * Enroll Message
   */
  @Column({
    type: 'jsonb'
  })
  enroll_msg: object;

  /**
   * Cover Properties
   */
  @Column({
    type: 'varchar'
  })
  cover_properties: string;

  /**
   * Duration
   */
  @Column({
    type: 'int'
  })
  total_time: number;

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
   * Allow rating on Course
   */
  @Column({
    type: 'boolean'
  })
  allow_comment: boolean;

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

  /**
   * Rating Last Value
   */
  @Column({
    type: 'varchar'
  })
  rating_last_value: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}