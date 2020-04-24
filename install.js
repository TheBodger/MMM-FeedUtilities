#install all the feed repositories after clearing them out - be careful - it goes bye bye
#must start in modules

#dont forget the chmod +x run this in bash land

#go back to modules
cd ../

#
#rm -r MMM-FeedDisplay
git clone https://github.com/TheBodger/MMM-FeedDisplay

#rm -r MMM-FeedProvider-RSS
git clone https://github.com/TheBodger/MMM-FeedProvider-RSS
#rm -r MMM-FeedProvider-Twitter
git clone https://github.com/TheBodger/MMM-FeedProvider-Twitter
#rm -r MMM-FeedProvider-Instagram
git clone https://github.com/TheBodger/MMM-FeedProvider-Instagram
#rm -r MMM-FeedProvider-Reddit
git clone https://github.com/TheBodger/MMM-FeedProvider-Reddit

#go back to mm root

cd ../

#install all the dependencies here so we dont create humongous directories of copies of npm modules

npm install axios
npm install winston
npm install moment
npm install feedparser
npm install request
npm install fs
npm install twitter
npm install htmlparser2
npm install isprofanity
