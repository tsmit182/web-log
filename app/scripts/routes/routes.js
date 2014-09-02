// console.log('routes connected');

var BlogRoutes = Backbone.Router.extend({

	routes: {
		'': 'home',
		'post/:id' : 'comments'
	},

	home: function () {
		console.log('BlogRoutes active')
		var commentingView = new CommentingView();
		$('.center-container').html(commentingView.el);
	}

});