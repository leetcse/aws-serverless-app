import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_s3, CfnOutput} from 'aws-cdk-lib';
import { ApiService } from './api-service';

export class CdkServerlessStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // create a bucket with the given name
    const bucket = new aws_s3.Bucket(this, 'serverless-app-bucket');
    // Store the key value pair in the stack as output
    new CfnOutput(this, 'serverless-app-bucket-name', {
      value: bucket.bucketName
    });

    new ApiService(this, 'api-service');
  }
}
