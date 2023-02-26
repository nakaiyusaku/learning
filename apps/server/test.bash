#!/usr/bin/env bash

echo "Please Type Hiragana"
read hiragana

curl -sS "http://localhost:12345/hiragana/$hiragana"