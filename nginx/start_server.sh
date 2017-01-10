#!/usr/bin/env bash

echo "$API_URL"


FILE=$(find /var/www/squareconcepts/app/scripts/app-*.js | head -1)
echo $FILE
sed -i.bak "s,https://squareconcepts.soloweb.pt,$APP_URL,g" "$FILE"


nginx


while [ -n "$(pgrep nginx)" ]
do
    sleep 5
done
