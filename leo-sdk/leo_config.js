'use strict';

const development = {
  region: "us-east-1",
  profile: "personal",
  leosdk: {
    Region: "us-east-1",
    LeoArchive: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoArchive-104UFQ24SQLB9",
    LeoCron: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoCron-17OHGGOYAO0R9",
    LeoEvent: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoEvent-13O4HRXHZDJYD",
    LeoFirehoseStream: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoFirehoseStream-1ECKWB9O6VT8J",
    LeoKinesisStream: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoKinesisStream-TBC0J6ALDQH8",
    LeoS3: "leodemobus-bus-12mzmyajr35qd-leos3-utrd8x1bfbj4",
    LeoSettings: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoSettings-NDY5UVQJTZNV",
    LeoStream: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoStream-VV5GNR3KBIJJ",
    LeoSystem: "LeoDemoBus-Bus-12MZMYAJR35QD-LeoSystem-T6XNEAACFYTA"
  },
  leoauth: {
    Region: "us-east-1",
    LeoAuth: "LeoDemoBus-Auth-M473X3FVAO88-LeoAuth-19D4Y2ODBKPNE",
    LeoAuthIdentity: "LeoDemoBus-Auth-M473X3FVAO88-LeoAuthIdentity-124VHKS0H2UHT",
    LeoAuthPolicy: "LeoDemoBus-Auth-M473X3FVAO88-LeoAuthPolicy-93BUNO3HIVR8",
    LeoAuthUser: "LeoDemoBus-Auth-M473X3FVAO88-LeoAuthUser-GLY0GYGRHXIB"
  }}


module.exports = {
  _global: {},
  development,
  _local: () => Object.assign(development, {
    leoaws: {
      profile: "personal",
      region: "us-east-1"
    }
  })
}