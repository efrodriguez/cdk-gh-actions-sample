#!/usr/bin/env node
import "dotenv/config";
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ApplicationStage } from "./stage/ApplicationStage";

const app = new cdk.App();
const region = "us-east-1";

console.log(process.env);

new ApplicationStage(app, "dev", {
  account: process.env.NONPROD_ACCOUNT,
  region,
});

new ApplicationStage(app, "test", {
  account: process.env.NONPROD_ACCOUNT,
  region,
});

new ApplicationStage(app, "prod", {
  account: process.env.PROD_ACCOUNT,
  region,
});
