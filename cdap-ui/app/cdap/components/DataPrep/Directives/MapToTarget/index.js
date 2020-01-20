/*
 * Copyright © 2017 Cask Data, Inc.
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

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import T from 'i18n-react';
import classnames from 'classnames';
import { execute } from 'components/DataPrep/store/DataPrepActionCreator';
import DataPrepStore from 'components/DataPrep/store';
import DataPrepActions from 'components/DataPrep/store/DataPrepActions';
import { UncontrolledTooltip } from 'components/UncontrolledComponents';
import { setPopoverOffset } from 'components/DataPrep/helper';
import { preventPropagation } from 'services/helpers';

require('./MapToTarget.scss');
const PREFIX = 'features.DataPrep.Directives.MapToTarget';

const ENCODEOPTIONS = [
  {
    label: T.translate(`${PREFIX}.base64`),
    getDirective: (column) => `encode base64 ${column}`,
  },
  {
    label: T.translate(`${PREFIX}.base32`),
    getDirective: (column) => `encode base32 ${column}`,
  },
  {
    label: T.translate(`${PREFIX}.hex`),
    getDirective: (column) => `encode hex ${column}`,
  },
];
export default class MapToTarget extends Component {
  constructor(props) {
    super(props);
    this.preventPropagation = preventPropagation;
	}

  componentDidUpdate() {
    if (this.props.isOpen && !this.props.isDisabled && this.calculateOffset) {
      this.calculateOffset();
    }
  }

  componentDidMount() {
    this.calculateOffset = setPopoverOffset.bind(
      this,
      document.getElementById(`${this.props.directive}-directive`)
    );
  }

  applyDirective({ label, getDirective = () => {} }) {
    let directive = getDirective(this.props.column);
    if (!directive) {
      return;
    }
	
		this.mapToField(label);

    console.log('execute directive. assuming success');
    this.props.onComplete();
    /*
    execute([directive]).subscribe(
      () => {
        this.props.onComplete();
      },
      (err) => {
        DataPrepStore.dispatch({
          type: DataPrepActions.setError,
          payload: {
            message: err.message || err.response.message,
          },
        });
      }
    );
    */
	}
	
	selectMapToTable(tableName) {
		if (DataPrepStore.getState().dataprep.mapToTable === '') {
      DataPrepStore.dispatch({
          type: DataPrepActions.setMapToTable,
          payload: {
            mapToTable: tableName,
          },
        });
    } else {
			console.error('reset selected table?')
		}
	}

	mapToField(fieldName) {
		let mappedFields = DataPrepStore.getState().dataprep.mappedFields;

    DataPrepStore.dispatch({
			type: DataPrepActions.setMappedFields,
			payload: {
				mappedFields: mappedFields.concat(fieldName),
			},
    });
	}

  generateOptions(name) {
    return {
      label: name,
      getDirective: (column) => `encode hex ${column}`,
    };
  }

  renderDetail() {
    if (!this.props.isOpen || this.props.isDisabled) {
      return;
    }
    let options = [];
    if (DataPrepStore.getState().dataprep.mapToTable === '') {
      const dataModel = DataPrepStore.getState().dataprep.selectedTargetSchema;
      Object.keys(dataModel.schema.discriminator.mapping).forEach((key) => {
        options.push(this.generateOptions(key));
      });
      return (
				<div className="encode-decode-options second-level-popover" onClick={this.preventPropagation}>
					{options.map((option, i) => {
						return (
							<div className="option" key={i} onClick={() => this.selectMapToTable(option.label)}>
								{option.label}
							</div>
						);
					})}
				</div>
      );
    } else {
      const dataModel = DataPrepStore.getState().dataprep.selectedTargetSchema;
			const key = DataPrepStore.getState().dataprep.mapToTable;
			const mappedFields = DataPrepStore.getState().dataprep.mappedFields;

      Object.keys(dataModel.schema.definitions[key].properties).forEach((key) => {
				if (mappedFields.indexOf(key) === -1) {
					options.push(this.generateOptions(key));
				}
      });
			return (
				<div className="encode-decode-options second-level-popover" onClick={this.preventPropagation}>
					{options.map((option, i) => {
						return (
							<div className="option" key={i} onClick={() => this.applyDirective(option)}>
								{option.label}
							</div>
						);
					})}
				</div>
			);
		}
  }
  render() {
    let id = `${this.props.directive}-directive`;
    return (
      <div>
        <div
          id={id}
          className={classnames('encode-decode-directive clearfix action-item', {
            active: this.props.isOpen && !this.props.isDisabled,
            disabled: this.props.isDisabled,
          })}
        >
          <span>{this.props.mainMenuLabel}</span>

          <span className="float-right">
            <span className="fa fa-caret-right" />
          </span>

          {this.renderDetail()}
        </div>
        {this.props.isDisabled && this.props.disabledTooltip ? (
          <UncontrolledTooltip target={id} delay={{ show: 250, hide: 0 }}>
            {this.props.disabledTooltip}
          </UncontrolledTooltip>
        ) : null}
      </div>
    );
  }
}

MapToTarget.defaultProps = {
  options: ENCODEOPTIONS,
  directive: 'encode',
  mainMenuLabel: T.translate(`${PREFIX}.title`),
};

MapToTarget.propTypes = {
  column: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpen: PropTypes.bool,
  isDisabled: PropTypes.bool,
  disabledTooltip: PropTypes.string,
  onComplete: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  directive: PropTypes.string,
  mainMenuLabel: PropTypes.string,
};