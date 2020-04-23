#install all the feed repositories after clearing them out - be careful - it goes bye bye
#must start in modules

#dont forget the chmod +x run this in bash land

cd ../

#
rm -r https://github.com/TheBodger/MMM-FeedDisplay
git clone https://github.com/TheBodger/MMM-FeedDisplay

rm -r MMM-FeedProvider-RSS
git clone https://github.com/TheBodger/MMM-FeedProvider-RSS
rm -r MMM-FeedProvider-Twitter
git clone https://github.com/TheBodger/MMM-FeedProvider-Twitter
rm -r MMM-FeedProvider-Instagram
git clone https://github.com/TheBodger/MMM-FeedProvider-Instagram
rm -r MMM-FeedProvider-Reddit
git clone https://github.com/TheBodger/MMM-FeedProvider-Reddit

cd MMM-FeedProvider-RSS/
npm install
cd ../

cd MMM-FeedProvider-Twitter/
npm install
cd ../

cd MMM-FeedProvider-Instagram/
npm install
cd ../

cd MMM-FeedProvider-Reddit/
npm install
cd ../

cd MMM-FeedDisplay/
npm install
cd ../
