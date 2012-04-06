/**
 */

function BehaviorSwitchHandler( manager, isInclude ) {
	this.manager = manager;
	this.manager.addTransform( this.onBehaviorSwitch.bind( this ), this.rank, 'tag', 'behavior-switch' );
}

BehaviorSwitchHandler.prototype.rank = 1.14;

BehaviorSwitchHandler.prototype.onBehaviorSwitch = function ( token, manager, cb ) {
	var env = this.manager.env,
		magic_word = token.attribs[0].v;

	env.setVariable(magic_word, true);

	return { };
};


if (typeof module == "object") {
	module.exports.BehaviorSwitchHandler = BehaviorSwitchHandler;
}