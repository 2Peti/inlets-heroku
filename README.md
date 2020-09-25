# Inlets Reverse Proxy

## What is this?

Alternative of `ngrok` or `localtunnel`. Since it can be deployed to **heroku**, you can have your own **fixed address**, which is better for testing a **webhook server**.

## Setup the Heroku App

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/locmai0808/inlets-heroku/tree/master)

## How to use

Install `inlets` CLI:

```bash
# Install to local directory
curl -sLS https://get.inlets.dev | sh

# Install to /usr/local/bin/
curl -sLS https://get.inlets.dev | sudo sh
```

Update your `bashrc` or `bash_profile`:

```bash
export TOKEN=""
export REMOTE="app-name.herokuapp.com"
export LOCALPORT=8080

alias king='inlets client --remote=$REMOTE --token $TOKEN --upstream=http://127.0.0.1:$LOCALPORT'
```

Run `king` in terminal to expose your localhost to the Internet.
