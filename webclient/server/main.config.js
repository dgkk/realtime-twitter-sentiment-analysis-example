/**
 * Copyright © 2016 Grid Dynamics (info@griddynamics.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* global process */
var config = {
  webServer: {
    ip: '0.0.0.0',
    port: process.env.WEB_CLIENT_PORT || 3000,
    isProdMode: process.env.NODE_ENV == 'production'
  },
  cassandraDb: {
    contactPoints: [(process.env.CASSANDRA_HOST || 'ec2-52-53-152-15.us-west-1.compute.amazonaws.com')+':'+(process.env.CASSANDRA_PORT || '10027')]
  },
  COUNT_GRAPHIC_POINTS_MAX: 100
};
module.exports = config;