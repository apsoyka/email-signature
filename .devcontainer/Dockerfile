FROM public.ecr.aws/ubuntu/ubuntu:23.10
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && \
    apt --yes install --no-install-recommends \
    openssh-client \
    gnupg2
