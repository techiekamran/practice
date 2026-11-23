Workato + UI (Screen)  
Custom sol (Backend) + UI Screen + workato



Current Structure

Python (FastAPI) + UI (Screen) Frontend + Backend

server 1 - workato.
server 2-  custom

server 3- UI screen + python




Python (FastAPI)

React (Frontend) 


$env:JAVA_HOME = "$env:LOCALAPPDATA\Programs\Java17\jdk-17.0.20.1+1"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
$env:JAVA_TOOL_OPTIONS = "-Djavax.net.ssl.trustStoreType=Windows-ROOT"
$env:Path = "$env:JAVA_HOME\bin;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator;$env:Path"

Set-Location "C:\Users\308674\OneDrive - UST\Desktop\projects\personal\matrimonial-mobile"
Start-Process "$env:ANDROID_HOME\emulator\emulator.exe" -ArgumentList "-avd", "Pixel_8"
npm.cmd run android

Set-Location "C:\Users\308674\OneDrive - UST\Desktop\projects\personal\matrimonial-mobile"
npm.cmd start --reset-cache

java -version
adb devices

If there’s no emulator listed, start Pixel_7 once and wait for it to boot:

Start-Process "$env:ANDROID_HOME\emulator\emulator.exe" -ArgumentList "-avd", "Pixel_7"

npm.cmd run android

Set-Location "C:\Users\308674\OneDrive - UST\Desktop\projects\personal\matrimonial-mobile"
npm.cmd start


public -avd Pixel_7 -dns-server 8.8.8.8
Start-Process "$env:ANDROID_HOME\emulator\emulator.exe" -ArgumentList "-avd", "Pixel_7" -dns-server 8.8.8.8



& "$env:LOCALAPPDATA\Android\Sdk\emulator\emulator.exe" -avd Pixel_7 -dns-server 8.8.8.8

$env:ANDROID_KEYSTORE_FILE = "$PWD\matrimonial-release.keystore"
$env:ANDROID_KEYSTORE_PASSWORD = "Hello@123"
$env:ANDROID_KEY_ALIAS = "matrimonial"
$env:ANDROID_KEY_PASSWORD = "Hello@123"

Start-Process "$env:ANDROID_HOME\emulator\emulator.exe" -ArgumentList "-avd", "Pixel_7", "-dns-server", "8.8.8.8,1.1.1.1"



aws rekognition compare-faces --region ap-southeast-2 --source-image '{"S3Object":{"Bucket":"matrimonial-api-photos-296760889289","Name":"1391302d-3c80-476f-a48e-1668268a08c1_b38ce5809ccd4d46b9ec5d87d04ab082.jpg"}}' --target-image '{"S3Object":{"Bucket":"matrimonial-api-photos-296760889289","Name":"46da2093-c7c3-4ae0-abc1-bc780ed39c75/46da2093-c7c3-4ae0-abc1-bc780ed39c75_8978deb0695b44dca73d071d3b5289e1.jpg"}}'


CLUSTER=default
RUNNING_TASK=$(aws ecs list-tasks --region ap-southeast-2 --cluster $CLUSTER --desired-status RUNNING --query 'taskArns[0]' --output text)
TASK_DEF=$(aws ecs describe-tasks --region ap-southeast-2 --cluster $CLUSTER --tasks $RUNNING_TASK --query 'tasks[0].taskDefinitionArn' --output text)
CONTAINER=Main
NETCFG='{"awsvpcConfiguration":{"subnets":["subnet-06373da8875e50616","subnet-0ac319ada5133d9e5","subnet-07c1009413c82b96f"],"securityGroups":["sg-0d354284f35f9b823","sg-0ba15b7f40bf4bfe5"],"assignPublicIp":"ENABLED"}}'
echo "$TASK_DEF"
TASK_ARN=$(aws ecs run-task --region ap-southeast-2 --cluster "$CLUSTER" --launch-type FARGATE --task-definition "$TASK_DEF" --network-configuration "$NETCFG" --overrides "{\"containerOverrides\":[{\"name\":\"$CONTAINER\",\"command\":[\"alembic\",\"upgrade\",\"head\"]}]}" --query 'tasks[0].taskArn' --output text)
aws ecs wait tasks-stopped --region ap-southeast-2 --cluster "$CLUSTER" --tasks "$TASK_ARN"
aws ecs describe-tasks --region ap-southeast-2 --cluster "$CLUSTER" --tasks "$TASK_ARN" --query 'tasks[0].containers[0].{exitCode:exitCode,reason:reason}'



aws s3 rm s3://matrimonial-api-photos-296760889289/ --recursive --region ap-southeast-2

view & edit profile
Partner preference


read -rs -p "New DB password: " DBPASS; echo
[ -n "$DBPASS" ] || { echo "Empty password, aborting"; return 1 2>/dev/null || exit 1; }

aws rds modify-db-instance --region ap-southeast-2 \
  --db-instance-identifier matrimonial-staging-db \
  --master-user-password "$DBPASS" --apply-immediately \
  --query 'DBInstance.{id:DBInstanceIdentifier,status:DBInstanceStatus,pending:PendingModifiedValues}'
unset DBPASS



read -rs -p "New DB password: " DBPASS; echo
aws rds modify-db-instance --region ap-southeast-2 \
  --db-instance-identifier matrimonial-staging-db \
  --master-user-password "$DBPASS" --apply-immediately
unset DBPASS

SECRET="arn:aws:secretsmanager:ap-southeast-2:296760889289:secret:matrimonial/prod/DATABASE_URL-ugdBmG"
echo "$SECRET"




testdata & check latest image 

aws ecr describe-images --repository-name matrimonial-api --region ap-southeast-2 --image-ids imageDigest=sha256:be32decd5f8e3bc055ff0d81fa3423ca8ae29e792251d8b3dd2919892b4eeff9 --query "imageDetails[0].{pushed:imagePushedAt,tags:imageTags}"

aws ecs describe-task-definition --task-definition default-matrimonial-api-staging:79 --region ap-southeast-2 --query "taskDefinition.containerDefinitions[0].{image:image,logGroup:logConfiguration.options.\"awslogs-group\",env:environment[?name=='APP_ENV' || name=='TEST_ACCOUNT_PHONES' || name=='TEST_ACCOUNT_EMAILS']}"

aws ecs run-task --cluster default --task-definition default-matrimonial-api-staging:79 --launch-type FARGATE --network-configuration "awsvpcConfiguration={subnets=[subnet-06373da8875e50616,subnet-0ac319ada5133d9e5,subnet-07c1009413c82b96f],securityGroups=[sg-0ba15b7f40bf4bfe5,sg-0d354284f35f9b823],assignPublicIp=ENABLED}" --overrides '{"containerOverrides":[{"name":"Main","command":["python","-m","scripts.create_test_accounts"]}]}' --region ap-southeast-2




testip-whitelist (each time cashfree)

aws ecs list-tasks --cluster default --service-name matrimonial-api-staging --region ap-southeast-2


aws ecs describe-tasks --cluster default --tasks <taskArn> --region ap-southeast-2 --query "tasks[0].attachments[0].details"


aws ec2 describe-network-interfaces --network-interface-ids <eni-id> --region ap-southeast-2 --query "NetworkInterfaces[0].Association.PublicIp"


create_superuser-- aws





aws ecs wait services-stable --region ap-southeast-2 --cluster default --services matrimonial-api-staging

TASK=$(aws ecs list-tasks --region ap-southeast-2 --cluster default --service-name matrimonial-api-staging \
  --desired-status RUNNING --query 'taskArns' --output text | tr '\t' '\n' | \
  xargs -I{} aws ecs describe-tasks --region ap-southeast-2 --cluster default --tasks {} \
    --query 'tasks[0].[startedAt,taskArn]' --output text | sort | tail -n 1 | awk '{print $NF}')
echo "$TASK"

aws ecs describe-tasks --region ap-southeast-2 --cluster default --tasks "$TASK" \
  --query 'tasks[0].containers[0].managedAgents[0].lastStatus'



aws ecs execute-command --region ap-southeast-2 --cluster default --task "$TASK" \
  --container Main --interactive \
  --command "python -m scripts.create_superuser --email techiekamranhussain@gmail.com --first-name Kamran"


local:
python -m scripts.create_superuser --email techiekamranhussain@gmail.com --first-name Kamran


wall max


1,7,12

other,abidi, mehdi,askari 
education, law


1: The MY plan showing correct way but only change is, when i click on my plan then it should display all the plan details
whatever feature or other details there before buying plan. In the say way My Ticket

2: In varification section when user upload document but uploaded docs not showing in admin panel so admin can check and approve. (1st ss)

3: side bar interest section different from inbox, it should be behave in save way chip like acceped, Received etc except photos, photo chip not require in side 
bar interest section but other require in same way

4: Do not show make staff button for normal user in Members section in Admin (3rd ss)

5: Assign to be display only for open ticket not for resolved and closed ticket etc. (2nd ss)
6: There is no to unsupend when i do suspend there should be also unsupend so admin can do.
7: And also add column for all ticket which display which shows the reply to the ticket.
8: same for shortlist profile there is no to remove from shortlist.
9: And also roles and permission matches admin sidebar it looks like its different so easy to understand if same name (4th ss)
9: Is screenshot turn on/off button also be in prod in setting section or only staging we can turn on/off?
10: Add in button in setting to change mobile and email in setting section both require otp to change it.
11: In varification section display current email and mobile in the same place status showing verified (5th ss)

1: When i am assign task to the admin getting interal server error same for chaning email and phone.
2: And also check i think there is bug in near me section, because going near me section continue loading error
3: Decline/Withdraw button not working, is it if i accept so can not withdraw?
4: Do not show Profile written, its showing name this is engough dont needs to write profile in any chip. 

near me fix
----------

{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"ses:SendEmail",
				"ses:SendRawEmail"
			],
			"Resource": [
				"arn:aws:ses:ap-southeast-2:296760889289:identity/shiaahumsafar.com",
				""Resource": "arn:aws:ses:ap-southeast-2:296760889289:identity/techiekamranhussain@gmail.com"
			]
		}
	]
}




{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "ses:SendEmail",
			"Resource": "arn:aws:ses:ap-southeast-2:296760889289:identity/techiekamranhussain@gmail.com"
		}
	]
}


---

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowListBucket",
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::matrimonial-api-photos-296760889289"
    },
    {
      "Sid": "AllowObjectAccess",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::matrimonial-api-photos-296760889289/*"
    }
  ]
}


---
exis
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "AllowListBucket",
			"Effect": "Allow",
			"Action": [
				"s3:ListBucket"
			],
			"Resource": "arn:aws:s3:::matrimonial-api-photos-296760889289"
		},
		{
			"Sid": "AllowPhotoObjectAccess",
			"Effect": "Allow",
			"Action": [
				"s3:GetObject",
				"s3:PutObject",
				"s3:DeleteObject"
			],
			"Resource": "arn:aws:s3:::matrimonial-api-photos-296760889289/photos/*",
			"Resource": "arn:aws:s3:::matrimonial-api-photos-296760889289/photos/*"
		}
	]
}


debug: partner


"$LOCALAPPDATA/Android/Sdk/platform-tools/adb.exe" -s ZD222L3XLW logcat -c






slowest-endpoint:

filter message = "HTTP response"
| stats avg(duration_ms) as avg_ms, max(duration_ms) as max_ms, count(*) as calls by path
| sort avg_ms desc


filter ispresent(duration_ms)
| stats avg(duration_ms) as avg_ms, max(duration_ms) as max_ms, count(*) as calls by path
| sort avg_ms desc
-----

only slow request:
filter message = "Slow request"
| fields @timestamp, path, duration_ms, status_code, user_id
| sort @timestamp desc



filter duration_ms >= 1000
| fields @timestamp, path, duration_ms, status_code, user_id
| sort @timestamp desc

---

One member's request

filter user_id = "test1-o8q7e30w"
| fields @timestamp, path, status_code, duration_ms
| sort @timestamp desc


filter @message like /test1-o8q7e30w/
| fields @timestamp, @message
| sort @timestamp desc

infra alerts script

aws cloudformation deploy --region ap-southeast-2 \
  --stack-name matrimonial-alerts-staging \
  --template-file alerts.yaml \
  --parameter-overrides EnvironmentName=staging AlertEmail=techiekamranhussain@gmail.com ApiServiceName=matrimonial-api-staging
  
  
  
  
  --------
  To capture only the app:

Open the app and wait until the Matches screen loads.
Run adb shell pidof -s com.shiaahumsafar.app and note the number.
Run adb logcat -c, then adb logcat --pid=<number> > app-only-log.txt. Leave it running.
On the phone, open Matches, switch to Near-me, and wait for the error or spinner.
Press Ctrl+C.


backfill thumbail 
aws ecs run-task --cluster default --task-definition default-matrimonial-api-staging:<revision> --launch-type FARGATE --network-configuration "awsvpcConfiguration={subnets=[...],securityGroups=[...],assignPublicIp=ENABLED}" --overrides '{"containerOverrides":[{"name":"Main","command":["python","-m","scripts.backfill_photo_thumbnails","--dry-run"]}]}' --region ap-southeast-2


----
aws ecr describe-images --repository-name matrimonial-api --region ap-southeast-2 --query "sort_by(imageDetails,&imagePushedAt)[-5:].{pushed:imagePushedAt,tags:imageTags,digest:imageDigest}" --output table

aws ecs describe-task-definition --task-definition default-matrimonial-api-staging --region ap-southeast-2 --query "taskDefinition.{revision:revision,image:containerDefinitions[0].image}"


test data
aws ecs describe-task-definition --task-definition default-matrimonial-api-staging:79 --region ap-southeast-2 --query "taskDefinition.containerDefinitions[0].{image:image,logGroup:logConfiguration.options.\"awslogs-group\",env:environment[?name=='APP_ENV' || name=='TEST_ACCOUNT_PHONES' || name=='TEST_ACCOUNT_EMAILS']}"

aws ecs run-task --cluster default --task-definition default-matrimonial-api-staging:79 --launch-type FARGATE --network-configuration "awsvpcConfiguration={subnets=[subnet-06373da8875e50616,subnet-0ac319ada5133d9e5,subnet-07c1009413c82b96f],securityGroups=[sg-0ba15b7f40bf4bfe5,sg-0d354284f35f9b823],assignPublicIp=ENABLED}" --overrides '{"containerOverrides":[{"name":"Main","command":["python","-m","scripts.create_test_accounts"]}]}' --region ap-southeast-2
