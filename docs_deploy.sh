version=`cat package.json | grep version | awk -F '"' '{print $4}'`
echo $version
# package=`sed 's/\"@jd\/fecg-docs\"/\"fecg-docs\"/' ./package.json`
# echo $package > package.json

npm run docs:build

# package=`sed 's/\"fecg-docs\"/\"@jd\/fecg-docs\"/' ./package.json`
# echo $package > package.json
# mkdir $version
# mv docs-dist $version
scp -r ./docs-dist/* admin@10.170.224.227:/export/sites/static.360buyimg.com/fecg-docs/
