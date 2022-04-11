FROM debian:bullseye
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && \
    apt --yes install --no-install-recommends \
    git \
    git-lfs \
    nodejs \
    npm \
    gnupg2 \
    openssh-client