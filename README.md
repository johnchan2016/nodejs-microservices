# build image
docker build -t="your-name/image-name:<TAG>" .

# nodejs-microservices
1. $ minikube ip
2. sudo nano /etc/hosts
3. input
192.168.64.2  bookservice-demo.com
192.168.64.2  catalogservice-demo.com
192.168.64.2  orderservice-demo.com
$echo 


# upload package
1. git clone repo
2. build helm package
  $ helm package chart/*
3. create / update index.yaml
  $ helm repo index --url repo . 
4. push to github
  $ git add . && git commit -m "Initial commit" && git push origin master