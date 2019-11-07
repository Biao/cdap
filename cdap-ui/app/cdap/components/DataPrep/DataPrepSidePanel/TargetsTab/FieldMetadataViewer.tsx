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
import React, { useState } from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import InspectTooltip from 'components/DataPrep/DataPrepSidePanel/TargetsTab/InspectTooltip';
import { ISubEntityMeta } from 'components/DataPrep/DataPrepSidePanel/TargetsTab/Types';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => {
  return {
    root: {
      // position: 'relative',
      flex: 1,
    },
  };
};

interface IFieldMetadataViewerProps extends WithStyles<typeof styles> {
  fieldMetadata: ISubEntityMeta;
}

interface IFieldMetadataViewerState {}

interface Row {
  label: string;
  value: string;
}

function createRows(fieldMetadata: ISubEntityMeta): Row[] {
  const requiredString = fieldMetadata.required ? 'Yes' : 'No';
  return [
    { label: 'Field', value: fieldMetadata.name },
    { label: 'Required', value: requiredString },
    { label: 'Type', value: fieldMetadata.type },
    { label: 'Definition', value: fieldMetadata.description },
  ];
}

class FieldMetadataViewer extends React.PureComponent<
  IFieldMetadataViewerProps,
  IFieldMetadataViewerState
> {
  public state = {};

  public render() {
    const { classes } = this.props;
    const fieldMetadata = this.props.fieldMetadata;
    if (!fieldMetadata) {
      return null;
    }
    return (
      <Table>
        <TableBody>
          {createRows(fieldMetadata).map((row) => {
            return (
              <TableRow key={row.label}>
                <TableCell component="th" scope="row">
                  <span>{row.label}</span>
                </TableCell>
                <TableCell component="th" scope="row">
                  <span>{row.value}</span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(FieldMetadataViewer);
