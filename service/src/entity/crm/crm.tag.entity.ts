import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM标签实体
 * 作用：存储CRM系统中的标签信息，用于对线索、商机等CRM对象进行分类和标记，方便搜索和筛选
 */
@Entity('crm_tag')
export class CrmTag {
  /**
   * 主键ID
   * 作用：唯一标识每一个标签
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 颜色值
   * 作用：定义标签在界面上显示的颜色代码
   */
  @Column({
    type: 'int',
  })
  color: number;

  /**
   * 创建人用户ID
   * 作用：记录创建此标签的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新人用户ID
   * 作用：记录最后修改此标签的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 标签名称
   * 作用：存储标签的多语言名称，使用JSON格式支持国际化
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 创建时间
   * 作用：记录此标签的创建时间
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录此标签的最后修改时间
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

}