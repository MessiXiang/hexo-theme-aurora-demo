/* Wordcount helper for Aurora theme */
hexo.extend.helper.register('wordcount', function (content) {
  if (!content) return 0;
  var text = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  // Count CJK characters individually, and split the rest by spaces
  var cjk = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf\u3000-\u303f]/g) || []).length;
  var nonCjk = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf\u3000-\u303f]/g, ' ').trim();
  var words = nonCjk ? nonCjk.split(/\s+/).length : 0;
  return cjk + words;
});
