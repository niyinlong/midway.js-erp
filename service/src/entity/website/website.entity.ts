import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website
 */
@Entity('website')
export class Website {
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
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Default Language
   */
  @Column({
    type: 'int'
  })
  default_lang_id: number;

  // @ManyToOne(() => DefaultLang)
  // @JoinColumn({ name: 'default_lang_id' })
  // default_lang: DefaultLang;

  /**
   * Public User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Theme
   */
  @Column({
    type: 'int'
  })
  theme_id: number;

  // @ManyToOne(() => Theme)
  // @JoinColumn({ name: 'theme_id' })
  // theme: Theme;

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
   * Website Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Website Domain
   */
  @Column({
    type: 'varchar'
  })
  domain: string;

  /**
   * X Account
   */
  @Column({
    type: 'varchar'
  })
  social_twitter: string;

  /**
   * Facebook Account
   */
  @Column({
    type: 'varchar'
  })
  social_facebook: string;

  /**
   * GitHub Account
   */
  @Column({
    type: 'varchar'
  })
  social_github: string;

  /**
   * LinkedIn Account
   */
  @Column({
    type: 'varchar'
  })
  social_linkedin: string;

  /**
   * Youtube Account
   */
  @Column({
    type: 'varchar'
  })
  social_youtube: string;

  /**
   * Instagram Account
   */
  @Column({
    type: 'varchar'
  })
  social_instagram: string;

  /**
   * TikTok Account
   */
  @Column({
    type: 'varchar'
  })
  social_tiktok: string;

  /**
   * Discord Account
   */
  @Column({
    type: 'varchar'
  })
  social_discord: string;

  /**
   * Google Analytics Key
   */
  @Column({
    type: 'varchar'
  })
  google_analytics_key: string;

  /**
   * Google Search Console
   */
  @Column({
    type: 'varchar'
  })
  google_search_console: string;

  /**
   * Google Maps API Key
   */
  @Column({
    type: 'varchar'
  })
  google_maps_api_key: string;

  /**
   * Plausible Shared Key
   */
  @Column({
    type: 'varchar'
  })
  plausible_shared_key: string;

  /**
   * Plausible Site
   */
  @Column({
    type: 'varchar'
  })
  plausible_site: string;

  /**
   * CDN Base URL
   */
  @Column({
    type: 'varchar'
  })
  cdn_url: string;

  /**
   * Homepage Url
   */
  @Column({
    type: 'varchar'
  })
  homepage_url: string;

  /**
   * Customer Account
   */
  @Column({
    type: 'varchar'
  })
  auth_signup_uninvited: string;

  /**
   * User list of blocked 3rd-party domains
   */
  @Column({
    type: 'varchar'
  })
  custom_blocked_third_party_domains: string;

  /**
   * CDN Filters
   */
  @Column({
    type: 'varchar'
  })
  cdn_filters: string;

  /**
   * Custom <head> code
   */
  @Column({
    type: 'varchar'
  })
  custom_code_head: string;

  /**
   * Custom end of <body> code
   */
  @Column({
    type: 'varchar'
  })
  custom_code_footer: string;

  /**
   * Robots.txt
   */
  @Column({
    type: 'varchar'
  })
  robots_txt: string;

  /**
   * Autoredirect Language
   */
  @Column({
    type: 'boolean'
  })
  auto_redirect_lang: boolean;

  /**
   * Cookies Bar
   */
  @Column({
    type: 'boolean'
  })
  cookies_bar: boolean;

  /**
   * Configurator Done
   */
  @Column({
    type: 'boolean'
  })
  configurator_done: boolean;

  /**
   * Block 3rd-party domains
   */
  @Column({
    type: 'boolean'
  })
  block_third_party_domains: boolean;

  /**
   * Has Social Default Image
   */
  @Column({
    type: 'boolean'
  })
  has_social_default_image: boolean;

  /**
   * Content Delivery Network (CDN)
   */
  @Column({
    type: 'boolean'
  })
  cdn_activated: boolean;

  /**
   * Specific User Account
   */
  @Column({
    type: 'boolean'
  })
  specific_user_account: boolean;

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
   * Default Sales Teams
   */
  @Column({
    type: 'int'
  })
  crm_default_team_id: number;

  // @ManyToOne(() => CrmDefaultTeam)
  // @JoinColumn({ name: 'crm_default_team_id' })
  // crm_default_team: CrmDefaultTeam;

  /**
   * Default Salesperson
   */
  @Column({
    type: 'int'
  })
  crm_default_user_id: number;

  // @ManyToOne(() => CrmDefaultUser)
  // @JoinColumn({ name: 'crm_default_user_id' })
  // crm_default_user: CrmDefaultUser;

  /**
   * Minimal karma to see other user''s profile
   */
  @Column({
    type: 'int'
  })
  karma_profile_min: number;

  /**
   * Google Doc Key
   */
  @Column({
    type: 'varchar'
  })
  website_slide_google_app_key: string;

}