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
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DataPreStore from 'components/DataPrep/store';
import { Schema } from 'inspector';

interface ISchemaViewerState {
  schema: any;
  selectedPath: string[];
}

const styles = (theme: Theme) => {
  return {
    root: {
      width: '100%',
      height: 400,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  };
};
interface ISchemaViewerProps extends WithStyles<typeof styles> {}

function extractName(ref: string): string {
  // ref should be something like this: '#/definitions/{name}'.
  return ref.split('/')[2];
}

class SchemaViewer extends React.Component<ISchemaViewerProps, ISchemaViewerState> {
  public state = {
    schema: DataPreStore.getState().dataprep.selectedTargetSchema,
    selectedPath: [],
  };

  public onListItemClicked = (key: string) => {
    this.setState({
      selectedPath: this.state.selectedPath.concat([key]),
    });
  };

  public render() {
    const { classes } = this.props;
    let names = [];
    if (this.state.selectedPath.length !== 0) {
      const properties = this.state.schema.schema.definitions[this.state.selectedPath[0]]
        .properties;
      if (!!properties) {
        if (!!this.state.selectedPath[1]) {
          const field = properties[this.state.selectedPath[1]];
          Object.keys(field).forEach((key) => {
            names.push(key);
          });
        } else {
          Object.keys(properties).forEach((key) => {
            names.push(key);
          });
        }
      }
    } else {
      names = this.state.schema.schema.oneOf.map((value) => extractName(value.$ref));
    }
    return (
      <List className={classes.root}>
        {names.map((name) => {
          return (
            <div>
              <Divider />
              <ListItem
                button
                key={name}
                onClick={(e) => {
                  this.onListItemClicked(name);
                }}
              >
                <ListItemText primary={name} />
              </ListItem>
            </div>
          );
        })}
      </List>
    );
  }
}

export default withStyles(styles)(SchemaViewer);
