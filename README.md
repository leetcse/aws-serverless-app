# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```bash
npx create-react-app aws-serverless-app --template typescript
```

* Added launch.json file for debugging the [tests](https://create-react-app.dev/docs/debugging-tests/) 
* Run the app with `npm start`
* disable watch mode running tests `--watchAll=false`

### Useful CDK commands
The `cdk.json` file tells the CDK Toolkit how to execute your app.

* `npm run bootstap`    Onetime bootstrap for cdk `Environment aws://xxxxxxxxxxxxx/us-west-2 bootstrapped.`
* `npm run cdk deploy`      deploy this stack to your default AWS account/region
* `npm run cdk diff`        compare deployed stack with current state
* `npm run cdk synth`       emits the synthesized CloudFormation template

### AWS Vault for opening aws web console using cli
https://github.com/99designs/aws-vault

```bash
# Store AWS credentials for the "jonsmith" profile
$ aws-vault add jonsmith
Enter Access Key Id: ABDCDEFDASDASF
Enter Secret Key: %%%

# Execute a command (using temporary credentials)
$ aws-vault exec jonsmith -- aws s3 ls
bucket_1
bucket_2

# open a browser window and login to the AWS Console
$ aws-vault login jonsmith
```

### Locally testing AWS Serverless lambda/step function
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
https://aws.amazon.com/visualstudiocode/
 
 ```bash
aws --version
aws-cli/2.8.7 Python/3.9.11 Windows/10 exe/AMD64 prompt/off
sam --version
SAM CLI, version 1.76.0
 ```