'use strict';

/**
 * Tournament.js controller
 *
 * @description: A set of functions called "actions" for managing `Tournament`.
 */

module.exports = {

  /**
   * Retrieve tournament records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tournament.search(ctx.query);
    } else {
      return strapi.services.tournament.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tournament record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tournament.fetch(ctx.params);
  },

  /**
   * Count tournament records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tournament.count(ctx.query);
  },

  /**
   * Create a/an tournament record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tournament.add(ctx.request.body);
  },

  /**
   * Update a/an tournament record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tournament.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tournament record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tournament.remove(ctx.params);
  }
};
