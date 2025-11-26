import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN base_language_install AND res_lang
 */
@Entity('res_lang_install_rel')
export class ResLangInstallRel {
  @Column({
    type: 'int'
  })
  language_wizard_id: number;

  // @ManyToOne(() => LanguageWizard)
  // @JoinColumn({ name: 'language_wizard_id' })
  // language_wizard: LanguageWizard;

  @Column({
    type: 'int'
  })
  lang_id: number;

  // @ManyToOne(() => Lang)
  // @JoinColumn({ name: 'lang_id' })
  // lang: Lang;

}