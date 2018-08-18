'use strict';

var routes = require('next-routes')();

routes.add('/Campaigns/new', '/Campaigns/new').add('/Campaigns/:address', '/Campaigns/show').add('/Campaigns/:address/requests', '/Campaigns/requests/index').add('/Campaigns/:address/requests/new', '/Campaigns/requests/newRequest');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLGtCQUNzQixBQUR0QixrQkFFQyxBQUZELElBRUssQUFGTCx1QkFFMkIsQUFGM0IsbUJBR0MsQUFIRCxJQUdLLEFBSEwsZ0NBR29DLEFBSHBDLDZCQUlDLEFBSkQsSUFJSyxBQUpMLG9DQUl3QyxBQUp4Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1NvbGlkaXR5IFByb2plY3RzL2tpY2tzdGFydCJ9