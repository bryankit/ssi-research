FROM ghabxph/indy-sdk:nodejs

LABEL author="ghabxph <me@ghabxph.info>"

# Copy all files in app folder
COPY . /app

# Sets workdir inside /app
WORKDIR /app

# Installs node dependencies (yarn)
RUN yarn

# Run the container
CMD tail -f
