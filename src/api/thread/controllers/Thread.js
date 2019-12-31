'use strict';

/**
 * Thread.js controller
 *
 * @description: A set of functions called "actions" for managing `Thread`.
 */

module.exports = {

  /**
   * Retrieve thread records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.thread.search(ctx.query);
    } else {
      return strapi.services.thread.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a thread record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.thread.fetch(ctx.params);
  },

  /**
   * Count thread records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.thread.count(ctx.query);
  },

  /**
   * Create a/an thread record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.thread.add(ctx.request.body);
  },

  /**
   * Update a/an thread record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.thread.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an thread record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.thread.remove(ctx.params);
  }
};
