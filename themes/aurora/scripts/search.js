/* Search JSON generator for Aurora theme */
hexo.extend.generator.register('search', function (locals) {
  var data = locals.posts.sort('-date').map(function (post) {
    var content = post.content || '';
    // Strip HTML tags for plain text search
    var plainContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return {
      title: post.title || '',
      url: post.permalink.replace(hexo.config.url, '') || '/' + post.path,
      content: plainContent.substring(0, 500),
      date: post.date.format('YYYY-MM-DD'),
      categories: post.categories ? post.categories.toArray().map(function (c) { return c.name; }) : []
    };
  });

  return {
    path: 'search.json',
    data: JSON.stringify(data)
  };
});
