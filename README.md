# eduyot-web

GITHUB repository is https://github.com/zbirer/eduyot-web

See web view of application at https://raw.githack.com/zbirer/eduyot-web/main/www/index.html

# What to change on index.html to make it work

Make sure that index.html contains:

`<base href="https://raw.githack.com/zbirer/eduyot-web/main/www/"/>`

<br>Instead of

`<base href="/"/>`

# To update this project

* Open c:\eduyot\eduyot in first side of TotalCommander.
* Open c:\eduyot\github\eduyot-web in second side of TotalCommander.
* Copy www folder from first side to second side.
* Go to GIT tab in IntelliJ and see changed files.
  * Add new unversioned files to GIT.
  * Fix index.html file:
    * Replace `<base href="/"/>`
    * With `<base href="https://raw.githack.com/zbirer/eduyot-web/main/www/"/>`
  * Commit and push.
* Open https://raw.githack.com/zbirer/eduyot-web/main/www/index.html to see the changes.