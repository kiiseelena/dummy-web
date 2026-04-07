# Multi-stage build for Go Backend
FROM golang:1.21-alpine AS builder

WORKDIR /app
COPY go.mod ./
COPY main.go ./

# Build the executable
RUN go build -o main .

# Production stage
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/main .

EXPOSE 8080
CMD ["./main"]
