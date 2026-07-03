$(function() {
  var mount = $('#spaghetti-card');
  if (!mount.length) return;

  $.ajax({
    url: '/data/spaghetti-card.json',
    dataType: 'json',
    cache: false,
    success: function(data) {
      try {
        var card = $('<a>')
          .addClass('card h-100 text-decoration-none text-dark shadow-sm')
          .attr('href', data.link || '#');

        var body = $('<div>').addClass('card-body d-flex align-items-start');

        var text = $('<div>');
        $('<h2>').addClass('h5').text(data.title || 'Untitled').appendTo(text);
        $('<p>').addClass('mb-0 small').text(data.description || '').appendTo(text);

        var img = $('<img>')
          .attr('src', data.image || '/images/BakedSpaghetti.png')
          .attr('alt', data.title || 'Image')
          .addClass('ms-3')
          .css({ width: '64px', height: '64px', 'border-radius': '8px', 'object-fit': 'cover' });

        body.append(text).append(img);
        card.append(body);

        mount.empty().append(card);
      } catch (err) {
        console.error('cards-loader: render error', err);
        mount.empty().append('<div class="card"><div class="card-body">Failed to render card</div></div>');
      }
    },
    error: function(xhr, status, err) {
      console.error('cards-loader: ajax error', status, err);
      mount.empty().append('<div class="card"><div class="card-body">Failed to load card data</div></div>');
    }
  });
});
