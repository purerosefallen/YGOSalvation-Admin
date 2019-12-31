'use strict';

/**
 * Forum.js controller
 *
 * @description: A set of functions called "actions" for managing `Forum`.
 */

module.exports = {

  /**
   * Retrieve forum records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.forum.search(ctx.query);
    } else {
      return strapi.services.forum.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a forum record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.forum.fetch(ctx.params);
  },

  /**
   * Count forum records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.forum.count(ctx.query);
  },

  /**
   * Create a/an forum record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.forum.add(ctx.request.body);
  },

  /**
   * Update a/an forum record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.forum.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an forum record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.forum.remove(ctx.params);
  }
};
