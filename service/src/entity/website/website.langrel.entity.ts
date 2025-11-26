import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN website AND res_lang
 */
@Entity('website_lang_rel')
export class WebsiteLangRel {
  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

  @Column({
    type: 'int'
  })
  lang_id: number;

  // @ManyToOne(() => Lang)
  // @JoinColumn({ name: 'lang_id' })
  // lang: Lang;

}