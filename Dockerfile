# Use this as a base image
FROM nginx:latest

# Maintainer Info
MAINTAINER Ighor Martins <ighor.martins@gmail.com>

ENV LANG pt_PT.UTF-8

# copy application code to /var/www/squareconcepts
COPY dist /var/www/squareconcepts/app
COPY nginx/start_server.sh /var/www/squareconcepts
RUN chmod u+x /var/www/squareconcepts/start_server.sh


# copy nginx configuration file

COPY nginx/default.conf /etc/nginx/conf.d/


CMD ["/var/www/squareconcepts/start_server.sh"]
