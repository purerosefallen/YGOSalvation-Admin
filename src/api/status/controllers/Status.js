'use strict';

/**
 * Status.js controller
 *
 * @description: A set of functions called "actions" for managing `Status`.
 */

module.exports = {

  /**
   * Retrieve status records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.status.search(ctx.query);
    } else {
      return strapi.services.status.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a status record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.status.fetch(ctx.params);
  },

  /**
   * Count status records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.status.count(ctx.query);
  },

  /**
   * Create a/an status record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.status.add(ctx.request.body);
  },

  /**
   * Update a/an status record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.status.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an status record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.status.remove(ctx.params);
  }
};
