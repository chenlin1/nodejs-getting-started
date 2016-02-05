// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var config = module.exports = {
  port: process.env.PORT || 8080,

  // dataBackend can be 'datastore', 'cloudsql', or 'mongodb'. Be sure to
  // configure the appropriate settings for each storage engine below.
  // If you are unsure, use datastore as it requires no additional
  // configuration.
  dataBackend: 'datastore',

  // This is the id of your project in the Google Developers Console.
  gcloud: {
    projectId: process.env.GCLOUD_PROJECT || 'your-project-id'
  },

  mysql: {
    user: process.env.MYSQL_USER || 'your-mysql-user',
    password: process.env.MYSQL_PASSWORD || 'your-mysql-password',
    host: process.env.MYSQL_HOST || 'your-mysql-host'
  },

  mongodb: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017',
    collection: process.env.MONGO_COLLECTION || 'books'
  }
};

var projectId = config.gcloud.projectId;

if (!projectId || projectId === 'your-project-id') {
  throw new Error('You must set the GCLOUD_PROJECT env var or add your ' +
    'project id to config.js!');
}
