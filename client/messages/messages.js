// ----------------------------
// Template.messages
// - everything inside .backlog (this is all the messages)

Template.messages.getMessages = function() {
	if (this.type == 'network') {
		return Events.find({network: this.name, target: null}, {sort: {'message.time': 1}});
	} else {
		return Events.find({network: Networks.findOne({_id: this.network}).name, target: this.target}, {sort: {'message.time': 1}});
	}
};
// ----------------------------