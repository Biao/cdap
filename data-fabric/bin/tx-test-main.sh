#
# Copyright 2012-2014 Continuuity,Inc. All Rights Reserved.
#

#!/bin/sh

# Attempt to set APP_HOME
# Resolve links: $0 may be a link
PRG="$0"
bin=`dirname "${BASH_SOURCE-$0}"`
bin=`cd "$bin"; pwd`
lib="$bin"/../lib
conf="$bin"/../conf
script=`basename $0`

# Need this for relative symlinks.
while [ -h "$PRG" ] ; do
    ls=`ls -ld "$PRG"`
    link=`expr "$ls" : '.*-> \(.*\)$'`
    if expr "$link" : '/.*' > /dev/null; then
        PRG="$link"
    else
        PRG=`dirname "$PRG"`"/$link"
    fi
done
SAVED="`pwd`"
cd "`dirname \"$PRG\"`/.."
APP_HOME="`pwd -P`"

# In other environment, the jars are expected to be in <HOME>/lib directory.
# Load all the jar files. Not ideal, but we need to load only the things that
# is needed by this script.
if [ "$CLASSPATH" = "" ]; then
  CLASSPATH=${lib}/*
else
  CLASSPATH=$CLASSPATH:${lib}/*
fi

# Load the configuration too.
if [ -d "$conf" ]; then
  CLASSPATH=$CLASSPATH:"$conf"/
fi

java -cp ${CLASSPATH} -Dscript=$script com.continuuity.data2.transaction.TransactionServiceMain "$@"