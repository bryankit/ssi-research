FROM ubuntu:18.04

LABEL author="ghabxph <me@ghabxph.info>"

# Install indy
RUN apt-get update && \
    apt-get install -y gnupg2 software-properties-common && \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys CE7709D068DB5E88 && \
    add-apt-repository "deb https://repo.sovrin.org/sdk/deb bionic stable" && \
    apt-get update && \
    apt-get install -y libindy libnullpay libvcx indy-cli && \
    apt-get clean

# Install utilities
RUN apt-get update && \
    apt-get install -y build-essential curl && \
    apt-get clean