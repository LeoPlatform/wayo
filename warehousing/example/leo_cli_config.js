'use strict';
module.exports = {
  linkedStacks: [
    "LeoBus"
  ],
  publish: [
    {
      leoaws: {
        profile: "aws-dev-profile",
        region: "us-west-2"
      },
      public: false
    },
    {
      leoaws: {
        profile: "aws-prod-profile",
        region: "us-west-2"
      },
      public: false
    }
  ],
  deploy: {
    development: {
      stack: "development-stack",
      parameters: {
        LeoBus: "DevelopmentBus"
      }
    },
    production: {
      stack: "production-stack",
      parameters: {
        LeoBus: "ProductionBus"
      }
    }
  },
  test: {
    personas: {
      default: {
        identity: {
          sourceIp: "127.0.0.1"
        }
      }
    },
    defaultPersona: "default"
  }
}