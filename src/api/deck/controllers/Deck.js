'use strict';

/**
 * Deck.js controller
 *
 * @description: A set of functions called "actions" for managing `Deck`.
 */

module.exports = {

  /**
   * Retrieve deck records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.deck.search(ctx.query);
    } else {
      return strapi.services.deck.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a deck record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.deck.fetch(ctx.params);
  },

  /**
   * Count deck records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.deck.count(ctx.query);
  },

  /**
   * Create a/an deck record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.deck.add(ctx.request.body);
  },

  /**
   * Update a/an deck record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.deck.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an deck record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.deck.remove(ctx.params);
  }
};
