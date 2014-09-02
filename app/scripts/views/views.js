// console.log('views connected');

var CommentingView = Backbone.View.extend({

	className: 'commentScreen',

	events: {
		'click .center-container' : 'sayhi'
	},

	initialize: function (){
		// console.log('intitialize ya commentScreen!');
		this.render;
	},

// render: function(){
// 	console.log("viewin' ya search view!");
// 	var search = _.template($("#search_screen").html());
// 	this.$el.html(search);
// 	$('.hero-unit').html(this.$el);
// },
	render: function(){
		console.log('viewin\' ya commentScreen!');
	},

	sayhi: function(){
		alert('hi');
	}

});
