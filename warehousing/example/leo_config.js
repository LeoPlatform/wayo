'use strict';
module.exports = {
  _global: {},
  development: {
    region: "us-west-2",
    profile: "aws-dev-profile",
    leosdk: {
      Region: "us-west-2",
      LeoArchive: "DevelopmentBus-LeoArchive-HASH",
      LeoCron: "DevelopmentBus-LeoCron-HASH",
      LeoEvent: "DevelopmentBus-LeoEvent-HASH",
      LeoFirehoseStream: "DevelopmentBus-LeoFirehoseStream-HASH",
      LeoKinesisStream: "DevelopmentBus-LeoKinesisStream-HASH",
      LeoS3: "DevelopmentBus-leos3-HASH",
      LeoSettings: "DevelopmentBus-LeoSettings-HASH",
      LeoStream: "DevelopmentBus-LeoStream-HASH",
      LeoSystem: "DevelopmentBus-LeoSystem-HASH"
    },
    leoauth: {
      Region: "us-west-2",
      LeoAuth: "DevelopmentAuth-LeoAuth-HASH",
      LeoAuthIdentity: "DevelopmentAuth-LeoAuthIdentity-HASH",
      LeoAuthPolicy: "DevelopmentAuth-LeoAuthPolicy-HASH",
      LeoAuthUser: "DevelopmentAuth-LeoAuthUser-HASH"
    }
  },
  production: {
    region: "us-west-2",
    profile: "aws-prod-profile",
    leosdk: {
      Region: "us-west-2",
      LeoArchive: "ProductionBus-LeoArchive-HASH",
      LeoCron: "ProductionBus-LeoCron-HASH",
      LeoEvent: "ProductionBus-LeoEvent-HASH",
      LeoFirehoseStream: "ProductionBus-LeoFirehoseStream-HASH",
      LeoKinesisStream: "ProductionBus-LeoKinesisStream-HASH",
      LeoS3: "ProductionBus-leos3-HASH",
      LeoSettings: "ProductionBus-LeoSettings-HASH",
      LeoStream: "ProductionBus-LeoStream-HASH",
      LeoSystem: "ProductionBus-LeoSystem-HASH"
    },
    leoauth: {
      Region: "us-west-2",
      LeoAuth: "ProductionAuth-LeoAuth-HASH",
      LeoAuthIdentity: "ProductionAuth-LeoAuthIdentity-HASH",
      LeoAuthPolicy: "ProductionAuth-LeoAuthPolicy-HASH",
      LeoAuthUser: "ProductionAuth-LeoAuthUser-HASH",
    }
  },
  _local: {
    leoaws: {
      profile: "aws-dev-profile",
      region: "us-west-2"
    }
  }
}