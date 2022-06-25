#!/bin/bash

# 同步模板列表

fe form basic-form basic-form  -d src/templates/form
fe form step-form step-form  -d src/templates/form
fe form advanced-form advanced-form  -d src/templates/form
fe list basic-table basic-table  -d src/templates/list
fe list edit-table edit-table  -d src/templates/list
fe list sort-table sort-table  -d src/templates/list
fe page page  -d src/templates/
