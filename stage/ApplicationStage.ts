import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs/lib/construct";
import { StaticSiteHostingStack } from "../stacks/StaticSiteHostingStack";

export class ApplicationStage extends cdk.Stage {
  constructor(scope: Construct, id: string, env: cdk.Environment) {
    super(scope, id, { env });

    new StaticSiteHostingStack(this, "StaticSiteHostingStack", {
      env,
      tags: { stage: this.stageName },
    });
  }
}
