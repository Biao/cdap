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
import T from 'i18n-react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DataPreStore from 'components/DataPrep/store';
import TopEntitiesViewer from 'components/DataPrep/DataPrepSidePanel/TargetTab/TopEntitiesViewer';
import SubEntitiesViewer from 'components/DataPrep/DataPrepSidePanel/TargetTab/SubEntitiesViewer';
import FieldMetadataViewer from 'components/DataPrep/DataPrepSidePanel/TargetTab/FieldMetadataViewer';
import {
  ISubEntityMeta,
  ITopEntityMeta,
} from 'components/DataPrep/DataPrepSidePanel/TargetTab/Types';

import SchemaSearch from 'components/DataPrep/DataPrepSidePanel/TargetTab/SchemaSearch';
import BreadCrumb from 'components/BreadCrumb';

const PREFIX = 'features.DataPrep.DataPrepSidePanel.TargetTab';

interface IDataModelViewerState {
  inspectPath: string;
  searchText: string;
  selectedPath: string[];
  dataModel: any;
  selectedDataModelId: string;
}

const styles = (theme: Theme) => {
  return {
    root: {
      height: '100%',
      width: '100%',
    },
    select: {
      width: '100%',
    },
    viewer: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      // TODO: calculate the right pixel.
      height: 'calc(100% - 50px)',
      overflowY: 'auto' as 'auto',
    },
    table: {
      minWidth: 150,
    },
    button: {
      height: '100%',
    },
    selectLabelRoot: {
      color: 'black',
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    tableName: {
      color: 'black',
      fontSize: '1rem',
      fontWeight: 900,
    },
    selectRoot: {
      minWidth: '10rem',
    },
  };
};
interface IDataModelViewerProps extends WithStyles<typeof styles> {}

class DataModelViewer extends React.Component<IDataModelViewerProps, IDataModelViewerState> {
  public state = {
    inspectPath: '',
    searchText: '',
    selectedPath: [],
    dataModel: DataPreStore.getState().dataprep.selectedTargetSchema,
    selectedDataModelId: 'OMOP',
  };

  public handleChangeSearch = (e) => {
    this.setState({ searchText: e.target.value });
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
      inspectPath: '',
    });
  };

  private extractTopEntityMeta = (name: string): ITopEntityMeta => {
    const description = this.state.dataModel.schema.definitions[name].description;
    return { name, description };
  };

  private onSearchResultSelected = (path: string) => {
    const splits = path.split(' > ');
    this.setState({ selectedPath: splits });
  };

  private getSubEntityMeta(topEntityName: string, subEntityName: string): ISubEntityMeta | null {
    const properties = this.state.dataModel.schema.definitions[topEntityName].properties;
    const requiredProperties = this.state.dataModel.schema.definitions[topEntityName].required;
    if (!properties || !properties[subEntityName]) {
      return null;
    }
    const subEntity = properties[subEntityName];
    const name = subEntityName;
    let type = subEntity.type;
    // A property might be non primitive type. In such case, a reference to the type definition is used.
    // For example: omop > cohort_definition > cohort_initiation_date has the following ref:
    // $ref: '#/definitions/date',
    if (!type && subEntity.$ref) {
      type = subEntity.$ref.slice(subEntity.$ref.lastIndexOf('/') + 1);
    }
    const description = subEntity.description!;
    const required = requiredProperties.indexOf(name) > 0;
    return {
      name,
      type,
      description,
      required,
    };
  }

  public render() {
    const { classes } = this.props;
    if (this.state.selectedPath.length === 2) {
      const subEntity = this.getSubEntityMeta(
        this.state.selectedPath[0],
        this.state.selectedPath[1]
      );
      const previousPaths = [
        {
          // pathname: this.props.route.path,
          pathname: 'omop',
          label: 'OMOP',
          onClick: (e) => {
            e.preventDefault();
            this.setState({
              selectedPath: [],
              inspectPath: '',
            });
          },
        },
        {
          // pathname: this.props.route.path,
          pathname: this.state.selectedPath[0],
          label: this.state.selectedPath[0],
          onClick: (e) => {
            e.preventDefault();
            this.setState({
              selectedPath: [this.state.selectedPath[0]],
              inspectPath: '',
            });
          },
        },
      ];
      return (
        <div className={classes.root}>
          <div className="bread-crumb-wrapper">
            <BreadCrumb
              previousPaths={previousPaths}
              currentStateIcon="place-holder"
              currentStateLabel={this.state.selectedPath[1]}
            />
          </div>

          <div>Select or hover over a resource for more details</div>
          <SchemaSearch onSearchResultSelected={this.onSearchResultSelected} />
          <div className={classes.viewer}>
            <FieldMetadataViewer fieldMetadata={subEntity} />
          </div>
        </div>
      );
    } else if (this.state.selectedPath.length === 1) {
      const properties = this.state.dataModel.schema.definitions[this.state.selectedPath[0]]
        .properties;
      const requiredProperties = this.state.dataModel.schema.definitions[this.state.selectedPath[0]]
        .required;
      const subEntities: ISubEntityMeta[] = [];
      if (!!properties) {
        for (const [key] of Object.entries(properties)) {
          subEntities.push(this.getSubEntityMeta(this.state.selectedPath[0], key));
        }
        const previousPaths = [
          {
            // pathname: this.props.route.path,
            pathname: 'omop',
            label: 'OMOP',
            onClick: (e) => {
              e.preventDefault();
              this.setState({
                selectedPath: [],
                inspectPath: '',
              });
            },
          },
        ];
        return (
          <div className={classes.root}>
            <div className="bread-crumb-wrapper">
              <BreadCrumb
                previousPaths={previousPaths}
                currentStateIcon="place-holder"
                currentStateLabel={this.state.selectedPath[0]}
              />
            </div>

            <div>Select or hover over a resource for more details</div>
            <SchemaSearch onSearchResultSelected={this.onSearchResultSelected} />
            <div className={classes.viewer}>
              <SubEntitiesViewer
                subEntities={subEntities}
                onInspect={this.onTopEntityInspected}
                onSelect={this.onTopEntitySelected}
                selected={this.state.inspectPath}
              />
            </div>
          </div>
        );
        //   if (!!this.state.selectedPath[1]) {
        //     const field = properties[this.state.selectedPath[1]];
        //     Object.keys(field).forEach((key) => {
        //       names.push(key);
        //     });
        //   } else {
        //   }
      }
    } else {
      // At top entities view.
      const topEntities = [];
      Object.keys(this.state.dataModel.schema.discriminator.mapping).forEach((key) => {
        topEntities.push(this.extractTopEntityMeta(key));
      });

      return (
        <div className={classes.root}>
          <p>{T.translate(`${PREFIX}.selectDataModel`)}</p>
          <InputLabel>{T.translate(`${PREFIX}.targetDataModel`)}</InputLabel>
          <Select value={this.state.selectedDataModelId} className={classes.select} disabled>
            <MenuItem value="OMOP">{'OMOP'}</MenuItem>
          </Select>
          <div>Select a data table to view schema or search tables and fields</div>
          <SchemaSearch onSearchResultSelected={this.onSearchResultSelected} />
          <div className={classes.tableName}>Table name</div>
          <div className={classes.viewer}>
            <TopEntitiesViewer
              topEntities={topEntities}
              onInspect={this.onTopEntityInspected}
              onSelect={this.onTopEntitySelected}
              selected={this.state.inspectPath}
            />
          </div>
        </div>
      );
    }
  }
}

export default withStyles(styles)(DataModelViewer);
