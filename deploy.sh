#!/usr/bin/env bash

set -x -e

aws s3 cp . s3://alembic.com.au \
	--acl public-read \
	--recursive \
	--exclude "*" \
	--include "assets/**" \
	--include favicon.ico \
	--include index.html
		
