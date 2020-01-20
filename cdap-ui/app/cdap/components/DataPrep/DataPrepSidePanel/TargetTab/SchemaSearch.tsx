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
import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import T from 'i18n-react';
import { Theme } from '@material-ui/core';
import Fuse from 'fuse.js';
import DataPreStore from 'components/DataPrep/store';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import If from 'components/If';
import classnames from 'classnames';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import throttle from 'lodash/throttle';

const PREFIX = 'features.DataPrep.DataPrepSidePanel.TargetSchemaTab';

interface ISchemaSearchState {
  searchText: string;
  selection: number;
  showingResult: boolean;
  activeResults: ISearchableField[];
  dataModel: any;
}

const styles = (theme: Theme) => ({
  root: {
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24952
    position: 'relative' as 'relative',
    flex: 1,
  },
  paper: {
    maxHeight: '400px',
    width: '100%',
  },
  menulist: {
    overflow: 'scroll',
    maxHeight: '400px',
  },
  formControl: {
    display: 'inline-block',
    borderRadius: '13px',
    color: '#495057',
    height: '26px',
    width: '100%',
    paddingRight: '25px',
  },
  fa: {
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/24952
    position: 'absolute' as 'absolute',
    right: '9px',
    top: '5px',
    fontSize: '13px',
    lineHeight: 1.25,
  },
  faTimesCircle: {
    cursor: 'pointer',
  },
  autocompleteContainer: {
    position: 'relative' as 'relative',
  },
  autocomplete: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.grey[400]}`,
    zIndex: 101,
    padding: '5px 0',
    boxShadow: `0 3px 10px 0 ${theme.palette.grey[200]}`,
    maxHeight: '290px',
    overflow: 'scroll',
  },
  autocompleteRow: {
    lineHeight: '1.5rem',
    padding: '8px 10px',
    cursor: 'pointer',
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[600],
    },
    '& div': {
      overflow: 'hidden',
      whiteSpace: 'nowrap' as 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  highlight: {
    backgroundColor: `${theme.palette.blue[100]} !important`,
    color: 'white',
  },
});
interface ISchemaSearchProps extends WithStyles<typeof styles> {
  onSearchResultSelected: (path: string) => {};
}

interface ISearchableField {
  path: string;
  name: string;
  definition: string;
}
class SchemaSearch extends React.PureComponent<ISchemaSearchProps, ISchemaSearchState> {
  private searchBox = React.createRef<HTMLInputElement>();

  public state: ISchemaSearchState = {
    activeResults: [],
    searchText: '',
    selection: 0,
    showingResult: false,
    dataModel: DataPreStore.getState().dataprep.selectedTargetSchema,
  };

  constructor(props) {
    super(props);
  }

  private getSearchableDefinitions(): ISearchableField[] {
    const results = [];
    Object.keys(this.state.dataModel.schema.discriminator.mapping).forEach((key) => {
      results.push(this.extractTopEntityMeta(key));
      Object.keys(this.state.dataModel.schema.definitions[key].properties).forEach((property) => {
        results.push(this.getSubEntityMeta(key, property));
      });
    });
    return results;
  }

  private extractTopEntityMeta = (name: string): ISearchableField => {
    const description = this.state.dataModel.schema.definitions[name].description;
    return { path: name, name, definition: description };
  };

  private getSubEntityMeta(topEntityName: string, subEntityName: string): ISearchableField | null {
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
      path: `${topEntityName} > ${subEntityName}`,
      name: subEntityName,
      definition: description,
    };
  }

  private doSearch(query: string) {
    const fuseOptions = {
      keys: ['name', 'definition'],
      caseSensitive: false,
      threshold: 0.5,
      shouldSort: true,
      includeScore: true,
      location: 0,
      distance: 100,
      minMatchCharLength: 2,
      maxPatternLength: 32,
    };
    console.log(this.getSearchableDefinitions().length);
    const fuse = new Fuse(this.getSearchableDefinitions(), fuseOptions);
    const results = fuse.search(query);
    const activeResults = results.map((result) => {
      // result.item.path += result.score;
      return result.item as ISearchableField;
    });
    this.setState({ showingResult: true, activeResults });
  }

  private handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (this.searchBox && this.searchBox.current.contains(event.target as HTMLElement)) {
      return;
    }

    this.setState({ showingResult: false });
  };

  private handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.setState({ showingResult: false });
    }
  };

  private handleBlur = () => {
    if (!this.state.showingResult) {
      return;
    }

    // const exactMatch = matches.filter((dataset) => dataset.name === value);
    if (this.state.activeResults.length > 0) {
      // handleRowClick(exactMatch[0]);
    } else {
      // eventEmitter.emit(DatasetSelectedEvent, '', null, false);
    }
    this.setState({ showingResult: false });
  };

  private handleRowClick = (path: string) => {
    this.props.onSearchResultSelected(path);
    this.setState({ showingResult: false });
  };

  public render() {
    const { classes } = this.props;
    return (
      <ClickAwayListener onClickAway={this.handleBlur}>
        <div className={classes.root}>
          <input
            type="text"
            className={`form-control ${classes.formControl}`}
            // placeholder={T.translate(`${PREFIX}.searchPlaceholder`)}
            placeholder="test"
            value={this.state.searchText}
            onChange={this.handleChangeSearch}
            ref={this.searchBox}
          />
          {this.state.searchText.length === 0 ? (
            <span className={`fa fa-search ${classes.fa}`} />
          ) : (
            <span
              className={`fa fa-times-circle ${classes.fa} ${classes.faTimesCircle}`}
              onClick={this.clearSearch}
            />
          )}
          <div className={classes.autocompleteContainer}>
            <If condition={this.state.showingResult && this.state.activeResults.length > 0}>
              <div className={classes.autocomplete}>
                {this.state.activeResults.map((result, i) => {
                  return (
                    <div
                      className={classnames(classes.autocompleteRow, {
                        [classes.highlight]: i === this.state.selection,
                      })}
                      onClick={(e) => {
                        this.handleRowClick(result.path);
                      }}
                      key={result.path}
                    >
                      <div>{result.path}</div>
                      <div>{result.definition}</div>
                    </div>
                  );
                })}
              </div>
            </If>
          </div>
        </div>
      </ClickAwayListener>
    );
  }

  private handleChangeSearch = (e) => {
    this.setState({ searchText: e.target.value });
    this.doSearch(e.target.value);
  };

  private clearSearch = () => {
    this.setState({ searchText: '' });
  };
}

export default withStyles(styles)(SchemaSearch);
