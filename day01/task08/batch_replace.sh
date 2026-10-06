#!/bin/bash
find . -name "*.js" -exec sed -i 's/myMoule/myModule/g' {} +
