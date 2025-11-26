import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_template_role_to_users_map AND res_users
 */
@Entity('project_template_role_to_users_map_res_users_rel')
export class ProjectTemplateRoleToUsersMapResUsersRel {
  @Column({
    type: 'int'
  })
  project_template_role_to_users_map_id: number;

  // @ManyToOne(() => ProjectTemplateRoleToUsersMap)
  // @JoinColumn({ name: 'project_template_role_to_users_map_id' })
  // project_template_role_to_users_map: ProjectTemplateRoleToUsersMap;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}