'use strict';

/**
 * Replay.js controller
 *
 * @description: A set of functions called "actions" for managing `Replay`.
 */

module.exports = {

  /**
   * Retrieve replay records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.replay.search(ctx.query);
    } else {
      return strapi.services.replay.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a replay record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.replay.fetch(ctx.params);
  },

  /**
   * Count replay records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.replay.count(ctx.query);
  },

  /**
   * Create a/an replay record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.replay.add(ctx.request.body);
  },

  /**
   * Update a/an replay record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.replay.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an replay record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.replay.remove(ctx.params);
  }
};
