docker run --network my-network --name nextjs-container nextjs-image
# docker run --network my-network --link nextjs-container:nextjs --publish 80:80 nginx-image