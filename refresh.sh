#install all the feed repositories after clearing them out - be careful - it goes bye bye
#must start in modules

#dont forget the chmod +x run this in bash land

#go back to modules
cd ../

#

cd MMM-FeedDisplay
git fetch
git reset --hard
git pull
cd ../

cd MMM-FeedProvider-RSS
git fetch
git reset --hard
git pull
cd ../

cd MMM-FeedProvider-Twitter
git fetch
git reset --hard
git pull
cd ../

cd MMM-FeedProvider-Instagram
git fetch
git reset --hard
git pull
cd ../

cd MMM-FeedProvider-Reddit
git fetch
git reset --hard
git pull
cd ../

#go back to mm root

cd ../

#reinstall all the dependencies 

npm install axios
npm install winston
npm install feedparser
npm install request
npm install twitter
npm install htmlparser2
npm install isprofanity
