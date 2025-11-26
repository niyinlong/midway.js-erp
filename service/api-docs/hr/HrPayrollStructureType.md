# HrPayrollStructureType API 文档

## 实体说明

| 项 | 说明 |
| --- | --- |
| 实体类名 | HrPayrollStructureType |
| 数据库表名 | hr_payroll_structure_type |
| 所属模块 | hr |
| API基础路径 | /api/hr/hrpayrollstructuretype |

## 字段说明

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| id | number | 主键ID |
| name | string | 名称 |
| code | string | 编码 |
| createTime | Date | 创建时间 |
| updateTime | Date | 更新时间 |

## API 接口列表

### 1. 获取单个实体详情

**请求信息**
- 方法：GET
- 路径：/api/hr/hrpayrollstructuretype/:id
- 描述：根据ID获取单个HrPayrollStructureType的详细信息

**路径参数**
| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number/string | 是 | 实体ID |

**响应格式**
```json
{
  "success": true,
  "message": "获取成功",
  "data": {
    "id": 1,
    "name": "示例数据",
    "code": "EXAMPLE",
    "createTime": "2024-01-01T00:00:00Z",
    "updateTime": "2024-01-01T00:00:00Z"
  }
}
```

### 2. 获取实体列表（分页）

**请求信息**
- 方法：GET
- 路径：/api/hr/hrpayrollstructuretype
- 描述：分页获取HrPayrollStructureType列表，支持关键字搜索和排序

**查询参数**
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| page | number | 否 | 1 | 页码，从1开始 |
| pageSize | number | 否 | 10 | 每页数量，最大100 |
| sortBy | string | 否 | "id" | 排序字段 |
| sortOrder | string | 否 | "DESC" | 排序方式，可选值：ASC, DESC |
| keyword | string | 否 | - | 搜索关键字 |

**响应格式**
```json
{
  "success": true,
  "message": "获取成功",
  "data": {
    "list": [
      {
        "id": 1,
        "name": "示例数据1",
        "code": "EXAMPLE1",
        "createTime": "2024-01-01T00:00:00Z",
        "updateTime": "2024-01-01T00:00:00Z"
      },
      {
        "id": 2,
        "name": "示例数据2",
        "code": "EXAMPLE2",
        "createTime": "2024-01-01T00:00:00Z",
        "updateTime": "2024-01-01T00:00:00Z"
      }
    ],
    "total": 100,
    "page": 1,
    "pageSize": 10
  }
}
```

### 3. 新增实体

**请求信息**
- 方法：POST
- 路径：/api/hr/hrpayrollstructuretype
- 描述：新增一个HrPayrollStructureType实体

**请求体**
```json
{
  "name": "示例数据",
  "code": "EXAMPLE"
}
```

**响应格式**
```json
{
  "success": true,
  "message": "创建成功",
  "data": {
    "id": 1,
    "name": "示例数据",
    "code": "EXAMPLE",
    "createTime": "2024-01-01T00:00:00Z",
    "updateTime": "2024-01-01T00:00:00Z"
  }
}
```

### 4. 更新实体

**请求信息**
- 方法：PUT
- 路径：/api/hr/hrpayrollstructuretype/:id
- 描述：根据ID更新HrPayrollStructureType实体

**路径参数**
| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number/string | 是 | 实体ID |

**请求体**
```json
{
  "name": "更新后的名称",
  "code": "UPDATED"
}
```

**响应格式**
```json
{
  "success": true,
  "message": "更新成功",
  "data": {
    "id": 1,
    "name": "更新后的名称",
    "code": "UPDATED",
    "createTime": "2024-01-01T00:00:00Z",
    "updateTime": "2024-01-01T12:00:00Z"
  }
}
```

### 5. 删除实体

**请求信息**
- 方法：DELETE
- 路径：/api/hr/hrpayrollstructuretype/:id
- 描述：根据ID删除HrPayrollStructureType实体

**路径参数**
| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number/string | 是 | 实体ID |

**响应格式**
```json
{
  "success": true,
  "message": "删除成功",
  "data": null
}
```

### 6. 批量删除实体

**请求信息**
- 方法：DELETE
- 路径：/api/hr/hrpayrollstructuretype/batch
- 描述：批量删除HrPayrollStructureType实体

**请求体**
```json
{
  "ids": [1, 2, 3]
}
```

**响应格式**
```json
{
  "success": true,
  "message": "批量删除成功",
  "data": {
    "deletedCount": 3
  }
}
```

## 错误响应格式

```json
{
  "success": false,
  "message": "错误信息描述",
  "data": null
}

// 参数验证错误
{
  "success": false,
  "message": "参数验证失败",
  "data": {
    "errors": [
      {
        "field": "name",
        "message": "名称不能为空"
      }
    ]
  }
}
```

## 数据结构说明

### 响应数据结构

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| success | boolean | 请求是否成功 |
| message | string | 响应消息 |
| data | any | 响应数据，根据接口不同而变化 |

### 分页数据结构

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| list | array | 数据列表 |
| total | number | 总记录数 |
| page | number | 当前页码 |
| pageSize | number | 每页记录数 |

## 注意事项

1. 所有接口都支持JSON格式的请求和响应
2. 查询参数中，keyword参数会在name和code字段中进行模糊匹配
3. 创建和更新操作会自动处理createTime和updateTime字段
4. 删除操作通常是软删除，请确保在数据库中配置了相应的删除标记字段
5. 批量操作时，建议一次性操作的数量不超过100个