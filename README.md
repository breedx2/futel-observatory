# futel-observatory
Realtime status of the futel network.

# requirements

For local development you will need to clone [this repo](https://github.com/breedx2/futel-sqs-consumer). It will need to be a peer of this repo as the reference to it in the package-lock.json is specific:
```
"futel-sqs-consumer": "file:../futel-sqs-consumer",
```

# running
```
npm install
npm run build && npm run app
```
