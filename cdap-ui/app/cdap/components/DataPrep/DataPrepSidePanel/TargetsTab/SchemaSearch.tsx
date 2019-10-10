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

const PREFIX = 'features.DataPrep.DataPrepSidePanel.TargetSchemaTab';

const styles = (theme) => {
  return {
    root: {
      position: 'relative',
      flex: 1,
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
      position: 'absolute',
      right: '9px',
      top: '5px',
      color: '',
      fontSize: '13px',
      lineHeight: '1.25',
    },
    faTimesCircle: {
      cursor: 'pointer',
    },
  };
};

interface ISchemaSearchState {
  searchText: string;
}

class SchemaSearch extends React.PureComponent<WithStyles, ISchemaSearchState> {
  private searchBox = React.createRef<HTMLInputElement>();

  public state: ISchemaSearchState = {
    searchText: '',
  };

  constructor(props) {
    super(props);
  }

  public render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <input
          type="text"
          className={`form-control ${classes.formControl}`}
          placeholder={T.translate(`${PREFIX}.searchPlaceholder`)}
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
      </div>
    );
  }

  private handleChangeSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  private clearSearch = () => {
    this.setState({ searchText: '' });
  };
}

export default withStyles(styles)(SchemaSearch);
