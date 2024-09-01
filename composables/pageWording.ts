export const usePageWording = () => {
  const services = {
    "banner": {
      "title": "FleetTurbo Delivery Solutions",
      "subtitle": "Order Placed, Next-Day Delivered!",
      "button": {
        "text": "Contact our Expert Solutions",
        "icon": "",
        "floating": true
      }
    },
    "ourServices": {
      "title": "Expert In Logistics Across US",
      "description": "Fleet Turbo provides fast, flexible, and affordable delivery that gives businesses a competitive edge. With delivery times ranging from 2 to 5 days, we offer the perfect balance between speed and cost, catering to a variety of shipping needs.",
      "coverageAreas": ["LAX", "SAN", "LAS", "CHI", "everywhere in the United States"],
      "visualElement": "",
      "additionalDetails": {
        "specificServices": "",
        "caseStudies": ""
      }
    },
    "parcelDimensions": {
      "title": "Package Handling Policy",
      "description": "We handle packages from 1 oz to 70 lbs and guarantee same-day pickup and delivery.",
      "visualElement": "",
      "additionalInfo": {
        "maxPackageSizeDetails": ""
      }
    },
    "effortlessAPIIntegrations": {
      "title": "Seamless Platform Integration",
      "description": "Integrate your systems seamlessly with FleetTurbo for effortless, reliable shipping of large volumes.",
      "supportedPlatforms": ["Walmart US", "Shopify", ""],
      "visualElement": "",
      "technologyDetails": ""
    },
    "merchantCenterBackend": {
      "title": "Merchant Center Backend",
      "description": "Merchant center dashboard for tracking delivery status.",
      "features": [
        {
          "title": "Easy Integration",
          "description": "Easy integration into eCommerce platforms with plugins.",
          "icon": "ph:plug-bold"
        },
        {
          "title": "Bulk Order Uploads",
          "description": "Automatic bulk order uploads through the backend.",
          "icon": "ph:upload-bold"
        },
        {
          "title": "Delivery Tracking",
          "description": "Merchant center dashboard for tracking delivery status.",
          "icon": "ph:truck-bold"
        }
      ]
    },
      "howItWorks": {
        "title": "How FleetTurbo Works",
        "description": "Seamless 5-step delivery process",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Order Placement",
            "mainIcon": "ph:shopping-cart-bold",
            "subIcons": [
              { "icon": "ph:desktop", "label": "Web" },
              { "icon": "ph:device-mobile", "label": "Mobile" },
              { "icon": "ph:storefront", "label": "In-store" }
            ],
            "description": "Multiple ordering channels"
          },
          {
            "stepNumber": 2,
            "title": "Order Submission",
            "mainIcon": "ph:upload-bold",
            "subIcons": [
              { "icon": "ph:storefront", "label": "Store" },
              { "icon": "ph:globe", "label": "Online" },
              { "icon": "ph:handshake", "label": "Partners" }
            ],
            "description": "Easy submission options"
          },
          {
            "stepNumber": 3,
            "title": "Order Preparation",
            "mainIcon": "ph:package-bold",
            "subIcons": [
              { "icon": "ph:user", "label": "Self-pack" },
              { "icon": "ph:storefront", "label": "Store-pack" },
              { "icon": "ph:barcode", "label": "Label" }
            ],
            "description": "Flexible packing solutions"
          },
          {
            "stepNumber": 4,
            "title": "Pick-up",
            "mainIcon": "ph:truck-bold",
            "subIcons": [
              { "icon": "ph:warehouse", "label": "Warehouse" },
              { "icon": "ph:storefront", "label": "Store" },
              { "icon": "ph:clock", "label": "Scheduled" }
            ],
            "description": "Convenient collection points"
          },
          {
            "stepNumber": 5,
            "title": "Delivery",
            "mainIcon": "ph:map-pin-bold",
            "subIcons": [
              { "icon": "ph:clock-countdown", "label": "Fast" },
              { "icon": "ph:map-trifold", "label": "Tracked" },
              { "icon": "ph:check-circle", "label": "Confirmed" }
            ],
            "description": "Efficient and trackable delivery"
          }
        ]
      },
    "packageTracking": {
      "description": "Customers receive real-time notifications throughout the day with updates on parcel locations and delivery windows, including photos as proof.",
      "visualElement": ""
    }
  }

  const whyChooseUs = {
    "simplePricingTransparency": {
      "features": [
        {
          "featureDescription": "No minimum requirement."
        },
        {
          "featureDescription": "Simple flat pick-delivery fee structure without hidden costs."
        },
        {
          "featureDescription": "No fuel surcharge or additional fees."
        },
        {
          "featureDescription": "Three delivery attempts available; free return of undelivered parcels to sender."
        },
        {
          "featureDescription": "Savings of up to 40% on current shipping costs."
        },
        {
          "featureDescription": "Annual credit bonus program."
        }
      ],
      "additionalInfo": {
        "samplePricingStructure": ""
      }
    },
    "whyFleetTurbo": {
      "benefits": [
        {
          "benefitDescription": "Cost-saving solutions with stable pricing and no hidden costs."
        },
        {
          "benefitDescription": "Speed solutions offering next-day local delivery and a nationwide shipping period of 2–5 days."
        },
        {
          "benefitDescription": "On-time solutions with a delivery rate of 99.8%."
        },
        {
          "benefitDescription": "Three attempts for delivery included in standard service."
        },
        {
          "benefitDescription": "Capacity for large volumes with over 300 drivers available across coverage areas."
        },
        {
          "benefitDescription": "Exceptional customer service with dedicated support teams available at all times."
        }
      ]
    },
    "additionalServices": {
      "description": "Fleet Turbo is not just a delivery solution provider; we are also experts in your entire fulfillment chain. Additional services include:",
      "services": [
        "Ocean Freight (Container services)",
        "Air Freight (Cross-border parcels via air)",
        "Self Storage (Receiving, storage, bulk orders or pallet outbound)",
        "Sustainability initiatives details if applicable"
      ]
    },
    "customerSupport": {
      "description": "Information on customer support availability (hours of operation, contact methods) and response times."
    },
    "insurancePolicy": {
      "description": "Standard insurance policy covering shipments, including claims filing procedures."
    },
    "partnershipsAffiliations": {
      "description": "Any partnerships with logistics companies or certifications that enhance credibility."
    },
    "userTestimonials": {
      "description": "Quotes from satisfied customers or detailed success stories to build trust."
    },
    "blogResourceSection": {
      "description": "Consider adding a blog/resource section for articles related to logistics, shipping tips, or industry news."
    }
  }

  return { services, whyChooseUs }
}

