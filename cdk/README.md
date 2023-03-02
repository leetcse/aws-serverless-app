### CDK Detailed Guide

[AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) allows us to build infrastructure (EC2, Dynamodb table. s3 bucket etc) with less code.

https://github.com/99designs/aws-vault

There are three concepts 
* [App](../cdk/cdk-serverless.ts#L6) - defines one or more stacks
* [Stack](../cdk/lib/cdk-serverless-stack.ts#L5) - Stack is equivalent to cloudformation stack and when we deploy cdk we can see the corresponding cloudformation stack being created.
* [Construct](../cdk/lib/cdk-serverless-stack.ts#L9) - defines one or more concrete AWS Reources like S3 bucket, EC2 instance, VPC etc
