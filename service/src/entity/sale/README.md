# 销售模块 (Sale) 产品文档

## 1. 模块概述

销售模块是ERP系统的核心业务模块之一，主要负责管理企业的销售流程，从销售订单创建、产品配置、价格管理、发货处理到后续的发票生成和付款跟踪。该模块与库存管理、财务管理、CRM等模块紧密集成，形成完整的销售业务闭环。

### 1.1 核心功能

- **销售订单管理**：创建、编辑、确认、取消销售订单
- **产品与价格管理**：灵活的产品配置和价格策略
- **销售模板与快速报价**：基于预定义模板快速生成报价单
- **折扣与促销管理**：支持多种折扣类型和促销策略
- **预付款与发票处理**：支持预付款发票生成和主发票处理
- **销售订单批量操作**：支持批量取消等操作
- **文档与标签管理**：支持销售订单相关文档和标签管理
- **销售流程自动化**：销售流程与库存路由、支付交易的集成

## 2. 实体表结构与功能详解

### 2.1 核心订单管理

#### 2.1.1 `sale_order`（销售订单表）

主要字段：
- `id`：订单唯一标识符
- `campaign_id`：营销活动ID
- `source_id`：销售渠道来源ID
- `medium_id`：媒介ID
- `company_id`：公司ID
- `partner_id`：客户ID
- `pending_email_template_id`：待发送邮件模板ID
- `journal_id`：发票日记帐ID

功能说明：存储销售订单的基本信息，包括客户信息、公司信息、订单来源等，是销售模块的核心实体。

#### 2.1.2 `sale_order_line`（销售订单行项目表）

主要字段：
- `id`：订单行唯一标识符
- `order_id`：关联的销售订单ID
- `sequence`：行项目序号
- `company_id`：公司ID
- `currency_id`：货币ID
- `order_partner_id`：订单客户ID
- `salesman_id`：销售员ID
- `product_id`：产品ID
- `product_uom_id`：产品计量单位ID

功能说明：存储销售订单中的具体产品行项目信息，包括产品、数量、价格等详细信息。

### 2.2 销售模板管理

#### 2.2.1 `sale_order_template`（销售订单模板表）

主要字段：
- `id`：模板唯一标识符
- `company_id`：公司ID
- `sequence`：模板序号
- `mail_template_id`：确认邮件模板ID
- `number_of_days`：报价有效期（天数）
- `name`：模板名称
- `note`：条款和条件

功能说明：预定义的销售订单模板，用于快速生成报价单和销售订单，提高销售效率。

#### 2.2.2 `sale_order_template_line`（销售订单模板行项目表）

主要字段：
- `id`：模板行唯一标识符
- `sale_order_template_id`：关联的销售订单模板ID
- `sequence`：行项目序号
- `company_id`：公司ID
- `product_id`：产品ID
- `product_uom_id`：产品计量单位ID
- `display_type`：显示类型
- `name`：描述信息

功能说明：销售订单模板中的具体产品行项目，在创建销售订单时可快速引用。

### 2.3 折扣与付款管理

#### 2.3.1 `sale_order_discount`（销售订单折扣表）

主要字段：
- `id`：折扣记录唯一标识符
- `sale_order_id`：关联的销售订单ID
- `discount_type`：折扣类型
- `discount_amount`：折扣金额
- `discount_percentage`：折扣百分比

功能说明：管理销售订单的折扣信息，支持金额折扣和百分比折扣两种类型。

#### 2.3.2 `sale_advance_payment_inv`（销售预付款发票表）

主要字段：
- `id`：预付款发票唯一标识符
- `currency_id`：货币ID
- `company_id`：公司ID
- `advance_payment_method`：预付款方式
- `fixed_amount`：固定金额
- `deduct_down_payments`：是否扣除定金
- `consolidated_billing`：是否合并开票

功能说明：处理销售订单的预付款发票，支持定金和预收款的管理。

#### 2.3.3 `sale_order_transaction_rel`（销售订单交易关系表）

主要字段：
- `transaction_id`：交易ID
- `sale_order_id`：销售订单ID

功能说明：记录销售订单与支付交易之间的关联关系。

### 2.4 关联与集成

#### 2.4.1 `sale_order_line_invoice_rel`（销售订单行与发票关系表）

主要字段：
- `invoice_line_id`：发票行ID
- `order_line_id`：订单行ID

功能说明：建立销售订单行与发票行之间的关联关系，实现销售到财务的流转追踪。

#### 2.4.2 `sale_order_line_stock_route_rel`（销售订单行与库存路由关系表）

主要字段：
- `sale_order_line_id`：销售订单行ID
- `stock_route_id`：库存路由ID

功能说明：建立销售订单行与库存路由之间的关联，控制产品的发货流程。

#### 2.4.3 `sale_order_tag_rel`（销售订单标签关系表）

主要字段：
- `order_id`：订单ID
- `tag_id`：标签ID

功能说明：用于对销售订单进行分类和标记，便于管理和查询。

#### 2.4.4 `sale_order_line_product_document_rel`（销售订单行产品文档关系表）

主要字段：
- `sale_order_line_id`：销售订单行ID
- `product_document_id`：产品文档ID

功能说明：关联销售订单行与相关的产品文档，方便客户获取产品详细信息。

#### 2.4.5 `sale_advance_payment_inv_sale_order_rel`（预付款发票与销售订单关系表）

主要字段：
- `sale_advance_payment_inv_id`：预付款发票ID
- `sale_order_id`：销售订单ID

功能说明：建立预付款发票与销售订单之间的关联关系。

### 2.5 批量操作与文档配置

#### 2.5.1 `sale_mass_cancel_orders`（批量取消订单表）

主要字段：
- `id`：批量取消操作ID
- `create_uid`：创建用户ID
- `write_uid`：最后更新用户ID
- `create_date`：创建时间
- `write_date`：最后更新时间

功能说明：管理批量取消销售订单的操作记录。

#### 2.5.2 `sale_order_mass_cancel_wizard_rel`（批量取消向导关系表）

主要字段：
- `sale_mass_cancel_orders_id`：批量取消操作ID
- `sale_order_id`：销售订单ID

功能说明：记录批量取消操作中包含的具体销售订单。

#### 2.5.3 `sale_pdf_form_field`（PDF表单字段表）

主要字段：
- `id`：表单字段ID
- `name`：表单字段名称
- `document_type`：文档类型
- `path`：字段路径

功能说明：配置销售文档（如报价单、订单确认书）PDF中的表单字段。

## 3. 实体关系图

```
sale_order (销售订单)
  ├── 1:n ── sale_order_line (销售订单行)
  │          ├── n:m ── sale_order_line_invoice_rel ── n:m ── invoice_line (发票行)
  │          ├── n:m ── sale_order_line_stock_route_rel ── n:m ── stock_route (库存路由)
  │          ├── n:m ── sale_order_line_product_document_rel ── n:m ── product_document (产品文档)
  ├── n:1 ── partner (客户)
  ├── n:1 ── company (公司)
  ├── n:m ── sale_order_tag_rel ── n:m ── crm_tag (CRM标签)
  ├── n:m ── sale_order_transaction_rel ── n:m ── payment_transaction (支付交易)
  ├── n:m ── sale_advance_payment_inv_sale_order_rel ── n:m ── sale_advance_payment_inv (预付款发票)
  ├── n:m ── sale_order_mass_cancel_wizard_rel ── n:m ── sale_mass_cancel_orders (批量取消)
  ├── n:1 ── sale_order_discount (订单折扣)


sale_order_template (销售订单模板)
  ├── 1:n ── sale_order_template_line (模板行项目)
  ├── n:1 ── company (公司)


sale_advance_payment_inv (预付款发票)
  ├── n:1 ── company (公司)
  ├── n:1 ── currency (货币)


sale_pdf_form_field (PDF表单字段)
  └── (独立配置表)
```

## 4. 主要业务流程

### 4.1 标准销售流程

1. **报价生成**：基于销售订单模板或直接创建报价单
2. **报价确认**：客户确认报价，转为销售订单
3. **订单处理**：
   - 确认库存可用性
   - 分配仓库和库位
   - 生成发货计划
4. **发货处理**：创建出库单，完成实物发货
5. **发票生成**：基于发货量生成销售发票
6. **收款处理**：记录客户付款情况
7. **订单完成**：所有流程完成，订单状态更新

### 4.2 预付款销售流程

1. **报价生成**：创建销售报价单
2. **预付款确认**：客户同意预付款条款
3. **预付款发票**：生成预付款发票并收取定金
4. **订单确认**：收到定金后确认销售订单
5. **后续流程**：正常的发货、发票和收款流程
6. **余额结算**：在最终发票中扣除已付的预付款

### 4.3 销售订单批量处理流程

1. **选择订单**：在批量操作向导中选择多个订单
2. **执行操作**：例如批量取消、批量更新等
3. **操作确认**：确认操作执行
4. **结果反馈**：显示操作结果和受影响的订单

## 5. 特色功能

### 5.1 灵活的定价策略

- 支持基于客户等级的价格折扣
- 支持数量阶梯式定价
- 支持多种折扣类型（金额折扣、百分比折扣）
- 支持促销价格和特殊价格

### 5.2 销售模板与快速报价

- 可预定义多种销售模板
- 模板可包含产品、价格、条款等信息
- 支持快速生成报价单，提高销售效率
- 报价有效期管理

### 5.3 完整的文档生成与管理

- 自动生成报价单、订单确认书等文档
- 支持PDF文档自定义字段配置
- 支持订单相关产品文档的关联和管理
- 邮件模板集成，自动发送文档给客户

### 5.4 与其他模块的深度集成

- 与库存模块集成，实现实时库存检查和预留
- 与财务模块集成，自动生成发票和会计凭证
- 与CRM模块集成，跟踪客户历史订单和销售机会
- 与支付模块集成，支持多种支付方式和交易记录

## 6. 技术实现要点

### 6.1 实体关系设计

- 采用外键关联实现实体间的关系
- 多对多关系通过中间表实现，如订单与标签、订单行与发票行等
- 核心实体（如销售订单）与辅助实体（如折扣、模板）分离设计

### 6.2 数据完整性保障

- 主键、外键约束确保数据一致性
- 字段类型和约束确保数据有效性
- 时间戳记录数据的创建和修改时间
- 用户ID记录操作人信息

### 6.3 业务逻辑封装

- 实体间的级联操作（如删除订单时删除相关行项目）
- 状态转换的业务规则实现
- 金额计算和验证逻辑
- 工作流和审批流程的支持

### 6.4 扩展性设计

- 标签系统支持灵活的订单分类
- PDF表单字段配置支持自定义文档格式
- 与第三方系统的集成接口预留
- 可扩展性的实体设计，支持自定义字段

## 7. 总结

销售模块是ERP系统的核心组成部分，提供了从报价、订单创建、发货到发票生成的完整销售流程管理。通过灵活的配置和强大的集成能力，该模块能够满足不同规模企业的销售管理需求，提高销售效率，优化客户体验，并确保销售数据的准确性和一致性。