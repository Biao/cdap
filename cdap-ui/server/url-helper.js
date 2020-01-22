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

/* global module */

const REQUEST_ORIGIN_ROUTER = 'ROUTER';
const REQUEST_ORIGIN_MARKET = 'MARKET';

const HOST_PLACEHOLDER = 'https://www.google.com';

function constructUrl(cdapConfig, path, origin = REQUEST_ORIGIN_ROUTER) {
  if (!cdapConfig) {
    return null;
  }
  path = path && path[0] === '/' ? path.slice(1) : path;
  if (origin === REQUEST_ORIGIN_MARKET) {
    const url = new URL(path, HOST_PLACEHOLDER);
    if (url.searchParams.has('marketName')) {
      const marketName = url.searchParams.get('marketName');
      console.log(`marketName = ${marketName}`);
      const found = cdapConfig['market.base.urls'].find(element => element.name === marketName);
      if (!found) {
        return null;
      }
      console.log(`returned url = ${found.url}${url.pathname}`);
      return `${found.url}${url.pathname}`;
    } else {
      console.log(`${cdapConfig['market.base.url']}/${path}`);
      return `${cdapConfig['market.base.url']}/${path}`;
    }

  }
  let routerhost = cdapConfig['router.server.address'],
    routerport =
      cdapConfig['ssl.external.enabled'] === 'true'
        ? cdapConfig['router.ssl.server.port']
        : cdapConfig['router.server.port'],
    routerprotocol = cdapConfig['ssl.external.enabled'] === 'true' ? 'https' : 'http';
  const baseUrl = `${routerprotocol}://${routerhost}:${routerport}`;
  return path ? `${baseUrl}/${path}` : baseUrl;
}

function deconstructUrl(cdapConfig, url, requestOrigin) {
  const routerBaseUrl = constructUrl(cdapConfig, '', requestOrigin);
  return `/${url.replace(routerBaseUrl, '')}`;
}
module.exports = {
  REQUEST_ORIGIN_MARKET,
  REQUEST_ORIGIN_ROUTER,
  constructUrl,
  deconstructUrl,
};
