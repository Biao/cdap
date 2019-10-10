/*
 * Copyright © 2019 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
*/
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function SchemaViewer() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {['PERSON', 'OBSERVATOIN_PERIOD', 'VISIT_OCCURRENCE'].map((value) => {
        return (
          <div>
            <Divider />
            <ListItem button key={value}>
              <ListItemText primary={value} />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
}
