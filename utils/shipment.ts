enum TrackingEventStatusId {
  OrderSubmitted = 100,
  Processing = 400,
  UpdatePending = 402,
  OutForDelivery = 450,
  Delivered = 500
}

enum ProofType {
  Signature = 1,
  DeliveryPhoto = 2
}

interface TrackingEvent {
  tracking_event_status_id: TrackingEventStatusId
  updated_at: string
  description: string
  timestamp: number
  location?: string
}

interface Proof {
  url: string
  type: ProofType
}

interface IShipment {
  // 基本信息
  tracking_number: string
  carrier: string
  service_type?: string // 服务类型（例如：标准递送、快速递送等）

  // 状态信息
  current_status: TrackingEventStatusId // 当前状态
  estimated_delivery_date?: string // 预计送达日期

  // 地址信息
  origin?: {
    postcode: string
    city?: string
    state?: string
    country?: string
  }
  destination: {
    postcode: string
    city?: string
    state?: string
    country?: string
  }

  // 时间信息
  ship_date?: string // 发货日期
  delivery_date?: string // 实际送达日期（如果已送达）

  // 跟踪事件
  events: TrackingEvent[]

  // 证明文件
  proofs: Proof[]

  // 包裹信息
  package_count?: number // 包裹数量
  weight?: {
    value: number
    unit: 'kg' | 'lb'
  }
  dimensions?: {
    length: number
    width: number
    height: number
    unit: 'cm' | 'inch'
  }

  // 附加信息
  signature_required?: boolean
  instructions?: string // 特殊指示
  reference_number?: string // 客户参考号

  result: boolean
  message: string
}
