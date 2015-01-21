/*
 * Copyright © 2015 Cask Data, Inc.
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

package co.cask.cdap.cli.command;

import co.cask.cdap.cli.CLIConfig;
import co.cask.cdap.cli.ElementType;
import co.cask.cdap.cli.exception.CommandInputError;
import co.cask.cdap.cli.util.AbstractAuthCommand;
import co.cask.cdap.client.PreferencesClient;
import co.cask.cdap.common.conf.Constants;

import java.io.PrintStream;
import java.util.Map;

/**
 * Abstract Set Preferences Class.
 */
public abstract class AbstractSetPreferencesCommand extends AbstractAuthCommand {
  private final PreferencesClient client;
  private final ElementType type;

  protected AbstractSetPreferencesCommand(ElementType type, PreferencesClient client, CLIConfig cliConfig) {
    super(cliConfig);
    this.type = type;
    this.client = client;
  }

  protected abstract void printSuccessMessage(PrintStream printStream, ElementType type);

  protected void setPreferences(String[] programIdParts, PrintStream printStream, Map<String, String> args)
    throws Exception {
    switch (type) {
      case INSTANCE:
        if (programIdParts.length != 0) {
          throw new CommandInputError(this);
        }
        client.setInstancePreferences(args);
        printSuccessMessage(printStream, type);
        break;

      case NAMESPACE:
        if (programIdParts.length != 1) {
          throw new CommandInputError(this);
        }
        client.setNamespacePreferences(programIdParts[0], args);
        printSuccessMessage(printStream, type);
        break;

      case APP:
        // todo : change this to 2 when namespace id is part of the argument.
        if (programIdParts.length != 1) {
          throw new CommandInputError(this);
        }
        client.setApplicationPreferences(Constants.DEFAULT_NAMESPACE, programIdParts[0], args);
        printSuccessMessage(printStream, type);
        break;

      case FLOW:
        // todo : change this to 3 when namespace id is part of the argument.
        if (programIdParts.length != 2) {
          throw new CommandInputError(this);
        }
        client.setProgramPreferences(Constants.DEFAULT_NAMESPACE, programIdParts[0], type.getPluralName(),
                                     programIdParts[1], args);
        printSuccessMessage(printStream, type);
        break;

      case PROCEDURE:
        // todo : change this to 3 when namespace id is part of the argument.
        if (programIdParts.length != 2) {
          throw new CommandInputError(this);
        }
        client.setProgramPreferences(Constants.DEFAULT_NAMESPACE, programIdParts[0], type.getPluralName(),
                                     programIdParts[1], args);
        printSuccessMessage(printStream, type);
        break;

      case MAPREDUCE:
        // todo : change this to 3 when namespace id is part of the argument.
        if (programIdParts.length != 2) {
          throw new CommandInputError(this);
        }
        client.setProgramPreferences(Constants.DEFAULT_NAMESPACE, programIdParts[0], type.getPluralName(),
                                     programIdParts[1], args);
        printSuccessMessage(printStream, type);
        break;

      case WORKFLOW:
        // todo : change this to 3 when namespace id is part of the argument.
        if (programIdParts.length != 2) {
          throw new CommandInputError(this);
        }
        client.setProgramPreferences(Constants.DEFAULT_NAMESPACE, programIdParts[0], type.getPluralName(),
                                     programIdParts[1], args);
        printSuccessMessage(printStream, type);
        break;

      case SERVICE:
        // todo : change this to 3 when namespace id is part of the argument.
        if (programIdParts.length != 2) {
          throw new CommandInputError(this);
        }
        client.setProgramPreferences(Constants.DEFAULT_NAMESPACE, programIdParts[0], type.getPluralName(),
                                     programIdParts[1], args);
        printSuccessMessage(printStream, type);
        break;

      case SPARK:
        // todo : change this to 3 when namespace id is part of the argument.
        if (programIdParts.length != 2) {
          throw new CommandInputError(this);
        }
        client.setProgramPreferences(Constants.DEFAULT_NAMESPACE, programIdParts[0], type.getPluralName(),
                                     programIdParts[1], args);
        printSuccessMessage(printStream, type);
        break;

      default:
        throw new IllegalArgumentException("Unrecognized Element Type for Preferences " + type.getPrettyName());
    }
  }
}
