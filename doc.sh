rm -rf dist &&
yarn build &&
cd doc &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:botshen/gulu-ui-2-website.git &&
git push -f -u origin master &&
cd -
echo https://botshen.github.io/gulu-ui-2-website/example.html#/