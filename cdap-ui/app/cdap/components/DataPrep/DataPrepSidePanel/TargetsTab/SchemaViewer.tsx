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
import { Theme } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DataPreStore from 'components/DataPrep/store';
import TopEntitiesViewer from 'components/DataPrep/DataPrepSidePanel/TargetsTab/TopEntitiesViewer';
import { ITopEntityMeta } from 'components/DataPrep/DataPrepSidePanel/TargetsTab/Types';

interface ISchemaViewerState {
  schema: any;
  inspectPath: string;
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
    table: {
      minWidth: 150,
    },
    button: {
      height: '100%',
    },
  };
};
interface ISchemaViewerProps extends WithStyles<typeof styles> {}

function createData(
  name: string,
  calories?: number,
  fat?: number,
  carbs?: number,
  protein?: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('CARE_SITE'),
  createData('CDM_SOURCE'),
  createData('Eclair'),
  createData('Cupcake'),
  createData('Gingerbread'),
];

class SchemaViewer extends React.Component<ISchemaViewerProps, ISchemaViewerState> {
  public state = {
    schema: DataPreStore.getState().dataprep.selectedTargetSchema,
    inspectPath: '',
    selectedPath: [],
  };

  public onListItemClicked = (key: string) => {
    this.setState({
      selectedPath: this.state.selectedPath.concat([key]),
    });
  };

  public onTopEntityInspected = (key: string) => {
    this.setState({
      inspectPath: key,
    });
  };

  public onTopEntitySelected = (key: string) => {
    this.setState({
      selectedPath: this.state.selectedPath.concat([key]),
    });
  };

  private extractTopEntityMeta = (ref: string): ITopEntityMeta => {
    // ref should be something like this: '#/definitions/{name}'.
    const name = ref.split('/')[2];
    if (!this.state.schema.schema.definitions[name]) {
      debugger;
    }
    const description = this.state.schema.schema.definitions[name].description;
    return { name, description };
  };

  public render() {
    const { classes } = this.props;
    let names = [];
    if (this.state.selectedPath.length !== 0) {
      // const properties = this.state.schema.schema.definitions[this.state.selectedPath[0]]
      //   .properties;
      // if (!!properties) {
      //   if (!!this.state.selectedPath[1]) {
      //     const field = properties[this.state.selectedPath[1]];
      //     Object.keys(field).forEach((key) => {
      //       names.push(key);
      //     });
      //   } else {
      //     Object.keys(properties).forEach((key) => {
      //       names.push(key);
      //     });
      //   }
      // }

      return <div>Under Construction!</div>;
    } else {
      // At top entities view
      names = this.state.schema.schema.oneOf.map((value) => this.extractTopEntityMeta(value.$ref));
    }
    return (
      <div className={classes.root}>
        <TopEntitiesViewer
          topEntities={names}
          onInspect={this.onTopEntityInspected}
          onSelect={this.onTopEntitySelected}
          selected={this.state.inspectPath}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SchemaViewer);
