'use strict';
module.exports = {
  linkedStacks: [
    "LeoBus"
  ],
  publish: [
    {
      leoaws: {
        profile: "default",
        region: "us-east-1"
      },
      public: false
    }
  ],
  deploy: {
    development: {
      stack: "developmentfoobarbaz",
      parameters: {
        LeoBus: "LeoDemoBus-Bus-12MZMYAJR35QD"
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