/**
 * @fileoverview gRPC-Web generated client stub for offercomp
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.offercomp = require('./offer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.offercomp.OfferCompClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.offercomp.OfferCompPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.offercomp.GetProjectionsRequest,
 *   !proto.offercomp.GetProjectionsResponse>}
 */
const methodDescriptor_OfferComp_GetProjections = new grpc.web.MethodDescriptor(
  '/offercomp.OfferComp/GetProjections',
  grpc.web.MethodType.UNARY,
  proto.offercomp.GetProjectionsRequest,
  proto.offercomp.GetProjectionsResponse,
  /**
   * @param {!proto.offercomp.GetProjectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.offercomp.GetProjectionsResponse.deserializeBinary
);


/**
 * @param {!proto.offercomp.GetProjectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.offercomp.GetProjectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.offercomp.GetProjectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.offercomp.OfferCompClient.prototype.getProjections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/offercomp.OfferComp/GetProjections',
      request,
      metadata || {},
      methodDescriptor_OfferComp_GetProjections,
      callback);
};


/**
 * @param {!proto.offercomp.GetProjectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.offercomp.GetProjectionsResponse>}
 *     Promise that resolves to the response
 */
proto.offercomp.OfferCompPromiseClient.prototype.getProjections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/offercomp.OfferComp/GetProjections',
      request,
      metadata || {},
      methodDescriptor_OfferComp_GetProjections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.offercomp.GetProjectionsRawRequest,
 *   !proto.offercomp.GetProjectionsRawResponse>}
 */
const methodDescriptor_OfferComp_GetProjectionsRaw = new grpc.web.MethodDescriptor(
  '/offercomp.OfferComp/GetProjectionsRaw',
  grpc.web.MethodType.UNARY,
  proto.offercomp.GetProjectionsRawRequest,
  proto.offercomp.GetProjectionsRawResponse,
  /**
   * @param {!proto.offercomp.GetProjectionsRawRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.offercomp.GetProjectionsRawResponse.deserializeBinary
);


/**
 * @param {!proto.offercomp.GetProjectionsRawRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.offercomp.GetProjectionsRawResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.offercomp.GetProjectionsRawResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.offercomp.OfferCompClient.prototype.getProjectionsRaw =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/offercomp.OfferComp/GetProjectionsRaw',
      request,
      metadata || {},
      methodDescriptor_OfferComp_GetProjectionsRaw,
      callback);
};


/**
 * @param {!proto.offercomp.GetProjectionsRawRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.offercomp.GetProjectionsRawResponse>}
 *     Promise that resolves to the response
 */
proto.offercomp.OfferCompPromiseClient.prototype.getProjectionsRaw =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/offercomp.OfferComp/GetProjectionsRaw',
      request,
      metadata || {},
      methodDescriptor_OfferComp_GetProjectionsRaw);
};


module.exports = proto.offercomp;

