* export NODE_ENV=production
* export AWS_ACCESS_KEY_ID=AKIAIWKXTGYCOTZW6QYA
* export AWS_SECRET_ACCESS_KEY=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
* export MYSQL_DATABASE_URL=mysql://root:password@123@localhost/wedding_gram?reconnect=true
* forever start --minUptime 1234 --spinSleepTime 3421 ~/weddinggram-app/server/app.js > ~/logs/output.log &