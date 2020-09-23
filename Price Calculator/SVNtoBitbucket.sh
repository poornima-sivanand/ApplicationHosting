reponame=`echo $2 | cut -d "/" -f6`
git svn clone --username $1 --stdlayout $2 $reponame
cd $reponame
pwd
git remote add upstream https://$1%40bcgov@$3
git push -f --set-upstream upstream master
git for-each-ref refs/remotes/origin/tags | cut -d / -f 5- |
           while read ref
               do
                  git tag -a $ref -m"convert to git tag" "refs/remotes/origin/tags/$ref"
                  git push --set-upstream upstream master ":refs/heads/tags/$ref"
                  git push --set-upstream upstream master tag "$ref"
               done