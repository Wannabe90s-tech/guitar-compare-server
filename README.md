# Guitar-compare
## API for project guitar-compare
## Install 
```shell
npm install
```
## RUN server
```shell
npm run serve
```
## Bulid Images
```shell
gcloud builds submit --tag gcr.io/wannabe90s/guitar-compare-server
```
## Deploy to cloud run (UAT)
```shell
gcloud run deploy guitar-compare-server --image gcr.io/wannabe90s/guitar-compare-server --platform managed --region asia-southeast1 --allow-unauthenticated
```
