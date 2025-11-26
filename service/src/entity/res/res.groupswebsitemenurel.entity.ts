import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN website_menu AND res_groups
 */
@Entity('res_groups_website_menu_rel')
export class ResGroupsWebsiteMenuRel {
  @Column({
    type: 'int'
  })
  website_menu_id: number;

  // @ManyToOne(() => WebsiteMenu)
  // @JoinColumn({ name: 'website_menu_id' })
  // website_menu: WebsiteMenu;

  @Column({
    type: 'int'
  })
  res_groups_id: number;

  // @ManyToOne(() => ResGroups)
  // @JoinColumn({ name: 'res_groups_id' })
  // res_groups: ResGroups;

}