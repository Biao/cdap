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
import React, { Component } from 'react';
import { Theme } from 'services/ThemeHelper';
import LoadingSVGCentered from 'components/LoadingSVGCentered';
import Loadable from 'react-loadable';
import classnames from 'classnames';
import ee from 'event-emitter';
import globalEvents from 'services/global-events';
import Button from '@material-ui/core/Button';
import * as MaterialStyles from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = () => {
  return {
    root: {
      margin: '20px 10px',
    },
    selectLabelRoot: {
      color: 'black',
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    selectRoot: {
      minWidth: '10rem',
    },
  };
};

interface ITargetsTabProps extends WithStyles<typeof styles> {
  className: string;
  children: React.ReactNode;
}

interface ITargetsTabState {
  schemaId: string;
}

class TargetsTab extends React.PureComponent<ITargetsTabProps, ITargetsTabState> {
  public state = {
    schemaId: 'OMOP',
  };

  constructor(props: Readonly<ITargetsTabProps>) {
    super(props);
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <InputLabel htmlFor="target-schema-selection" classes={{ root: classes.selectLabelRoot }}>
          Target standard
        </InputLabel>
        <Select value={this.state.schemaId} classes={{ root: classes.selectRoot }}>
          <MenuItem value="OMOP">OMOP</MenuItem>
        </Select>
      </div>
    );
  }
}

const TargetsTabWithStyles = withStyles(styles)(TargetsTab);

export default function TargetsTabWrapper() {
  return <TargetsTabWithStyles />;
}
