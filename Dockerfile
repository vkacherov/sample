FROM nginx:alpine 
ADD build /usr/share/nginx/html/ 
EXPOSE 80 443
