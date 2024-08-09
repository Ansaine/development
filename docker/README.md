# Docker

Docker uses -

1. Containerisation

Docker image vs container -

image is like a template/class and container is the instance/object. Container is a running instance of an image. Images are immutable.
Docker Hub stores images

# Commands

docker run -d `<image>`       // runs in detached mode so app keeps on runing even after terminal is closed

docker run -p hostport:containerport `<image>`  // for port mapping

docker run --name `<myname>` -p 80:80 `<image>`  // naming our container

docker rmi `<imageid>`		// this is for removing images

docker rm `<imageid>`			// this is for removing containers. IMP - sometimes we can't delete some images
					// cause their containers(running or not) are not removed. So first we remove those
					// using this command then remove the images using 'rmi'

docker rmi -f `<imageid>` 	// this will directly remove images, shortcut for above steps

docker exec -it `<container-id>` /bin/bash

docker exec -it `<container-id>` /bin/sh	 	// incase bash is not available

docker network ls		//show docker networks
