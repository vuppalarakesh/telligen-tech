/**
 * Created by rvuppala on 7/20/2016.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(gzippo.staticGzip(__dirname + "/dist"));
app.listen(process.env.PORT || 5000);
