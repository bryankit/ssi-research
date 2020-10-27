FROM ghabxph/indy-sdk:ubuntu-18.04

LABEL author="ghabxph <me@ghabxph.info>"
LABEL nodejs_version="12.x"

# Install NodeJS
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

# Install yarn
RUN npm instal --global yarn