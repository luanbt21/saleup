FROM golang AS build-stage
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY *.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -o /pocketbase

FROM gcr.io/distroless/base-debian11 AS build-release-stage
WORKDIR /
COPY --from=build-stage /pocketbase /pocketbase
EXPOSE 8080
# USER nonroot:nonroot
CMD ["/pocketbase", "serve", "--http=0.0.0.0:8080"]