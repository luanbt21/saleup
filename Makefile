USERNAME=luanbt21

pocketbase:
	docker build --platform linux/amd64 -t $(USERNAME)/pocketbase .
	# docker push $(USERNAME)/pocketbase