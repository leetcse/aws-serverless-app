import { Duration } from "aws-cdk-lib";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class ApiService extends Construct {
    constructor(scope: Construct, id: string) {
      super(scope, id);
       const userServiceFunction = new NodejsFunction(this, 'ApiHandler', {
        entry: './cdk/lib/api-service.function.ts',
        functionName: 'handler',
        timeout: Duration.seconds(10),
        runtime: Runtime.NODEJS_18_X});
      
        const api = new LambdaRestApi(this, 'api', {
          handler: userServiceFunction,
          proxy: false
        });

        const items = api.root.addResource('ping');
        items.addMethod('GET');  // GET /ping
    }
  }