'use strict';

/**
 * Background.js controller
 *
 * @description: A set of functions called "actions" for managing `Background`.
 */

module.exports = {

  /**
   * Retrieve background records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.background.search(ctx.query);
    } else {
      return strapi.services.background.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a background record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.background.fetch(ctx.params);
  },

  /**
   * Count background records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.background.count(ctx.query);
  },

  /**
   * Create a/an background record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.background.add(ctx.request.body);
  },

  /**
   * Update a/an background record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.background.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an background record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.background.remove(ctx.params);
  }
};
