import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as tasks from "aws-cdk-lib/aws-stepfunctions-tasks";
import * as sfn from "aws-cdk-lib/aws-stepfunctions";
import * as cdk from "aws-cdk-lib";

/**
 * awslocal stepfunctions list-state-machines
 * awslocal stepfunctions start-execution --state-machine-arn "arn:aws:states:us-east-1:000000000000:stateMachine:simple-workflow" --input "{\"firstName\": \"Deepak\", \"id\":\"12345\"}"
 * awslocal stepfunctions list-executions --state-machine-arn "arn:aws:states:us-east-1:000000000000:stateMachine:simple-workflow"
 * 
 * awslocal stepfunctions describe-execution --execution-arn "arn:aws:states:us-east-1:000000000000:execution:simple-workflow:d5630935-e480-4dc5-98ac-c807a826ace5" 
 *
 * 
*/
export class WorkflowService extends Construct {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    const helloFunction = new lambda.Function(this, 'MyLambdaFunction', {
        code: lambda.Code.fromInline(`
            exports.handler = (event, context, callback) => {
              console.log(event); 
              callback(null, "Hello World!");
            };
        `),
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: "index.handler",
        timeout: cdk.Duration.seconds(25)
      });

      const stateMachine = new sfn.StateMachine(this, 'MyStateMachine', {
        stateMachineName:'simple-workflow',
        definition: new tasks.LambdaInvoke(this, "MyLambdaTask", {
          lambdaFunction: helloFunction
        }).next(new sfn.Succeed(this, "GreetedWorld"))
      });
  }
}
