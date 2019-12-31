'use strict';

/**
 * Updates.js controller
 *
 * @description: A set of functions called "actions" for managing `Updates`.
 */

module.exports = {

  /**
   * Retrieve updates records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.updates.search(ctx.query);
    } else {
      return strapi.services.updates.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a updates record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.updates.fetch(ctx.params);
  },

  /**
   * Count updates records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.updates.count(ctx.query);
  },

  /**
   * Create a/an updates record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.updates.add(ctx.request.body);
  },

  /**
   * Update a/an updates record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.updates.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an updates record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.updates.remove(ctx.params);
  }
};
