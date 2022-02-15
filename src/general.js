/**
 * 
 */

const { __ } = wp.i18n;

;((w, jQuery) => {
  'use strict';

  const Hope = {
    fn: {},
    action: (name, attrs) => {
      if(! Hope.fn[name]) return;
      Hope.fn[name].call(null, ...attrs);
    },
  };

  w.__HOPE = Hope;
})(window, jQuery);

module.exports = {}