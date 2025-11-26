import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN base_language_install AND website
 */
@Entity('base_language_install_website_rel')
export class BaseLanguageInstallWebsiteRel {
  @Column({
    type: 'int'
  })
  base_language_install_id: number;

  // @ManyToOne(() => BaseLanguageInstall)
  // @JoinColumn({ name: 'base_language_install_id' })
  // base_language_install: BaseLanguageInstall;

  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

}