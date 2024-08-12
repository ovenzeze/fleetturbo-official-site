enum TrackingEventStatusId {
  OrderSubmitted = 100, // Order has been submitted
  Processing = 400, // Order is being processed
  UpdatePending = 402, // Update is pending
  OutForDelivery = 450, // Shipment is out for delivery
  Delivered = 500 // Shipment has been delivered
}

enum ProofType {
  Signature = 1, // Proof of delivery by signature
  DeliveryPhoto = 2 // Proof of delivery by photo
}

interface TrackingEvent {
  tracking_event_status_id: TrackingEventStatusId // Status of the tracking event
  updated_at: string // Date and time when the event was updated
  description: string // Description of the event
  timestamp: number // Timestamp of the event
  location?: string // Location of the event (optional)
}

interface Proof {
  url: string // URL of the proof file
  type: ProofType // Type of the proof
}

interface IShipment {
  // Basic information
  tracking_number: string // Unique tracking number of the shipment
  carrier: string // Carrier handling the shipment
  service_type?: string // Type of service (e.g., standard delivery, expedited delivery, etc.)

  // Status information
  current_status: TrackingEventStatusId // Current status of the shipment
  estimated_delivery_date?: string // Estimated date of delivery

  // Address information
  origin?: {
    postcode: string // Postcode of the origin
    city?: string // City of the origin (optional)
    state?: string // State of the origin (optional)
    country?: string // Country of the origin (optional)
  }
  destination: {
    postcode: string // Postcode of the destination
    city?: string // City of the destination (optional)
    state?: string // State of the destination (optional)
    country?: string // Country of the destination (optional)
  }

  // Time information
  ship_date?: string // Date when the shipment was shipped
  delivery_date?: string // Actual date of delivery (if delivered)

  // Tracking events
  events: TrackingEvent[] // List of tracking events

  // Proof files
  proofs: Proof[] // List of proof files

  // Package information
  package_count?: number // Number of packages
  weight?: {
    value: number // Weight value
    unit: 'kg' | 'lb' // Unit of weight (kilogram or pound)
  }
  dimensions?: {
    length: number // Length of the package
    width: number // Width of the package
    height: number // Height of the package
    unit: 'cm' | 'inch' // Unit of dimension (centimeter or inch)
  }

  // Additional information
  signature_required?: boolean // Whether a signature is required for delivery
  instructions?: string // Special instructions
  reference_number?: string // Customer reference number

  result: boolean // Result of the shipment process
  message: string // Message related to the shipment process
}
