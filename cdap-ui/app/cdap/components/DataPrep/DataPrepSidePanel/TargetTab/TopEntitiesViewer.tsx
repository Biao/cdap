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
import InspectTooltip from 'components/DataPrep/DataPrepSidePanel/TargetTab/InspectTooltip';
import { ITopEntityMeta } from 'components/DataPrep/DataPrepSidePanel/TargetTab/Types';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const styles = (theme: Theme) => {
  return {
    span: {
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };
};

interface ITopEntitiesViewerProps extends WithStyles<typeof styles> {
  topEntities: ITopEntityMeta[];
  selected: string;
  onInspect: (key: string) => void;
  onSelect: (key: string) => void;
}

interface ITopEntitiesViewerState {
  aboutPageOpen: boolean;
}

function generateTooltipFragment(meta: ITopEntityMeta) {
  return (
    <React.Fragment>
      <div>Resouce</div>
      <div>{meta.name}</div>
      <Divider />
      <div>SCOPE AND USAGE</div>
      <p>{meta.description}</p>
    </React.Fragment>
  );
}

class TopEntitiesViewer extends React.PureComponent<
  ITopEntitiesViewerProps,
  ITopEntitiesViewerState
> {
  public state = {
    aboutPageOpen: false,
  };

  public render() {
    const { classes, topEntities } = this.props;
    if (!topEntities) {
      return null;
    }
    return (
      <Table>
        <TableBody>
          {this.props.topEntities.map((meta) => {
            const isSelected = meta.name === this.props.selected;
            return (
              <InspectTooltip
                title={generateTooltipFragment(meta)}
                open={isSelected}
                disableFocusListener
                disableHoverListener
                disableTouchListener
              >
                <TableRow
                  hover
                  key={meta.name}
                  onClick={(e) => {
                    this.props.onInspect(meta.name);
                  }}
                  selected={isSelected}
                >
                  <TableCell component="th" scope="row">
                    <span
                      className={classes.span}
                      onClick={(e) => {
                        this.props.onSelect(meta.name);
                      }}
                    >
                      {meta.name}
                    </span>
                  </TableCell>
                </TableRow>
              </InspectTooltip>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(TopEntitiesViewer);
